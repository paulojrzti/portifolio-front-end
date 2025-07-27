import { Hero, About, Stecks, ProjectsPage, ProjectsDetail, Footer } from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
      sessionStorage.removeItem("scrollPosition"); // limpa pra não rolar de novo
    }
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Stecks />
      <ProjectsPage />
      <Footer/>
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
