import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "~/components/login-form"
import { Logo } from "~/components/logo"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-[#F9FAFB]">
      <div className="flex flex-col gap-4 p-6 md:p-10 ">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <Logo colorIcon="text-[#FACC15]"></Logo>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 relative hidden lg:block dark:bg-neutral-800">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
