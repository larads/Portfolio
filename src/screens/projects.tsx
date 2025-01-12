import { GooglePlayLogo } from "@phosphor-icons/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/card";
import { useLanguage } from "../context/language";
import { Button } from "../components/button";
import { Info } from "@phosphor-icons/react/dist/ssr";

export function Projects() {
  const { language } = useLanguage();

  return (
    <>
      <h1 className="text-center text-white text-5xl pt-10 pb-10 mobile:text-4xl">
        {language === "pt" ? "Projetos" : "Projects"}
      </h1>
        <div className="p-10 flex gap-5 flex-wrap justify-center items-center">
          <Card className="w-72 h-[22rem]">
              <CardHeader>
              <div className="flex flex-col items-center">
                  <CardTitle>{language === "pt" ? "Aplicativo Cota Rio." : "Application Cota Rio."}</CardTitle>
                  <div className="flex space-x-2 ml-60 -mt-6">
                    <a href="https://www.defesacivil.am.gov.br/defesa-civil-do-amazonas-apresenta-o-aplicativo-cota-rio/">
                      {
                        language === "pt" ? <Info className="text-[#FF4A57]" size={22}/> : <div className="ml-4"><Info className="text-[#FF4A57]" size={22}/></div>
                      }
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="flex-row items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-40 h-40"
                      src="https://play-lh.googleusercontent.com/eVK84btwpBayYPj5bjlqJqLQSTZXh8QeOhPBAKX9z0ovxTMnDHwboZx_cW0Iz629WYE=w240-h480"
                      alt="icon cota rio"
                    />
                  </div>
                  <div className="flex space-x-4 items-center mt-2 justify-center">
                    <GooglePlayLogo size={32} />
                    <p>{language === "pt" ? "Aplicativo Mobile para os Maritimos." : "Mobile Application for Seafarers."}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-2">
                      <Button className="p-0 -mt-5">
                          <a
                          rel="noreferrer"
                          href="https://play.google.com/store/apps/details?id=com.defesa_civil.cotario"
                          target="_blank"
                          className="flex items-center justify-center gap-1 w-24 h-full transition ease-in-out delay-100 hover:text-vermelhoPrincipal"
                          >
                            <GooglePlayLogo />
                            {language === "pt" ? "Play Store" : "Play Store"}
                          </a>
                      </Button>
              </CardFooter>
          </Card>
       </div>
    </>
  );
}