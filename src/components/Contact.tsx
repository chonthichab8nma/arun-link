import React from "react";
import { Mail, Phone, Facebook, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div
          className="
            relative mb-10 overflow-hidden
            rounded-[16px]
            px-6 py-8
            md:px-10 md:py-10
          "
          style={{
            backgroundImage: "url(/Contact/bg2.png)", // เปลี่ยนเป็นรูปพื้นหลังของคุณ
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* overlay ให้พื้นหลังนุ่ม ๆ */}
          <div className="pointer-events-none absolute inset-0 bg-[#D9F1FF]/80" />

          <div className="relative flex flex-col items-center text-center">
            <img
              src="Logoblue.png" 
              alt="Arun Link"
              className="h-10 w-auto md:h-12"
            />

            <p className="mt-4 max-w-[760px] text-[13px] leading-6 text-[#4E6B80] md:text-[14px]">
              แพลตฟอร์มรวมช่างและวัสดุก่อสร้าง จากประสบการณ์เดินหน้างานจริง
              <br className="hidden md:block" />
              เพื่อมาตรฐานงานก่อสร้างที่คุณเข้าใจได้
            </p>
          </div>
        </div>

        {/* ===== MAIN FOOTER ===== */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="Logoblue.png" // เปลี่ยน path ให้ตรงของคุณ
                alt="Arun Link"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-[14px] font-semibold text-[#1D2B3A]">
              นโยบายและเงื่อนไข
            </h3>
            <ul className="mt-4 space-y-2 text-[13px] text-[#6B7A8C]">
              <li>
                <a href="/policy/privacy" className="hover:text-[#0B77B7]">
                  นโยบายความเป็นส่วนตัว
                </a>
              </li>
              <li>
                <a href="/policy/terms" className="hover:text-[#0B77B7]">
                  ข้อกำหนดและเงื่อนไขการใช้งาน
                </a>
              </li>
              <li>
                <a href="/policy/cancel" className="hover:text-[#0B77B7]">
                  นโยบายการยกเลิกบริการ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[14px] font-semibold text-[#1D2B3A]">
              ติดต่อเรา
            </h3>

            <div className="mt-4 space-y-3 text-[13px] text-[#6B7A8C]">
              <div className="flex items-center gap-2">
               <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6B7280]">
                <img
                  src="/Contact/1.svg"
                  alt="icon"
                  className="h-4 w-4"
                />
              </div>

                <span>อีเมล</span>
                <span className="ml-auto text-[#4A5A6A]">support@arunlink.co</span>
              </div>

              <div className="flex items-center gap-2">
                 <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6B7280]">
                <img
                  src="/Contact/2.svg"
                  alt="icon"
                  className="h-4 w-4"
                />
              </div>
                <span>Line</span>
                <span className="ml-auto text-[#4A5A6A]">arunlink</span>
              </div>

              <div className="flex items-center gap-2">
                 <div className="flex h-7 w-7 items-center justify-center rounded-full">
                <img
                  src="/Contact/3.svg"
                  alt="icon"
                  className="h-6 w-6"
                />
              </div>
                <span>Facebook</span>
                <span className="ml-auto text-[#4A5A6A]">ArunLink</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#6B7280]">
                <img
                  src="/Contact/4.svg"
                  alt="icon"
                  className="h-4 w-4"
                />
              </div>
                <span>Google Maps</span>
                <span className="ml-auto text-[#4A5A6A]">ArunLink</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#E8EEF5] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-[12px] text-[#8AA0B2]">
            © 2026 ArunLink by Soraroon Group. All rights reserved.
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              
              aria-label="Facebook"
            >
             
                <img
                  src="/Contact/fb.svg"
                  alt="icon"
                  className="h-7 w-7"
                />
              
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noreferrer"
              className="grid h-8 w-8 place-items-center rounded-full text-white hover:opacity-90"
              aria-label="Line"
            >
                <img
                  src="/Contact/L.svg"
                  alt="icon"
                  className="h-7 w-7"
                />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="grid h-8 w-8 place-items-center rounded-full  text-white hover:opacity-90"
              aria-label="YouTube"
            >
                  <img
                  src="/Contact/ut.svg"
                  alt="icon"
                  className="h-7 w-7"
                />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="grid h-8 w-8 place-items-center rounded-full  text-white hover:opacity-90"
              aria-label="TikTok"
            >
                <img
                  src="/Contact/tt.svg"
                  alt="icon"
                  className="h-7 w-7"
                />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
