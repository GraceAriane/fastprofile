import { Link, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoltLightning,
  faArrowUpFromBracket,
  faGear,
  faChartLine,
  faUserGroup,
  faBars,
  faUser,
  faArrowRightFromBracket,
  faCircleQuestion,
  faAngleDown,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { MyfastProfile } from "~/pages/adminFastprofile";
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
import { InsightPage } from "~/pages/adminInsights";
import { Parameter } from "~/pages/parameters";

export default function Layout() {
  let active;
  active = "bg-[#c7c7c7]";

  return (
    <div className="flex flex-col h-screen md:p-0 md:bg-[#1E3A8A] md:text-[16px]">
      <div>
        <Pub />
      </div>

      <div className="self-start w-full h-full md:grid md:grid-cols-[200px_1fr] md:overflow-y-hidden md:rounded-tl-2xl md:rounded-tr-2xl">
        <div className="bg-[#f5f5f5] sidebar hidden md:flex flex-col gap-3 p-4 -mr-1 md:rounded-tl-2xl">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 ">
              <img
                src="https://github.com/shadcn.png"
                alt=""
                className="w-[20px] rounded-full"
              />
              <h3 className="text-[14px] text-[#373737]">
                tchoukeugrace
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-[8px] ml-2 self-center"
                />
              </h3>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-2xl">
              <DropdownMenuLabel className="flex gap-2 items-center">
                <img
                  src="https://github.com/shadcn.png"
                  alt=""
                  className="w-[30px] rounded-full"
                />
                <div className="">
                  <h3 className="text-[16px] text-[#373737]">tchoukeugrace</h3>
                  <p className="text-[13px]">fastprofile.com/tchou...</p>
                </div>
                <Button className="rounded-3xl border border-[#F5F5F5]">
                  Free
                </Button>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <FontAwesomeIcon icon={faUser} />
                Compte
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FontAwesomeIcon icon={faBoltLightning} />
                Upgrade
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FontAwesomeIcon icon={faCircleQuestion} />
                Poser une question
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Se déconnecter
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="text-[14px]">
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1" className="pl-2 rounded-[10px]">
                <AccordionTrigger className="md:text-[14px] hover:no-underline">
                  My FastProfile
                </AccordionTrigger>
                <AccordionContent className="ml-2 pl-2 flex flex-col md:text-[14px] gap-2 border-l-[#dadada] border-l">
                  <Link
                    to=""
                    className={`p-1 pl-2 rounded-[10px] hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all ${active}`}
                  >
                    <a href="">Liens</a>
                  </Link>
                  <Link
                    to="design"
                    className={`p-1 pl-2 rounded-[10px] hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all`}
                  >
                    <a href="">Design</a>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-1">
              <Link
                to=""
                className="flex items-center gap-2 rounded-[10px] p-2 hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all"
              >
                <FontAwesomeIcon icon={faChartLine} className="text-[14px]" />
                <p className="">Insights</p>
              </Link>

              <Link
                to=""
                className="flex items-center gap-2 rounded-[10px] p-2 hover:bg-[#c7c7c7] hover:duration-150 hover:transition-all"
              >
                <FontAwesomeIcon icon={faUserGroup} className="text-[14px]" />
                <p className="">Audience</p>
              </Link>
            </div>
          </div>
          {/* <div className="fixed bottom-0 border-4 left-0">
                    <a href="">
                        <FontAwesomeIcon icon={faCircleQuestion} />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faHeadset} />
                    </a>
              </div> */}
        </div>

        <div className="overflow-auto md:rounded-tr-2xl bg-[#F9FAFB]">
          <MyfastProfile></MyfastProfile>
          {/* <InsightPage></InsightPage> */}
          {/* <Parameter></Parameter> */}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 self-end w-[100%] h-[10%] pt-[2%] bg-[#F2F1ED] border-t-[#d1cfcd] border-t-1 flex md:hidden">
        <div className="flex w-[90%] m-auto justify-between items-center text-[#666666]">
          <Link
            to=""
            className="flex flex-col justify-center items-center gap-2"
          >
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              className="text-[25px]"
            />
            <p className="text-[0.645rem]">FastProfile</p>
          </Link>

          <Link
            to=""
            className="flex flex-col justify-center items-center gap-2"
          >
            <FontAwesomeIcon icon={faChartLine} className="text-[25px]" />
            <p className="text-[0.645rem]">Insights</p>
          </Link>

          <Link
            to=""
            className="flex flex-col justify-center items-center gap-2"
          >
            <FontAwesomeIcon icon={faUserGroup} className="text-[25px]" />
            <p className="text-[0.645rem]">Audience</p>
          </Link>

          <Link
            to=""
            className="flex flex-col justify-center items-center gap-2"
          >
            <FontAwesomeIcon icon={faBars} className="text-[25px]" />
            <p className="text-[0.645rem]">Plus</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
