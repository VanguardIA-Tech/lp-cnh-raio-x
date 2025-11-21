"use client";

import { useState, useEffect } from "react";

// Este hook determina se o CTA flutuante deve estar visível
// com base na posição de rolagem do usuário.
export function useFloatingCta(threshold = 400) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpa o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]); // Re-executa o efeito se o threshold mudar

  return isVisible;
}