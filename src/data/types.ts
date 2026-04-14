// ─── 언어 구분 ───
export type Language = 'c' | 'python' | 'java';

// ─── 시각화 유형 ───
export type VisualizerType =
  | 'memory'    // 메모리 셀 + 포인터 (C 포인터/배열/동적메모리)
  | 'stack'     // 함수 호출 스택 (재귀)
  | 'object'    // 객체/힙/Static 영역 (Java)
  | 'variable'  // 변수 테이블 (범용)
  | 'console';  // 콘솔 출력 전용

// ─── 시뮬레이션 1단계(Step) ───
export interface Step {
  /** 현재 하이라이트할 코드 라인 인덱스 (0-based) */
  codeLine: number;
  /** 이 단계에서 보여줄 설명 (한국어) */
  desc: string;
  /** 콘솔 출력 (누적) */
  output: string;

  // ── Memory Visualizer 전용 ──
  memory?: (number | string | null)[];
  memoryLabels?: string[];
  pointerIdx?: number | null;
  activeIdx?: number | null;

  // ── Stack Visualizer 전용 ──
  callStack?: string[];

  // ── Object Visualizer 전용 ──
  staticVars?: Record<string, number | string>;
  heapObjects?: { name: string; fields: Record<string, number | string> }[];
  highlightObj?: string | null;

  // ── Variable Table 전용 ──
  variables?: Record<string, number | string | boolean | null>;
}

// ─── 카테고리 (소분류) ───
export interface Category {
  id: string;
  name: string;
}

// ─── 문제 1건 ───
export interface Question {
  id: string;
  language: Language;
  category: string;       // 소분류 id
  title: string;
  questionText: string;
  code: string[];
  choices: string[];
  correctAnswer: number;  // 0-based index
  visualizer: VisualizerType;
  steps: Step[];
}

// ─── 언어별 카테고리 맵 ───
export const CATEGORIES: Record<Language, Category[]> = {
  c: [
    { id: 'pointer',      name: '포인터 기초' },
    { id: 'array',        name: '배열과 포인터' },
    { id: 'struct',       name: '구조체' },
    { id: 'string',       name: '문자열 처리' },
    { id: 'recursion_c',  name: '재귀 함수' },
    { id: 'bitwise',      name: '비트 연산' },
    { id: 'macro',        name: '전처리기/매크로' },
    { id: 'casting',      name: '형변환' },
    { id: 'dynamic_mem',  name: '동적 메모리' },
    { id: 'function_c',   name: '함수와 매개변수' },
  ],
  python: [
    { id: 'slicing',       name: '리스트 슬라이싱' },
    { id: 'dict',          name: '딕셔너리' },
    { id: 'function_py',   name: '함수와 매개변수' },
    { id: 'class_py',      name: '클래스 기초' },
    { id: 'comprehension', name: '리스트 컴프리헨션' },
    { id: 'lambda',        name: '람다/map/filter' },
    { id: 'str_method',    name: '문자열 메서드' },
    { id: 'recursion_py',  name: '재귀 함수' },
    { id: 'tuple_set',     name: '튜플/세트' },
    { id: 'exception_py',  name: '예외 처리' },
  ],
  java: [
    { id: 'class_java',      name: '클래스와 객체' },
    { id: 'inheritance',      name: '상속' },
    { id: 'overriding',       name: '오버라이딩' },
    { id: 'overloading',      name: '오버로딩' },
    { id: 'abstract',         name: '추상 클래스' },
    { id: 'interface',        name: '인터페이스' },
    { id: 'static_java',      name: 'Static 변수/메서드' },
    { id: 'exception_java',   name: '예외 처리' },
    { id: 'collection',       name: '컬렉션' },
    { id: 'polymorphism',     name: '다형성' },
  ],
};

// ─── 언어 표시 정보 ───
export const LANGUAGE_INFO: Record<Language, { label: string; color: string; icon: string }> = {
  c:      { label: 'C',      color: '#3b82f6', icon: '🔧' },
  python: { label: 'Python', color: '#f59e0b', icon: '🐍' },
  java:   { label: 'Java',   color: '#ef4444', icon: '☕' },
};
