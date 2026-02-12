type ServiceCard = {
  title: string;
  desc1: string;
  desc2: string;
  image: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: "งานโครงสร้าง",
    desc1: "งานฐานราก กำแพงกันดิน",
    desc2: "และโครงสร้างหลัก",
    image: "/WhyArunLink/asset/Asset5.png",
  },
  {
    title: "งานซ่อมแซม",
    desc1: "แก้ไข ปรับปรุง",
    desc2: "ดูแลโครงสร้างและระบบเดิม",
    image: "/WhyArunLink/asset/Asset6.png",
  },
  {
    title: "งานต่อเติม",
    desc1: "ต่อเติมพื้นที่",
    desc2: "เพิ่มฟังก์ชันการใช้งาน",
    image: "/WhyArunLink/asset/Asset7.png",
  },
];

export default function WhyArunLink() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative isolate overflow-hidden">
        <img
          src="/WhyArunLink/bg/bg1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.1]"
        />
        <img
          src="/WhyArunLink/asset/Asset1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-8 w-[58vw] max-w-155 md:-left-28 md:top-6 md:w-[42vw] lg:-left-32 lg:top-10 lg:w-[34vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset2.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-8 w-[54vw] max-w-150 md:-right-24 md:top-6 md:w-[40vw] lg:-right-28 lg:top-10 lg:w-[31vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset3.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 w-[52vw] max-w-130 md:-bottom-32 md:-left-24 md:w-[36vw] lg:-bottom-36 lg:-left-24 lg:w-[26vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset4.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -right-12 w-[46vw] max-w-125 md:-bottom-32 md:-right-16 md:w-[32vw] lg:-bottom-40 lg:-right-14 lg:w-[25vw]"
        />

        <div className="relative z-10 mx-auto flex min-h-245 max-w-7xl flex-col px-5 pt-52 pb-20 text-center md:min-h-215 md:px-8 md:pt-64 lg:min-h-254 lg:pt-60">
          <div className="mx-auto max-w-5xl">
            <h2 className="leading-[1.1] tracking-[-0.01em] text-[#0f1116] FeatuesText text-[42px] md:text-h1">
              งานโครงสร้างที่ดี
            </h2>
            <h3 className="mt-2 FeatuesText leading-[1.1] tracking-[-0.01em] text-[#1f93ce] text-[42px] md:text-h1">
              ทำไมต้องที่ อรุณลิงก์
            </h3>

            <p className="mx-auto mt-10 max-w-5xl leading-[1.45] text-[#707a82] text-[18px] md:text-[24px]">
              หลายคนเริ่มงานก่อสร้าง โดยเฉพาะงานโครงสร้างอย่างกำแพงกันดิน
            </p>
            <p className="mx-auto mt-8 max-w-4xl leading-[1.4] text-[#707a82] text-[18px] md:text-[24px]">
              โดยมีข้อมูลไม่ครบถ้วนในการเลือกวัสดุหรือแนวทางก่อสร้าง
              ทั้งที่งานประเภทเหล่านี้ต้องอาศัยความเชี่ยวชาญเฉพาะทาง
              เพื่อให้แข็งแรง ปลอดภัย และใช้งานได้ในระยะยาว
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-16 md:mt-20 lg:mt-28 max-w-7xl px-5 sm:px-6 md:px-10 lg:px-16 pb-20 md:pb-28 lg:pb-36 pt-10 md:pt-14 lg:pt-20">
        <h2 className="lg:text-[36px]  text-center text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-[#14161b] md:text-h1">
          เราคัดเฉพาะงาน
          <br />
          ที่ต้องใช้ความเชี่ยวชาญจริง
        </h2>

        <div
          className="mt-14 md:mt-16 lg:mt-20
                grid grid-cols-1 gap-y-4 gap-x-4
                sm:gap-y-8 sm:gap-x-8
                md:grid-cols-2 md:gap-y-4 md:gap-x-4
                lg:grid-cols-3 lg:gap-y-4 lg:gap-x-4"
        >
          {serviceCards.map((card, idx) => (
            <article
              key={card.title}
              className={`group relative mx-auto h-55.5 w-full max-w-95.5
                overflow-hidden rounded-[22px]
                border border-[#d8d8d8]
                p-5 md:p-6
                transform-gpu transition-all duration-500 ease-out
                hover:bg-[#eff9ff]
                ${idx === 2 ? "md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0" : ""}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(76,196,255,0.2)_0%,rgba(76,196,255,0.08)_45%,rgba(76,196,255,0)_78%)]" />
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute bottom-0 right-0 z-10
                  transform-gpu transition-transform duration-700 ease-out
                  origin-bottom
                  scale-100 group-hover:scale-[1.08]
                  ${
                    idx === 0
                      ? "w-[64%] max-w-83.75 md:w-[62%]"
                      : idx === 1
                        ? "w-[70%] max-w-90 md:w-[66%]"
                        : "w-[63%] max-w-83.75 md:w-[60%]"
                  }`}
              />

              <div className="relative z-20 max-w-[72%] md:max-w-[58%]">
                <h3 className="text-[24px] font-bold leading-[1.2] text-[#17191f]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[16px] leading-[1.45] text-[#6b757d]">
                  {card.desc1}
                </p>
                <p className="text-[16px] leading-[1.45] text-[#6b757d]">
                  {card.desc2}
                </p>
              </div>

              <a
                href="#contact"
                className="absolute bottom-5 left-5 z-20 text-[16px] font-medium text-[#1183c8] transition hover:text-[#0d6da8] md:bottom-6 md:left-6"
              >
                ดูเพิ่มเติม {">"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
