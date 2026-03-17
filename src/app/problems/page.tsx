"use client";

import { useState } from "react";
import problems from "@/data/problems.json";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function Problems() {
  const { user, solvedProblems } = useStore();
  const [filter, setFilter] = useState("All");

  const filteredProblems =
    filter === "All"
      ? problems
      : problems.filter((p) => p.category === filter);

  const categories = ["All", ...Array.from(new Set(problems.map((p) => p.category)))];

  return (
    <div className="flex bg-background min-h-screen text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Sidebar />
      
      <div className="md:ml-64 min-h-screen flex flex-col flex-1">
        {/* Top Navigation Bar */}
        <header className="bg-background flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 backdrop-blur-xl border-b border-outline-variant/10">
          <div className="flex items-center gap-x-6">
            <span className="text-xl font-black text-primary tracking-tighter">Synthetic Scholar</span>
            <div className="hidden lg:flex items-center gap-x-6 h-full">
              <Link className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm" href="/dashboard">Overview</Link>
              <a className="text-primary font-bold border-b-2 border-primary h-full flex items-center px-1 text-sm" href="#">Curriculum</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm" href="#">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="relative hidden sm:block">
              <input className="bg-surface-container-low border-none rounded-lg text-sm px-4 py-2 w-64 focus:ring-1 focus:ring-primary text-on-surface-variant font-label" placeholder="Search problems..." type="text"/>
            </div>
            <button className="p-2 text-primary hover:bg-surface-container transition-colors rounded-lg">
              <span className="material-symbols-outlined">local_fire_department</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20 flex items-center justify-center text-xs font-bold text-primary">
              {user?.name.charAt(0) || "U"}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8 flex-1 tonal-gradient">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tighter text-on-surface">System.ProblemSet</h2>
            <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mt-1">Master {problems.length} algorithms curated by your AI Mentor.</p>
          </div>

          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 hide-scrollbar">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2 rounded-full border text-[11px] font-label uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                  filter === c
                    ? "bg-primary-container border-primary text-on-primary-container font-bold shadow-lg shadow-primary-container/20"
                    : "bg-surface-container border-outline-variant/20 text-on-surface-variant hover:border-primary/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <section className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 shadow-2xl">
            <div className="p-6 bg-surface-container-highest flex justify-between items-center border-b border-outline-variant/10">
              <h3 className="font-label text-xs uppercase tracking-widest font-bold text-primary">Algorithm Challenges</h3>
              <span className="font-label text-[10px] text-on-surface-variant opacity-60 uppercase tracking-widest">
                Showing {filteredProblems.length} results
              </span>
            </div>

            <div className="divide-y divide-outline-variant/10">
              {filteredProblems.map((p) => {
                const isSolved = solvedProblems.includes(p.id);
                return (
                  <Link
                    key={p.id}
                    href={`/workspace/${p.id}`}
                    className="p-5 flex items-center justify-between group hover:bg-surface-container-high transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-6">
                      <div className={`w-10 h-10 rounded flex items-center justify-center font-mono text-xs transition-colors ${
                        isSolved 
                        ? "bg-secondary/10 text-secondary border border-secondary/20" 
                        : "bg-surface-container-lowest text-on-surface-variant border border-outline-variant/10 group-hover:border-primary/30"
                      }`}>
                        {isSolved ? (
                          <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        ) : (
                          p.id.toString().padStart(2, '0')
                        )}
                      </div>
                      <div>
                        <h4 className={`font-headline font-bold text-sm transition-colors ${isSolved ? "text-on-surface/60 line-through" : "text-on-surface group-hover:text-primary"}`}>
                          {p.title}
                        </h4>
                        <div className="flex gap-x-3 mt-1">
                          <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">{p.category}</span>
                          <span className="text-outline-variant/30">•</span>
                          <span className={`font-mono text-[10px] uppercase ${
                            p.difficulty === "Easy" ? "text-secondary" : 
                            p.difficulty === "Medium" ? "text-tertiary" : "text-error"
                          }`}>{p.difficulty}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-x-4">
                      {isSolved && (
                        <span className="px-3 py-1 bg-secondary/5 text-secondary font-label text-[9px] uppercase tracking-widest rounded border border-secondary/10">
                          Completed
                        </span>
                      )}
                      <button className="p-2 rounded-lg bg-surface-container-lowest text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="p-6 bg-surface-container-lowest text-center">
              <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] opacity-40">
                End of Transmission — More problems added weekly
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
