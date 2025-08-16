import type { Route } from "./+types/home";
import { Index } from "~/pages";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "FastProfile" },
    { name: "description", content: "Plateforme SaaS pour créer, personnaliser et partager votre profil professionnel. Présentez vos compétences et projets en ligne rapidement." },
  ];
}

export default function Home() {
  return <Index />;
}
