import { create } from 'zustand';
import type { Language, Question } from '@/data/types';
import { C_QUESTIONS } from '@/data/c-questions';
import { PYTHON_QUESTIONS } from '@/data/python-questions';
import { JAVA_QUESTIONS } from '@/data/java-questions';

// ─── 전체 문제 목록 ───
export const ALL_QUESTIONS: Question[] = [
  ...C_QUESTIONS,
  ...PYTHON_QUESTIONS,
  ...JAVA_QUESTIONS,
];

// ─── Store 상태 타입 ───
interface AppState {
  // 테마
  theme: 'light' | 'dark';
  toggleTheme: () => void;

  // 현재 선택된 언어 탭
  activeLanguage: Language;
  setActiveLanguage: (lang: Language) => void;

  // 현재 선택된 문제
  selectedQuestionId: string | null;
  setSelectedQuestionId: (id: string | null) => void;

  // 뷰 모드
  viewMode: 'quiz' | 'simulation';
  setViewMode: (mode: 'quiz' | 'simulation') => void;

  // 퀴즈 상태
  selectedChoice: number | null;
  setSelectedChoice: (idx: number | null) => void;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;

  // 시뮬레이션 상태
  currentStepIdx: number;
  setCurrentStepIdx: (idx: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;

  // 사이드바 (모바일)
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;

  // 풀이 기록
  solvedQuestions: Set<string>;
  markSolved: (id: string) => void;

  // 초기화
  resetQuizState: () => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),

  activeLanguage: 'c',
  setActiveLanguage: (lang) =>
    set({ activeLanguage: lang, selectedQuestionId: null, viewMode: 'quiz', selectedChoice: null, showAnswer: false, currentStepIdx: 0, isPlaying: false }),

  selectedQuestionId: null,
  setSelectedQuestionId: (id) =>
    set({ selectedQuestionId: id, viewMode: 'quiz', selectedChoice: null, showAnswer: false, currentStepIdx: 0, isPlaying: false }),

  viewMode: 'quiz',
  setViewMode: (mode) => set({ viewMode: mode }),

  selectedChoice: null,
  setSelectedChoice: (idx) => set({ selectedChoice: idx }),
  showAnswer: false,
  setShowAnswer: (show) => set({ showAnswer: show }),

  currentStepIdx: 0,
  setCurrentStepIdx: (idx) => set({ currentStepIdx: idx }),
  isPlaying: false,
  setIsPlaying: (playing) => set({ isPlaying: playing }),

  sidebarOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  solvedQuestions: new Set(),
  markSolved: (id) =>
    set((s) => {
      const next = new Set(s.solvedQuestions);
      next.add(id);
      return { solvedQuestions: next };
    }),

  resetQuizState: () =>
    set({ viewMode: 'quiz', selectedChoice: null, showAnswer: false, currentStepIdx: 0, isPlaying: false }),
}));
