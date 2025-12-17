import { NextResponse } from "next/server"
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore"

import { getFirestoreDb, isFirebaseConfigured } from "@/lib/firebase"
import { portfolioItems as fallbackPortfolio } from "@/lib/portfolio-data"
import type { PortfolioItem } from "@/types/portfolio"

const COLLECTION_NAME = "portfolio"

const sanitizeSlug = (slug: string | string[] | undefined) => (Array.isArray(slug) ? slug[0] : slug)?.trim() ?? ""

const buildPayload = (payload: Partial<PortfolioItem>, slug: string): PortfolioItem => {
  const title = (payload.title ?? "").trim()
  if (!title) {
    throw new Error("Title is required.")
  }

  const now = new Date().toISOString()
  const cleanPayload = {
    ...payload,
    slug,
    title,
    updatedAt: now,
  } as PortfolioItem
  delete (cleanPayload as { id?: string }).id
  if (!cleanPayload.createdAt) {
    cleanPayload.createdAt = now
  }
  return cleanPayload
}

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const slug = sanitizeSlug(params.slug)
  if (!slug) {
    return NextResponse.json({ error: "Invalid slug." }, { status: 400 })
  }

  if (!isFirebaseConfigured()) {
    const fallbackItem = fallbackPortfolio.find((item) => item.slug === slug)
    if (!fallbackItem) return NextResponse.json({ error: "Portfolio item not found." }, { status: 404 })
    return NextResponse.json({ data: fallbackItem, source: "static" })
  }

  try {
    const db = getFirestoreDb()
    if (!db) throw new Error("Firestore client unavailable.")

    const docSnapshot = await getDoc(doc(db, COLLECTION_NAME, slug))
    if (!docSnapshot.exists()) {
      return NextResponse.json({ error: "Portfolio item not found." }, { status: 404 })
    }

    return NextResponse.json({ data: { id: docSnapshot.id, ...(docSnapshot.data() as PortfolioItem) } })
  } catch (error) {
    console.error("[PORTFOLIO_GET_BY_SLUG]", error)
    return NextResponse.json({ error: "Failed to fetch portfolio item." }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  const slug = sanitizeSlug(params.slug)
  if (!slug) {
    return NextResponse.json({ error: "Invalid slug." }, { status: 400 })
  }

  if (!isFirebaseConfigured()) {
    return NextResponse.json({ error: "Firebase is not configured." }, { status: 503 })
  }

  try {
    const body = (await request.json()) as Partial<PortfolioItem>
    const payload = buildPayload(body, slug)

    const db = getFirestoreDb()
    if (!db) throw new Error("Firestore client unavailable.")

    await setDoc(doc(db, COLLECTION_NAME, slug), payload, { merge: true })

    return NextResponse.json({ data: { ...payload, id: slug } })
  } catch (error) {
    console.error("[PORTFOLIO_PUT]", error)
    const message = error instanceof Error ? error.message : "Failed to update portfolio item."
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

export async function DELETE(_request: Request, { params }: { params: { slug: string } }) {
  const slug = sanitizeSlug(params.slug)
  if (!slug) {
    return NextResponse.json({ error: "Invalid slug." }, { status: 400 })
  }

  if (!isFirebaseConfigured()) {
    return NextResponse.json({ error: "Firebase is not configured." }, { status: 503 })
  }

  try {
    const db = getFirestoreDb()
    if (!db) throw new Error("Firestore client unavailable.")

    await deleteDoc(doc(db, COLLECTION_NAME, slug))
    return NextResponse.json({ data: { slug } })
  } catch (error) {
    console.error("[PORTFOLIO_DELETE]", error)
    return NextResponse.json({ error: "Failed to delete portfolio item." }, { status: 500 })
  }
}
