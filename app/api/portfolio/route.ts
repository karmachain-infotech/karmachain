import { NextResponse } from "next/server"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"

import { getFirestoreDb, isFirebaseConfigured } from "@/lib/firebase"
import { portfolioItems as fallbackPortfolio } from "@/lib/portfolio-data"
import type { PortfolioItem } from "@/types/portfolio"

const COLLECTION_NAME = "portfolio"

const sanitizePayload = (payload: Partial<PortfolioItem>): PortfolioItem => {
  const slug = (payload.slug ?? "").trim()
  const title = (payload.title ?? "").trim()

  if (!slug || !title) {
    throw new Error("Both title and slug are required.")
  }

  const now = new Date().toISOString()
  const cleanPayload = {
    ...payload,
    slug,
    title,
    featured: Boolean(payload.featured),
    updatedAt: now,
    createdAt: payload.createdAt ?? now,
  } as PortfolioItem

  delete (cleanPayload as { id?: string }).id
  return cleanPayload
}

export async function GET() {
  // if (!isFirebaseConfigured()) {
  //   return NextResponse.json(
  //     { data: fallbackPortfolio, source: "static", message: "Firebase is not configured. Serving static data." },
  //     { status: 200 },
  //   )
  // }

  // try {
  //   const db = getFirestoreDb()
  //   if (!db) throw new Error("Firestore client unavailable.")

  //   const snapshot = await getDocs(collection(db, COLLECTION_NAME))
  //   const items: PortfolioItem[] = snapshot.docs.map((docSnapshot) => ({
  //     id: docSnapshot.id,
  //     ...(docSnapshot.data() as PortfolioItem),
  //   }))

  //   items.sort((a, b) => (a.title ?? "").localeCompare(b.title ?? ""))

  //   return NextResponse.json({ data: items })
  // } catch (error) {
  //   console.error("[PORTFOLIO_GET]", error)
  //   return NextResponse.json({ error: "Failed to fetch portfolio items." }, { status: 500 })
  // }
}

export async function POST(request: Request) {
  // if (!isFirebaseConfigured()) {
  //   return NextResponse.json(
  //     { error: "Firebase is not configured. Please add your .env values first." },
  //     { status: 503 },
  //   )
  // }

  // try {
  //   const body = (await request.json()) as Partial<PortfolioItem>
  //   const payload = sanitizePayload(body)

  //   const db = getFirestoreDb()
  //   if (!db) throw new Error("Firestore client unavailable.")

  //   await setDoc(doc(collection(db, COLLECTION_NAME), payload.slug), payload, { merge: true })

  //   return NextResponse.json({ data: { ...payload, id: payload.slug } }, { status: 201 })
  // } catch (error) {
  //   console.error("[PORTFOLIO_POST]", error)
  //   const message = error instanceof Error ? error.message : "Failed to save portfolio item."
  //   return NextResponse.json({ error: message }, { status: 400 })
  // }
}
