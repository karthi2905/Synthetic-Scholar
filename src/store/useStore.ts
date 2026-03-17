import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface State {
  user: User | null;
  solvedProblems: number[];
  login: (user: User) => void;
  logout: () => void;
  markSolved: (id: number) => void;
}

export const useStore = create<State>((set) => ({
  user: { name: "Alex CodeMaster", email: "alex@example.com" },
  solvedProblems: [],
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  markSolved: (id) =>
    set((state) => ({
      solvedProblems: state.solvedProblems.includes(id)
        ? state.solvedProblems
        : [...state.solvedProblems, id],
    })),
}));
