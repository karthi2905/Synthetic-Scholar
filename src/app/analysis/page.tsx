"use client";

import Image from "next/image";

export default function AnalysisPage() {
  return (
    <main className="flex flex-col flex-1 min-h-screen bg-surface">
      {/* TopAppBar Shell */}
      <header className="sticky top-0 h-16 bg-[#0b1326]/80 flex justify-between items-center px-8 z-40 backdrop-blur-xl shrink-0 border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <span className="font-headline tracking-tighter text-xl font-black text-[#adc6ff]">Synthetic Scholar</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <a className="text-[#adc6ff] font-bold border-b-2 border-[#adc6ff] py-1 transition-colors font-label text-[11px] uppercase tracking-widest" href="#">Analysis</a>
            <a className="text-[#c2c6d6] font-medium hover:text-[#adc6ff] transition-colors font-label text-[11px] uppercase tracking-widest" href="#">Resources</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#adc6ff]">local_fire_department</span>
            <div className="h-8 w-8 rounded bg-surface-container-highest flex items-center justify-center overflow-hidden">
              <span className="material-symbols-outlined text-[16px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Header Section */}
        <div className="mb-10 flex justify-between items-end mt-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">Status: Solved</span>
            <span className="h-1 w-1 rounded-full bg-outline-variant"></span>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Problem #412</span>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-on-surface font-headline">Optimization Analysis</h2>
        </div>
        <button className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label text-[12px] uppercase tracking-widest font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/10 cursor-pointer">
          Next Recommended
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Code Comparison Block */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/50 rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
            {/* Your Solution */}
            <div className="bg-surface-container-low flex flex-col">
              <div className="bg-surface-container-highest px-6 py-4 flex justify-between items-center">
                <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">Your Solution</span>
                <span className="font-label text-[10px] text-error px-2 py-0.5 bg-error-container/20 rounded">Unoptimized</span>
              </div>
              <div className="p-6 overflow-x-auto min-h-[250px]">
                <pre className="font-mono text-[13px] text-on-surface-variant">
                  <span className="text-tertiary">def</span> <span className="text-primary">twoSum</span>(nums, target):{"\n"}
                  {"    "}<span className="text-outline"># Nested loops approach</span>{"\n"}
                  {"    "}<span className="text-tertiary">for</span> i <span className="text-tertiary">in</span> range(len(nums)):{"\n"}
                  {"        "}<span className="text-tertiary">for</span> j <span className="text-tertiary">in</span> range(i + 1, len(nums)):{"\n"}
                  {"            "}<span className="text-tertiary">if</span> nums[i] + nums[j] == target:{"\n"}
                  {"                "}<span className="text-tertiary">return</span> [i, j]{"\n"}
                  {"    "}<span className="text-tertiary">return</span> []
                </pre>
              </div>
            </div>

            {/* AI Optimized */}
            <div className="bg-surface-container flex flex-col relative">
              <div className="bg-surface-container-highest px-6 py-4 flex justify-between items-center">
                <span className="font-label text-[11px] uppercase tracking-widest text-primary font-bold">AI Optimized Solution</span>
                <span className="font-label text-[10px] text-secondary px-2 py-0.5 bg-secondary-container/20 rounded">Optimal</span>
              </div>
              <div className="p-6 overflow-x-auto min-h-[250px]">
                <pre className="font-mono text-[13px] text-on-surface">
                  <span className="text-tertiary">def</span> <span className="text-primary">twoSum</span>(nums, target):{"\n"}
                  {"    "}<span className="text-outline"># Hash Map approach</span>{"\n"}
                  {"    "}prevMap = {} <span className="text-outline"># val : index</span>{"\n\n"}
                  {"    "}<span className="text-tertiary">for</span> i, n <span className="text-tertiary">in</span> enumerate(nums):{"\n"}
                  {"        "}diff = target - n{"\n"}
                  {"        "}<span className="text-tertiary">if</span> diff <span className="text-tertiary">in</span> prevMap:{"\n"}
                  {"            "}<span className="text-tertiary">return</span> [prevMap[diff], i]{"\n"}
                  {"        "}prevMap[n] = i{"\n"}
                  {"    "}<span className="text-tertiary">return</span> []
                </pre>
              </div>
            </div>
          </div>

          {/* Conceptual Insights */}
          <div className="bg-surface-container-low rounded-xl p-8 shadow-lg border border-outline-variant/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-container/20 rounded">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
              </div>
              <h3 className="font-headline font-bold text-xl tracking-tight">Conceptual Insights</h3>
            </div>
            <div className="space-y-4 text-on-surface-variant leading-relaxed max-w-3xl">
              <p>The primary bottleneck in your approach was the <span className="text-on-surface font-mono">O(N²)</span> time complexity resulting from nested loops. While intuitive, searching for the complement of each number requires a full pass through the remaining array.</p>
              <p>By using a <span className="text-secondary font-bold">Hash Map (Dictionary)</span>, we trade a small amount of space for significant speed. We can check for a value&apos;s existence in <span className="text-secondary font-bold">O(1)</span> average time. This reduces the overall complexity to a single pass, or <span className="text-on-surface font-mono">O(N)</span>.</p>
              
              <div className="bg-surface-container p-4 rounded-lg mt-4 flex items-start gap-4 border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-1 uppercase tracking-wide font-label">Key Takeaway</h4>
                  <p className="text-sm">Whenever you find yourself using a nested loop to search for values, consider if a Hash Map can provide a faster lookup path.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panels */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Performance Comparison Card */}
          <div className="bg-surface-container rounded-xl p-6 relative overflow-hidden group shadow-lg border border-outline-variant/10">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">speed</span>
            </div>
            
            <h3 className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant font-bold mb-6">Performance Comparison</h3>
            
            {/* Metric: Time */}
            <div className="mb-8 relative z-10">
              <div className="flex justify-between items-end mb-3">
                <span className="font-headline font-bold text-sm">Time Complexity</span>
                <div className="text-right">
                  <span className="block text-[10px] text-on-surface-variant uppercase tracking-tighter">Improvement</span>
                  <span className="text-secondary font-black text-lg leading-none">94%</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-mono">
                    <span className="text-on-surface-variant">Your Solution</span>
                    <span className="text-error">O(N²)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-error h-full w-[85%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-mono">
                    <span className="text-on-surface-variant">AI Optimized</span>
                    <span className="text-secondary">O(N)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-[15%] rounded-full shadow-[0_0_10px_rgba(78,222,163,0.4)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric: Space */}
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-3">
                <span className="font-headline font-bold text-sm">Space Complexity</span>
                <div className="text-right">
                  <span className="block text-[10px] text-on-surface-variant uppercase tracking-tighter">Trade-off</span>
                  <span className="text-tertiary font-black text-lg leading-none">+12MB</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-mono">
                    <span className="text-on-surface-variant">Your Solution</span>
                    <span className="text-on-surface">O(1)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-outline h-full w-[10%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] mb-1 font-mono">
                    <span className="text-on-surface-variant">AI Optimized</span>
                    <span className="text-tertiary">O(N)</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full w-[40%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Efficiency Meter (Visual) */}
          <div className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-outline-variant/10">
            <h4 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-4">Optimization Score</h4>
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <svg className="w-full h-full -rotate-90">
                <circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
                <circle className="text-secondary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364" strokeDashoffset="40" strokeWidth="8" strokeLinecap="round"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-on-surface leading-none font-headline">89</span>
                <span className="text-[10px] text-on-surface-variant uppercase font-label font-bold mt-1">Elite</span>
              </div>
            </div>
            <p className="text-[12px] text-on-surface-variant italic">&quot;This solution ranks in the top 11% of submissions for computational efficiency.&quot;</p>
          </div>

          {/* Next Recommended Mini-Widget */}
          <div className="bg-surface-container-highest rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-surface-container-high transition-colors border border-outline-variant/10 shadow-lg group">
            <div className="h-12 w-12 bg-primary-container/20 rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">psychology</span>
            </div>
            <div className="flex-1">
              <span className="block text-[10px] text-primary uppercase font-bold tracking-widest font-label mb-1">Next Challenge</span>
              <span className="block text-sm font-bold text-on-surface font-headline">3Sum: Triplets Search</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">chevron_right</span>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
