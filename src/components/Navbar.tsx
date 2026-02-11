import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pinnedWhite, setPinnedWhite] = useState(false);
  const [autoWhite, setAutoWhite] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const whySection = document.getElementById("why");
      if (!whySection) return;
      const triggerTop = whySection.offsetTop - 110;
      setAutoWhite(window.scrollY >= triggerTop);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const setFromHash = () => {
      setActiveHash(window.location.hash || "#home");
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  const items: NavItem[] = useMemo(
    () => [
      { label: "ทำไมอรุณลิงก์?", href: "#why" },
      { label: "ฟีเจอร์", href: "#feature" },
      { label: "ลูกค้า", href: "#customer" },
      { label: "สมัครพาร์ทเนอร์", href: "#partner" },
      { label: "คำถามที่พบบ่อย", href: "#faq" },
      { label: "ติดต่อเรา", href: "#contact" },
    ],
    [],
  );

  const wrapperClass = "fixed inset-x-0 top-0 z-50 transition-all duration-300";
  const isWhite = pinnedWhite || autoWhite;

  const bgClass = isWhite
    ? "bg-white"
    : scrolled
      ? "bg-white/8 backdrop-blur-md"
      : "bg-transparent";

  const textClass = isWhite ? "text-sky-700" : "text-white";

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const linkClass = (href: string) => {
    const isActive = activeHash === href;
    if (isWhite) {
      return [
        linkBase,
        isActive
          ? "bg-sky-100 text-sky-900"
          : "text-slate-600 hover:text-sky-900 hover:bg-slate-50",
      ].join(" ");
    }

    return [
      linkBase,
      isActive
        ? "bg-white/20 text-white"
        : "text-white/85 hover:text-white hover:bg-white/10",
    ].join(" ");
  };

  return (
    <header className={`${wrapperClass} ${bgClass}`}>
      <div
        className="mx-auto mt-4 flex max-w-6xl items-center justify-between border border-cyan-300/60 px-6 py-3"
        onClick={() => setPinnedWhite((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setPinnedWhite((v) => !v);
        }}
      >
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            setActiveHash("#home");
          }}
        >
          <div
            className={`h-9 w-9 rounded-sm border ${
              isWhite ? "border-sky-300 bg-slate-100" : "border-white/60 bg-white/20"
            }`}
          />
          <div className={`leading-tight ${textClass}`}>
            <div className="text-sm font-semibold">ARUN</div>
            <div className="-mt-1 text-sm font-semibold">LINK</div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" onClick={(e) => e.stopPropagation()}>
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={linkClass(it.href)}
              onClick={() => setActiveHash(it.href)}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div onClick={(e) => e.stopPropagation()}>
          <a
            href="https://arunlink.vercel.app/"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              isWhite
                ? "bg-sky-600 text-white hover:bg-sky-700"
                : "bg-white text-sky-700 hover:bg-white/90"
            }`}
            onClick={() => setActiveHash("#home")}
          >

            ลองใช้เลย
          </a>
        </div>
      </div>
    </header>
  );
}
