"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import Editor, { DiffEditor, useMonaco } from "@monaco-editor/react";
import problems from "@/data/problems.json";
import { Play, Send, Lightbulb, ChevronLeft, CheckCircle2, XCircle, Zap, BarChart3, Code } from "lucide-react";
import Link from "next/link";

export default function Workspace() {
  const { id } = useParams();
  const router = useRouter();
  const { markSolved } = useStore();

  const problemStrid = Array.isArray(id) ? id[0] : id;
  const problem = problems.find((p) => p.id === parseInt(problemStrid || "1"));

  const [code, setCode] = useState(problem?.boilerplate || "// Write code here");
  const [output, setOutput] = useState<any[]>([]);
  const [running, setRunning] = useState(false);
  const [currentHintIndex, setCurrentHintIndex] = useState(-1);
  const [hintsRevealed, setHintsRevealed] = useState<string[]>([]);
  const [aiFeedback, setAiFeedback] = useState<any>(null);
  const [showOptimized, setShowOptimized] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  
  useEffect(() => {
    if (problem) {
      setCode(problem.boilerplate);
      setOutput([]);
      setHintsRevealed([]);
      setCurrentHintIndex(-1);
      setAiFeedback(null);
      setShowOptimized(false);
      setRecommendations([]);
    }
  }, [problem]);

  if (!problem) return <div className="text-white p-10">Problem not found.</div>;

  const handleRun = async (submit = false) => {
    setRunning(true);
    try {
      const res = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          code, 
          problem_id: problem.id,
          problem_description: problem.description,
          testcases: problem.testcases 
        }),
      });
      const data = await res.json();
      
      if (data.error) {
        setOutput([{ status: "error", logs: data.error }]);
      } else {
        setOutput(data.test_results || []);
        setAiFeedback(data.feedback);
        setRecommendations(data.recommendations || []);
        
        const allPassed = data.test_results?.every((r: any) => r.status === "passed");
        if (submit && allPassed) {
          markSolved(problem.id);
        }
      }
    } catch (e) {
      console.error(e);
      setOutput([{ status: "error", logs: "Failed to connect to execution engine." }]);
    }
    setRunning(false);
  };

  const allPassed = output.length > 0 && output.every((r) => r.status === "passed");

  return (
    <div className="flex flex-col h-screen bg-background text-on-surface font-body overflow-hidden">
      {/* Workspace Header */}
      <header className="h-14 border-b border-outline-variant/10 bg-surface-container-low flex items-center px-6 justify-between shrink-0 z-50">
        <div className="flex items-center gap-6">
          <Link href="/problems" className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant hover:text-primary transition-all duration-300 group">
            <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="font-headline font-bold text-on-surface tracking-tight">{problem.title}</h1>
            <span className={`px-2 py-0.5 rounded text-[10px] font-label uppercase tracking-widest border ${
              problem.difficulty === "Easy" ? "text-secondary border-secondary/20 bg-secondary/5" :
              problem.difficulty === "Medium" ? "text-tertiary border-tertiary/20 bg-tertiary/5" : "text-error border-error/20 bg-error/5"
            }`}>
              {problem.difficulty}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleRun(false)}
            disabled={running}
            className="flex items-center gap-2 px-4 py-2 bg-surface-container hover:bg-surface-container-high text-primary rounded-lg font-label text-[11px] uppercase tracking-widest font-bold transition-all disabled:opacity-50 border border-outline-variant/10"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            Run Code
          </button>
          <button
            onClick={() => handleRun(true)}
            disabled={running}
            className="flex items-center gap-2 px-6 py-2 bg-primary-container hover:bg-opacity-90 text-on-primary-container rounded-lg font-label text-[11px] uppercase tracking-widest font-bold transition-all shadow-lg shadow-primary-container/20 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            Submit
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel: Description & Feedback */}
        <div className="w-[400px] min-w-[350px] border-r border-outline-variant/10 bg-surface-container-low flex flex-col tonal-gradient">
          <div className="flex-1 overflow-y-auto p-8 hide-scrollbar">
            <div className="mb-8">
              <h2 className="text-xl font-black tracking-tight text-on-surface mb-4">Challenge Analysis</h2>
              <div className="text-on-surface-variant leading-relaxed font-body text-sm space-y-4" dangerouslySetInnerHTML={{ __html: problem.description.replace(/\n\n/g, '<br/><br/>') }} />
            </div>

            <div className="border-t border-outline-variant/10 pt-8 mt-4">
              <h3 className="text-sm font-bold flex items-center gap-2 mb-6 text-primary uppercase tracking-[0.1em] font-label">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
                AI Mentor Feedback
              </h3>
              
              {!aiFeedback && (
                <div className="p-6 bg-surface-container border border-outline-variant/10 rounded-xl text-on-surface-variant text-xs text-center">
                  <span className="material-symbols-outlined text-4xl block mb-2 opacity-20">analytics</span>
                  Run your code to initialize AI-powered feedback and hints.
                </div>
              )}

              {aiFeedback && (
                <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                  {/* General Feedback */}
                  <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl relative">
                    <div className="absolute -top-3 -left-3 bg-primary-container text-on-primary-container p-1 rounded-full">
                      <span className="material-symbols-outlined text-[16px]">info</span>
                    </div>
                    <p className="text-on-surface text-sm italic leading-relaxed">"{aiFeedback.feedback}"</p>
                  </div>

                  {/* Complexity */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-label font-bold uppercase text-on-surface-variant tracking-[0.2em] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">monitoring</span>
                      Efficiency Metrics
                    </h4>
                    <div className="p-4 bg-surface-container-high border border-outline-variant/10 rounded-xl shadow-inner">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[11px] font-label uppercase text-on-surface-variant tracking-widest">Complexity</span>
                        <span className="text-xs font-mono text-primary font-bold">{aiFeedback.complexity_analysis}</span>
                      </div>
                      <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden p-0.5 border border-outline-variant/5">
                        <div 
                          className="bg-primary h-full rounded-full transition-all duration-1000" 
                          style={{ width: `${aiFeedback.efficiency_score}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-[9px] font-label text-on-surface-variant/40 uppercase">Efficiency Score</span>
                        <span className="text-[9px] font-mono text-primary">{aiFeedback.efficiency_score}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Hints */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-label font-bold uppercase text-on-surface-variant tracking-[0.2em] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]">lightbulb</span>
                      Incremental Hints
                    </h4>
                    <div className="space-y-2">
                      {aiFeedback.hints?.map((hint: string, i: number) => (
                        <div key={i} className="p-4 bg-surface-container/50 border border-outline-variant/10 rounded-xl text-on-surface-variant text-[13px] leading-relaxed group hover:border-primary/30 transition-colors">
                          <span className="text-primary font-mono mr-2 opacity-50">{i + 1}.</span>
                          {hint}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Optimized Solution Toggle */}
                  <button
                    onClick={() => setShowOptimized(!showOptimized)}
                    className={`w-full py-4 rounded-xl text-[11px] font-label uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-3 border shadow-lg ${
                      showOptimized 
                      ? "bg-secondary text-on-secondary border-secondary shadow-secondary/20" 
                      : "bg-surface-container-highest text-primary border-outline-variant/10 hover:border-primary/50 shadow-primary/5"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{showOptimized ? "visibility_off" : "auto_fix_high"}</span>
                    {showOptimized ? "Hide Optimized Model" : "Visualize Optimal Model"}
                  </button>

                  {/* Recommendations */}
                  {recommendations.length > 0 && (
                    <div className="pt-8 border-t border-outline-variant/10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                      <h4 className="text-[10px] font-label font-bold uppercase text-on-surface-variant tracking-[0.2em] mb-4">Neural Path Recommendations</h4>
                      <div className="space-y-2">
                        {recommendations.map((rec, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-surface-container-lowest border border-outline-variant/5 rounded-lg text-[11px] text-on-surface-variant font-label transition-all hover:bg-surface-container">
                            <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
                            {rec}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel: Editor & Logs */}
        <div className="flex-1 flex flex-col bg-background">
          <div className="flex-1 relative border-b border-outline-variant/10">
            {showOptimized ? (
              <div className="h-full flex flex-col">
                <div className="flex justify-between items-center px-6 py-3 bg-surface-container-low border-b border-outline-variant/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">compare_arrows</span>
                    <span className="text-[10px] font-label font-bold uppercase text-on-surface-variant tracking-widest">Neural Structure Comparison</span>
                  </div>
                  <button onClick={() => setShowOptimized(false)} className="text-[10px] font-label uppercase tracking-widest text-primary hover:text-secondary transition-colors">Return to Editor</button>
                </div>
                <div className="flex-1">
                  <DiffEditor
                    height="100%"
                    language="python"
                    theme="vs-dark"
                    original={code}
                    modified={aiFeedback?.optimized_code || ""}
                    options={{
                      readOnly: true,
                      renderSideBySide: true,
                      minimap: { enabled: false },
                      fontSize: 14,
                      fontFamily: "JetBrains Mono",
                      lineHeight: 24,
                    }}
                  />
                </div>
              </div>
            ) : (
              <Editor
                height="100%"
                defaultLanguage="python"
                theme="vs-dark"
                value={code}
                onChange={(v) => setCode(v || "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 15,
                  fontFamily: "JetBrains Mono",
                  lineHeight: 26,
                  padding: { top: 24 },
                  scrollBeyondLastLine: false,
                  smoothScrolling: true,
                  cursorBlinking: "smooth",
                  cursorSmoothCaretAnimation: "on",
                  backgroundColor: "#0b1326"
                }}
              />
            )}
          </div>
          
          {/* Execution Results */}
          <div className="h-[300px] bg-surface-container-low flex flex-col shrink-0">
            <div className="px-6 py-3 border-b border-outline-variant/10 bg-surface-container-low flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">terminal</span>
                <span className="text-[10px] font-label font-bold uppercase text-on-surface-variant tracking-widest">System Output & Logs</span>
              </div>
              {output.length > 0 && (
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest border ${
                  allPassed ? "text-secondary border-secondary/20 bg-secondary/5" : "text-error border-error/20 bg-error/5"
                }`}>
                  <span className="material-symbols-outlined text-[14px]">
                    {allPassed ? "check_circle" : "error"}
                  </span>
                  {allPassed ? "System Validated" : "Verification Failed"}
                </div>
              )}
            </div>
            <div className="flex-1 overflow-y-auto p-6 bg-surface-container-lowest font-mono text-sm hide-scrollbar">
              {running && (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-primary animate-pulse">
                  <span className="material-symbols-outlined text-4xl animate-spin">sync</span>
                  <p className="font-label text-[11px] uppercase tracking-widest">Executing in Docker Sandbox...</p>
                </div>
              )}
              {!running && output.length === 0 && (
                <div className="text-on-surface-variant/30 h-full flex flex-col items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-5xl">code_off</span>
                  <p className="font-label text-[11px] uppercase tracking-widest">Waiting for sequence initiation...</p>
                </div>
              )}
              {!running && output.length > 0 && (
                <div className="space-y-4">
                  {output.map((res: any, i: number) => (
                    <div key={i} className={`p-5 rounded-xl border transition-all duration-300 ${
                      res.status === "passed" ? "bg-secondary/5 border-secondary/10 text-secondary" : 
                      res.status === "failed" ? "bg-error/5 border-error/10 text-error" : "bg-tertiary/5 border-tertiary/10 text-tertiary"
                    }`}>
                      <div className="flex items-center gap-3 mb-3 font-label text-[11px] uppercase tracking-widest font-bold">
                        <span className="material-symbols-outlined text-[18px]">
                          {res.status === "passed" ? "check_circle" : "cancel"}
                        </span>
                        Verification Case {i + 1}: {res.status}
                      </div>
                      {res.logs && (
                        <div className="bg-background/50 p-4 rounded-lg text-xs overflow-x-auto whitespace-pre-wrap font-mono mt-2 border border-outline-variant/5 text-on-surface-variant">
                          <span className="text-primary/50 mr-2 opacity-50">$ SYSTEM_LOG:</span>
                          {res.logs}
                        </div>
                      )}
                      {res.status !== "passed" && !res.logs && (
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div className="bg-background/40 p-3 rounded-lg border border-outline-variant/5">
                            <span className="text-[9px] font-label uppercase text-on-surface-variant/40 block mb-1">Expected Output</span>
                            <span className="text-xs font-mono">{res.expected}</span>
                          </div>
                          <div className="bg-background/40 p-3 rounded-lg border border-outline-variant/5">
                            <span className="text-[9px] font-label uppercase text-on-surface-variant/40 block mb-1">Received Output</span>
                            <span className="text-xs font-mono">{res.received}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
