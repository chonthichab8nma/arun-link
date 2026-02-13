import React from "react";

export default function Home() {
  return (
    <section className="bg-white">
      <div className="relative w-screen">
        <div className="relative w-full overflow-hidden h-[680px] md:h-[760px] lg:h-[820px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/Home/bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-r from-[#1891CD]/60 to-[#1891CD]/50" />

          <img
            src="/Home/All.png"
            alt="materials"
            className="pointer-events-none select-none absolute inset-0  h-full w-full object-contain object-center  animate-under-in2"
          />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-[56px] font-extrabold leading-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)] md:text-[72px]">
                อรุณลิงก์
              </h1>

              <p className="mt-6 text-[18px] leading-8 text-white/95 md:text-[20px]">
                แพลตฟอร์มสำหรับงานโครงสร้าง
                <br />
                ที่คัดเลือกจากประสบการณ์ทำงานจริง
                <br />
                รวมช่างมืออาชีพมากกว่า 40 ปีในวงการก่อสร้าง
              </p>

              <div className="mt-10 flex items-center justify-center gap-4">
                <a
                  href="https://arunlink.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-[#1891CD] shadow-sm transition hover:bg-white/90"
                >
                  สมัครสมาชิก
                </a>

                <a
                  href="https://arunlink.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white/25 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
                >
                  สมัครพาร์ทเนอร์
                </a>
              </div>
            </div>
          </div>

          <img
            src="/Home/under.png"
            alt="under"
            className="pointer-events-none select-none absolute left-0 right-0 bottom-0 w-full h-[250px] object-cover animate-under-in"
            // className="pointer-events-none select-none absolute left-0 right-0 bottom-0 w-full h-[250px] object-cover transform transition-transform ease-in-out translate-y-full duration-500 hover:translate-y-0"
          />
        </div>
      </div>
    </section>
  );
}
