import { Hero, About, Stecks, ProjectsPage, ProjectsDetail, Footer } from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Preloader } from "./components/Preloader";

function LandingPage() {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem("scrollPosition"); // limpa pra não rolar de novo
    }
  }, []);

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      const handleReady = () => {
        // Tudo foi carregado: DOM, imagens, fontes, scripts
        setIsReady(true);
      };

      if (document.readyState === "complete") {
        handleReady();
      } else {
        window.addEventListener("load", handleReady);
        return () => window.removeEventListener("load", handleReady);
      }
    }, []);



  return (
    <>
      {!isReady && <Preloader />}
      {isReady && (
        <>
          <Hero />
          <About />
          <Stecks />
          <ProjectsPage />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
