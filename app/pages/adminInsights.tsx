import {
  faEye,
  faGear,
  faLink,
  faPercent,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChartAreaAxes } from "~/components/chart";

import { Link, Outlet } from "react-router";

import {
  faBoltLightning,
  faArrowUpFromBracket,
  faChartLine,
  faUserGroup,
  faBars,
  faUser,
  faArrowRightFromBracket,
  faCircleQuestion,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "~/components/ui/button";
import { Pub } from "~/components/pub";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { logout } from "~/services/authService";
import { useNavigate } from "react-router";

export function InsightPage() {
  const active = "bg-[#c7c7c7]";
  let navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const result = await logout();
      console.log("Utilisateur déconnecté");
      navigate("/");
    } catch (err) {
      console.error("Erreur déconnexion:", err);
    }
  };
  return (
    <div className="flex flex-col h-screen bg-[#F9FAFB]">
      {/* Barre de pub */}
      <Pub />

      {/* Conteneur principal */}
      <div className="flex flex-1 md:grid md:grid-cols-[220px_1fr] md:rounded-t-2xl overflow-hidden">
        {/* Sidebar desktop */}
        <aside className="hidden md:flex flex-col bg-[#F5F5F5] p-4 gap-4 md:rounded-tl-2xl">
          {/* Profil utilisateur */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <img
                src="https://github.com/shadcn.png"
                alt="avatar"
                className="w-[28px] h-[28px] rounded-full"
              />
              <span className="text-sm text-[#373737] flex items-center">
                tchoukeugrace
                <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xs" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-2xl ml-3">
              <DropdownMenuLabel className="flex items-center gap-2">
                <img
                  src="https://github.com/shadcn.png"
                  alt="avatar"
                  className="w-[32px] h-[32px] rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-[#373737]">
                    tchoukeugrace
                  </p>
                  <p className="text-xs text-gray-500 truncate w-[120px]">
                    fastprofile.com/tchoukeugrace
                  </p>
                </div>
                <Button size="sm" variant="outline" className="rounded-3xl">
                  Free
                </Button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="ghost">
                  <FontAwesomeIcon icon={faUser} /> Compte
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="ghost">
                  <FontAwesomeIcon icon={faBoltLightning} /> Upgrade
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="ghost">
                  <FontAwesomeIcon icon={faCircleQuestion} /> Aide
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="ghost" onClick={handleLogout}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  Déconnexion
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Menu */}
          <nav className="text-sm gap-0">
            <Accordion type="single" collapsible>
              <AccordionItem value="fastprofile">
                <AccordionTrigger className="pl-2 py-2">
                  My FastProfile
                </AccordionTrigger>
                <AccordionContent className="ml-3 border-l pl-3 flex flex-col gap-2">
                  <Link
                    to="/admin"
                    className={`p-1 rounded hover:bg-[#c7c7c7] transition`}
                  >
                    Liens
                  </Link>
                  <Link
                    to="/admin/design"
                    className="p-1 rounded hover:bg-[#c7c7c7] transition"
                  >
                    Design
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-2 flex flex-col gap-2">
              <Link
                to=""
                className="flex items-center gap-2 p-2 rounded hover:bg-[#c7c7c7] bg-[#c7c7c7]"
              >
                <FontAwesomeIcon icon={faChartLine} /> Insights
              </Link>
              <Link
                to=""
                className="flex items-center gap-2 p-2 rounded hover:bg-[#c7c7c7]"
              >
                <FontAwesomeIcon icon={faUserGroup} /> Audience
              </Link>
            </div>
          </nav>
        </aside>

        {/* Zone principale */}
        <main className="w-full overflow-y-auto md:rounded-tr-2xl">
          <div className="">
            {/* titre */}
            <div className="bg-[#F2F1ED] flex justify-between items-center p-4 py-6 sticky top-0 left-0 right-0 md:bg-[#F9FAFB] z-20 md:rounded-tr-2xl">
              <h2 className="text-2xl scroll-m-20 font-semibold tracking-tight first:mt-0 text-center">
                Insights
              </h2>
              <FontAwesomeIcon
                icon={faGear}
                className="text-[20px] text-[#656565]"
              />
            </div>

            {/* statistique du lien */}
            <div className="mx-4 mt-5 p-4 bg-white rounded-2xl flex flex-col gap-4 border-[#d6d6d4] border">
              <h3 className="text-xl font-semibold">Lifetime</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"
                  />
                  <p>
                    <span className="font-bold text-[18px]">5</span> Vues
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon
                    icon={faPercent}
                    className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"
                  />
                  <p>
                    <span className="font-bold text-[18px]">0%</span> de Clics
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"
                  />
                  <p>
                    <span className="font-bold text-[18px]">0 </span>Clicks
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    className="p-2 bg-[#DEDDDC] text-[#919190] rounded-[8px]"
                  />
                  <p>
                    <span className="font-bold text-[18px]">5</span> Abonnés
                  </p>
                </div>
              </div>
            </div>

            {/* graphique */}
            <div className="px-4 pt-4 pb-25">
              <ChartAreaAxes></ChartAreaAxes>
            </div>
          </div>
        </main>
      </div>

      {/* Navigation mobile */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-[#F2F1ED] border-t flex justify-around py-1 pt-3 text-[#666]">
        <Link to="" className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-xl" />
          <span className="text-xs">FastProfile</span>
        </Link>
        <Link to="" className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faChartLine} className="text-xl" />
          <span className="text-xs">Insights</span>
        </Link>
        <Link to="" className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faUserGroup} className="text-xl" />
          <span className="text-xs">Audience</span>
        </Link>
        <Link to="" className="flex flex-col items-center gap-2">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
          <span className="text-xs">Plus</span>
        </Link>
      </footer>
    </div>
  );
}
