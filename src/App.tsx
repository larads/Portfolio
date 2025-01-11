import { LanguageProvider } from "./context/language";
import "./index.css";
import { Routers } from "./routes";

export default function App() {
  return (
    <LanguageProvider>
      <Routers />
    </LanguageProvider>
  )
}