"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const scissorsRef = useRef<HTMLDivElement>(null);
  const upperBladeRef = useRef<HTMLImageElement>(null);
  const lowerBladeRef = useRef<HTMLImageElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const scissors = scissorsRef.current;
    const upperBlade = upperBladeRef.current;
    const lowerBlade = lowerBladeRef.current;
    const border = borderRef.current;

    if (!hero || !scissors || !upperBlade || !lowerBlade || !border) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const render = () => {
      frame = 0;

      const scrollRange = Math.max(window.innerHeight * 0.9, 1);
      const progress = reducedMotion.matches
        ? 0
        : Math.min(1, Math.max(0, window.scrollY / scrollRange));
      const startX = hero.clientWidth + 24;
      const endX = -scissors.offsetWidth - 24;
      const opening = Math.sin(progress * Math.PI * 6) * 14;

      scissors.style.left = `${startX + (endX - startX) * progress}px`;
      scissors.style.transform = "translateY(50%)";
      upperBlade.style.transform = `rotate(${opening}deg)`;
      lowerBlade.style.transform = `rotate(${-opening}deg)`;
      const visibleScissorsRightEdge = startX + (endX - startX) * progress + scissors.offsetWidth * 0.5;
      const secondaryStart = Math.min(100, Math.max(0, (visibleScissorsRightEdge / hero.clientWidth) * 100));
      border.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${secondaryStart}%, var(--secondary) ${secondaryStart}%, var(--secondary) 100%)`;
    };

    const requestRender = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    reducedMotion.addEventListener("change", requestRender);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      reducedMotion.removeEventListener("change", requestRender);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/front-view-barber-shop.png')" }}
      aria-label="Interior da barbearia"
    >
      <div ref={borderRef} className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[5px]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 22%, rgb(0 0 0 / 0.38) 58%, rgb(0 0 0 / 0.9) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-[-10%] inset-y-[-18%] -z-10 rounded-[50%] blur-2xl"
            style={{ background: "rgb(0 0 0 / 0.78)" }}
            aria-hidden="true"
          />
          <h1 className="font-title text-5xl font-bold tracking-[0.12em] md:text-8xl [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]">Giuliano <span className="text-[var(--secondary)]">Queiroz</span></h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <span className="bg-[var(--secondary)] h-1 w-24 mt-4"></span>
            <p className="mt-4 text-base tracking-[0.5em] md:text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]">AGENDE SUA EXPERIÊNCIA CONOSCO</p>
            <span className="bg-[var(--secondary)] h-1 w-24 mt-4"></span>
          </div>
        </div>
        <a
          href="/contact"
          className="mt-8 bg-[var(--secondary)] px-4 py-4 font-bold tracking-[0.25em] text-white transition-colors duration-300 hover:bg-yellow-600"
        >
          AGENDAR UM HORÁRIO
        </a>
      </div>
      <div
        ref={scissorsRef}
        className="pointer-events-none absolute bottom-0 z-30 aspect-[1774/887] w-[clamp(260px,64vw,680px)]"
        style={{ filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.55))" }}
        aria-hidden="true"
      >
        <img
          ref={upperBladeRef}
          src="/svg/scissors-half-1.svg"
          alt=""
          className="absolute inset-0 h-full w-full origin-center"
        />
        <img
          ref={lowerBladeRef}
          src="/svg/scissors-half-2.svg"
          alt=""
          className="absolute inset-0 h-full w-full origin-center"
        />
      </div>
    </section>
  );
}