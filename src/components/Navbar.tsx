import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const [autoWhite, setAutoWhite] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
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
      { label: "ทำไมต้องอรุณ", href: "#why" },
      { label: "ฟีเจอร์", href: "#feature" },
      { label: "ลูกค้า", href: "#customer" },
      { label: "สมัครพาร์ทเนอร์", href: "#partner" },
      { label: "คำถามที่พบบ่อย", href: "#faq" },
      { label: "ติดต่อเรา", href: "#contact" },
    ],
    [],
  );

  const wrapperClass = "fixed inset-x-0 top-0 z-50 transition-all duration-300";
  const isWhite = autoWhite;
  const bgClass = isWhite ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent";

  const textClass = isWhite ? "text-sky-700" : "text-white";

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const linkClass = (href: string) => {
    const isActive = activeHash === href;
    if (isWhite) {
      return [
        linkBase,
        isActive
          ? "text-sky-900"
          : "text-slate-600 hover:text-sky-900 ",
      ].join(" ");
    }

    return [
      linkBase,
      isActive
        ? "text-white"
        : "text-blue-200 hover:text-white ",
    ].join(" ");
  };

  return (
    <header className={`${wrapperClass} ${bgClass}`}>
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={(e) => {
            setActiveHash("#home");
          }}
        >
          <div className={`leading-tight ${textClass}`}>
            <img
              src={isWhite ? "/Logoblue.png" : "/Logowhite.png"}
              alt="ArunLink logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "/Logowhite.png";
              }}
            />
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
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

        <div>
          <a
            href="https://arunlink.vercel.app/"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              isWhite
                ? "bg-sky-600 text-white hover:bg-[#006ba7]"
                : "bg-white text-[#1891cd] hover:bg-white/90"
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
