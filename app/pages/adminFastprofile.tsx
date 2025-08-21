import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faGear, faChartLine,faUserGroup, faBars } from "@fortawesome/free-solid-svg-icons";

export function MyfastProfile(){
    return(
        <div>
            <div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <Button
                        variant="outline"
                        className="font-medium text-[#1E3A8A] bg-white hover:transition-all"
                    >
                        <a href="">Login</a>
                    </Button>
                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    <FontAwesomeIcon icon={faGear} />
                </div>
            </div>
            <div>
                <h3>Tchoukeu Grace</h3>
                <p>fastprofile.com/tchoukeugrace</p>
            </div>

            <div>
                <Button>Pages</Button>
                <Button>Archives</Button>
            </div>

            <div>

            </div>

        </div>
    )
}