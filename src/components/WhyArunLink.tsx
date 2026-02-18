type ServiceCard = {
  title: string;
  desc1: string;
  desc2: string;
  image: string;
};

type PainPointCard = {
  title: string;
  lines: string[];
  image: string;
  imageClass: string;
  watermark: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: "งานโครงสร้าง",
    desc1: "งานฐานราก กำแพงกันดิน",
    desc2: "และโครงสร้างหลัก",
    image: "/WhyArunLink/asset/Asset5.webp",
  },
  {
    title: "งานซ่อมแซม",
    desc1: "แก้ไข ปรับปรุง",
    desc2: "ดูแลโครงสร้างและระบบเดิม",
    image: "/WhyArunLink/asset/Asset6.webp",
  },
  {
    title: "งานต่อเติม",
    desc1: "ต่อเติมพื้นที่",
    desc2: "เพิ่มฟังก์ชันการใช้งาน",
    image: "/WhyArunLink/asset/Asset7.webp",
  },
];

const painPointCards: PainPointCard[] = [
  {
    title: "ปัญหาด้านราคาและต้นทุน",
    lines: [
      "ต้นทุนสูง คุมงบยาก จึงต้องวางแผนงาน",
      "และจัดสรรกำลังคนให้เหมาะกับงบ",
      "ที่ควบคุมได้",
    ],
    image: "/WhyArunLink/asset/Asset8.webp",
    imageClass:
      "left-0 right-0 bottom-0 w-full max-w-none md:w-full lg:w-full",

    watermark: "/WhyArunLink/watermark/1.webp",
  },
  {
    title: "ปัญหาด้านห่วงโซ่อุปทาน",
    lines: [
      "กระทบกำหนดการ ต้องปรับตาราง",
      "และเสริมทีมทันทีเมื่อหน้างานพร้อม",
    ],
    image: "/WhyArunLink/asset/Asset9.webp",
    imageClass:
      "w-[120%] max-w-[560px] rotate-[-3deg] -right-40 -bottom-20 md:w-[120%] md:-right-50 md:-bottom-30 md:rotate-[-2deg] lg:w-[74%] lg:-right-20 lg:-bottom-25",
    watermark: "/WhyArunLink/watermark/2.webp",
  },
  {
    title: "ปัญหาด้านช่างผู้รับเหมา",
    lines: [
      "หาคนยาก คุณภาพไม่สม่ำเสมอ",
      "ต้องเข้าถึงแรงงานที่มีทักษะ",
      "ได้รวดเร็วและตรวจสอบได้",
    ],
    image: "/WhyArunLink/asset/Asset10.webp",
    imageClass: "w-[150%] max-w-[840px] -right-53 -bottom-5 lg:-right-30 lg:-bottom-5 lg:w-[100%] md:w-[140%] md:bottom-1",
    watermark: "/WhyArunLink/watermark/3.webp",
  },
  {
    title: "การขาดแคลนแรงงาน",
    lines: [
      "แรงงานไม่เพียงพอ งานเสี่ยงล่าช้า",
      "มีแรงงานเสริมพร้อมหน้างาน",
      "ช่วยให้งานเดินตามแผน",
    ],
    image: "/WhyArunLink/asset/Asset11.webp",
    imageClass: "w-[78%] max-w-[620px] -right-6 -bottom-1 md:w-[100%] md:-right-30 md:-bottom-2 lg:w-[72%] lg:-right-8 lg:-bottom-3",
    watermark: "/WhyArunLink/watermark/4.webp",
  },
];

