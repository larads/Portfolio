import { GithubLogo, GooglePlayLogo, Info, X } from "@phosphor-icons/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/card";
import { useLanguage } from "../context/language";
import { Button } from "../components/button";
import { useState } from "react";
import { getProjects } from "../utils/projects";

export function Projects() {
  const { language } = useLanguage();
  const projects = getProjects(language);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <>
      <h1 className="text-center text-white text-5xl pt-10 pb-10 mobile:text-4xl">
        {language === "pt" ? "Projetos" : "Projects"}
      </h1>
      <div className="p-10 flex gap-5 flex-wrap justify-center items-center">
        {projects.map((project) => (
          <Card key={project.id} className="w-72 h-[22rem] transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex flex-col items-center">
                <CardTitle>{project.title}</CardTitle>
                <div className="flex space-x-2 ml-60 -mt-6">
                  <a href={project.infoLink}>
                    {language === "pt" ? <Info className="text-[#FF4A57]" size={22} /> : <div className="ml-4"><Info className="text-[#FF4A57]" size={22} /></div>}
                  </a>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="flex-row items-center space-x-2">
                <div className="flex flex-col items-center">
                  <img
                    className="w-40 h-40 rounded-3xl"
                    src={project.image}
                    alt={`icon ${project.title}`}
                  />
                </div>
                <div className="flex space-x-4 items-center mt-2 justify-center text-center">
                  {project.link.includes("github.com") && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <GithubLogo size={32} />
                    </a>
                  )}

                  {project.link.includes("play.google.com") && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <GooglePlayLogo size={32} />
                    </a>
                  )}
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center gap-2">
              {project.link.includes("play.google.com") && (
                <Button className="p-0 -mt-5">
                  <a
                    rel="noreferrer"
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center gap-1 w-24 h-full transition ease-in-out delay-100 hover:text-vermelhoPrincipal"
                  >
                    <GooglePlayLogo />
                    {language === "pt" ? "Play Store" : "Play Store"}
                  </a>
                </Button>
              )}

              {project.link.includes("github.com") && (
                <Button className="p-0 -mt-5">
                  <a
                    rel="noreferrer"
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center gap-1 w-24 h-full transition ease-in-out delay-100 hover:text-vermelhoPrincipal"
                  >
                    <GithubLogo />
                    {language === "pt" ? "GitHub" : "GitHub"}
                  </a>
                </Button>
              )}
              {/* <Button className="p-0 -mt-5" onClick={() => setSelectedProject(project.id)}>
                {language === "pt" ? "Ver mais" : "See more"}
              </Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-96">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{projects.find(p => p.id === selectedProject)?.title}</h2>
              <button onClick={() => setSelectedProject(null)}><X size={24} /></button>
            </div>
            <p className="mt-2">{projects.find(p => p.id === selectedProject)?.details}</p>
            <p className="mt-2"><strong>{language === "pt" ? "Tecnologias:" : "Technologies:"}</strong> {projects.find(p => p.id === selectedProject)?.technologies.join(", ")}</p>
          </div>
        </div>
      )}
    </>
  );
}