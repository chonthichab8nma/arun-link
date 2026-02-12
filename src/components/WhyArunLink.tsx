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
    image: "/WhyArunLink/asset/Asset6.png",
  },
  {
    title: "งานซ่อมแซม",
    desc1: "แก้ไข ปรับปรุง",
    desc2: "ดูแลโครงสร้างและระบบเดิม",
    image: "/WhyArunLink/asset/Asset5.png",
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
    <section className="relative overflow-hidden bg-[#f2f2f2]">
      <div className="relative isolate overflow-hidden">
        <img
          src="/WhyArunLink/bg/bg1.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.09]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] blur-2xl
bg-[radial-gradient(140%_100%_at_center,rgba(76,196,255,0.22)_0%,rgba(76,196,255,0.12)_40%,rgba(76,196,255,0.05)_65%,rgba(76,196,255,0)_100%)]"
        />

        <img
          src="/WhyArunLink/asset/Asset1.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-2 w-[60vw] max-w-[620px] md:-left-32 md:top-0 md:w-[42vw] lg:-left-40 lg:-top-4 lg:w-[36vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset2.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-2 w-[56vw] max-w-[600px] md:-right-28 md:top-0 md:w-[40vw] lg:-right-36 lg:-top-2 lg:w-[33vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset3.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-[56vw] max-w-[560px] md:-bottom-24 md:-left-32 md:w-[38vw] lg:-bottom-28 lg:-left-40 lg:w-[30vw]"
        />
        <img
          src="/WhyArunLink/asset/Asset4.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 w-[50vw] max-w-[520px] md:-bottom-20 md:-right-20 md:w-[32vw] lg:-bottom-24 lg:-right-28 lg:w-[28vw]"
        />

        <div className="relative z-10 mx-auto flex min-h-[1040px] max-w-7xl flex-col px-5 pt-32 pb-22 text-center md:min-h-[840px] md:px-8 md:pt-40 lg:min-h-[930px] lg:pt-56">
          <div className="mx-auto max-w-5xl">
            <h2 className="leading-[1.1] tracking-[-0.01em] text-[#0f1116] FeatuesText text-[42px] md:text-[3.375rem]">
              งานโครงสร้างที่ดี
            </h2>
            <h3 className="mt-2 FeatuesText leading-[1.1] tracking-[-0.01em] text-[#1f93ce] text-[42px] md:text-[3.375rem]">
              ทำไมต้องที่ อรุณลิงก์
            </h3>

            <p className="mx-auto mt-12 max-w-5xl leading-[1.45] text-[#6b757d] text-[18px] md:text-[24px]">
              หลายคนเริ่มงานก่อสร้าง โดยเฉพาะงานโครงสร้างอย่างกำแพงกันดิน
            </p>
            <p className="mx-auto mt-8 max-w-5xl leading-[1.4] text-[#6b757d] text-[18px] md:text-[24px]">
              โดยมีข้อมูลไม่ครบถ้วนในการเลือกวัสดุหรือแนวทางก่อสร้าง
              ทั้งที่งานประเภทเหล่านี้ต้องอาศัยความเชี่ยวชาญเฉพาะทาง
              เพื่อให้แข็งแรง ปลอดภัย และใช้งานได้ในระยะยาว
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-8 max-w-[1480px] px-6 pb-24 pt-8 md:px-8 md:pb-28 lg:px-14 lg:pt-12">
        <h2 className="text-center text-[3rem] font-bold leading-[1.15] tracking-[-0.01em] text-[#14161b] md:text-[3.5rem] lg:text-[4.6rem]">
          เราคัดเฉพาะงาน
          <br />
          ที่ต้องใช้ความเชี่ยวชาญจริง
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card, idx) => (
            <article
              key={card.title}
              className={`relative min-h-[360px] overflow-hidden rounded-[22px] border border-[#d8d8d8] bg-[#f4f4f4] p-5 md:min-h-[380px] md:p-6 lg:min-h-[350px] ${
                idx === 2
                  ? "md:col-span-2 md:mx-auto md:w-[78%] lg:col-span-1 lg:mx-0 lg:w-auto"
                  : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[156px] bg-[radial-gradient(ellipse_at_center,rgba(76,196,255,0.2)_0%,rgba(76,196,255,0)_100%)]" />
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className={`pointer-events-none absolute bottom-0 right-0 z-10 ${
                  idx === 0
                    ? "w-[58%] max-w-[270px] md:w-[56%]"
                    : idx === 1
                      ? "w-[58%] max-w-[305px] md:w-[56%]"
                      : "w-[63%] max-w-[335px] md:w-[60%]"
                }`}
              />

              <div className="relative z-20 max-w-[58%]">
                <h3 className="text-[2.9rem] font-bold leading-[1.2] text-[#17191f] md:text-[3rem]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[1.8rem] leading-[1.45] text-[#6b757d] md:text-[1.8rem]">
                  {card.desc1}
                </p>
                <p className="text-[1.8rem] leading-[1.45] text-[#6b757d] md:text-[1.8rem]">
                  {card.desc2}
                </p>
              </div>

              <a
                href="#contact"
                className="absolute bottom-5 left-5 z-20 text-[1.95rem] font-medium text-[#1183c8] transition hover:text-[#0d6da8] md:bottom-6 md:left-6 md:text-[1.9rem]"
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
