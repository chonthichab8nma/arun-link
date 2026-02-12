import React from "react";

export default function Customer() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div
          className="group relative overflow-visible rounded-[28px] px-8 py-10 md:px-14 md:py-14"
          style={{
            background:
              "linear-gradient(90deg, rgba(24,145,205,1) 40%, rgba(24,145,205,1) 64%, rgba(24,145,205,1) 80%, rgba(24,145,205,1) 100%)",
          }}
        >
          {/* ลายพื้นหลังจาง ๆ (optional) */}
          <div className="pointer-events-none absolute inset-0 opacity-15 rounded-[28px] overflow-hidden">
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/30 blur-2xl" />
            <div className="absolute left-40 top-10 h-72 w-72 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-black/10 blur-2xl" />
          </div>

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
                  shadow-sm transition hover:bg-white/90
                "
              >
                สมัครพาร์ทเนอร์
              </button>
            </div>

            {/* spacer */}
            <div className="relative min-h-[280px] lg:min-h-[360px]" />

            {/* IMAGE: ปกติ = scale-100, hover = ขยาย */}
            <img
              src="/Partner/Menphone.png"
              alt="Menphone"
              className="
                absolute right-[-100px] -top-[203px]
                h-[520px] lg:h-[620px] w-auto object-contain
                pointer-events-none select-none
                drop-shadow-[0_18px_35px_rgba(0,0,0,0.25)]
                transform-gpu transition-transform duration-700 ease-out
                origin-bottom
                scale-100
                group-hover:scale-[1.05]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
