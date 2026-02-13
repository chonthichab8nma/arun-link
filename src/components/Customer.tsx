// Customer.tsx
import React from "react";

type Review = {
  name: string;
  role: string;
  rating: number; // 0-5
  date: string;
  message: string;
};

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${filled ? "text-amber-400" : "text-slate-200"}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.27l-5.18 3.05 1.64-5.81L3 9.24l6-.52L12 3l3 5.72 6 .52-4.46 5.27 1.64 5.81z" />
    </svg>
  );
}

function RatingRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}

export default function Customer() {
  const reviews: Review[] = [
    {
      name: "คุณน็อต เจ้าของบ้าน",
      role: "บุคคลทั่วไป",
      rating: 5,
      date: "21 ม.ค.",
      message:
        "หาเจอช่างดี ๆ ผ่านจรูณเลิศก็ จองง่าย ไม่ต้องโทรให้ยุ่ง รีวิวก็ช่วยตัดสินใจได้ งานบวกราคา สบายใจกว่าครั้งก่อน ๆ มากครับ",
    },
    {
      name: "คุณพิม (ดูแลแม่ที่บ้าน)",
      role: "บุคคลทั่วไป",
      rating: 5,
      date: "18 ม.ค.",
      message:
        "อยากหาช่างผู้หญิงที่ไว้ใจได้ แล้วก็เจอจากจรูณเลิศพอดี ใช้ง่ายมาก แชทได้ก่อนตัดสินใจ มีรีวิว ช่วยได้เยอะเลยค่ะ",
    },
    {
      name: "ร้านรุ่งเรืองวัสดุก่อสร้าง",
      role: "ร้านค้า",
      rating: 5,
      date: "14 ม.ค.",
      message:
        "เราแนะนำลูกค้าให้จองช่างผ่านจรูณเลิศได้เลย จบทุกช้างาน ไม่ต้องตอบซ้ำ ระบบก็ดูแลดี ลูกค้ากับช่างก็แฮปปี้ เราก็ขายของได้เพิ่มครับ",
    },
  ];

  return (
    <section className="bg-white py-20 md:max-w-2xl md:mx-auto lg:max-w-none lg:mx-auto  lg:mb-0 ">
     
        {/* Title */}
        <h2 className="text-center text-[36px] font-bold  tracking-tight text-slate-900">
          สิ่งที่ลูกค้าพูดถึงเรา
        </h2>

        {/* Cards */}
        <div className="mt-14 grid gap-[16px] md:flex lg:grid lg:grid-cols-3  lg:gap-4  px-4 md:px-4 max-w-7xl mx-auto h-auto
              md:overflow-x-auto md:pb-2 [scrollbar-width:none] snap-x snap-mandatory  [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden h-62.5 ">
          {reviews.map((r, idx) => (
            <article
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm  lg:w-full md:min-w-lg lg:min-w-0"
            >
              <div className="flex items-start justify-between gap-4 ">
                <div>
                  <h3 className="text-[16px] font-bold text-slate-900 truncate">{r.name}</h3>
                  <p className="mt-1 text-[13px] text-slate-500">{r.role}</p>
                </div>
              </div>

              <div className="mt-[16px] flex items-center gap-[8px]">
                <RatingRow rating={r.rating} />
                <span className="text-slate-300">•</span>
                <span className="text-sm text-slate-400">{r.date}</span>
              </div>

              <p className="mt-[16px] text-[14px] leading-7 text-slate-500 line-clamp-3  text-wrap overflow-hidden text-ellipsis
                [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                {r.message}
              </p>
            </article>
          ))}
        </div>

    </section>
  );
}
