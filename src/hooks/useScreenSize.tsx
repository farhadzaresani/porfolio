"use client";
import { useState, useEffect } from "react";

type ScreenSize = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Default to desktop
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 768,
        isTablet: width >= 768 && width <= 1024,
        isDesktop: width > 1024,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize size on first render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

export default useScreenSize;
