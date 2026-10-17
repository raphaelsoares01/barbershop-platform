"use client";

import { useEffect, useState } from "react";

const navigationItems = [
  { id: "home", label: "INICIO" },
  { id: "about", label: "NOSSA MARCA" },
  { id: "services", label: "SERVICOS" },
  { id: "reviews", label: "AVALIACOES" },
  { id: "contact", label: "CONTACTO" },
];

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  };

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      setHasScrolled(window.scrollY > 0);

      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sections[0];

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (sectionTop <= marker) {
          currentSection = section;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
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
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 text-sm md:gap-8">
        <a href="#home" onClick={(event) => scrollToSection(event, "home")} aria-label="Ir para o inicio">
          <img src="/images/logo.png" alt="Barbearia Giuliano Queiroz" className="h-13 w-13 shrink-0" />
        </a>
        <div className="flex min-w-0 flex-row items-center justify-center gap-3 overflow-x-auto text-[10px] font-mono tracking-[0.14em] text-white sm:gap-5 sm:text-[12px] sm:tracking-[0.2em]">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              className={`relative shrink-0 py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[var(--secondary)] after:content-[''] after:transition-transform after:duration-300 ${activeSection === item.id ? "text-[var(--secondary)] after:scale-x-100" : "after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100"}`}
              href={`#${item.id}`}
              onClick={(event) => scrollToSection(event, item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" onClick={(event) => scrollToSection(event, "contact")} className="hidden justify-self-end bg-[var(--secondary)] px-4 py-3 text-[10px] font-semibold tracking-[0.25em] text-white transition-colors duration-300 hover:bg-yellow-600 sm:block">
          AGENDAR
        </a>
      </div>
    </nav>
  );
}