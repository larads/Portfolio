import { useState } from "react";
import { Experiences } from "../utils/experiences";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/accordation";
import { useLanguage } from "../context/language";

export function Experience() {
  const { language } = useLanguage(); // Acessando o idioma selecionado
  const [contentSelected, setContentSelected] = useState("");

  const handleChangeAccordionOpen = (id: string) => {
    if (contentSelected === id) {
      setContentSelected("");
      return;
    }
    setContentSelected(id);
  };

  return (
    <>
      <h1 className="text-white text-5xl text-center pt-10 mobile:text-4xl">
        {language === "pt" ? "Experiências" : "Experiences"}
      </h1>

      <div className="flex justify-center items-center">
        <Accordion type="single" collapsible className="p-10 w-4/5">
          {Experiences.map((exp) => {
            return (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                onClick={() => handleChangeAccordionOpen(exp.id)}
              >
                <AccordionTrigger
                  className={`${
                    contentSelected === exp.id ? "text-vermelhoPrincipal" : "text-white"
                  } text-xl mobile:text-lg`}
                >
                  {exp.title[language]} {/* Título traduzido */}
                </AccordionTrigger>
                <AccordionContent className="text-white text-lg text-justify mobile:text-base mobile:text-center">
                  {exp.description[language]
                    .split("\n")
                    .map((desc, ind) => (
                      <p key={ind} className="indent-10 mb-1 mobile:indent-0">
                        {desc}
                      </p>
                    ))}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <div className="flex justify-center mt-10">
        <a
          href={language === "pt" ? "/curriculum.pdf" : "/curriculumEng.pdf"}
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center w-48 rounded-md h-10 transition ease-in-out delay-50 bg-white hover:bg-slate-200"
        >
          {language === "pt" ? "Baixar Currículo" : "Download Resume"}
        </a>
      </div>
    </>
  );
}
