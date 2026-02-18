import { useState, type FC } from "react";
import {
  MessageSquareText,
  CalendarDays,
  ShieldCheck,
  PencilLine,
  Smartphone,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

type FAQItem = {
  icon: LucideIcon;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    icon: MessageSquareText,
    question: "ต้องเสียค่าบริการในการใช้งาน อรุณลิงก์ หรือไม่?",
    answer: `ไม่ต้องเสียค่าใช้จ่ายค่ะ
ไม่ว่าจะเป็นผู้ใช้งานทั่วไปที่ต้องการจองช่าง
หรือเป็นพาร์ทเนอร์/ช่างที่ต้องการลงผลงานและให้บริการ
ทุกคนสามารถเริ่มต้นใช้งานระบบได้ ฟรี
ในอนาคตหากมีบริการเสริม จะมีการแจ้งรายละเอียดล่วงหน้าอย่างชัดเจน`,
  },
  {
    icon: CalendarDays,
    question: "หากจองบริการไปแล้ว สามารถยกเลิกหรือเปลี่ยนเวลาได้ไหม?",
    answer: `ได้ค่ะ คุณสามารถยกเลิกหรือแก้ไขการจองได้จากหน้า “รายการของฉัน” ภายในระบบ
โดยต้องแจ้งล่วงหน้าก่อนวันนัดหมายตามเวลาที่กำหนดในแต่ละบริการ

หากมีการยกเลิกในนาทีสุดท้าย ระบบอาจบันทึกไว้เป็นข้อมูลสำหรับการให้บริการครั้งถัดไป`,
  },
  {
    icon: ShieldCheck,
    question:
      "ฉันจะมั่นใจได้อย่างไรว่า “ช่าง” หรือ “พาร์ทเนอร์” ในระบบไว้ใจได้?",
    answer: `ช่างหรือผู้ให้บริการที่อยู่ใน อรุณลิงก์ จะต้องผ่านการยืนยันตัวตน และมีการลงผลงานจริง
ให้ตรวจสอบก่อนใช้งาน ลูกค้าสามารถอ่านรีวิวจากผู้ใช้จริงก่อนหน้า และดู Portfolio
เพื่อประกอบการตัดสินใจได้

ระบบยังมีการจัดการกรณีเกิดปัญหาหลังการจอง เพื่อให้ความเป็นธรรมทั้งสองฝ่ายค่ะ`,
  },
  {
    icon: PencilLine,
    question: "ถ้าฉันเป็นช่าง ไม่มีร้าน ไม่มีบริษัท จะสมัครได้ไหม?",
    answer: `ได้เลยค่ะ! ไม่ว่าคุณจะเป็นช่างเดี่ยว ร้านเล็ก หรือทีมงานช่างครบเซต อรุณลิงก์
เปิดโอกาสให้ทุกคนเข้าร่วมระบบอย่างเท่าเทียม เพียงแค่คุณมีผลงานจริง
พร้อมให้บริการในพื้นที่ ระบบจะช่วยคุณสร้างความน่าเชื่อถือผ่านรีวิว
และการแสดงตัวตนแบบมืออาชีพ`,
  },
  {
    icon: Smartphone,
    question: "ต้องใช้แอปพลิเคชันหรือไม่? ใช้งานจากมือถือได้ไหม?",
    answer: `อรุณลิงก์ รองรับการใช้งานผ่านเว็บไซต์โดยตรง ไม่จำเป็นต้องโหลดแอป

และระบบถูกออกแบบมาให้ใช้งานได้ดีทั้งในมือถือ แท็บเล็ต และคอมพิวเตอร์
ไม่ว่าคุณจะอยู่ที่ไหน ก็สามารถจอง/ให้บริการ และติดตามสถานะได้อย่างสะดวก`,
  },
];

type FAQCardProps = {
  item: FAQItem;
  index: number;
  isActive: boolean;
  onToggle: (index: number) => void;
};

const FAQCard: FC<FAQCardProps> = ({ item, index, isActive, onToggle }) => {
  const Icon = item.icon;
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-50">
      <button
        type="button"
        id={questionId}
        aria-expanded={isActive}
        aria-controls={answerId}
        onClick={() => onToggle(index)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left sm:gap-4 sm:p-5"
      >
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-sky-500">
            <Icon size={20} />
          </div>
          <p className="min-w-0 text-[17px] font-semibold leading-snug text-gray-900 sm:text-[18px]">
            <span className="font-bold">Q:</span>{" "}
            <span className="wrap-break-word">{item.question}</span>
          </p>
        </div>

        <ChevronDown
          size={22}
          className={`shrink-0 transition-transform duration-300 ease-in-out ${
            isActive ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`grid transition-all duration-300 ease-in-out ${
          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 sm:px-5 sm:pl-19">
            <p className="whitespace-pre-line text-[16px] leading-relaxed text-gray-600">
              <span className="font-semibold text-gray-800">A:</span>{" "}
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-20">
        <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-[28px] font-bold leading-tight text-gray-900 sm:mb-12 sm:text-[40px]">
          คำถามที่พบบ่อย
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {faqItems.map((item, index) => (
            <FAQCard
              key={item.question}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
