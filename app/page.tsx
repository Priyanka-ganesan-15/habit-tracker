import HeroSection from "./mainPageComponents/HeroSection";
import Navbar from "./mainPageComponents/Navbar";
import Image from "next/image";
import { useCallback } from "react";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="flex w-full justify-center mt-20">
      </div>
    </div>
  );
}
