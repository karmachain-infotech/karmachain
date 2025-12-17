"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { Loader2, PencilLine, PlusCircle, RefreshCcw, Trash2 } from "lucide-react"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase"
import type { PortfolioItem, PortfolioResultMetric } from "@/types/portfolio"

type PortfolioFormState = {
  title: string
  slug: string
  shortDescription: string
  description: string
  category: string
  industry: string
  year: string
  duration: string
  client: string
  users: string
  rating: string
  role: string
  liveUrl: string
  image: string
  images: string
  keyFeatures: string
  challenges: string
  solutions: string
  results: string
  technologies: string
  featured: boolean
}

const emptyFormState: PortfolioFormState = {
  title: "",
  slug: "",
  shortDescription: "",
  description: "",
  category: "",
  industry: "",
  year: "",
  duration: "",
  client: "",
  users: "",
  rating: "",
  role: "",
  liveUrl: "",
  image: "",
  images: "",
  keyFeatures: "",
  challenges: "",
  solutions: "",
  results: "",
  technologies: "",
  featured: false,
}

const parseListInput = (value: string, delimiter = ",") =>
  value
    .split(delimiter)
    .map((entry) => entry.trim())
    .filter(Boolean)

const parseMultilineInput = (value: string) =>
  value
    .split("\n")
    .map((entry) => entry.trim())
    .filter(Boolean)

const parseResultsInput = (value: string): PortfolioResultMetric[] =>
  value
    .split("\n")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const [label, ...rest] = entry.split(":")
      return { label: label.trim(), value: rest.join(":").trim() }
    })
    .filter((entry) => entry.label && entry.value)

const flattenTechnologies = (technologies: PortfolioItem["technologies"]) => {
  if (!technologies) return []
  if (Array.isArray(technologies)) return technologies
  return Object.values(technologies).flat().filter(Boolean)
}

const transformItemToForm = (item?: PortfolioItem | null): PortfolioFormState => ({
  title: item?.title ?? "",
  slug: item?.slug ?? "",
  shortDescription: item?.shortDescription ?? "",
  description: item?.description ?? "",
  category: item?.category ?? "",
  industry: item?.industry ?? "",
  year: item?.year ?? "",
  duration: item?.duration ?? "",
  client: item?.client ?? "",
  users: item?.users ?? "",
  rating: item?.rating ? String(item.rating) : "",
  role: item?.role ?? "",
  liveUrl: item?.liveUrl ?? "",
  image: item?.image ?? "",
  images: (item?.images ?? []).join(", "),
  keyFeatures: (item?.keyFeatures ?? []).join("\n"),
  challenges: (item?.challenges ?? []).join("\n"),
  solutions: (item?.solutions ?? []).join("\n"),
  results: (item?.results ?? [])
    .map((entry) => (entry.label && entry.value ? `${entry.label}:${entry.value}` : ""))
    .filter(Boolean)
    .join("\n"),
  technologies: flattenTechnologies(item?.technologies).join(", "),
  featured: Boolean(item?.featured),
})

const mapFormToPayload = (state: PortfolioFormState, slugOverride?: string): Partial<PortfolioItem> => ({
  title: state.title.trim(),
  slug: (slugOverride ?? state.slug).trim(),
  shortDescription: state.shortDescription.trim(),
  description: state.description.trim(),
  category: state.category.trim(),
  industry: state.industry.trim(),
  year: state.year.trim(),
  duration: state.duration.trim(),
  client: state.client.trim(),
  users: state.users.trim(),
  rating: state.rating ? Number(state.rating) : undefined,
  role: state.role.trim(),
  liveUrl: state.liveUrl.trim(),
  image: state.image.trim(),
  images: parseListInput(state.images),
  keyFeatures: parseMultilineInput(state.keyFeatures),
  challenges: parseMultilineInput(state.challenges),
  solutions: parseMultilineInput(state.solutions),
  results: parseResultsInput(state.results),
  technologies: state.technologies ? { general: parseListInput(state.technologies) } : undefined,
  featured: state.featured,
})

