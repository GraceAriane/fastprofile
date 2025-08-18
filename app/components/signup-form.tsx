import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import google from "../assets/images/google.png"

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-[35px] font-bold">Rejoignez FastProfile</h1>
        <p className="text-neutral-500 text-sm text-balance dark:text-neutral-400">
          Inscrivez-vous gratuitement !
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required className="py-[23px]" />
        </div>
        <div className="grid gap-3">
          <div className="">
            <Label htmlFor="password">Mot de passe</Label>
          </div>
          <Input id="password" type="password" required className="py-[23px]"/>
        </div>
        <Button type="submit" className="w-full bg-[#1E3A8A] text-white  py-6 rounded-4xl hover:bg-[#2547A7] hover:transition-all">
          Inscription
        </Button>
        <div className="after:border-neutral-200 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t dark:after:border-neutral-800">
          <span className="bg-white text-neutral-500 relative z-10 px-2 dark:bg-neutral-950 dark:text-neutral-400">
            Ou continuez avec
          </span>
        </div>
        <Button variant="outline" className="w-full cursor-pointer py-6 rounded-4xl hover:bg-[#D1D1D1] hover:transition-all hover:border-[#D1D1D1]">
          <img src={google} alt="icone de google" className="w-5"/>
          Continuer avec Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Vous avez déjà un compte ?{""}
        <a href="#" className="underline underline-offset-4 ml-1">
          Connectez-vous
        </a>
      </div>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        En cliquant sur Continuer, vous acceptez nos <a href="#">Conditions d'utilisation</a>{" "}
        et notre <a href="#"> Politique de confidentialité.</a>.
      </div>
    </form>


  )
}