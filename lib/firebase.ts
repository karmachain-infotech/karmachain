import { getApp, getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from "firebase/app"
import { getFirestore, type Firestore } from "firebase/firestore"
import { getAuth, type Auth } from "firebase/auth"

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const hasFirebaseConfig = Object.values(firebaseConfig).every((value) => typeof value === "string" && value.length > 0)

let firebaseApp: FirebaseApp | null = null
let firestore: Firestore | null = null
let firebaseAuth: Auth | null = null

if (hasFirebaseConfig) {
  firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)
}

export const isFirebaseConfigured = () => Boolean(firebaseApp)

export const getFirebaseApp = () => firebaseApp

export const getFirestoreDb = () => {
  if (!firebaseApp) return null
  if (!firestore) {
    firestore = getFirestore(firebaseApp)
  }
  return firestore
}

export const getFirebaseAuth = () => {
  if (!firebaseApp) return null
  if (!firebaseAuth) {
    firebaseAuth = getAuth(firebaseApp)
  }
  return firebaseAuth
}
