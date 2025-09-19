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


export function DialogBio() {

  return (
    <Dialog >
      <form >
        <DialogTrigger asChild>
          <h3 className="text-[20px] font-black cursor-pointer">@tchoukeugrace</h3>
        </DialogTrigger>
        <DialogTrigger asChild>
          <a className="text-[#9C9C9C] hover:underline cursor-pointer">Ajouter une bio</a>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">

          <DialogHeader>
            <DialogTitle className="text-[18px]">Entrez le nom et la bio</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nom</Label>
              <Input className="" id="name-1" name="name" defaultValue="Pedro Duarte" maxLength={30}/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="textarea">Bio</Label>
              <Textarea className="resize-none" id="textarea" maxLength={180} ></Textarea>

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