export default function WhyArunLink() {
  return (
    <section className="relative overflow-hidden bg-white mt-8 md:mt-5 lg:mt-10">
      <div className="relative isolate overflow-hidden">
        <img
          src="/WhyArunLink/bg/bg1.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain object-center opacity-[0.1] grayscale"
        />
        <img
          src="/WhyArunLink/asset/Asset1.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-15 -top-8 w-[58vw] max-w-155 md:-left-20 md:-top-6 md:w-[42vw] lg:-left-20 lg:-top-10 lg:w-[34vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset2.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-8 w-[54vw] max-w-150 md:-right-20 md:-top-6 md:w-[40vw] lg:-right-10 lg:-top-10 lg:w-[31vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset3.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-[56vw] max-w-130 md:-bottom-10 md:left-0 md:w-[48vw] lg:-bottom-7 lg:left-0 lg:w-[36vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset4.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-2 -right-5 w-[56vw] max-w-125 md:-bottom-2 md:-right-5 md:w-[45vw] lg:-bottom-4 lg:right-0 lg:w-[36vw]"
        />

        <div className="relative z-10 mx-auto flex min-h-245 max-w-7xl flex-col px-5 pt-76 pb-20 text-center md:min-h-215 md:px-20 md:pt-64 lg:min-h-254 lg:pt-76">
          <div className="mx-auto max-w-5xl">
            <h2 className="leading-[1.1] tracking-[-0.01em] text-[#0f1116] FeatuesText text-[42px] md:text-h1">
              งานโครงสร้างที่ดี
            </h2>
            <h3 className="mt-2 FeatuesText leading-normal tracking-[-0.01em] text-[#1f93ce] text-[42px] md:text-h1">
              คือหัวใจของทุกพื้นที่
              <br />
              ที่ อรุณลิงก์ ใส่ใจ
            </h3>

            <p className="mx-auto mt-10 max-w-5xl leading-[1.45] text-[#707a82] text-[18px] md:text-[24px]">
              หลายคนเริ่มงานก่อสร้าง โดยเฉพาะงานโครงสร้างอย่างกำแพงกันดิน
            </p>
            <p className="mx-auto mt-8 max-w-4xl leading-normal text-[#707a82] text-[18px] md:text-[24px]">
              โดยมีข้อมูลไม่ครบถ้วนในการเลือกวัสดุหรือแนวทางก่อสร้าง
              ทั้งที่งานประเภทเหล่านี้ต้องอาศัยความเชี่ยวชาญเฉพาะทาง
              เพื่อให้แข็งแรง ปลอดภัย และใช้งานได้ในระยะยาว
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-16 md:mt-20 lg:mt-5 max-w-7xl px-5 pb-20 pt-10 md:px-20 md:pb-28 md:pt-14 lg:pb-36 lg:pt-20">
        <h2 className="lg:text-[36px]  text-center text-3xl font-bold leading-normal tracking-[-0.01em] text-[#14161b] md:text-h1">
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
                border border-black/5
                p-5 md:p-6
                transform-gpu transition-all duration-500 ease-out
                bg-[linear-gradient(155deg,#ffffff_0%,#ffffff_58%,#dff2ff_100%)]
                hover:bg-[linear-gradient(155deg,#ffffff_0%,#ffffff_55%,#d9efff_100%)]
                ${idx === 2 ? "md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0" : ""}`}
            >
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

        <div className="nail-corners relative mt-16 overflow-visible border border-[#d6d6d6] box-border md:mt-30">
          <div className="w-full p-2 sm:p-3 md:p-5 lg:p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:gap-6">
              {painPointCards.map((card) => (
                <article
                  key={card.title}
                  className="group relative flex min-h-80 w-full flex-col justify-between overflow-hidden rounded-[20px] bg-[#F0F0F0] p-5 transition-colors duration-300 hover:bg-[#CDCDCD] sm:min-h-86 sm:p-6 md:p-8"
                >
                  <img
                    src={card.watermark}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
                  />
                  <div className="relative z-10 w-full pr-[24%] sm:pr-[28%] md:pr-[20%] lg:pr-[10%]">
                    <h3 className="text-xl font-bold leading-[1.2] text-[#17191f]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.45] text-[#5f6b73]">
                      {card.lines.join(" ")}
                    </p>
                  </div>

                  <img
                    src={card.image}
                    alt=""
                    aria-hidden="true"
                    className={`pointer-events-none absolute transition-transform duration-500 ease-out group-hover:scale-110 ${card.imageClass}`}
                  />
                </article>
              ))}
            </div>

            <article className="group relative mt-4 h-150 w-full overflow-hidden rounded-[20px] bg-[#DAEDF7] px-6 py-8 transition-colors duration-300 hover:bg-[#BCDDEE] md:mt-6 md:h-206.25 md:px-8 md:py-12 lg:flex lg:h-126 lg:items-center">
              <img
                src="/WhyArunLink/watermark/5.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-1000 mix-blend-normal"
              />
              <div className="relative z-10 w-full lg:pr-[58%]">
                <h3 className="text-3xl font-bold leading-normal text-[#17191f]">
                  อรุณลิงก์ช่วยให้คุณ
                  <br />
                  จัดการงานก่อสร้างได้ดีขึ้น
                </h3>
                <div className="mt-4 space-y-1 text-[16px] leading-[1.45] text-[#5f6b73]">
                  <p>เราช่วยเชื่อมต่อวัสดุก่อสร้างที่เหมาะสม</p>
                  <p>กับช่างและผู้รับเหมาที่มีประสบการณ์</p>
                  <p>เพื่อลดความซับซ้อนของงาน</p>
                  <p>และเพิ่มประสิทธิภาพในทุกขั้นตอน</p>
                </div>
              </div>

              <img
                src="/WhyArunLink/asset/Asset12.webp"
                alt=""
                aria-hidden="true"
                className="
                pointer-events-none absolute bottom-0
                -right-10 w-[300%]
                transition-transform duration-500 ease-out group-hover:scale-110
                md:-right-12  md:w-[120%]
                lg:-right-16 lg:w-[54%] lg:max-w-225"
  
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
