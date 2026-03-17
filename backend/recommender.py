from typing import List, Dict

class RecommendationEngine:
    def __init__(self):
        # A simple knowledge graph mapping topics to problem types
        self.knowledge_graph = {
            "Arrays": ["Two Sum", "Max Subarray", "Rotate Array"],
            "Strings": ["Reverse String", "Valid Palindrome", "Longest Substr"],
            "DP": ["Climbing Stairs", "Coin Change", "Longest Increasing Subsequence"],
            "Graphs": ["Number of Islands", "Course Schedule", "Clone Graph"]
        }

    def get_recommendations(self, performance_history: Dict) -> List[str]:
        """Suggests problems based on weak areas."""
        # Simple logic: if efficiency or accuracy is low in a category, suggest more
        recommendations = []
        for topic, score in performance_history.items():
            if score < 70:
                recommendations.extend(self.knowledge_graph.get(topic, []))
        
        return recommendations[:3] # Return top 3

recommender = RecommendationEngine()

def get_recommendations(history: Dict):
    return recommender.get_recommendations(history)
