import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TheHeader } from "../components/header";
import { AboutMe } from "../screens/about-me";
import { Projects } from "../screens/projects";
import { Experience } from "../screens/experience";
import { Certifications } from "../screens/certifications";
export function Routers() {
  return (
    <BrowserRouter>
      <TheHeader />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/experiencias" element={<Experience />} />
        <Route path="/certificaciones" element={<Certifications />} />
      </Routes>
    </BrowserRouter>
  );
}