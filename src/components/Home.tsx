import React from "react";

export default function Home() {
  return (
    <section className="bg-white">
      <div className="relative w-screen">
        {/* ===================== MOBILE (sm) ===================== */}
        <div className="relative h-[780px] w-full overflow-hidden md:hidden">
          {/* BG */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/Home/bg.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1891CD]/60 to-[#1891CD]/50" />

          {/* top materials image (ให้เหมือนรูป: วัสดุอยู่ด้านล่าง, crop) */}
<img
  src="/Home/All-left.webp"
  alt="materials"
  className="
    pointer-events-none select-none
    absolute 
    left-1/4 bottom-10
    -translate-x-1/2            
    w-[100%] max-w-none 
    h-[460px] sm:h-[500px] 
    object-contain object-bottom
    z-[1] 
    object-bottom-left  
    animate-under-in2 
    scale-60        
  "
/>
<img
  src="/Home/All-right.webp"
  alt="materials"
  className="
    pointer-events-none select-none
    absolute 
    bottom-10
    -right-1/4           
    translate-x-0      
    w-auto            
    max-w-none      
    h-[460px] sm:h-[500px] 
    object-contain 
    object-right-bottom 
    z-[1] 
    animate-under-in2
    scale-60  
  "
/>






          {/* Content */}
          <div className="relative z-10 flex h-full items-start pt-40 md:pt-0 md:items-center justify-center px-6">
            <div className="text-center text-white">
              <h1 className="text-[56px] font-extrabold leading-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                อรุณลิงก์
              </h1>

              <p className="mt-6 text-[16px] leading-7 text-white/95">
                แพลตฟอร์มสำหรับงานโครงสร้าง
                <br />
                ที่คัดเลือกจากประสบการณ์ทำงานจริง
                <br />
                รวมช่างมืออาชีพมากกว่า 40 ปีในวงการก่อสร้าง
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <button className="rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-[#1891CD] shadow-sm transition hover:bg-white/90">
                  สมัครสมาชิก
                </button>

                <button className="rounded-xl bg-white/25 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/30">
                  สมัครพาร์ทเนอร์
                </button>
              </div>
            </div>
          </div>

<img
  src="/Home/Wall.png"
  alt="under"
  className="
    pointer-events-none select-none
    absolute left-0 right-0 bottom-0
    w-full h-[200px]
    object-cover
    z-[2]
    animate-under-in
  "
/>

        </div>

        {/* ===================== DESKTOP (md+) ===================== */}
        <div className="relative hidden w-full overflow-hidden md:block md:h-[820px] lg:h-[820px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/Home/bg.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="pointer-events-none absolute inset-0  bg-gradient-to-r from-[#1891CD]/60 to-[#1891CD]/50" />

          <img
            src="/Home/All-left.webp"
            alt="materials"
            className="  lg:scale-65 md:scale-75 pointer-events-none select-none absolute lg:inset lg:h-265
            md:h-220 w-full object-contain  object-bottom-left animate-under-in2 md:-bottom-30 md:-left-20  lg:-left-10 lg:-bottom-30
             w-[600px] lg:w-[800px] h-auto left-0 -translate-x-[20%] lg:-translate-x-[13%]"
          />
          <img
  src="/Home/All-right.webp"
  alt="materials"
  className="
    pointer-events-none select-none absolute z-[1] animate-under-in2
    right-0 bottom-0 md:-bottom-10 
   w-[600px] lg:w-[800px] h-auto lg:h-240 md:h-250
    object-contain object-bottom-right
     
    translate-x-[5%] lg:translate-x-[13%]
    md:translate-x-[25%]

    md:scale-75 lg:scale-75
  "
/>

          <div className="relative z-10 flex h-full items-center justify-center ">
            <div className="text-center text-white">
              <h1 className="text-[56px] font-extrabold leading-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)] md:text-[72px]">
                อรุณลิงก์
              </h1>

              <p className="mt-6 text-[18px] leading-8 text-white/95 md:text-[20px] ">
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

         <div 
  className="
    pointer-events-none select-none 
    absolute left-0 right-0 bottom-0 
    w-full h-[200px] 
    z-[1] 
    animate-under-in
  "
  style={{
    backgroundImage: "url(/Home/Wall.png)",
    backgroundRepeat: "repeat-x", /* ให้รูปต่อกันในแนวนอน */
    backgroundPosition: "bottom center",
    backgroundSize: "contain", /* หรือใช้ความสูงคงที่เพื่อให้ขนาดรูปไม่เปลี่ยนตามความกว้างจอ */
  }}
/>
        </div>
      </div>
    </section>
  );
}
