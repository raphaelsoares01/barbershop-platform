"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: hasScrolled
          ? "color-mix(in srgb, var(--primary) 90%, transparent)"
          : "transparent",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-8 px-4 py-4 text-sm">
        <img src="/images/logo.png" alt="Barbershop Logo" className="h-13 w-13 shrink-0" />
        <div className="flex flex-row items-center justify-center gap-8 text-[12px] font-mono tracking-[0.2em] text-white">
            <a className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[var(--secondary)] after:content-[''] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100" href="/">INICIO</a>
            <a className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[var(--secondary)] after:content-[''] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100" href="/about">NOSSA MARCA</a>
            <a className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[var(--secondary)] after:content-[''] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100" href="/services">SERVICOS</a>
            <a className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[var(--secondary)] after:content-[''] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100" href="/reviews">AVALIACOES</a>
            <a className="relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[var(--secondary)] after:content-[''] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100" href="/contact">CONTACTO</a>
        </div>
        <div className="justify-self-end bg-[var(--secondary)] text-white px-4 py-4 cursor-pointer hover:bg-yellow-600 transition-colors duration-300 tracking-[0.25em]">
          <p>AGENDAR</p>
        </div>
      </div>
    </nav>
  );
}