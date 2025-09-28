export const generateUsernameFromEmail = (email: string) => {
  if (!email) return ""
  // On prend tout avant le @ et on met en minuscules
  const base = email.split("@")[0].toLowerCase()
  // On remplace les caractères spéciaux par des tirets si besoin
  const slug = base.replace(/[^a-z0-9]/g, "")
  return slug
}
