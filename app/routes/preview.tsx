import { UserPage } from "~/pages/userPage"
import type { User } from "~/types/user"; 

const mockUser: User = {
  name: "tchoukeu grace",
  avatar: "https://i.pravatar.cc/150?img=3",
  description: "Entrepreneur",
  links: [
    { title: "Mon GitHub", url: "https://github.com/" },
    { title: "Mon LinkedIn", url: "https://linkedin.com/" },
  ],
};

export default function Preview(){
    return <UserPage variant="preview" user={mockUser}/>
}