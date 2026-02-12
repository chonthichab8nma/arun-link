import React from "react";

export default function Customer() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-6">
       <div
  className="group relative overflow-visible rounded-[28px] px-8 py-10 md:px-14 md:py-14"
  style={{
    backgroundImage: "url(/Partner/Background1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

<div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-r from-[#1891CD]/60 to-[#1891CD]/40" />






          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <div className="text-white">
              <h1 className="text-[34px] font-extrabold leading-tight md:text-[40px]">
                อยากรับงานเพิ่ม
                <br />
                แบบจัดการง่ายขึ้นไหม?
              </h1>

              <p className="mt-5 max-w-[520px] text-[16px] leading-7 text-white/90">
                ArunLink เปิดโอกาสให้คุณเข้าร่วมเป็นพาร์ทเนอร์
                <br />
                แสดงผลงานจริง เข้าถึงลูกค้าในพื้นที่
              </p>

              <p className="mt-5 max-w-[520px] text-[16px] leading-7 text-white/90">
                พร้อมระบบจัดการงานและแจ้งเตือนที่เข้าใจง่าย
                <br />
                ทุกอย่างอยู่ที่นี่เดียว
              </p>

              <button
                className="
                  mt-8 inline-flex items-center justify-center
                  rounded-xl bg-white px-6 py-3
                  text-[14px] font-semibold text-[#1891CD]
                  shadow-sm transition hover:bg-[#D3EDF8] cursor-pointer
                "
              >
                สมัครพาร์ทเนอร์
              </button>
            </div>

            {/* spacer */}
            <div className="relative min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[360px]" />

{/* IMAGE */}
<img
  src="/Partner/Menphone.png"
  alt="Menphone"
  className="
    absolute pointer-events-none select-none
    w-auto object-contain
    drop-shadow-[0_18px_35px_rgba(0,0,0,0.25)]
    transform-gpu transition-transform duration-700 ease-out origin-bottom
    scale-100 group-hover:scale-[1.05]


    /* ===== Phone (sm) ===== */
    bottom-[-190px] right-[-24px]
    h-[520px] sm:h-[600px] md:h-[720px]

    /* ===== iPad (md) ===== */
    md:right-[-50px] md:bottom-[-138px] md:h-[460px]

    /* ===== Laptop+ (lg) : ใช้ของเดิม ไม่เปลี่ยนดีไซน์ ===== */
    lg:right-[-100px] lg:bottom-auto lg:-top-[203px] lg:h-[620px]
  "
/>
          </div>
        </div>
      </div>
    </section>
  );
}
