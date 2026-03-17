import ast
import astor

class CodeAnalyzer(ast.NodeVisitor):
    def __init__(self):
        self.stats = {
            "loops": 0,
            "recursion": False,
            "built_in_calls": [],
            "complexity_score": 0,
            "patterns": [],
            "functions": []
        }
        self.current_function = None

    def visit_FunctionDef(self, node):
        self.stats["functions"].append(node.name)
        old_function = self.current_function
        self.current_function = node.name
        self.generic_visit(node)
        self.current_function = old_function

    def visit_For(self, node):
        self.stats["loops"] += 1
        self.stats["complexity_score"] += 1
        self.generic_visit(node)

    def visit_While(self, node):
        self.stats["loops"] += 1
        self.stats["complexity_score"] += 1
        self.generic_visit(node)

    def visit_Call(self, node):
        if isinstance(node.func, ast.Name):
            func_name = node.func.id
            self.stats["built_in_calls"].append(func_name)
            # Check for recursion
            if self.current_function and func_name == self.current_function:
                self.stats["recursion"] = True
                self.stats["patterns"].append("recursion")
        self.generic_visit(node)

    def analyze(self, code: str):
        try:
            tree = ast.parse(code)
            self.visit(tree)
            
            # Heuristic complexity estimation
            if self.stats["recursion"]:
                self.stats["complexity"] = "O(2^n) or O(n!)"
            elif self.stats["loops"] > 1:
                self.stats["complexity"] = f"O(n^{self.stats['loops']})"
            elif self.stats["loops"] == 1:
                self.stats["complexity"] = "O(n)"
            else:
                self.stats["complexity"] = "O(1)"
                
            return self.stats
        except Exception as e:
            return {"error": str(e)}

def get_analysis(code: str):
    analyzer = CodeAnalyzer()
    return analyzer.analyze(code)
