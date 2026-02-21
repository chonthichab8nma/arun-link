// Customer.tsx
import React from "react";

type Review = {
  name: string;
  role: string;
  rating: number; // 0-5
  date: string;
  message: string;
   avatar: string;
   Area: string;
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
        "จ้างช่างปูคอบเบิลสโตนสีเทารอบบ้าน ตัวงานเป็นสีเทาเรียบ ๆ ไม่มีลวดลาย แต่พอปูแล้วดูสะอาดตาและเป็นระเบียบดี ผิวงานค่อนข้างเรียบร้อย ขนาดสม่ำเสมอ ทำให้ช่างปูง่าย ",
      avatar:"/Customer/Avatar1.png",
      Area:"/Customer/Area1.png",
    },
    {
      name: "คุณพิม (ดูแลแม่ที่บ้าน)",
      role: "บุคคลทั่วไป",
      rating: 5,
      date: "18 ม.ค.",
      message:
        "จ้างช่างทำรั้วรอบบ้าน ช่างแนะนำของ Arun Link งานเสาตรง แข็งแรง ผิวเรียบร้อย ติดตั้งแล้วแนวสวย ไม่ต้องแก้หลายรอบ โดยรวมคุณภาพเหมาะกับราคา พอใจ..",
        avatar:"/Customer/Avatar2.png",
        Area:"/Customer/Area2.png",
    },
    {
      name: "ร้านรุ่งเรืองวัสดุก่อสร้าง",
      role: "ร้านค้า",
      rating: 5,
      date: "14 ม.ค.",
      message:
        "เอามาทำขอบทางเดินกับแบ่งพื้นที่รอบบ้าน ขนาดสม่ำเสมอ เรียงแล้วแนวตรง ดูเรียบร้อย เนื้อปูนแน่นดี งานออกมาดูสะอาดตา คุ้มค่ากับงบครับ",
        avatar:"/Customer/Avatar3.png",
        Area:"/Customer/Area3.png",
    },
  ];

  return (
    <section className="bg-white py-20 lg:mb-0">
      <div className="mx-auto max-w-7xl ">
        {/* Title */}
        <h2 className="text-center text-[36px] font-bold  tracking-tight text-slate-900">
          สิ่งที่ลูกค้าพูดถึงเรา
        </h2>

        {/* Cards */}
        <div className="mt-14  h-62.5 h-auto gap-[16px] snap-x snap-mandatory flex overflow-x-auto pb-2  pl-8 pr-8
        lg:grid lg:grid-cols-3 lg:gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          ">
  {reviews.map((r, idx) => (
    <article
      key={idx}
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:w-full md:min-w-lg lg:min-w-0 min-w-sm"
    >
      <img 
        src={r.Area}
        alt={r.name}
        className="mb-3"/>
      {/* ส่วนหัว: Avatar + ชื่อ/ตำแหน่ง */}
      <div className="flex items-center gap-2">
        <img 
          src={r.avatar} 
          alt={r.name} 
          className="h-6 w-6 rounded-full object-cover bg-slate-100" 
        />
        <div className="overflow-hidden">
          <h3 className="text-[16px] font-bold text-slate-900 truncate">
            {r.name}
          </h3>
        </div>
      </div>

      {/* ส่วน Rating & Date */}
      <div className="mt-[16px] flex items-center gap-[8px]">
        <RatingRow rating={r.rating} />
        <span className="text-slate-300">•</span>
        <span className="text-sm text-slate-400">{r.date}</span>
      </div>

      {/* ส่วน Message */}
      <p className="mt-[16px] text-[14px] leading-7 text-slate-900 line-clamp-3 text-wrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
        {r.message}
      </p>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}
