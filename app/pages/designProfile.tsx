import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import Color from "~/components/color";
import { Pub } from "~/components/pub";
import { DNavbar } from "~/components/designNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faArrowRotateRight,
  faBolt,
  faBoltLightning,
  faCircleUser,
  faGlobe,
  faLayerGroup,
  faPaintRoller,
  faPlus,
  faRotateLeft,
  faSliders,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { UserPage } from "./linkPage";
import type { User } from "~/types/user";
import { Link } from "react-router";
import dark from "../assets/images/dark.svg";
import light from "../assets/images/light.svg";
import fancy from "../assets/images/fancy.svg";
import { useState, useRef } from "react";
import { themes } from "~/config/themes";
import { themeImages } from "~/config/themes";
import { styles } from "~/config/styles";
import { stylesImages } from "~/config/styles";
import { backgrounds,type BackgroundType } from "~/config/backgrounds";




export function Design() {

  const [avatar, setAvatar] = useState("https://i.pravatar.cc/150?img=3")
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const mockUser: User = {
  name: "tchoukeu grace",
  avatar: avatar,
  description: "Entrepreneur",
  links: [
    { title: "Mon GitHub", url: "https://github.com/" },
    { title: "Mon LinkedIn", url: "https://linkedin.com/" },
  ],
  };

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<keyof typeof themes>("light");
  const [content, setContent] = useState<
    "Profil" | "Thème" | "Fond" | "Style" | null
  >(null);
  const [style, setStyle] = useState<keyof typeof styles>("rounded")

  const [color, setColor] = useState("#f1f1f1");
  const [backgroundType, setBackgroundType] = useState<BackgroundType>("solid");


  // Quand on clique sur le bouton, on déclenche l’input caché
  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  // Quand on choisit une image
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
    }
  }

  const handleOpen = (content: "Profil" | "Thème" | "Fond" | "Style") => {
    setContent(content);
    setOpen(true);
  };
  const contentDrawer = (
    content: "Profil" | "Thème" | "Fond" | "Style" | null
  ) => {
    
    switch (content) {
      case "Profil":
        return (
          <div className="flex flex-col gap-3 md:gap-7">
            <div className="flex items-center gap-6">
              <img
                src={avatar}
                alt={mockUser.name}
                className="rounded-full w-[100px] md:w-30"
              />
              <Button className="px-5 py-3 text-white bg-black text-[17px] rounded-4xl" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faPlus} />
                add
              </Button>
              <input 
               type="file"
               className="hidden"
               accept="image/*"
               ref={fileInputRef}
               onChange={handleFileChange}
              />
            </div>

            <div className="border-t border-[#a2a2a2] pt-4 md:border-none">
              <div className="flex items-center justify-between bg-[#E6E5E3] p-6 rounded-2xl">
                <div className="flex gap-1 items-center">
                  <FontAwesomeIcon icon={faBoltLightning} />
                  <p>Cacher le pied de page</p>
                </div>

                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="bg-white text-[#a2a2a2] p-1 text-[10px] rounded-full"
                  />
                  <Switch />
                </div>
              </div>
              <div className="bg-[#E6E5E3]"></div>
            </div>
          </div>
        );
        break;
      case "Thème":
        return (
          <div className="grid grid-rows-[1fr] grid-cols-3 gap-4 md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
            {(Object.keys(themes) as (keyof typeof themes)[]).map((name) => (
              <div
                key={name}
                className="grid grid-rows-[1fr_25px] focus:border-2 rounded-2xl"
              >
                <Button
                  onClick={() => setTheme(name)}
                  variant="ghost"
                  className="p-0 h-full w-full focus:border-2 rounded-2xl"
                >
                  <img
                    src={themeImages[name]}
                    alt=""
                    className={`h-full w-full rounded-2xl`}
                  />
                </Button>
                <span className="text-center mt-1">{name}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "Fond":
        return (
          <div>
            <div className="grid grid-rows-[1fr] grid-cols-3 gap-4 md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
              {(Object.keys(backgrounds) as typeof backgroundType[]).map((name) => {
                const preview = backgrounds[name](color);
                return(
                  <div className="grid grid-rows-[1fr_25px] focus:border-2 rounded-2xl">
                    <Button
                      variant="ghost"
                      key={name}
                      onClick={() => setBackgroundType(name)}
                      className="h-[140px] w-full flex items-start focus:border-2 rounded-2xl md:h-[150px]"
                      style={preview.style}
                    >
                      <img
                        src={mockUser.avatar}
                        alt=""
                        className={`rounded-full w-12 p-2`}
                      />
                    
                    </Button>
                    <span className="text-center mt-1">{preview.label}</span>
                  </div>

                )
              })}

            </div>

            <div className="flex pt-5">
              <h3 className="text-[17px] self-center">Couleurs :</h3>
              <div className="">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="ml-2 rounded-full w-8 h-8"
                />
              </div>
            </div>
          </div>
        );
        break;
      case "Style":
        return (
          <div className="grid grid-rows-[1fr] grid-cols-3 gap-4 md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] md:pb-20">
                {(Object.keys(styles) as (keyof typeof styles)[]).map((name) => (
                <div
                    key={name}
                    className="grid grid-rows-[1fr_25px] focus:border-2 rounded-2xl"
                >
                    <Button
                    onClick={() => setStyle(name)}
                    variant="ghost"
                    className="p-0 h-full w-full focus:border-2 rounded-2xl"
                    >
                    <img
                        src={stylesImages[name]}
                        alt=""
                        className={`h-full w-full rounded-2xl`}
                    />
                    </Button>
                    <span className="text-center mt-1">{name}</span>
                </div>
                ))}
          </div>
        )
        break;
      default:
        break;
    }
  };

  return (
    <div className="">
      <div className="min-h-screen grid grid-cols-1 grid-rows-[85px_1fr] md:hidden">
        <DNavbar></DNavbar>

        <div
          className={`border-1 rounded-tl-4xl rounded-tr-4xl relative transition-all duration-500 overflow-auto  ${open ? "scale-70 -translate-y-22 w-9/12 mx-auto" : "scale-100"} `}
        >
          <UserPage
            user={mockUser} variant="design"
            theme={theme}                 
            style={style}
            backgroundColor={color}
            backgroundType={backgroundType}
          ></UserPage>
        </div>

        <div className="fixed z-50 rounded-[24px] left-1/2 -translate-x-1/2 bottom-3.5 p-4 shadow-lg flex items-center justify-center bg-[#fff]">
          <Button
            variant="ghost"
            className="flex flex-col justify-center"
            onClick={() => handleOpen("Profil")}
          >
            <FontAwesomeIcon icon={faCircleUser} />
            Profil
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col justify-center"
            onClick={() => handleOpen("Thème")}
          >
            <FontAwesomeIcon icon={faSliders} />
            Thème
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col justify-center"
            onClick={() => handleOpen("Fond")}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            Fond
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col justify-center"
            onClick={() => handleOpen("Style")}
          >
            <FontAwesomeIcon icon={faPaintRoller} />
            Style
          </Button>
        </div>

        <div
          className={`grid grid-cols-1 grid-rows-[40px_1fr] gap-2 h-[60%] p-4 absolute bottom-0 left-0 right-0  ${open ? "translate-y-0" : "hidden translate-y-full"} z-1000 shadow-2xl rounded-tl-2xl rounded-tr-2xl bg-white transition-transform duration-500`}
        >
          <div className="flex justify-between items-center">
            <h4 className="text-[18px]">{content}</h4>
            <Button
              className="bg-[#cecece] rounded-full"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>

          <div className="mt-4">{content && contentDrawer(content)}</div>
        </div>
      </div>

      <div className="h-screen overflow-hidden hidden md:flex flex-col bg-[#1E3A8A]">
        <div className="shrink-0">
          <Pub />
        </div>

        <div className="h-full overflow-hidden grid grid-cols-[60%_1fr] xl:grid-cols-[70%_1fr] bg-[#F9FAFB] rounded-tl-2xl rounded-tr-2xl">

          {/* grid-cols-[auto_1fr_310px] xl:grid-cols-[250px_1fr_450px] 2xl:grid-cols-[250px_1fr_500px] */}

          <div className="h-full overflow-y-auto grid grids-rows-[60px_1fr] ">

            <div className="bg-[#F9FAFB] rounded-tl-2xl rounded-tr-2xls sticky top-0">
              <DNavbar></DNavbar>
            </div>

            <div className="h-full overflow-auto grid grid-cols-[60px_1fr] gap-4 xl:grid-cols-[200px_1fr]">

              <div className="flex flex-col pl-7 pt-6 pr-3 gap-2 text-[#696969] xl:pt-8">
                <Button
                  variant="ghost"
                  className="text-[20px] p-5 flex items-center justify-start"
                >
                  <FontAwesomeIcon icon={faCircleUser} />
                  <span className="hidden xl:block">Profil</span>
                </Button>
                <Button
                  variant="ghost"
                  className="text-[20px] p-5 flex items-center justify-start"
                >
                  <FontAwesomeIcon icon={faSliders} />
                  <span className="hidden xl:block">Thème</span>
                </Button>
                <Button
                  variant="ghost"
                  className="text-[20px] p-5 flex items-center justify-start"
                >
                  <FontAwesomeIcon icon={faLayerGroup} />
                  <span className="hidden xl:block">Fond</span>
                </Button>
                <Button
                  variant="ghost"
                  className="text-[20px] p-5 flex items-center justify-start"
                >
                  <FontAwesomeIcon icon={faPaintRoller} />
                  <span className="hidden xl:block">Style</span>
                </Button>
              </div>

              <div className="overflow-y-auto p-4 flex flex-col gap-14 max-w-[1024px] 2xl:justify-self-center 2xl:w-[800px] 2xl:max-w-[800px]">
                <div className="max-w-[700px] 2xl:max-w-[800px]">
                  <h2 className="text-2xl mb-4 font-semibold">Profil</h2>
                  <div>{contentDrawer("Profil")}</div>
                </div>
                <div className="max-w-[700px] 2xl:max-w-[800px]">
                  <h2 className="text-2xl mb-4 font-semibold">Thème</h2>
                  <div className="max-w-[500px]">{contentDrawer("Thème")}</div>
                </div>
                <div className="max-w-[700px] h-auto xl:pb-14">
                  <h2 className="text-2xl mb-4 font-semibold">Fond</h2>
                  <div className="max-w-[600px] h-full">
                    {contentDrawer("Fond")}
                  </div>
                </div>
                <div className="max-w-[700px] 2xl:max-w-[800px]">
                  <h2 className="text-2xl mb-4 font-semibold">Style</h2>
                  <div>{contentDrawer("Style")}</div>
                </div>
              </div>

            </div>

          </div>

          <div className="flex flex-col items-center h-full">

            <div className="mt-4 mb-4 xl:mb-2">
              <Button className="text-[18px] w-[150px] h-[45px] shadow rounded-full bg-white">
                  <FontAwesomeIcon icon={faGlobe} />
                  Ouvrir
              </Button>
            </div>

            <div className="">
              <UserPage
                user={mockUser}
                variant="design"
                theme={theme}
                style={style}
                backgroundColor={color}
                backgroundType={backgroundType}
              ></UserPage>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
