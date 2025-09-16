import About from "./components/About";
import { Contact } from "./components/Contact";
import Experience from "./components/Experience";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { profile } from "./constants";
import { ThemeProvider } from "./hooks/useTheme";

export default function App() {
  return (
   <ThemeProvider>
      <div className="min-h-screen bg-background">
          <Header/>
         <main>
          <About/>
          <Experience />
          <Skills/>
          <Projects/>
          <Contact/>
         </main>
         <Footer />
      </div>
   </ThemeProvider>
  )
}
