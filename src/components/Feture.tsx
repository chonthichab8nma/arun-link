export default function Feture() {
  const items = [
    {
      title: "เข้าถึงวัสดุที่เหมาะกับงานจริง",
      desc: "วัสดุก่อสร้างที่ผ่านการคัดเลือก พร้อมราคาเหมาะสมกับงานโครงสร้าง",
      img: "/Feature/Feature1.png",
    },
    {
      title: "วางแผนงานได้ชัดเจนขึ้น",
      desc: "ลดความล่าช้าในการจัดหาวัสดุ ทำให้การก่อสร้างเป็นไปตามแผน",
      img: "/Feature/Feature2.png",
    },
    {
      title: "เลือกช่างที่เชี่ยวชาญเฉพาะทาง",
      desc: "ช่างและผู้รับเหมาที่มีประสบการณ์ตรง พร้อมงบประมาณที่ควบคุมได้",
      img: "/Feature/Feature3.png",
    },
    {
      title: "ควบคุมเวลาและความคืบหน้าได้",
      desc: "ติดตามงานและกำหนดกรอบเวลา ให้โครงการเดินหน้าอย่างมั่นใจ",
      img: "/Feature/Feature4.png",
    },
  ];

  return (
    <section className="px-20 py-16 bg-white">
      <header className="text-center">
        <h2 className="text-3xl font-bold mb-4">ฟีเจอร์ที่ช่วยให้การทำงานง่ายขึ้น</h2>
        <p className="text-[#6B757A] max-w-3xl mx-auto">
          ฟีเจอร์ที่ออกแบบมาเพื่อเจ้าของบ้าน ช่าง และพาร์ทเนอร์
          ครอบคลุมตั้งแต่วัสดุ การเลือกช่าง ไปจนถึงการจัดการงานก่อสร้าง
        </p>
      </header>

      <h3 className="mt-16 mb-10 text-center text-[2.813rem] font-bold text-[#6B757A]">
        เจ้าของบ้านได้อะไร
      </h3>

      <div className="grid grid-cols-4 gap-[24px] mx-20">
        {items.map((it, i) => (
          <div
            key={i}
            className="h-[450px] rounded-[28px] border border-slate-200 bg-[#EBEBEB] overflow-hidden flex flex-col"
          >
            {/* ข้อความด้านบน */}
            <div className="px-8 pt-8">
              <h4 className="text-[22px] font-bold leading-snug text-slate-900">
                {it.title}
              </h4>
              <p className="mt-4 text-[16px] leading-relaxed text-[#6B757A]">
                {it.desc}
              </p>
            </div>

            {/* รูปด้านล่าง: สูงเต็มพื้นที่ที่เหลือ */}
            <div className=" flex-1 px-8 pb-8">
              <img
                src={it.img}
                alt={it.title}
                className="h-full w-full object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
