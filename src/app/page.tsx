"use client";

import Image from "next/image";

export default function ProblemsPage() {
  return (
    <main className="flex flex-col w-full h-full relative bg-surface">
      {/* TopAppBar Context */}
      <header className="h-16 flex justify-between items-center w-full px-8 bg-[#0b1326] backdrop-blur-xl bg-opacity-60 z-40 shrink-0">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-black text-[#adc6ff] tracking-tighter">042. Binary Tree Inversion</h2>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase rounded tracking-wider">
              Medium
            </span>
            <span className="px-2 py-0.5 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase rounded tracking-wider">
              Tree Logic
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold z-10">
              <span className="material-symbols-outlined text-[16px]">person</span>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold z-0">
              +12
            </div>
          </div>
          <span className="material-symbols-outlined text-[#adc6ff]">local_fire_department</span>
        </div>
      </header>

      {/* Editor Interface Layout */}
      <div className="flex flex-grow overflow-hidden">
        {/* Left Panel: Problem Description */}
        <section className="w-1/3 bg-surface-container-low overflow-y-auto p-8 flex flex-col gap-8 scrollbar-hide">
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-bold text-on-surface">Description</h3>
            <p className="text-on-surface-variant leading-relaxed font-light">
              Given the <code className="bg-surface-container-highest px-1.5 py-0.5 rounded text-primary font-mono text-sm">root</code> of a binary tree, invert the tree, and return its root.
            </p>
            <p className="text-on-surface-variant leading-relaxed font-light">
              To invert a binary tree, for every node in the tree, its left and right children are swapped.
            </p>
          </div>
          {/* Example Bento Card */}
          <div className="bg-surface-container p-6 rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary">Example 1</span>
              <span className="material-symbols-outlined text-sm text-outline cursor-pointer hover:text-primary">content_copy</span>
            </div>
            <div className="flex justify-center py-4">
              <div className="relative flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-bold text-on-primary-container mb-6">4</div>
                <div className="flex gap-12">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant text-sm font-mono">2</div>
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant text-sm font-mono">7</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold text-on-surface-variant w-16">Input:</span>
                <span className="text-xs font-mono text-primary">root = [4,2,7,1,3,6,9]</span>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold text-on-surface-variant w-16">Output:</span>
                <span className="text-xs font-mono text-secondary">[4,7,2,9,6,3,1]</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-bold text-on-surface">Constraints</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 shrink-0"></span>
                <span className="text-sm text-on-surface-variant font-mono">The number of nodes in the tree is in the range [0, 100].</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full mt-2 shrink-0"></span>
                <span className="text-sm text-on-surface-variant font-mono">-100 &lt;= Node.val &lt;= 100</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Right Panel: Code Editor */}
        <section className="flex-grow flex flex-col bg-surface-container">
          {/* Editor Toolbar */}
          <div className="h-12 flex items-center justify-between px-6 bg-surface-container-high shrink-0">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 rounded text-sm font-label font-medium text-on-surface cursor-pointer hover:bg-surface-variant transition-colors">
                <span className="material-symbols-outlined text-sm text-secondary">terminal</span>
                Python 3
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
              <div className="h-4 w-px bg-outline-variant"></div>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">settings</span>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors font-label text-[11px] uppercase tracking-widest">
                <span className="material-symbols-outlined text-lg">restart_alt</span>
                Reset
              </button>
            </div>
          </div>

          {/* Actual Code Area */}
          <div className="flex-grow flex font-mono text-sm relative overflow-hidden">
            {/* Line Numbers */}
            <div className="w-12 bg-surface-container-high flex flex-col items-center pt-6 text-outline font-light select-none">
              {[...Array(11)].map((_, i) => (
                <span key={i + 1}>{i + 1}</span>
              ))}
            </div>
            {/* Code Buffer */}
            <div className="flex-grow pt-6 px-6 bg-[#0b1326] relative text-on-surface">
              <div className="mb-1"><span className="text-primary">class</span> <span className="text-tertiary">Solution</span>:</div>
              <div className="mb-1 ml-4"><span className="text-primary">def</span> <span className="text-tertiary">invertTree</span>(self, root: Optional[TreeNode]) -&gt; Optional[TreeNode]:</div>
              <div className="mb-1 ml-8"><span className="text-outline"># Recursive approach for clarity</span></div>
              <div className="mb-1 ml-8"><span className="text-primary">if not</span> root:</div>
              <div className="mb-1 ml-12"><span className="text-primary">return</span> <span className="text-primary">None</span></div>
              <div className="mb-1 ml-8">&nbsp;</div>
              <div className="mb-1 ml-8"><span className="text-outline"># Swap left and right children</span></div>
              <div className="mb-1 ml-8">root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)</div>
              <div className="mb-1 ml-8">&nbsp;</div>
              <div className="mb-1 ml-8"><span className="text-primary">return</span> root</div>
              {/* Cursor Emulation */}
              <div className="absolute top-[260px] left-[70px] w-0.5 h-5 bg-primary animate-pulse hidden"></div>
            </div>

            {/* AI Hint Floating Button */}
            <div className="absolute bottom-6 right-6 flex flex-col items-end gap-3 pointer-events-none group z-10">
              {/* Hint Popover (Simulated expanded state) */}
              <div className="bg-surface-container-highest/90 backdrop-blur-xl p-4 rounded-lg shadow-2xl border-b-2 border-primary pointer-events-auto max-w-xs transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Incremental Hint</span>
                </div>
                <p className="text-xs text-on-surface leading-relaxed">
                  Consider that for any node, inverting its subtree is equivalent to swapping its left and right children after recursively inverting those children.
                </p>
              </div>
              <button className="pointer-events-auto w-12 h-12 rounded-full bg-primary text-on-primary-container flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95">
                <span className="material-symbols-outlined">lightbulb</span>
              </button>
            </div>
          </div>

          {/* Footer / CTA Bar */}
          <footer className="h-16 bg-[#131b2e] flex items-center justify-between px-8 shrink-0">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Time Complexity</span>
                <span className="text-xs font-mono text-secondary">O(n) Optimal</span>
              </div>
              <div className="h-8 w-px bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Space Complexity</span>
                <span className="text-xs font-mono text-secondary">O(h)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-surface-container-highest text-primary font-label text-[11px] uppercase tracking-widest font-bold rounded-lg hover:bg-surface-bright transition-all cursor-pointer">
                Run Code
              </button>
              <button className="px-8 py-2 bg-secondary-container text-on-secondary-container font-label text-[11px] uppercase tracking-widest font-black rounded-lg hover:opacity-90 shadow-lg shadow-secondary-container/20 transition-all cursor-pointer">
                Submit Solution
              </button>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
