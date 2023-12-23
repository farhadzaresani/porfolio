"use client";
import MobileHero from "@/components/homePage/MobileHero";
import useScreenSize from "@/hooks/useScreenSize";

export default function Home() {
  const { isMobile, isTablet, isDesktop } = useScreenSize();
  {
    /* {isMobile && <p>Mobile View</p>}
  {isTablet && <p>Tablet View</p>}
  {isDesktop && <p>Desktop View</p>} */
  }
  return (
    <main>
      <div className=' h-screen bg-fixed bg-[url("/images/global/verticalbg.png")] bg-center bg-cover'>
        <MobileHero />
      </div>
    </main>
  );
}
