import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import google from "../assets/images/google.png"
import { Link } from "react-router"
import { useState } from "react"
import { signUp, signInWithGoogle } from "~/services/authService"
import { useNavigate } from "react-router"



type FormData ={
  email: string
  password: string
}

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  let navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { email?: string; password?: string } = {}

    if (!email) newErrors.email = "L'email est obligatoire"
    if (!password) {
      newErrors.password = "Le mot de passe est obligatoire"
    } else if (password.length < 6) {
      newErrors.password = "Min 6 caractères"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("✅ Formulaire soumis :", { email, password })
  }

  const handleSignup = async () => {
    try {
      const userCredential = await signUp( email, password)
      console.log("Utilisateur inscrit:", userCredential.user)
      navigate("/admin") 
    } catch (error) {
      console.error("Erreur d'inscription:", error)
    }
  }

  // inscription avec google
  const handleGoogle = async () => {
    try{
      const result = await signInWithGoogle()
      console.log("Connecté avec Google:", result.user)
      navigate("/admin") 
    } catch (err) {
      console.error("Erreur Google:", err)
    }
  }

  return (
    <form  className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-[35px] font-bold">Rejoignez FastProfile</h1>
        <p className="text-neutral-500 text-sm text-balance dark:text-neutral-400">
          Inscrivez-vous gratuitement !
        </p>
      </div>
      {/* email et mot de passe */}
      <div className="grid gap-6">
        {/* email et son input */}
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
           id="email" 
           type="email" 
           placeholder="example@mail.com" 
           required 
           className="py-[23px]"
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username}</p>
          )}
        </div>
        {/* mot de passe et son input */}
        <div className="grid gap-3">
          <div className="">
            <Label htmlFor="password">Mot de passe</Label>
          </div>
          <Input 
            id="password" 
            type="password" 
            required 
            className="py-[23px]"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-[#1E3A8A] text-white  py-6 rounded-4xl hover:bg-[#2547A7] hover:transition-all"
          onClick={handleSignup}
        >
          Inscription
        </Button>
        <div className="after:border-neutral-200 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t dark:after:border-neutral-800">
          <span className="bg-white text-neutral-500 relative z-10 px-2 dark:bg-neutral-950 dark:text-neutral-400">
            Ou continuez avec
          </span>
        </div>
        {/* continuer avec google */}
        <Button 
         variant="outline" 
         className="w-full cursor-pointer py-6 rounded-4xl hover:bg-[#D1D1D1] hover:transition-all hover:border-[#D1D1D1]"
         onClick={handleGoogle}
        >
          <img src={google} alt="icone de google" className="w-5"/>
          Continuer avec Google
        </Button>
      </div>
      {/* cas où l'utilisateur a déjà un compte */}
      <div className="text-center text-sm">
        Vous avez déjà un compte ?{""}
        <Link to="/login" className="underline underline-offset-4 ml-1">
          Connectez-vous
        </Link>
      </div>
      {/* politique de confidentialité */}
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        En cliquant sur Continuer, vous acceptez nos <a href="#">Conditions d'utilisation</a>{" "}
        et notre <a href="#"> Politique de confidentialité.</a>.
      </div>
    </form>


  )
}