"use client";

import Foto from "@/components/Foto/Foto";
import Capabilities from "@/components/Capabilities/Capabilities";
import Portfolio from "@/components/Portfolio/Portfolio";
import Connect from "@/components/Connect/Connect";
// import CurrencyTicker from "@/components/CurrencyTicker/CurrencyTicker";
import AboutMe from "@/components/About-me/AboutMe";
import Experience from "@/components/Experience/Experience";
import AboutMeOne from "@/components/AboutMeOne/AboutMeOne";


export default function HomePage() {
  return (
    <>
      <Foto />
      <AboutMeOne />
      {/* <CurrencyTicker /> */}
      <AboutMe />
      <Capabilities />
      <Experience />
      <Portfolio />
      <Connect />
    </>
  );
}
