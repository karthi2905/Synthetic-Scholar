"use client";

export default function LearningPathPage() {
  return (
    <main className="min-h-screen relative flex flex-col bg-surface flex-1">
      {/* TopAppBar Shell */}
      <header className="flex justify-between items-center w-full px-8 h-16 bg-[#0b1326]/80 sticky top-0 z-40 backdrop-blur-xl shrink-0 border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-black text-[#adc6ff] tracking-tighter mix-blend-lighten">Synthetic Scholar</h2>
          <div className="h-4 w-px bg-outline-variant opacity-20 mx-2"></div>
          <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded text-sm text-on-surface-variant font-mono cursor-pointer hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[16px]">search</span>
            <span>Find concepts...</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[#adc6ff]">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            <span className="font-label font-bold text-xs uppercase tracking-widest">14 DAY STREAK</span>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center border border-outline-variant/30 text-[10px] font-bold">
            <span className="material-symbols-outlined text-[16px]">person</span>
          </div>
        </div>
      </header>

      {/* Interactive Path Canvas */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden relative">
        {/* Left Panel: The Map */}
        <section className="col-span-8 p-12 overflow-y-auto bg-surface relative scrollbar-hide">
          <div className="max-w-3xl mx-auto z-10 relative">
            <div className="mb-16">
              <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Algorithm Mastery</span>
              <h3 className="text-4xl font-headline font-black text-on-surface leading-tight">Mastering Data Structures <br/>&amp; Modern Logic</h3>
            </div>

            {/* Nodes Grid */}
            <div className="relative space-y-24">
              {/* Connecting Line Background */}
              <div 
                className="absolute left-[34px] top-8 bottom-0 opacity-30 w-[2px] z-0"
                style={{ background: "linear-gradient(to bottom, transparent, #424754 10%, #424754 90%, transparent)" }}
              ></div>

              {/* Mastery Levels Legend (Floating) */}
              <div className="fixed bottom-10 left-[300px] flex gap-4 bg-surface-container-high px-6 py-3 rounded-xl border border-outline-variant/10 shadow-2xl z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">Mastered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
                  <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">Locked</span>
                </div>
              </div>

              {/* Node: Arrays */}
              <div className="relative flex items-center gap-12 group cursor-pointer z-10">
                <div className="z-10 w-[68px] h-12 rounded-lg bg-secondary flex items-center justify-center text-on-secondary shadow-[0_0_20px_rgba(78,222,163,0.3)] transform group-hover:scale-110 transition-all shrink-0">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>data_array</span>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex-1 border-l-4 border-secondary hover:bg-surface-container transition-colors shadow-lg shadow-surface-container-low/50">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg text-on-surface">Foundation: Arrays &amp; Lists</h4>
                    <span className="font-mono text-secondary text-xs bg-secondary/10 px-2 py-1 rounded font-bold">100% COMPLETE</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Memory allocation, indexing optimization, and sequential logic traversal.</p>
                </div>
              </div>

              {/* Node: Recursion */}
              <div className="relative flex items-center gap-12 group cursor-pointer ml-12 z-10">
                <div className="z-10 w-[68px] h-12 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-[0_0_20px_rgba(173,198,255,0.3)] transform group-hover:scale-110 transition-all shrink-0">
                  <span className="material-symbols-outlined">all_inclusive</span>
                </div>
                <div className="bg-surface-container p-6 rounded-xl flex-1 border-l-4 border-primary shadow-xl shadow-primary/5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg text-on-surface">Recursive Reasoning</h4>
                    <span className="font-mono text-primary text-xs bg-primary/10 px-2 py-1 rounded font-bold">64% IN PROGRESS</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Stack frames, base cases, and divide-and-conquer implementation patterns.</p>
                  <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[64%] shadow-[0_0_10px_rgba(173,198,255,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* Node: Binary Search Trees */}
              <div className="relative flex items-center gap-12 group opacity-60 ml-6 cursor-not-allowed z-10 transition-opacity hover:opacity-80">
                <div className="z-10 w-[68px] h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant transform group-hover:scale-105 transition-all shrink-0">
                  <span className="material-symbols-outlined">account_tree</span>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex-1 border-l-4 border-surface-container-highest shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg text-on-surface">Non-Linear Structures: Trees</h4>
                    <span className="material-symbols-outlined text-xs bg-surface-container-highest px-2 py-1 rounded">lock</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Balancing algorithms, traversal strategies, and logarithmic search complexity.</p>
                </div>
              </div>

              {/* Node: Dynamic Programming */}
              <div className="relative flex items-center gap-12 group opacity-40 cursor-not-allowed z-10 transition-opacity hover:opacity-60">
                <div className="z-10 w-[68px] h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant transform group-hover:scale-105 transition-all shrink-0">
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <div className="bg-surface-container-low p-6 rounded-xl flex-1 border-l-4 border-surface-container-highest shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline font-bold text-lg text-on-surface">Dynamic Programming</h4>
                    <span className="material-symbols-outlined text-xs bg-surface-container-highest px-2 py-1 rounded">lock</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">Overlapping subproblems, memoization, and bottom-up state optimization.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Polish: Gradient Orbs inside Scroll Area */}
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary rounded-full blur-[180px] opacity-[0.05] pointer-events-none"></div>
          <div className="absolute top-[400px] left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
        </section>

        {/* Right Panel: Contextual Inspector */}
        <section className="col-span-4 bg-surface-container-low border-l border-outline-variant/10 p-8 overflow-y-auto scrollbar-hide shadow-[-10px_0_30px_rgba(0,0,0,0.2)] z-30">
          <div className="sticky top-0">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label text-xs uppercase font-bold tracking-widest text-primary">Topic Analysis</span>
              </div>
              <h4 className="text-3xl font-headline font-bold text-on-surface mb-4">Recursive Reasoning</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">
                You are currently focused on mastering functional recursion. To unlock "Dynamic Programming", complete the following recommended challenges.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/5 shadow-md">
                  <span className="block font-label text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1 font-bold">Time to Solve</span>
                  <span className="font-mono text-primary font-bold text-lg">~4.5 Hours</span>
                </div>
                <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/5 shadow-md">
                  <span className="block font-label text-[10px] text-on-surface-variant uppercase tracking-tighter mb-1 font-bold">Complexity Score</span>
                  <span className="font-mono text-tertiary font-bold text-lg">Advanced</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="font-label text-[11px] uppercase tracking-widest font-bold text-on-surface-variant border-b border-outline-variant/10 pb-3">
                Recommended Problems
              </h5>
              
              {/* Problem Item */}
              <div className="group p-5 bg-surface-container rounded-xl border border-transparent hover:border-primary/50 transition-all cursor-pointer shadow-md hover:shadow-primary/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[11px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">EASY</span>
                  <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                </div>
                <h6 className="font-headline font-bold text-on-surface mb-2 text-sm">Tower of Hanoi Optimization</h6>
                <p className="text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed">
                  Calculate the minimum moves required for N disks with an added constraint of restricted middle peg...
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label font-bold rounded uppercase text-on-surface-variant">Stacks</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label font-bold rounded uppercase text-on-surface-variant">Math</span>
                </div>
              </div>

              {/* Problem Item */}
              <div className="group p-5 bg-surface-container rounded-xl border border-transparent hover:border-primary/50 transition-all cursor-pointer shadow-md hover:shadow-primary/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[11px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">MEDIUM</span>
                  <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">open_in_new</span>
                </div>
                <h6 className="font-headline font-bold text-on-surface mb-2 text-sm">Grid Traveler Memoization</h6>
                <p className="text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed">
                  Efficiently calculate paths in an M x N grid using specialized recursion tree pruning...
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label font-bold rounded uppercase text-on-surface-variant">2D Array</span>
                  <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label font-bold rounded uppercase text-on-surface-variant">Efficiency</span>
                </div>
              </div>

              {/* Problem Item Locked */}
              <div className="p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10 relative opacity-60">
                <div className="absolute inset-0 flex items-center justify-center bg-surface-container-lowest/60 backdrop-blur-[2px] rounded-xl z-10 transition-opacity hover:opacity-0 cursor-not-allowed">
                  <div className="bg-surface-container-highest w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">lock</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[11px] font-bold text-error bg-error/10 px-2 py-0.5 rounded">HARD</span>
                </div>
                <h6 className="font-headline font-bold text-on-surface mb-2 text-sm">K-Partition Sum Problem</h6>
                <p className="text-[12px] text-on-surface-variant line-clamp-2 leading-relaxed">
                  Divide an array into K subsets with equal sum using backtrack-heavy recursion...
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-2 py-1 bg-surface border border-outline-variant/20 text-[9px] font-label font-bold rounded uppercase text-on-surface-variant/50">Backtracking</span>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 p-6 rounded-xl border border-primary/20 shadow-[0_0_30px_rgba(173,198,255,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl transform translate-x-12 -translate-y-12 group-hover:bg-primary/20 transition-all"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <span className="font-label font-bold text-[12px] uppercase tracking-widest text-primary">Mentor Insight</span>
              </div>
              <p className="text-sm text-primary/90 italic leading-relaxed relative z-10 font-mono">
                "You are repeating calculations in your last 3 recursion attempts. Try sketching the recursion tree to identify overlapping subproblems."
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
