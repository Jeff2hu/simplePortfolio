"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import BoxToPageAnimation from "./BoxToPageAnimation";
import ContinueArrow from "./ContinueArrow";
import DevImg from "./DevImg";
import Header from "./Header";
import IntroCard from "./IntroCard";
import ProjectCardsContainer from "./ProjectCardsContainer";
import BackgroundGradient from "./ShineEffect";
import Skill from "./Skill";

function Home() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    if (!isAnimationDone) return;

    gsap.registerPlugin(ScrollTrigger);
    Array.from({ length: 7 }).forEach((_, index) => {
      gsap.from(`#project-card-${index + 1}`, {
        scrollTrigger: {
          trigger: `#project-card-${index + 1}`,
          start: "top 70%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.inOut",
      });
    });
  }, [isAnimationDone]);

  return (
    <>
      {!isAnimationDone && (
        <BoxToPageAnimation setIsAnimationDone={setIsAnimationDone} />
      )}
      {isAnimationDone && (
        <main className="w-full min-h-screen px-20 xl:pt-12 overflow-hidden bg-gradient-to-l from-zinc-400/30 to-accent/20 opacity-0 animate-fadeIn z-20">
          <Header />
          <section className="relative">
            <BackgroundGradient />

            <div className="container mx-auto px-4 md:px-20 relative h-[85vh]">
              <div className="flex justify-between gap-x-12">
                <IntroCard />
                <DevImg />
              </div>
              <ContinueArrow />
            </div>
            <Skill />
            <ProjectCardsContainer />
          </section>
        </main>
      )}
    </>
  );
}

export default Home;
