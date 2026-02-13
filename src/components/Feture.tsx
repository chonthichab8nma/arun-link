export default function Feture() {
  const items1 = [
    {
      title: "เข้าถึงวัสดุที่เหมาะกับงานจริง",
      desc: "วัสดุก่อสร้างที่ผ่านการคัดเลือกพร้อมราคาเหมาะสมกับงานโครงสร้าง",
      img: "/Feature/Image5.webp",
    },
    {
      title: "วางแผนงานได้ชัดเจนขึ้น",
      desc: "ลดความล่าช้าในการจัดหาวัสดุทำให้การก่อสร้างเป็นไปตามแผน",
      img: "/Feature/Image6.webp",
    },
    {
      title: "เลือกช่างที่เชี่ยวชาญเฉพาะทาง",
      desc: "ช่างและผู้รับเหมาที่มีประสบการณ์ตรงพร้อมงบประมาณที่ควบคุมได้",
      img: "/Feature/Image7.webp",
    },
    {
      title: "ควบคุมเวลาและความคืบหน้าได้",
      desc: "ติดตามงานและกำหนดกรอบเวลาให้โครงการเดินหน้าอย่างมั่นใจ",
      img: "/Feature/Image8.webp",
    },
  ];

  const items2 = [
    {
      title: "ลดความเสี่ยงจากต้นทุนหน้างาน",
      desc: "ไม่ต้องแบกรับความไม่แน่นอนด้านวัสดุและการจัดหา",
      img: "/Feature/Image1.webp"
    },
     {
      title: "ลดความเสี่ยงจากต้นทุนหน้างาน",
      desc: "ไม่ต้องแบกรับความไม่แน่นอนด้านวัสดุและการจัดหา",
      img: "/Feature/Image2.webp"
    },
     {
      title: "ลดความเสี่ยงจากต้นทุนหน้างาน",
      desc: "ไม่ต้องแบกรับความไม่แน่นอนด้านวัสดุและการจัดหา",
      img: "/Feature/Image3.webp"
    },
     {
      title: "ลดความเสี่ยงจากต้นทุนหน้างาน",
      desc: "ไม่ต้องแบกรับความไม่แน่นอนด้านวัสดุและการจัดหา",
      img: "/Feature/Image4.webp"
    },
  ]
  const items3 = [
    {
      title: "เข้าถึงลูกค้าในพื้นที่ทันที",
      desc: "เชื่อมต่อกับความต้องการจริงของงานก่อสร้างในพื้นที่",
      img: "/Feature/Image9.webp"
    },
     {
      title: "วางแผนสินค้าได้ตรงจุด",
      desc: "บริหารสต็อกให้สอดคล้องกับลักษณะงานก่อสร้าง",
      img: "/Feature/Image10.webp"
    },
     {
      title: "แข่งขันด้วยต้นทุนที่เหมาะสม",
      desc: "นำเสนอราคาและบริการที่สอดคล้องกับตลาดจริง",
      img: "/Feature/Image11.webp"
    },
     {
      title: "สร้างความสัมพันธ์ระยะยาวกับลูกค้า",
      desc: "เพิ่มโอกาสการซื้อซ้ำและการใช้งานต่อเนื่อง",
      img: "/Feature/Image12.webp"
    },
  ]

  return (
    <section className="bg-white py-16 max-w-7xl mx-auto">
      <div className="px-5 md:px-20">
        <header className="text-center">
          <h2 className="text-[36px] font-bold mb-4">ฟีเจอร์ที่ช่วยให้การทำงานง่ายขึ้น</h2>
          <p className="text-[#6B757A] text-[16px]">
            ฟีเจอร์ที่ออกแบบมาเพื่อเจ้าของบ้าน ช่าง และพาร์ทเนอร์ ครอบคลุมตั้งแต่วัสดุ การเลือกช่าง ไปจนถึงการจัดการงานก่อสร้าง
          </p>
        </header>

        <h3 className="mt-10 mb-10 text-center text-[30px] font-bold text-[#6B757A]">
          เจ้าของบ้านได้อะไร
        </h3>

        {/*  <= md: เลื่อนข้าง / >= md: grid 4 */}
        <div
          className="
            md:flex  md:gap-6 lg:grid lg:grid-cols-4
            flex gap-6 overflow-x-auto md:overflow-x-auto
            snap-x snap-mandatory 
            pb-4
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {items1.map((it, i) => (
            <div
              key={i}
              className="
                group relative h-[450px] 
                rounded-[28px] border border-slate-200
                bg-[#FFFFFF]
                overflow-hidden
                snap-start
                shrink-0 w-[85%] sm:w-[60%] md:w-auto
              "
            >
              <div className="px-8 pt-10 relative z-10">
                <h4 className="text-[22px] font-bold leading-tight text-slate-900">
                  {it.title}
                </h4>
                <p className="mt-4 text-[16px] leading-relaxed text-[#6B757A]">
                  {it.desc}
                </p>
              </div>
          <div className="absolute left-0 right-0 bottom-0 inset-0 h-full overflow-hidden">
            <img
              src={it.img}
              alt={it.title}
              className="
                w-full h-full
                object-contain object-bottom
                transition-transform duration-700 ease-out
                group-hover:scale-105 origin-bottom hover:bg-[#EFF9FF]
                
              "
            />
          </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 my-5"></div>

        <h3 className="mt-10 mb-10 text-center text-[30px] font-bold text-[#6B757A]">
          ช่างได้อะไร
        </h3>
        <div
          className="
            md:flex  md:gap-6 lg:grid lg:grid-cols-4
            flex gap-6 overflow-x-auto md:overflow-x-auto
            snap-x snap-mandatory
            pb-4
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          "
         >
          {items2.map((it, i) => (
            <div
              key={i}
              className="
                group relative h-[450px] 
                rounded-[28px] border border-slate-200
                bg-[#FFFFFF]
                overflow-hidden
                snap-start
                shrink-0 w-[85%] sm:w-[60%] md:w-auto
              "
            >
              <div className="px-8 pt-10 relative z-10">
                <h4 className="text-[22px] font-bold leading-tight text-slate-900">
                  {it.title}
                </h4>
                <p className="mt-4 text-[16px] leading-relaxed text-[#6B757A]">
                  {it.desc}
                </p>
              </div>
          <div className="absolute left-0 right-0 bottom-0 inset-0 h-full overflow-hidden">
            <img
              src={it.img}
              alt={it.title}
              className="
                w-full h-full
                object-contain object-bottom
                transition-transform duration-700 ease-out
                group-hover:scale-105 origin-bottom hover:bg-[#EFF9FF]
                
              "
            />
          </div>
            </div>
          ))}
        </div>

         <div className="border-t border-slate-200 my-5"></div>

        <h3 className="mt-10 mb-10 text-center text-[30px] font-bold text-[#6B757A]">
          พาร์ทเนอร์ได้อะไร
        </h3>
        <div
          className="
            md:flex md:gap-6 lg:grid lg:grid-cols-4
            flex gap-6 overflow-x-auto md:overflow-x-auto
            snap-x snap-mandatory
            pb-4
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
          "
         >
          {items3.map((it, i) => (
            <div
              key={i}
              className="
                group relative h-[450px] 
                rounded-[28px] border border-slate-200
                bg-[#FFFFFF]
                overflow-hidden
                snap-start
                shrink-0 w-[85%] sm:w-[60%] md:w-auto
              "
            >
              <div className="px-8 pt-10 relative z-10">
                <h4 className="text-[22px] font-bold leading-tight text-slate-900">
                  {it.title}
                </h4>
                <p className="mt-4 text-[16px] leading-relaxed text-[#6B757A]">
                  {it.desc}
                </p>
              </div>
          <div className="absolute left-0 right-0 bottom-0 inset-0 h-full overflow-hidden">
            <img
              src={it.img}
              alt={it.title}
              className="
                w-full h-full
                object-contain object-bottom
                transition-transform duration-700 ease-out
                group-hover:scale-105 origin-bottom hover:bg-[#EFF9FF]
              "
            />
          </div>
            </div>
          ))}
        </div>
        
      </div>
      
    </section>
  );
}
