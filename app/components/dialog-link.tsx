import { useState } from "react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

interface DialogLinkProps {
  onAddLink: (name: string, link: string) => void
}

export function DialogLink({ onAddLink }: DialogLinkProps) {
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !url) return
    onAddLink(name, url)
    setName("")
    setUrl("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full p-7 text-[17px] font-medium bg-[#3B57A3] text-white hover:transition-all rounded-4xl md:p-6 mb-2 cursor-pointer">
          Ajouter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-[18px] mb-3">Entrez un lien</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Nom du lien</Label>
              <Input
                id="name-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={30}
              />
            </div>
            <div className="grid gap-3 mb-3">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                maxLength={100}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="w-full shadow-none rounded-3xl bg-[#1E3A8A] text-white py-5"
              >
                Enregistrer
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
