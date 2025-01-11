import { GithubLogo, Globe, LinkedinLogo, List } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./menu-bart";
import { useLanguage } from "../context/language";

export function TheHeader() {
  const navigate = useNavigate();
  const menuSelected = window.location.pathname;
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <header className="w-screen h-16  flex justify-center">
        <div className="w-4/5 bg-[#181a28] rounded flex justify-around mobile:hidden">
          <button
            className={`text-${
              menuSelected === "/" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => navigate("/")}
          >
            {language === "pt" ? "Início" : "Home"}
          </button>
          <button
            className={`text-${
              menuSelected === "/projetos" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => navigate("/projetos")}
          >
            {language === "pt" ? "Projetos" : "Projects"}
          </button>
          <button
            className={`text-${
              menuSelected === "/experiencias" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => navigate("/experiencias")}
          >
            {language === "pt" ? "Experiências" : "Experiences"}
          </button>
          <button
            className={`text-${
              menuSelected === "/certificaciones" ? "[#FF4A57]" : "white"
            } text-xl transition ease-in-out delay-100 hover:text-[#FF4A57]`}
            onClick={() => navigate("/certificaciones")}
          >
            {language === "pt" ? "Certificados" : "Certificates"}
          </button>


          <div className="flex gap-5 items-center">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/mariana-da-silva-lara-42a076258/"
              target="_blank"
            >
              <LinkedinLogo
                size={32}
                className="text-white transition ease-in-out delay-100 hover:text-[#FF4A57]"
              />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/larads"
              target="_blank"
            >
              <GithubLogo
                size={32}
                className="text-white transition ease-in-out delay-100 hover:text-[#FF4A57]"
              />
            </a>
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center justify-center p-2 bg-transparent text-white transition ease-in-out delay-100 hover:text-[#FF4A57]"
            >
              <Globe size={32} />
              <p className="ml-2">{language === "pt" ? "PT" : "EN"}</p>
            </button>
          </div>
        </div>

        <div className="w-4/5 bg-[#181a28] rounded hidden justify-center items-center mobile:flex">
          <Menubar className="bg-[#181a28]">
            <MenubarMenu>
              <MenubarTrigger>
                <List size={32} color="#FFFF" />
              </MenubarTrigger>
              <MenubarContent align="center">
                <MenubarItem
                  onClick={() => navigate("/")}
                  className={`text-${menuSelected === "/" && "[#FF4A57]"}`}
                >
                  {language === "pt" ? "Início" : "Home"}
                </MenubarItem>
                <MenubarItem
                  onClick={() => navigate("/experiencias")}
                  className={`text-${
                    menuSelected === "/experiencias" &&
                    "[#FF4A57]" && "[#FF4A57]"
                  }`}
                >
                  {language === "pt" ? "Experiências" : "Experiences"}
                </MenubarItem>
                <MenubarItem
                  onClick={() => navigate("/projetos")}
                  className={`text-${
                    menuSelected === "/projetos" && "[#FF4A57]"
                  }`}
                >
                  {language === "pt" ? "Projetos" : "Projects"}
                </MenubarItem>
                <MenubarItem
                  onClick={() => navigate("/certificaciones")}
                  className={`text-${
                    menuSelected === "/certificaciones" && "[#FF4A57]"
                  }`}
                >
                  {language === "pt" ? "Certificados" : "Certificates"}
                </MenubarItem>

                <MenubarItem>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mariana-da-silva-lara-42a076258/"
                    target="_blank"
                    className="flex gap-1 items-center"
                  >
                    <LinkedinLogo size={16} /> Linkedin
                  </a>
                </MenubarItem>

                <MenubarItem>
                  <a
                    rel="noreferrer"
                    href="https://github.com/larads"
                    target="_blank"
                    className="flex gap-1 items-center"
                  >
                    <GithubLogo size={16} /> Github
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>
    </>
  );
}