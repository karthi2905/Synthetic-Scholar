"use client";

import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import problemsData from "@/data/problems.json";

export default function Dashboard() {
  const { user, solvedProblems } = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) return null;

  const totalProblems = problemsData.length;
  const progressPercentage = ((solvedProblems.length / totalProblems) * 100).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col w-full text-on-surface bg-background">
      {/* Top Navigation Bar */}
        <header className="bg-background flex justify-between items-center w-full px-8 h-16 sticky top-0 z-50 backdrop-blur-xl border-b border-outline-variant/10">
          <div className="flex items-center gap-x-6">
            <span className="text-xl font-black text-primary tracking-tighter">Synthetic Scholar</span>
            <div className="hidden lg:flex items-center gap-x-6 h-full">
              <a className="text-primary font-bold border-b-2 border-primary h-full flex items-center px-1 text-sm" href="#">Overview</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm" href="#">Curriculum</a>
              <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-sm" href="#">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="relative hidden sm:block">
              <input className="bg-surface-container-low border-none rounded-lg text-sm px-4 py-2 w-64 focus:ring-1 focus:ring-primary text-on-surface-variant font-label" placeholder="Search knowledge graph..." type="text"/>
            </div>
            <button className="p-2 text-primary hover:bg-surface-container transition-colors rounded-lg">
              <span className="material-symbols-outlined">local_fire_department</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20 flex items-center justify-center text-xs font-bold text-primary">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-8 flex-1 tonal-gradient">
          {/* Welcome Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-y-4">
            <div>
              <h2 className="text-3xl font-black tracking-tighter text-on-surface">System.Dashboard</h2>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mt-1">Status: Active Training Session — Welcome back, {user.name}</p>
            </div>
            <div className="flex gap-x-3">
              <div className="px-4 py-2 bg-surface-container rounded border border-outline-variant/10">
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Global Rank</p>
                <p className="font-mono font-bold text-primary">#1,242</p>
              </div>
              <div className="px-4 py-2 bg-surface-container rounded border border-outline-variant/10">
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Elo Rating</p>
                <p className="font-mono font-bold text-secondary">1,840</p>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Weekly Progress Analytics */}
            <section className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden flex flex-col border border-outline-variant/10 shadow-xl">
              <div className="p-6 bg-surface-container-highest flex justify-between items-center">
                <h3 className="font-label text-xs uppercase tracking-widest font-bold text-primary">Weekly Performance Metrics</h3>
                <div className="flex gap-x-4">
                  <span className="flex items-center gap-x-1 font-label text-[10px] text-secondary uppercase"><span className="w-2 h-2 rounded-full bg-secondary"></span> Accuracy</span>
                  <span className="flex items-center gap-x-1 font-label text-[10px] text-primary uppercase"><span className="w-2 h-2 rounded-full bg-primary"></span> Efficiency</span>
                </div>
              </div>
              <div className="p-8 flex-1 min-h-[300px] relative flex items-end justify-between gap-x-4">
                <div className="absolute inset-x-8 inset-y-12 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 Q20,20 40,60 T100,10" fill="none" stroke="var(--secondary)" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                    <path d="M0,90 Q15,40 35,70 T100,30" fill="none" stroke="var(--primary)" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-between h-full font-mono text-[10px] text-on-surface-variant opacity-50 absolute left-8 top-12 bottom-20">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>
                <div className="w-full flex justify-between pt-4 mt-auto border-t border-outline-variant/10">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(day => (
                    <span key={day} className="font-label text-[10px] text-on-surface-variant">{day}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* Knowledge Mastery */}
            <section className="md:col-span-4 bg-surface-container rounded-xl flex flex-col border border-outline-variant/10 shadow-xl">
              <div className="p-6 bg-surface-container-highest">
                <h3 className="font-label text-xs uppercase tracking-widest font-bold text-primary">Knowledge Mastery</h3>
              </div>
              <div className="p-6 space-y-6 flex-1">
                {[
                  { name: "Dynamic Programming", val: 65, color: "var(--secondary)" },
                  { name: "Graph Algorithms", val: 42, color: "var(--tertiary)" },
                  { name: "System Architecture", val: 89, color: "var(--primary)" },
                  { name: "Memory Management", val: 72, color: "var(--secondary)" },
                ].map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between font-label text-[11px] uppercase tracking-wider">
                      <span>{skill.name}</span>
                      <span style={{ color: skill.color }}>{skill.val}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${skill.val}%`, backgroundColor: skill.color }}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-outline-variant/10 mt-auto">
                <button className="w-full py-2 text-[10px] font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">View full graph</button>
              </div>
            </section>

            {/* Recommended Problems */}
            <section className="md:col-span-12 lg:col-span-7 bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 shadow-xl">
              <div className="p-6 bg-surface-container-highest flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                  <h3 className="font-label text-xs uppercase tracking-widest font-bold text-primary">Recommended for You</h3>
                </div>
                <span className="font-label text-[10px] text-on-surface-variant opacity-60">Based on recent mistakes</span>
              </div>
              <div className="divide-y divide-outline-variant/10">
                {problemsData.slice(0, 3).map((problem, i) => (
                  <Link key={problem.id} href={`/workspace/${problem.id}`} className="p-5 flex items-center justify-between group hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-x-4">
                      <div className="w-10 h-10 rounded flex items-center justify-center bg-surface-container-lowest font-mono text-tertiary">
                        {problem.category.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-on-surface text-sm">{problem.title}</h4>
                        <p className="font-label text-[11px] text-on-surface-variant uppercase tracking-wider">Target: {problem.category} Improvements</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-6">
                      <div className="hidden sm:flex flex-col items-end">
                        <span className="font-label text-[10px] text-on-surface-variant uppercase">Difficulty</span>
                        <span className={`font-mono text-xs ${
                          problem.difficulty === "Easy" ? "text-secondary" : 
                          problem.difficulty === "Medium" ? "text-tertiary" : "text-error"
                        }`}>{problem.difficulty}</span>
                      </div>
                      <button className="p-2 rounded-lg bg-surface-container-lowest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Recent Activity Feed */}
            <section className="md:col-span-12 lg:col-span-5 bg-surface-container rounded-xl overflow-hidden flex flex-col border border-outline-variant/10 shadow-xl">
              <div className="p-6 bg-surface-container-highest">
                <h3 className="font-label text-xs uppercase tracking-widest font-bold text-primary">Recent Activity</h3>
              </div>
              <div className="p-6 space-y-6 flex-1 overflow-y-auto max-h-[300px] hide-scrollbar">
                {solvedProblems.length > 0 ? (
                  solvedProblems.map((id, i) => {
                    const prob = problemsData.find(p => p.id === id);
                    return (
                      <div key={i} className="flex gap-x-4 relative">
                        {i !== solvedProblems.length - 1 && <div className="absolute left-[11px] top-6 bottom-[-24px] w-px bg-outline-variant/20"></div>}
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center z-10 border border-secondary/30">
                          <span className="material-symbols-outlined text-[14px] text-secondary">check</span>
                        </div>
                        <div className="flex-1 pb-4">
                          <p className="text-sm font-medium">Solved <span className="text-primary">"{prob?.title}"</span></p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="font-label text-[10px] text-on-surface-variant uppercase">Recent</span>
                            <span className="font-mono text-[10px] text-secondary">+12 XP</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-10 opacity-40">
                    <span className="material-symbols-outlined text-4xl block mb-2">history</span>
                    <p className="text-xs font-label uppercase tracking-widest">No activity recorded</p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
    </div>
  );
}
