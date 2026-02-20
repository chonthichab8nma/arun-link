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

  const wrapperClass =
    "absolute inset-x-0 top-0 z-50 transition-all duration-300 md:fixed md:inset-x-0 md:top-0";
  const isWhite = autoWhite;
  const bgClass = isWhite
    ? "bg-transparent md:bg-white/95 md:backdrop-blur-md md:shadow-sm"
    : "bg-transparent";

  const textClass = isWhite ? "text-white md:text-sky-700" : "text-white";

  const linkBase =
    "whitespace-nowrap rounded-md px-2 py-2 text-xs font-medium transition-colors duration-200 md:px-1 md:text-[12px] lg:px-3 lg:text-sm";

  const linkClass = (href: string) => {
    const isActive = activeHash === href;
    if (isWhite) {
      return [
        linkBase,
        isActive ? "text-[#1E93CE]" : "text-slate-400 hover:text-[#c0d5ff]",
      ].join(" ");
    }

    return [
      linkBase,
      isActive ? "text-white" : "text-blue-200 hover:text-white ",
    ].join(" ");
  };

  return (
    <header className={`${wrapperClass} ${bgClass}`}>
      <div className="mx-auto lg:mt-2 lg:mb-2 md:mt-2 md:mb-2 mt-[24px] mb-[16px] max-w-auto px-6 py-3">
        <div className="flex items-center justify-between md:hidden">
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={() => {
              setActiveHash("#home");
            }}
          >
            <div className={`leading-tight ${textClass} -mt-2`}>
              <img
                src={isWhite ? "/Logoblue.png" : "/Logowhite.png"}
                alt="ArunLink logo"
                className="h-10 w-auto object-contain -translate-y-1"
                onError={(e) => {
                  e.currentTarget.src = "/Logowhite.png";
                }}
              />
            </div>
          </a>

          <div>
            <a
              href="https://arunlink.vercel.app/"
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition md:px-3 md:text-xs lg:px-4 lg:text-sm ${
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

        <nav
          className="no-scrollbar mt-3 flex w-full items-center gap-1 overflow-x-auto whitespace-nowrap pb-1 md:hidden"
          aria-label="Main navigation"
        >
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className={`${linkClass(it.href)} shrink-0`}
              onClick={() => setActiveHash(it.href)}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-between md:flex">
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={() => {
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

          <nav
            className="flex flex-1 flex-nowrap items-center justify-center gap-0.5 lg:gap-1"
            aria-label="Main navigation"
          >
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
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition md:px-3 md:text-xs lg:px-4 lg:text-sm ${
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
      </div>
    </header>
  );
}
