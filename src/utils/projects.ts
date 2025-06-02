import cotaRioImg from '../assets/projects/cota-rio.png';
import aquaLifeImg from '../assets/projects/aquaLife.png';


export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  infoLink: string;
  technologies: string[];
  details: string;
}

export function getProjects(language: string) {
  return [
    {
      id: 1,
      title: language === "pt" ? "Aplicativo Cota Rio." : "Application Cota Rio.",
      description: language === "pt" ? "Aplicativo Mobile para os Maritimos." : "Mobile Application for Seafarers.",
      image: cotaRioImg,
      link: "https://play.google.com/store/apps/details?id=com.defesa_civil.cotario",
      infoLink: "https://www.defesacivil.am.gov.br/defesa-civil-do-amazonas-apresenta-o-aplicativo-cota-rio/",
      technologies: ["React Native", "Expo"],
      details: language === "pt" ? "O aplicativo Cota Rio é uma solução inovadora para monitoramento de níveis de água em rios, ajudando marítimos a navegar com segurança." : "The Cota Rio app is an innovative solution for monitoring water levels in rivers, helping seafarers navigate safely."
    },
    {
      id: 2,
      title: language === "pt" ? "Aplicativo Aqualife." : "Application Aqualife.",
      description: language === "pt" ? "Aplicativo Mobile sobre Aquarismo." : "Mobile Application about Aquarism.",
      image: aquaLifeImg,
      link: "https://github.com/larads/aquaLife",
      technologies: ["React Native", "Expo"],
      details: language === "pt" ? "O aplicativo Aqualife é uma solução inovadora para os Aquaristas iniciantes." : "The Aqualife app is an innovative solution for beginner aquarists."
    },
  ]
}