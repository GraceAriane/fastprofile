import { auth, googleProvider, db } from "~/config/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"
import { signOut } from "firebase/auth"
import { doc, setDoc, getDoc } from "firebase/firestore"


// // inscription avec email et password

// export const signUp = async (email: string, password: string) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//     console.log("Utilisateur inscrit:", userCredential.user)
//   } catch (error) {
//     console.error("Erreur d'inscription:", error)
//   }
// }

// //connexion avec email et password

// export const signIn = async (email: string, password: string) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password)
//     console.log("Utilisateur connecté:", userCredential.user)
//   } catch (error) {
//    alert("Connexion echoué. Veuillez réessayer.")
//   }
// }

// //connexion avec google 

// export const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, googleProvider)
//     console.log("Connecté avec Google:", result.user)
    
//   } catch (error) {
//     console.error("Erreur Google:", error)
//   }
// }


// inscription
export const signUp = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  const user = userCredential.user

  // Sauvegarde dans Firestore
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    createdAt: new Date(),
    provider: "password",
  })

  return userCredential
}

// connexion
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential
  } catch (error: any) {
    console.error("Erreur Firebase signIn:", error.code, error.message)
    throw error
  }
}
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider)
  const user = result.user

  // Vérifie si déjà en base
  const userRef = doc(db, "users", user.uid)
  const snap = await getDoc(userRef)

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      createdAt: new Date(),
      provider: "google",
    })
  }

  return result
}

// deconnexion
export const logout = async () => {
    return  await signOut(auth)
}
