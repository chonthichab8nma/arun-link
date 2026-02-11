export default function WhyArunLink() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#f4f4f4] py-20 md:min-h-[92vh] md:py-24">
      <img
        src="/WhyArunLink/bg/bg1.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover grayscale-70 opacity-[0.06]"
      />

      <img
        src="/WhyArunLink/asset/Asset1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-14 w-[34vw] max-w-[520px] min-w-[220px]"
      />
      <img
        src="/WhyArunLink/asset/Asset2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 w-[31vw] max-w-[500px] min-w-[210px]"
      />
      <img
        src="/WhyArunLink/asset/Asset3.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-[30vw] max-w-[430px] min-w-[180px]"
      />
      <img
        src="/WhyArunLink/asset/Asset4.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-10 w-[29vw] max-w-[390px] min-w-[170px]"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-8">
        <h2 className=" FeatuesText leading-[1.12] tracking-tight text-[#111827]">
          งานโครงสร้างที่ดี
        </h2>
        <h3 className="mt-2 FeatuesText leading-[1.12] tracking-tight text-sky-600">
          ทำไมต้องที่ อรุณลิงก์
        </h3>

        <p className="mt-10 text-[24px] leading-relaxed text-slate-500  md:leading-[1.45]">
          หลายคนเริ่มงานก่อสร้าง โดยเฉพาะงานโครงสร้างอย่างกำแพงกันดิน
        </p>
        <p className="mt-7 max-w-5xl text-[24px] leading-relaxed text-slate-500  md:leading-[1.45]">
          โดยมีข้อมูลไม่ครบถ้วนในการเลือกวัสดุหรือแนวทางก่อสร้าง ทั้งที่งานประเภทเหล่านี้ต้องอาศัยความเชี่ยวชาญเฉพาะทาง
          เพื่อให้แข็งแรง ปลอดภัย และใช้งานได้ในระยะยาว
        </p>
      </div>
    </section>
  );
}
