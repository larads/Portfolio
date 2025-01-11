import { Signpost } from "@phosphor-icons/react";
import { description } from "../utils/description";
import { useLanguage } from "../context/language";

export function AboutMe() {
  const { language } = useLanguage();

  return (
    <>
      <div className="w-screen pl-24 pr-24 pt-20 flex gap-2 justify-center items-start flex-wrap mobile:pl-0 mobile:pr-0 mobile:pt-1 ">
        <div className="grid grid-rows-principal justify-items-center items-end w-2/4 mobile:w-full mobile:grid-rows-mobile ">
          <div>
            <h1 className="text-vermelhoPrincipal leading-relaxed whitespace-nowrap overflow-hidden select-none animate-wiggle text-5xl pr-1 mobile:text-2xl  sm:leading-relaxed">
              Mariana da Silva Lara.
            </h1>
          </div>

          <p className="text-white text-xl text-justify animate-more-details mobile:text-lg">
            {language === "pt" ? "Desenvolvedora de Software." : "Software Developer."}
          </p>

          <div className="flex flex-col gap-5 justify-center items-center animate-habilidades">
            <h1 className="text-vermelhoPrincipal text-4xl mobile:text-2xl">
              {language === "pt" ? "Habilidades" : "Skills"}
            </h1>

            <li className="flex gap-5 flex-wrap p-5">
              <p className="items-center justify-center">
                  <img src="https://skillicons.dev/icons?i=ts,js,tailwind,react,nextjs,docker,prisma" alt=""/>
                  <img src="https://skillicons.dev/icons?i=,linux,gcp,nodejs,nestjs,postgres" alt=""/>
              </p>
            </li>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
        <img 
          alt="me" 
          src="https://github.com/larads.png" 
          className="w-4/5 h-4/5 max-w-[18rem] max-h-72 rounded-full mobile:w-32 mobile:h-32 "
        />
          <ol className="flex flex-col gap-2 mobile:pl-5 mobile:pr-5">
          {Object.entries(description).map(([key, value]) => {
              return (
                <li
                  key={key}
                  id={key}
                  className="text-white text-lg flex items-center gap-2 mobile:text-base"
                >
                  <Signpost size={32} />
                  {value[language]}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}