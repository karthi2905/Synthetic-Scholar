"use client";

import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useStore } from "@/store/useStore";

const modules = [
  {
    id: 1,
    title: "Foundations of Logic",
    description: "Master basic data structures and iterative logic.",
    status: "Completed",
    topics: ["Arrays", "Strings", "Complexity Analysis"],
    progress: 100,
    icon: "base",
  },
  {
    id: 2,
    title: "Algorithmic Efficiency",
    description: "Optimizing code with searching and sorting strategies.",
    status: "In Progress",
    topics: ["Binary Search", "Two Pointers", "Sliding Window"],
    progress: 45,
    icon: "speed",
  },
  {
    id: 3,
    title: "Recursive Thinking",
    description: "Unlocking the power of divide and conquer.",
    status: "Locked",
    topics: ["Recursion", "Backtracking", "Divide & Conquer"],
    progress: 0,
    icon: "rebase",
  },
  {
    id: 4,
    title: "Dynamic Programming",
    description: "Mastering overlapping subproblems and memoization.",
    status: "Locked",
    topics: ["Memoization", "Tabulation", "State Optimization"],
    progress: 0,
    icon: "layers",
  }
];

export default function Curriculum() {
  const { user } = useStore();

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
            <div className="h-8 w-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20 flex items-center justify-center text-xs font-bold text-primary">
              {user?.name.charAt(0) || "U"}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8 flex-1 tonal-gradient">
          <div className="mb-10">
            <h2 className="text-3xl font-black tracking-tighter text-on-surface uppercase">Neural.Curriculum</h2>
            <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest mt-1">Structured learning path for technical mastery.</p>
          </div>

          <div className="space-y-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-[31px] top-10 bottom-10 w-0.5 bg-outline-variant/10"></div>

            {modules.map((m, i) => (
              <div key={m.id} className="flex gap-x-12 relative group">
                {/* Node */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center z-10 border-4 transition-all duration-500 ${
                  m.status === "Completed" ? "bg-secondary/20 border-secondary text-secondary shadow-[0_0_20px_rgba(78,222,163,0.3)]" :
                  m.status === "In Progress" ? "bg-primary/20 border-primary text-primary animate-pulse" :
                  "bg-surface-container border-outline-variant/20 text-on-surface-variant/20"
                }`}>
                  <span className="material-symbols-outlined text-[30px]">{m.icon}</span>
                </div>

                {/* Card */}
                <div className={`flex-1 bg-surface-container rounded-2xl p-8 border border-outline-variant/10 shadow-xl transition-all duration-300 group-hover:border-primary/30 ${
                  m.status === "Locked" ? "opacity-60" : "opacity-100"
                }`}>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <span className={`text-[10px] font-label font-bold uppercase tracking-[0.2em] mb-2 block ${
                        m.status === "Completed" ? "text-secondary" :
                        m.status === "In Progress" ? "text-primary" : "text-on-surface-variant"
                      }`}>
                        Module {m.id} — {m.status}
                      </span>
                      <h3 className="text-2xl font-black tracking-tight text-on-surface">{m.title}</h3>
                      <p className="text-on-surface-variant text-sm mt-1">{m.description}</p>
                    </div>
                    {m.status !== "Locked" && (
                      <div className="text-right">
                        <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest mb-1">Module Progress</p>
                        <p className="font-mono text-xl font-bold text-primary">{m.progress}%</p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {m.topics.map(topic => (
                      <span key={topic} className="px-3 py-1 bg-surface-container-low border border-outline-variant/10 rounded text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                        {topic}
                      </span>
                    ))}
                  </div>

                  {m.status === "Locked" ? (
                    <div className="flex items-center gap-2 text-on-surface-variant/40">
                      <span className="material-symbols-outlined text-[18px]">lock</span>
                      <span className="text-[10px] font-label uppercase tracking-widest">Complete previous module to unlock</span>
                    </div>
                  ) : (
                    <Link href="/problems">
                      <button className={`px-8 py-3 rounded-lg font-label text-[11px] uppercase tracking-widest font-bold transition-all shadow-lg ${
                        m.status === "Completed" ? "bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20" :
                        "bg-primary-container text-on-primary-container shadow-primary-container/20 hover:bg-opacity-90"
                      }`}>
                        {m.status === "Completed" ? "Review Module" : "Continue Training"}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
