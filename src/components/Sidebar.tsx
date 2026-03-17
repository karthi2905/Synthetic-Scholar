"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: "grid_view" },
    { name: "Problems", href: "/problems", icon: "code" },
    { name: "Learning Path", href: "/learning-path", icon: "route" },
    { name: "Analytics", href: "/analysis", icon: "insights" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#131b2e] flex flex-col py-6 gap-y-2 z-50 overflow-hidden hide-on-mobile md:flex">
      <div className="px-6 mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center rounded">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <div>
            <h1 className="font-headline font-bold text-[#adc6ff] leading-none">The Scholar</h1>
            <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Technical Mastery</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center px-6 py-3 transition-all duration-300 group ${
                isActive
                  ? "bg-[#171f33] text-[#adc6ff] font-bold relative after:content-[''] after:absolute after:right-0 after:h-full after:w-1 after:bg-[#adc6ff]"
                  : "text-[#c2c6d6] opacity-70 hover:bg-[#171f33] hover:opacity-100"
              }`}
            >
              <span className="material-symbols-outlined mr-4">{link.icon}</span>
              <span className="font-label text-[11px] uppercase tracking-widest">{link.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-6 mt-auto">
        <Link href="/workspace/1" className="flex items-center justify-center w-full bg-primary-container text-on-primary-container font-label text-[11px] uppercase tracking-widest font-bold py-4 rounded-lg hover:opacity-90 transition-opacity">
          Start Practice
        </Link>
      </div>
    </aside>
  );
}
