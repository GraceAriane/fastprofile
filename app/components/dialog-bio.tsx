import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Textarea } from "./ui/textarea"
import { useState } from "react"

interface Props{
    name: string
}


export function DialogBio() {

  const [nom, setNom] = useState("tchoukeugrace")
  const [bio, setBio] = useState("")
  // Valeurs temporaires pour l'édition
  const [tempNom, setTempNom] = useState(nom)
  const [tempBio, setTempBio] = useState(bio)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Applique les changements
    setNom(tempNom)
    setBio(tempBio)

    console.log("Nom enregistré:", tempNom, "Bio enregistrée:", tempBio)
  }

  return (
    <Dialog >
      <form >
        <DialogTrigger asChild>
          <h3 className="text-[20px] font-black cursor-pointer">@{nom}</h3>
        </DialogTrigger>
        <DialogTrigger asChild>
          <a className="text-[#9C9C9C] hover:underline cursor-pointer">{bio ? bio : "Ajouter une bio"}</a>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">

          <DialogHeader>
            <DialogTitle className="text-[18px]">Entrez le nom et la bio</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nom</Label>
              <Input 
                className="" 
                id="name-1" 
                name="name" 
                defaultValue="" 
                maxLength={30} 
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="textarea">Bio</Label>
              <Textarea 
               className="resize-none" 
               id="textarea"
               maxLength={180} 
               value={bio}
               onChange={(e) => setBio(e.target.value)}
              ></Textarea>

            </div>
          </div>

          <DialogFooter className="">
            <Button 
              type="submit" 
              className="w-full shadow-none rounded-3xl bg-[#1E3A8A] text-white py-5"
            >
              Enregistrer
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
