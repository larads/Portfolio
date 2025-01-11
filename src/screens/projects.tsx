import { useLanguage } from "../context/language";

export function Projects() {
  const { language } = useLanguage();

  return (
    <>
      <h1 className="text-center text-white text-5xl pt-10 pb-10 mobile:text-4xl">
        {language === "pt" ? "Projetos" : "Projects"}
      </h1>
        <div className="p-10 flex gap-5 flex-wrap justify-center">
          
       </div>
    </>
  );
}