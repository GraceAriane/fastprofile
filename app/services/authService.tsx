import { auth, googleProvider } from "~/config/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { signInWithPopup } from "firebase/auth"

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
  return await createUserWithEmailAndPassword(auth, email, password)
}

// connexion
export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

// connexion avec Google
export const signInWithGoogle = async () => {
  return await signInWithPopup(auth, googleProvider)
}
