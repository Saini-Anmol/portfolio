"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { config } from "@/data/config";
import { easeOutExpo } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = config.nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveHref(`#${visible[0].target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-x pt-4 md:pt-5">
        <nav
          className={`relative flex h-14 md:h-16 items-center justify-between rounded-pill border px-4 md:px-5 transition-all duration-450 ease-out-expo ${
            scrolled
              ? "border-border bg-bg-card/70 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.04)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[13px] font-medium tracking-tight text-fg"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-gradient text-brand-on shadow-brand-glow transition-transform duration-300 ease-out-expo group-hover:scale-110">
              <span className="font-bold">
                {config.personal.firstName[0]}
              </span>
            </span>
            <span className="hidden sm:inline text-fg-muted transition-colors group-hover:text-fg">
              {config.personal.firstName.toLowerCase()}
              <span className="text-fg-faint">.dev</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {config.nav.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative rounded-pill px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                      isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-pill bg-bg-raised border border-border-subtle"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center">
            <a
              href={config.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm"
            >
              Resume
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-pill border border-border text-fg transition-colors hover:border-brand/40 hover:text-brand-bright"
            onClick={() => setOpen((s) => !s)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "m"}
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="inline-flex"
              >
                {open ? <X size={17} /> : <Menu size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
            className="md:hidden container-x mt-3"
          >
            <div className="rounded-xl border border-border bg-bg-card/90 backdrop-blur-xl p-3 shadow-card-hover">
              <ul className="flex flex-col gap-0.5">
                {config.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={close}
                      className="block rounded-md px-3 py-2.5 text-[14px] font-medium text-fg-muted transition-colors hover:bg-bg-raised hover:text-fg"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-2">
                  <a
                    href={config.personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="btn-primary w-full"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
