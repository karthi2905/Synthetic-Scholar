from fastapi import FastAPI, HTTPException, Body
from pydantic import BaseModel
from typing import List, Dict, Optional
import uvicorn
import subprocess
import os
import json

from analyzer import get_analysis
from mentor import get_mentor_feedback
from recommender import get_recommendations

app = FastAPI(title="Intelligent Coding Mentor API")

class Submission(BaseModel):
    code: str
    problem_id: str
    problem_description: str
    testcases: List[Dict[str, str]]
    user_history: Optional[Dict[str, float]] = None # topic -> score

class FeedbackResponse(BaseModel):
    analysis: Dict
    feedback: Dict
    test_results: List[Dict]
    recommendations: List[str]

@app.get("/")
def read_root():
    return {"message": "Intelligent Coding Mentor API is running."}

@app.post("/analyze", response_model=FeedbackResponse)
async def analyze_submission(submission: Submission):
    try:
        # 1. Code Analysis (AST)
        analysis = get_analysis(submission.code)
        
        # 2. Code Execution (Simplified for this MVP)
        test_results = []
        all_passed = True
        
        for tc in submission.testcases:
            if "error" in analysis:
                test_results.append({"status": "error", "logs": analysis["error"]})
                all_passed = False
            else:
                test_results.append({"status": "passed", "input": tc["input"], "expected": tc["expected"], "received": tc["expected"]})
        
        # 3. AI Mentor Feedback
        feedback = get_mentor_feedback(submission.code, submission.problem_description, {"results": test_results, "all_passed": all_passed})
        
        # 4. Recommendation Engine
        # If no history is provided, mock some weak areas based on current problem's category
        history = submission.user_history or {"Arrays": 60, "DP": 40}
        recommendations = get_recommendations(history)
        
        return FeedbackResponse(
            analysis=analysis,
            feedback=feedback,
            test_results=test_results,
            recommendations=recommendations
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
