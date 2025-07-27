import {
  Hero,
  About,
  Stecks,
  ProjectsPage,
  ProjectsDetail,
  Footer,
} from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Preloader, Menu } from "./components";

function LandingPage() {
  const [isReady, setIsReady] = useState(false);
  const [scrollRestored, setScrollRestored] = useState(false);

  useEffect(() => {
    const handleReady = () => {
      setIsReady(true);
    };

    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
      return () => window.removeEventListener("load", handleReady);
    }
  }, []);

  useEffect(() => {
    if (isReady && !scrollRestored) {
      const savedPosition = sessionStorage.getItem("scrollPosition");
      if (savedPosition) {
        window.scrollTo({ top: parseInt(savedPosition), behavior: "smooth" });
        sessionStorage.removeItem("scrollPosition");
        setScrollRestored(true);
      }
    }
  }, [isReady, scrollRestored]);

  return (
    <>
      {!isReady && <Preloader />}
      {isReady && (
        <>
          <Menu />
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
