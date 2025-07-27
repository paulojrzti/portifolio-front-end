import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loading.json";

export const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      // Quando o app estiver pronto, começa a animação de saída
      setFadeOut(true);

      // Espera o fade-out e depois remove o Preloader do DOM (em App.tsx)
      setTimeout(() => {
        const root = document.getElementById("preloader");
        if (root) root.remove();
      }, 500); // Duração do fade-out
    };

    if (document.readyState === "complete") {
      handleWindowLoad();
    } else {
      window.addEventListener("load", handleWindowLoad);
      return () => window.removeEventListener("load", handleWindowLoad);
    }
  }, []);

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-32 h-32">
        <Lottie animationData={loadingAnimation} loop autoplay />
      </div>
    </div>
  );
};
