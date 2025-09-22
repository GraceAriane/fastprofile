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

interface Props{
    name: string
}


export function DialogLink() {

  return (
    <Dialog >
      <form >
        <DialogTrigger asChild>
            <Button className="w-full p-7 text-[17px] font-medium bg-[#3B57A3] text-white hover:transition-all rounded-4xl md:p-6 mb-2 cursor-pointer">
                Ajouter
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">

          <DialogHeader>
            <DialogTitle className="text-[18px]">Entrez un lien</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nom du lien</Label>
              <Input className="" id="name-1" name="name" defaultValue="Pedro Duarte" maxLength={30}/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="textarea">url</Label>
              <Input className="resize-none" id="textarea" maxLength={50}/>
            </div>
          </div>

          <DialogFooter className="">
            <Button type="submit" className="w-full shadow-none rounded-3xl bg-[#1E3A8A] text-white py-5">Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}