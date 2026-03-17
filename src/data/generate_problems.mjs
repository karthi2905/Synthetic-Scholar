import fs from 'fs';

const problems = [];
let idCounter = 1;

// Helper to generate an array of numbers
function genArray(len, min, max) {
  return Array.from({length: len}, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// Helper to generate a random string
function genString(len) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({length: len}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// 1. Array Max
for (let i = 0; i < 50; i++) {
  const testcases = [];
  for (let t = 0; t < 10; t++) {
    const arr = genArray(Math.floor(Math.random() * 20) + 5, -100, 100);
    const ans = Math.max(...arr);
    testcases.push({ input: JSON.stringify([arr]), expected: JSON.stringify(ans) });
  }
  problems.push({
    id: idCounter++,
    title: `Find Max in Array ${i === 0 ? '' : `(Variant ${i})`}`,
    difficulty: i < 20 ? 'Easy' : (i < 40 ? 'Medium' : 'Hard'),
    category: 'Arrays',
    description: `Given a list of integers, return the maximum value. Your function should be named \`findMax\`.\n\n### Example\n\n\`findMax([1, 2, 3])\` should return \`3\`.`,
    boilerplate: `function findMax(arr) {\n  // Write your code here\n  \n}`,
    testcases,
    hints: [
      "Level 1: Concept hint - You need to iterate over the entire array to look at every element.",
      "Level 2: Loop hint - Set a variable to the first element and update it if you find a larger element.",
      "Level 3: Logic hint - Use Math.max or a simple if condition inside a loop."
    ]
  });
}

// 2. Reverse String
for (let i = 0; i < 50; i++) {
  const testcases = [];
  for (let t = 0; t < 10; t++) {
    const str = genString(Math.floor(Math.random() * 10) + 3);
    const ans = str.split('').reverse().join('');
    testcases.push({ input: JSON.stringify([str]), expected: JSON.stringify(ans) });
  }
  problems.push({
    id: idCounter++,
    title: `Reverse String ${i === 0 ? '' : `(Variant ${i})`}`,
    difficulty: i < 25 ? 'Easy' : 'Medium',
    category: 'Strings',
    description: `Given a string, return the reversed version of it. Your function should be named \`reverseString\`.\n\n### Example\n\n\`reverseString("hello")\` should return \`"olleh"\`.`,
    boilerplate: `function reverseString(str) {\n  // Write your code here\n  \n}`,
    testcases,
    hints: [
      "Level 1: Concept hint - A string can be treated as an array of characters.",
      "Level 2: Built-in methods - You can split the string into an array, reverse the array, and join it back.",
      "Level 3: Alternatively, you can iterate backwards and construct a new string."
    ]
  });
}

// 3. Mathematical Modulo (FizzBuzz type)
for (let i = 0; i < 50; i++) {
  const testcases = [];
  const mod1 = Math.floor(Math.random() * 5) + 2;
  const mod2 = mod1 + Math.floor(Math.random() * 5) + 1;
  const word1 = genString(4);
  const word2 = genString(4);
  for (let t = 0; t < 10; t++) {
    const num = Math.floor(Math.random() * 50) + 1;
    let ans = num.toString();
    if (num % mod1 === 0 && num % mod2 === 0) ans = word1 + word2;
    else if (num % mod1 === 0) ans = word1;
    else if (num % mod2 === 0) ans = word2;
    testcases.push({ input: JSON.stringify([num]), expected: JSON.stringify(ans) });
  }
  problems.push({
    id: idCounter++,
    title: `Custom Modulo Logic ${i === 0 ? '' : `(Variant ${i})`}`,
    difficulty: i < 15 ? 'Easy' : 'Medium',
    category: 'Math',
    description: `Write a function named \`customMod\` that takes an integer. If it's divisible by ${mod1} and ${mod2}, return "${word1}${word2}". If divisible only by ${mod1}, return "${word1}". If divisible only by ${mod2}, return "${word2}". Otherwise, return the integer as a string.`,
    boilerplate: `function customMod(n) {\n  // Write your code here\n  \n}`,
    testcases,
    hints: [
      "Level 1: Concept hint - Use the modulo operator (%) to check divisibility.",
      "Level 2: Logic hint - The order of if-conditions is important. Check the combination condition first.",
      "Level 3: Make sure you return a string in all cases."
    ]
  });
}

// 4. Two Sum
for (let i = 0; i < 50; i++) {
  const testcases = [];
  for (let t = 0; t < 10; t++) {
    const arr = genArray(Math.floor(Math.random() * 10) + 4, 1, 20);
    // Guarentee a solution
    const idx1 = Math.floor(Math.random() * arr.length);
    let idx2 = Math.floor(Math.random() * arr.length);
    while(idx1 === idx2) idx2 = Math.floor(Math.random() * arr.length);
    const target = arr[idx1] + arr[idx2];
    
    // Evaluate answer (we don't strictly require ordered, but let's test a simple version that requires returning any valid pair of indices). Because deterministic is easier, we tell them to return strictly smaller index first. Oh wait for eval we need exact match. Let's find the FIRST valid pair.
    let expected = [];
    outer: for (let a = 0; a < arr.length; a++) {
      for (let b = a + 1; b < arr.length; b++) {
        if (arr[a] + arr[b] === target) {
          expected = [a, b];
          break outer;
        }
      }
    }
    
    testcases.push({ input: JSON.stringify([arr, target]), expected: JSON.stringify(expected) });
  }
  problems.push({
    id: idCounter++,
    title: `Two Sum ${i === 0 ? '' : `(Variant ${i})`}`,
    difficulty: 'Medium',
    category: 'Arrays',
    description: `Given an array of integers and a target sum, return the indices of the two numbers that add up to the target. Assume exactly one valid solution exists, and return the answer as [\`index1\`, \`index2\`] where \`index1\` < \`index2\`. Your function should be named \`twoSum\`.\n\n### Example\n\n\`twoSum([2, 7, 11, 15], 9)\` should return \`[0, 1]\`.`,
    boilerplate: `function twoSum(nums, target) {\n  // Write your code here\n  \n}`,
    testcases,
    hints: [
      "Level 1: Concept hint - You can use two nested loops to check every pair.",
      "Level 2: Optimization hint - A more efficient approach uses a Hash Map (Object or Map in JS) to store elements as you iterate.",
      "Level 3: Data structure hint - While iterating, check if (target - current_element) exists in your map."
    ]
  });
}

// Multiply until 500
// Add more templates...
const targetCount = 500;
const templates = [
  { name: 'Factorial', cat: 'Math', fn: (n) => { let ans=1; for(let i=1; i<=n; i++) ans*=i; return ans; }, inGen: () => [Math.floor(Math.random() * 10) + 1] },
  { name: 'Sum Array', cat: 'Arrays', fn: (arr) => arr.reduce((a,b)=>a+b,0), inGen: () => [genArray(Math.floor(Math.random()*15)+3, 1, 100)] },
  { name: 'Count Vowels', cat: 'Strings', fn: (s) => (s.match(/[aeiou]/gi)||[]).length, inGen: () => [genString(Math.floor(Math.random()*20)+5)] },
  { name: 'Filter Evens', cat: 'Arrays', fn: (arr) => arr.filter(n => n%2===0), inGen: () => [genArray(Math.floor(Math.random()*20)+5, 1, 100)] },
  { name: 'Is Palindrome', cat: 'Strings', fn: (s) => s === s.split('').reverse().join(''), inGen: () => { const r = Math.random(); const s=genString(5); return r>0.5 ? [s+s.split('').reverse().join('')] : [genString(10)]; } },
  { name: 'Find Min', cat: 'Arrays', fn: (arr) => Math.min(...arr), inGen: () => [genArray(Math.floor(Math.random()*15)+5, -50, 50)] },
];

let tIdx = 0;
while (problems.length < targetCount) {
  const t = templates[tIdx % templates.length];
  const variant = Math.floor(problems.length / templates.length);
  const testcases = [];
  for (let c = 0; c < 10; c++) {
    const inputArgs = t.inGen();
    const ans = t.fn(...inputArgs);
    testcases.push({ input: JSON.stringify(inputArgs), expected: JSON.stringify(ans) });
  }
  
  problems.push({
    id: idCounter++,
    title: `${t.name} (Variant ${variant})`,
    difficulty: ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)],
    category: t.cat,
    description: `Implement the function for ${t.name}. The function should handle the inputs correctly. For arrays/strings, write the expected logic. Function name should be \`solution\`.`,
    boilerplate: `function solution(input) {\n  // Write your code here\n  \n}`,
    testcases,
    hints: [
      "Level 1: Focus on the input type. If it's an array, consider loops or higher order functions.",
      "Level 2: Pay attention to edge cases like empty inputs or zeroes.",
      "Level 3: Break the problem into smaller logical steps before writing code."
    ]
  });
  tIdx++;
}

fs.writeFileSync('problems.json', JSON.stringify(problems, null, 2));
console.log('Successfully generated ' + problems.length + ' problems');
