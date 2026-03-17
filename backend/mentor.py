import os
from openai import OpenAI
from typing import List, Dict

# In a real app, this would be an environment variable
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "your-key-here")

class AIMentor:
    def __init__(self, api_key: str = OPENAI_API_KEY):
        self.client = OpenAI(api_key=api_key) if api_key != "your-key-here" else None

    def generate_feedback(self, code: str, problem_description: str, test_results: Dict) -> Dict:
        """Generates AI feedback based on code, problem, and results."""
        prompt = f"""
        Problem: {problem_description}
        Code: {code}
        Test Results: {test_results}
        
        Provide feedback for this student. Focus on:
        1. Correctness (if test cases failed)
        2. Time/Space Complexity
        3. Better algorithmic approaches
        4. Incremental hints (don't reveal the whole answer at once)
        5. A sample optimized solution.
        
        Respond in JSON format with:
        {{
          "feedback": "overall comment",
          "hints": ["hint 1", "hint 2"],
          "optimized_code": "...",
          "complexity_analysis": "...",
          "efficiency_score": 0-100
        }}
        """
        
        if not self.client:
            # Mock feedback if no API key
            return {
                "feedback": "Your solution is a good start. However, the nested loops lead to O(n^2) complexity.",
                "hints": ["Consider using a hash map to store previously seen values.", "Can you solve this in a single pass?"],
                "optimized_code": "def solution(nums, target):\n    prev = {}\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in prev:\n            return [prev[diff], i]\n        prev[n] = i\n    return []",
                "complexity_analysis": "Current: O(n^2), Optimized: O(n)",
                "efficiency_score": 60
            }

        try:
            response = self.client.chat.completions.create(
                model="gpt-4o", # or gpt-3.5-turbo
                messages=[{"role": "user", "content": prompt}],
                response_format={"type": "json_object"}
            )
            import json
            return json.loads(response.choices[0].message.content)
        except Exception as e:
            return {"error": f"AI Error: {str(e)}"}

mentor = AIMentor()

def get_mentor_feedback(code: str, problem_description: str, test_results: Dict):
    return mentor.generate_feedback(code, problem_description, test_results)
