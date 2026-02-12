import { useMemo, useState } from "react";
import {
  MessageSquareText,
  CalendarDays,
  ShieldCheck,
  PencilLine,
  Smartphone,
  ChevronDown,
} from "lucide-react";

type FAQItem = {
  icon: React.ReactNode;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    icon: <MessageSquareText size={20} />,
    question: "ต้องเสียค่าบริการในการใช้งาน อรุณลิงก์ หรือไม่?",
    answer:
      "ไม่ต้องเสียค่าใช้จ่ายค่ะ ไม่ว่าจะเป็นผู้ใช้งานทั่วไปที่ต้องการจองช่าง หรือเป็นพาร์ทเนอร์/ช่างที่ต้องการลงผลงานและให้บริการ ทุกคนสามารถเริ่มต้นใช้งานระบบได้ฟรี หากในอนาคตมีบริการเสริมจะมีการแจ้งรายละเอียดอย่างชัดเจน",
  },
  {
    icon: <CalendarDays size={20} />,
    question: "หากจองบริการไปแล้ว สามารถยกเลิกหรือเปลี่ยนเวลาได้ไหม?",
    answer:
      "ได้ค่ะ คุณสามารถยกเลิกหรือแก้ไขการจองได้จากหน้า 'รายการของฉัน' ภายในระบบ โดยต้องแจ้งล่วงหน้าตามเงื่อนไขของแต่ละบริการ หากยกเลิกในนาทีสุดท้าย ระบบอาจบันทึกข้อมูลไว้เพื่อการให้บริการครั้งถัดไป",
  },
  {
    icon: <ShieldCheck size={20} />,
    question:
      "ฉันจะมั่นใจได้อย่างไรว่า “ช่าง” หรือ “พาร์ทเนอร์” ในระบบไว้ใจได้?",
    answer:
      "ช่างทุกคนต้องผ่านการยืนยันตัวตน และมีการลงผลงานจริงให้ตรวจสอบ ลูกค้าสามารถอ่านรีวิว ดูคะแนน และ Portfolio ก่อนตัดสินใจ ระบบยังมีการจัดการกรณีเกิดปัญหาเพื่อให้ความเป็นธรรมทั้งสองฝ่าย",
  },
  {
    icon: <PencilLine size={20} />,
    question: "ถ้าฉันเป็นช่าง ไม่มีร้าน ไม่มีบริษัท จะสมัครได้ไหม?",
    answer:
      "ได้เลยค่ะ ไม่ว่าจะเป็นช่างเดี่ยว ร้านเล็ก หรือทีมงานครบชุด ระบบเปิดโอกาสให้ทุกคนเข้าร่วมได้ เพียงมีผลงานจริงและพร้อมให้บริการในพื้นที่ของคุณ",
  },
  {
    icon: <Smartphone size={20} />,
    question: "ต้องใช้แอปพลิเคชันหรือไม่? ใช้งานจากมือถือได้ไหม?",
    answer:
      "อรุณลิงก์ รองรับการใช้งานผ่านเว็บไซต์โดยตรง ไม่จำเป็นต้องดาวน์โหลดแอป และรองรับมือถือ แท็บเล็ต และคอมพิวเตอร์ สามารถจอง ติดตามสถานะ และจัดการข้อมูลได้ทุกที่",
  },
];

export default function Faq() {
  // ✅ เริ่มต้นหุบหมด
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // (ถ้ายังอยากให้มี “อ่านเพิ่มเติม” คงไว้ได้)
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => {
      const next = prev === index ? null : index;

      // ✅ เวลาเปลี่ยนข้อที่เปิด ให้รีเซ็ต readmore ของข้อที่กำลังเปิดใหม่
      // (กันกรณีเคยกดอ่านเพิ่มเติมแล้วไปเปิดข้ออื่น)
      if (next !== null) {
        setExpanded((old) => ({ ...old, [next]: false }));
      }

      return next;
    });
  };

  const toggleReadMore = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const isLong = useMemo(() => faqData.map((x) => x.answer.length > 160), []);

  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-[736px]">
        <h2 className="text-center font-bold text-[28px] sm:text-[32px] md:text-[40px] mb-10">
          คำถามที่พบบ่อย
        </h2>

        <div className="space-y-[10px]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const showMore = !!expanded[index];

            return (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleOpen(index)}
                  className="w-full flex items-center justify-between gap-[10px] p-4 text-left"
                >
                  <div className="flex items-center gap-[10px] min-w-0">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-blue-500">
                      {item.icon}
                    </div>

                    <p className="min-w-0 font-semibold text-[14px] sm:text-[16px] leading-relaxed text-gray-900">
                      <span className="font-bold">Q:</span>{" "}
                      <span className="break-words">{item.question}</span>
                    </p>
                  </div>

                  <ChevronDown
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                      <p className="mb-2 font-semibold text-gray-800">
                        <span className="font-bold">A:</span>
                      </p>

                      <div
                        className={
                          showMore
                            ? ""
                            : "overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]"
                        }
                      >
                        {item.answer}
                      </div>

                      {isLong[index] && (
                        <button
                          type="button"
                          onClick={() => toggleReadMore(index)}
                          className="mt-2 inline-flex items-center gap-2 text-blue-600 hover:underline"
                        >
                          {showMore ? "ย่อข้อความ" : "อ่านเพิ่มเติม"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
