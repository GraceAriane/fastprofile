import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import google from "../assets/images/google.png"
import { Link } from "react-router"
import { useState } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { username?: string; password?: string } = {}

    if (!username) newErrors.username = "Le nom d’utilisateur est obligatoire"
    if (!password) {
      newErrors.password = "Le mot de passe est obligatoire"
    } else if (password.length < 6) {
      newErrors.password = "Min 6 caractères"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log("✅ Formulaire soumis :", { username, password })
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-[27px] font-black">Bon retour parmi nous !</h1>
        <p className="text-neutral-500 text-sm text-balance dark:text-neutral-400">
          Connectez vous à votre FastProfile
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="m@example.com" 
            required 
            value={username}
           onChange={(e)=> setUsername(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Mot de passe</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Mot de passe oublié?
            </a>
          </div>
          <Input 
           id="password" 
           type="password" 
           required 
           value={password}
           onChange={(e)=>{setPassword(e.target.value)}}
          />
        </div>
        <Button type="submit" className="w-full bg-[#1E3A8A] text-white hover:bg-[#2547A7] hover:transition-all">
          connexion
        </Button>
        <div className="after:border-neutral-200 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t dark:after:border-neutral-800">
          <span className="bg-white text-neutral-500 relative z-10 px-2 dark:bg-neutral-950 dark:text-neutral-400">
            Ou continuez avec
          </span>
        </div>
        <Button variant="outline" className="w-full cursor-pointer hover:bg-[#D1D1D1] hover:transition-all hover:border-none">
          <img src={google} alt="icone de google" className="w-5"/>
          Continuer avec Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Pas encore de compte?{""}
        <Link to="/signup" className="underline underline-offset-4 ml-1">
          Inscrivez-vous
        </Link>
      </div>
    </form>
  )
}