export default function PortfolioAdminPage() {
  const { toast } = useToast()
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [formState, setFormState] = useState<PortfolioFormState>(emptyFormState)
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null)
  const [dataSource, setDataSource] = useState<"firebase" | "static">("firebase")
  const isFirebaseReady = isFirebaseConfigured()
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [isAuthChecking, setIsAuthChecking] = useState(isFirebaseReady)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState<string | null>(null)
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const resetForm = useCallback(() => {
    // setFormState(emptyFormState)
    // setEditingSlug(null)
  }, [])

  const sortedItems = useMemo(
    () => [...items].sort((a, b) => (a.updatedAt ?? "").localeCompare(b.updatedAt ?? "")),
    [items],
  )

  const fetchItems = useCallback(async () => {
    // if (!authUser) return
    // try {
    //   setIsLoading(true)
    //   const response = await fetch("/api/portfolio", { cache: "no-store" })
    //   const payload = await response.json()
    //   if (!response.ok) {
    //     throw new Error(payload.error ?? "Unable to load portfolio items.")
    //   }
    //   setItems(payload.data ?? [])
    //   setDataSource(payload.source === "static" ? "static" : "firebase")
    // } catch (error) {
    //   console.error(error)
    //   toast({
    //     title: "Failed to load",
    //     description: error instanceof Error ? error.message : "Unexpected error while fetching portfolio data.",
    //   })
    // } finally {
    //   setIsLoading(false)
    // }
  }, [authUser, toast])

  useEffect(() => {
    // if (!isFirebaseReady) {
    //   setIsAuthChecking(false)
    //   return
    // }
    // const auth = getFirebaseAuth()
    // if (!auth) {
    //   setIsAuthChecking(false)
    //   return
    // }

    // setIsAuthChecking(true)
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   setAuthUser(user)
    //   setIsAuthChecking(false)
    // })

    // return () => unsubscribe()
  }, [isFirebaseReady])

  useEffect(() => {
    // if (!authUser) {
    //   setItems([])
    //   setDataSource("firebase")
    //   resetForm()
    //   return
    // }
    // fetchItems()
  }, [authUser, fetchItems, resetForm])

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isFirebaseReady) {
      toast({
        title: "Firebase not configured",
        description: "Add your Firebase credentials to .env.local to enable authentication.",
      })
      return
    }

    const auth = getFirebaseAuth()
    if (!auth) {
      toast({
        title: "Auth unavailable",
        description: "Firebase authentication could not be initialized.",
      })
      return
    }

    setLoginError(null)
    setIsLoggingIn(true)
    try {
      await signInWithEmailAndPassword(auth, loginEmail.trim(), loginPassword)
      setLoginEmail("")
      setLoginPassword("")
    } catch (error) {
      console.error(error)
      const message = error instanceof Error ? error.message : "Unable to sign in."
      setLoginError(message)
      toast({
        title: "Login failed",
        description: message,
      })
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleLogout = async () => {
    // const auth = getFirebaseAuth()
    // if (!auth) return
    // try {
    //   await signOut(auth)
    //   resetForm()
    // } catch (error) {
    //   console.error(error)
    //   toast({
    //     title: "Logout failed",
    //     description: error instanceof Error ? error.message : "Unable to sign out.",
    //   })
    // }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault()
    // if (!authUser) {
    //   toast({
    //     title: "Login required",
    //     description: "Please sign in before updating the portfolio.",
    //   })
    //   return
    // }
    // if (!formState.slug || !formState.title) {
    //   toast({
    //     title: "Missing required fields",
    //     description: "Both title and slug fields are required.",
    //   })
    //   return
    // }

    // try {
    //   setIsSaving(true)
    //   const isEditing = Boolean(editingSlug)
    //   const payload = mapFormToPayload(formState, editingSlug ?? undefined)
    //   const endpoint = isEditing ? `/api/portfolio/${editingSlug}` : "/api/portfolio"
    //   const method = isEditing ? "PUT" : "POST"
    //   const response = await fetch(endpoint, {
    //     method,
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(payload),
    //   })
    //   const data = await response.json()
    //   if (!response.ok) {
    //     throw new Error(data.error ?? "Unable to save portfolio item.")
    //   }

    //   toast({
    //     title: isEditing ? "Project updated" : "Project added",
    //     description: `${payload.title} saved successfully.`,
    //   })
    //   resetForm()
    //   fetchItems()
    // } catch (error) {
    //   console.error(error)
    //   toast({
    //     title: "Unable to save project",
    //     description: error instanceof Error ? error.message : "Unexpected error.",
    //   })
    // } finally {
    //   setIsSaving(false)
    // }
  }

  const handleEdit = (item: PortfolioItem) => {
    // setEditingSlug(item.slug)
    // setFormState(transformItemToForm(item))
    // window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = async (slug: string) => {
    // if (!slug) return
    // if (!authUser) {
    //   toast({
    //     title: "Login required",
    //     description: "Please sign in before deleting projects.",
    //   })
    //   return
    // }
    // const confirmed = window.confirm("Are you sure you want to delete this project?")
    // if (!confirmed) return

    // try {
    //   setDeletingSlug(slug)
    //   const response = await fetch(`/api/portfolio/${slug}`, { method: "DELETE" })
    //   const data = await response.json()
    //   if (!response.ok) {
    //     throw new Error(data.error ?? "Unable to delete project.")
    //   }
    //   toast({
    //     title: "Project deleted",
    //     description: `${slug} removed successfully.`,
    //   })
    //   if (editingSlug === slug) {
    //     resetForm()
    //   }
    //   fetchItems()
    // } catch (error) {
    //   console.error(error)
    //   toast({
    //     title: "Unable to delete",
    //     description: error instanceof Error ? error.message : "Unexpected error.",
    //   })
    // } finally {
    //   setDeletingSlug(null)
    // }
  }

  if (!isFirebaseReady) {
    return (
      <main className="min-h-screen bg-muted/40">
        <Header />
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-3xl mx-auto border border-dashed border-yellow-400 bg-yellow-50">
              <CardHeader>
                <CardTitle>Configure Firebase first</CardTitle>
                <CardDescription>
                  Add your Firebase web credentials to <code>.env.local</code> using the keys from <code>.env.example</code>, then
                  restart the dev server. Authentication & CRUD access require a configured Firebase project.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>Steps:</p>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Create a Firebase project and enable Email/Password authentication.</li>
                  <li>Create an admin user in Firebase Auth.</li>
                  <li>Copy the web app config into <code>.env.local</code> (see .env.example).</li>
                  <li>Restart <code>npm run dev</code> and reload this page.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-muted/40">
      <Header />
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold">Portfolio CMS</h1>
                <p className="text-muted-foreground">
                  {authUser
                    ? `Signed in as ${authUser.email ?? "admin"}. Manage the live portfolio entries below.`
                    : "Sign in with your Firebase admin credentials to manage the portfolio."}
                </p>
              </div>
              {authUser ? (
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" onClick={fetchItems} disabled={isLoading}>
                    <RefreshCcw className="mr-2 h-4 w-4" />
                    Refresh
                  </Button>
                  <Button variant="ghost" onClick={resetForm} disabled={isSaving}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New project
                  </Button>
                  <Button variant="destructive" onClick={handleLogout}>
                    Sign out
                  </Button>
                </div>
              ) : null}
            </div>
            {authUser && dataSource === "static" ? (
              <Card className="border-yellow-400 bg-yellow-50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Firebase is connected in read-only mode</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Add your Firebase keys to <code>.env.local</code> to enable persistence. Until then, the list below is
                    read-only and powered by the static seed file.
                  </CardDescription>
                </CardHeader>
              </Card>
            ) : null}
          </div>

          {isAuthChecking ? (
            <Card className="max-w-xl mx-auto border border-border">
              <CardHeader>
                <CardTitle>Checking credentials</CardTitle>
                <CardDescription>Hang tight while we verify your Firebase session.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-3 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                Authenticating...
              </CardContent>
            </Card>
          ) : authUser ? (
          <div className="grid gap-6 lg:grid-cols-[2fr,1.2fr]">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Current projects</span>
                  {isLoading ? (
                    <Badge variant="secondary" className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading
                    </Badge>
                  ) : (
                    <Badge variant="outline">{items.length} entries</Badge>
                  )}
                </CardTitle>
                <CardDescription>Click edit to load a project into the form.</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[520px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedItems.map((item) => (
                        <TableRow key={item.slug}>
                          <TableCell>
                            <div className="font-medium">{item.title}</div>
                            <p className="text-xs text-muted-foreground">{item.slug}</p>
                          </TableCell>
                          <TableCell>{item.category ?? "—"}</TableCell>
                          <TableCell>{item.year ?? "—"}</TableCell>
                          <TableCell>
                            <Badge variant={item.featured ? "default" : "secondary"}>
                              {item.featured ? "Featured" : "Regular"}
                            </Badge>
                          </TableCell>
                          <TableCell className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}>
                              <PencilLine className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              disabled={Boolean(deletingSlug)}
                              onClick={() => handleDelete(item.slug)}
                            >
                              {deletingSlug === item.slug ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : (
                                <Trash2 className="h-4 w-4 text-destructive" />
                              )}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                      {!sortedItems.length && !isLoading ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center text-muted-foreground">
                            No projects found.
                          </TableCell>
                        </TableRow>
                      ) : null}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="border border-border">
              <CardHeader>
                <CardTitle>{editingSlug ? "Update project" : "Add new project"}</CardTitle>
                <CardDescription>
                  Slug must be unique. When editing an entry, the slug is locked to keep links stable.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="FinTech Mobile Banking App"
                      value={formState.title}
                      onChange={(event) => setFormState((prev) => ({ ...prev, title: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      placeholder="fintech-mobile-banking-app"
                      value={formState.slug}
                      onChange={(event) => setFormState((prev) => ({ ...prev, slug: event.target.value }))}
                      disabled={Boolean(editingSlug)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shortDescription">Short description</Label>
                    <Textarea
                      id="shortDescription"
                      rows={2}
                      value={formState.shortDescription}
                      onChange={(event) => setFormState((prev) => ({ ...prev, shortDescription: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Full description</Label>
                    <Textarea
                      id="description"
                      rows={3}
                      value={formState.description}
                      onChange={(event) => setFormState((prev) => ({ ...prev, description: event.target.value }))}
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={formState.category}
                        onChange={(event) => setFormState((prev) => ({ ...prev, category: event.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Input
                        id="industry"
                        value={formState.industry}
                        onChange={(event) => setFormState((prev) => ({ ...prev, industry: event.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="year">Year</Label>
                      <Input
                        id="year"
                        value={formState.year}
                        onChange={(event) => setFormState((prev) => ({ ...prev, year: event.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={formState.duration}
                        onChange={(event) => setFormState((prev) => ({ ...prev, duration: event.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="client">Client</Label>
                      <Input
                        id="client"
                        value={formState.client}
                        onChange={(event) => setFormState((prev) => ({ ...prev, client: event.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="users">Users / reach</Label>
                      <Input
                        id="users"
                        value={formState.users}
                        onChange={(event) => setFormState((prev) => ({ ...prev, users: event.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating</Label>
                      <Input
                        id="rating"
                        type="number"
                        step="0.1"
                        value={formState.rating}
                        onChange={(event) => setFormState((prev) => ({ ...prev, rating: event.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Input
                        id="role"
                        value={formState.role}
                        onChange={(event) => setFormState((prev) => ({ ...prev, role: event.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="liveUrl">Live URL</Label>
                    <Input
                      id="liveUrl"
                      value={formState.liveUrl}
                      onChange={(event) => setFormState((prev) => ({ ...prev, liveUrl: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image">Cover image</Label>
                    <Input
                      id="image"
                      value={formState.image}
                      onChange={(event) => setFormState((prev) => ({ ...prev, image: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="images">Gallery images (comma separated)</Label>
                    <Textarea
                      id="images"
                      rows={2}
                      value={formState.images}
                      onChange={(event) => setFormState((prev) => ({ ...prev, images: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="technologies">Technologies (comma separated)</Label>
                    <Textarea
                      id="technologies"
                      rows={2}
                      value={formState.technologies}
                      onChange={(event) => setFormState((prev) => ({ ...prev, technologies: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="keyFeatures">Key features (one per line)</Label>
                    <Textarea
                      id="keyFeatures"
                      rows={3}
                      value={formState.keyFeatures}
                      onChange={(event) => setFormState((prev) => ({ ...prev, keyFeatures: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="challenges">Challenges (one per line)</Label>
                    <Textarea
                      id="challenges"
                      rows={3}
                      value={formState.challenges}
                      onChange={(event) => setFormState((prev) => ({ ...prev, challenges: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="solutions">Solutions (one per line)</Label>
                    <Textarea
                      id="solutions"
                      rows={3}
                      value={formState.solutions}
                      onChange={(event) => setFormState((prev) => ({ ...prev, solutions: event.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="results">Results (Label:Value per line)</Label>
                    <Textarea
                      id="results"
                      rows={3}
                      value={formState.results}
                      onChange={(event) => setFormState((prev) => ({ ...prev, results: event.target.value }))}
                    />
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-dashed border-border p-3">
                    <div>
                      <Label htmlFor="featured">Featured project</Label>
                      <p className="text-xs text-muted-foreground">Featured items receive special badges on the website.</p>
                    </div>
                    <Switch
                      id="featured"
                      checked={formState.featured}
                      onCheckedChange={(value) => setFormState((prev) => ({ ...prev, featured: value }))}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button type="submit" disabled={isSaving}>
                      {isSaving ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : editingSlug ? (
                        "Update project"
                      ) : (
                        "Create project"
                      )}
                    </Button>
                    {editingSlug ? (
                      <Button type="button" variant="ghost" onClick={resetForm} disabled={isSaving}>
                        Cancel edit
                      </Button>
                    ) : null}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          ) : (
            <div className="max-w-lg mx-auto">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Firebase Admin Login</CardTitle>
                  <CardDescription>
                    Use the Email/Password credentials configured inside Firebase Authentication to access the CMS.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleLogin}>
                    <div className="space-y-2">
                      <Label htmlFor="loginEmail">Email</Label>
                      <Input
                        id="loginEmail"
                        type="email"
                        autoComplete="email"
                        placeholder="admin@example.com"
                        value={loginEmail}
                        onChange={(event) => setLoginEmail(event.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loginPassword">Password</Label>
                      <Input
                        id="loginPassword"
                        type="password"
                        autoComplete="current-password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(event) => setLoginPassword(event.target.value)}
                      />
                    </div>
                    {loginError ? <p className="text-sm text-destructive">{loginError}</p> : null}
                    <Button type="submit" className="w-full" disabled={isLoggingIn || !loginEmail || !loginPassword}>
                      {isLoggingIn ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        "Sign in"
                      )}
                    </Button>
                  </form>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Tip: Enable the Email/Password provider in Firebase Auth and create admin accounts for your team.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
