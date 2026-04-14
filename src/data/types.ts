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
  codeLine: number;
  desc: string;
  output: string;
  memory?: (number | string | null)[];
  memoryLabels?: string[];
  pointerIdx?: number | null;
  activeIdx?: number | null;
  callStack?: string[];
  staticVars?: Record<string, number | string>;
  heapObjects?: { name: string; fields: Record<string, number | string> }[];
  highlightObj?: string | null;
  variables?: Record<string, number | string | boolean | null>;
}

// ─── 카테고리 (소분류) ───
export interface Category {
  id: string;
  name: string;
  icon?: string;
  conceptTitle?: string;
  conceptDesc?: string;
  conceptPoints?: string[]; // 요점들 (애니메이션용)
  conceptCode?: string;     // 핵심 예제 코드
}

// ─── 문제 1건 ───
export interface Question {
  id: string;
  language: Language;
  category: string;
  title: string;
  questionText: string;
  code: string[];
  choices: string[];
  correctAnswer: number;
  visualizer: VisualizerType;
  steps: Step[];
}

// ─── 언어별 카테고리 맵 (인강 커리큘럼 기준) ───
export const CATEGORIES: Record<Language, Category[]> = {
  c: [
    { 
      id: 'c_io', name: '입출력 함수 & 연산자', icon: '🖨️',
      conceptTitle: 'C언어의 시작: 입출력과 기본 연산',
      conceptDesc: 'printf, scanf 함수를 통한 표준 입출력과 증감 연산자(++, --)의 전위/후위 차이를 이해하는 파트입니다.',
      conceptPoints: [
        '전위 연산자(++a): 변수 값을 먼저 1 증가시킨 뒤 연산에 참여합니다.',
        '후위 연산자(a++): 현재 값을 먼저 연산에 사용한 뒤 변수 값을 1 증가시킵니다.',
        'printf 포맷 지정자: %d(정수), %f(실수), %c(문자), %s(문자열)'
      ],
      conceptCode: 'int a = 5;\nint b = a++; // b는 5, a는 6이 됨\nint c = ++a; // a는 7, c도 7이 됨'
    },
    { 
      id: 'c_ctrl', name: '제어문 & 반복문', icon: '🔁',
      conceptTitle: '흐름 다루기: 조건과 반복',
      conceptDesc: 'if, switch 제어문과 for, while, do~while 반복문의 실행 흐름을 추적합니다.',
      conceptPoints: [
        'break: 속해 있는 가장 가까운 반복문을 즉시 탈출합니다.',
        'continue: 반복문의 나머지 코드를 건너뛰고 다음 조건/증감식으로 바로 넘어갑니다.',
        'do~while: 조건과 무관하게 무조건 1회는 코드를 실행하는 반복문입니다.'
      ],
      conceptCode: 'for(int i=0; i<5; i++) {\n    if(i==2) continue;\n    printf("%d", i);\n}'
    },
    { 
      id: 'c_scope', name: '함수와 변수의 유효범위', icon: '📦',
      conceptTitle: '지역/전역 변수 그리고 재귀 호출',
      conceptDesc: '변수의 생명 주기와 재귀 함수가 Stack 메모리에 쌓이는 원리를 학습합니다.',
      conceptPoints: [
        '지역 변수: 함수 내부에서 선언되며 함수가 종료되면 메모리에서 소멸합니다.',
        '전역 변수: 프로그램과 생명 주기를 함께하며 어디서든 접근 가능합니다.',
        '재귀 함수: 자기 자신을 다시 호출하는 함수로, 반드시 기저 조건(종료 조건)이 필요합니다.'
      ]
    },
    { id: 'c_arr1', name: '배열과 포인터 - 1차원 배열', icon: '📊', conceptTitle: '1차원 배열', conceptDesc: '동일한 타입의 데이터가 연속된 메모리에 저장되는 구조입니다.', conceptPoints: ['배열의 이름은 배열의 시작 주소(&arr[0])를 의미합니다.'] },
    { id: 'c_arr2', name: '배열과 포인터 - 2차원 배열', icon: '🧮', conceptTitle: '2차원 배열', conceptDesc: '1차원 배열의 배열. 메모리 상에서는 1차원으로 연속적으로 저장됩니다.', conceptPoints: ['arr[i][j] 는 다차원 논리적 구조를 제공합니다.'] },
    { id: 'c_ptr_arr', name: '배열과 포인터 - 포인터 배열 등', icon: '🎯', conceptTitle: '포인터 배열', conceptDesc: '메모리 주소(포인터)들을 배열로 관리하는 기법.', conceptPoints: [] },
    { id: 'c_dbl_ptr', name: '배열과 포인터 - 이중 포인터', icon: '🪄', conceptTitle: '이중 포인터 (**)', conceptDesc: '포인터 변수의 주소를 저장하는 포인터입니다.', conceptPoints: [] },
    { id: 'c_struct_arr', name: '구조체와 공용체 - 구조체 배열', icon: '🧱', conceptTitle: '구조체 기초', conceptDesc: '서로 다른 타입의 변수들을 묶어 새로운 자료형을 만듭니다.', conceptPoints: [] },
    { id: 'c_struct_ptr', name: '구조체와 공용체 - 구조체 포인터', icon: '🏹', conceptTitle: '구조체 포인터 (->)', conceptDesc: '포인터를 통해 구조체 멤버에 접근할 때는 -> 연산자를 사용합니다.', conceptPoints: [] },
    { id: 'c_funcs', name: 'C언어 주요 함수', icon: '⚙️', conceptTitle: '표준 라이브러리', conceptDesc: '자주 사용하는 C 표준 함수 (string.h 등)', conceptPoints: [] },
  ],
  java: [
    { 
      id: 'j_constructor', name: '클래스와 객체 - 생성자', icon: '🏗️',
      conceptTitle: '객체의 설계도: 생성자',
      conceptDesc: '객체가 생성될 때(new) 자동으로 호출되어 멤버 변수를 초기화하는 역할을 합니다.',
      conceptPoints: [
        '메서드 이름이 클래스 이름과 동일하며 반환 타입이 없습니다.',
        'this(): 같은 클래스 내의 다른 오버로딩된 생성자를 연쇄 호출할 때 사용합니다.'
      ]
    },
    { 
      id: 'j_super', name: '상속과 생성자 - 생성자 호출', icon: '🧬',
      conceptTitle: '상속과 super()',
      conceptDesc: '자식 객체가 생성될 때는 반드시 부모 객체의 생성자가 먼저 호출됩니다.',
      conceptPoints: [
        '자식 생성자의 첫 줄에는 보이지 않아도 부모의 기본 생성자를 호출하는 super()가 삽입됩니다.'
      ]
    },
    { 
      id: 'j_overload', name: '다형성 - 메서드 오버로딩', icon: '⚖️',
      conceptTitle: '메서드 오버로딩',
      conceptDesc: '한 클래스 내에서 같은 이름의 메서드를 파라미터(매개변수)만 다르게 여러 개 정의하는 것',
      conceptPoints: ['매개변수의 개수나 타입이 달라야 성립합니다. (반환 타입만 다른 것은 불가)']
    },
    { 
      id: 'j_override', name: '다형성 - 메서드 오버라이딩', icon: '🎭',
      conceptTitle: '메서드 오버라이딩 (재정의)',
      conceptDesc: '부모 클래스로부터 상속받은 메서드를 자식 클래스에서 내용을 재정의하는 것입니다.',
      conceptPoints: [
        '다형성의 핵심. Parent obj = new Child(); 와 같이 업캐스팅 후 obj.show() 호출 시 동적 바인딩에 의해 Child의 show()가 실행됩니다.'
      ]
    },
    { id: 'j_hiding', name: '다형성 - 하이딩', icon: '👻', conceptTitle: '변수 하이딩', conceptDesc: '메서드는 실제 객체를 따라가지만 변수는 참조 타입을 따라갑니다.', conceptPoints: [] },
    { id: 'j_static', name: 'static 변수와 메서드', icon: '📌', conceptTitle: 'Static (정적)', conceptDesc: '클래스 로딩 시 생성되어 모든 인스턴스가 공유하는 공용 메모리.', conceptPoints: [] },
    { id: 'j_exception', name: '예외처리', icon: '🛡️', conceptTitle: 'try-catch', conceptDesc: '비정상 종류를 막기 위한 예외 처리.', conceptPoints: [] },
    { id: 'j_abstract', name: '추상 클래스 / Interface', icon: '🧩', conceptTitle: '추상화', conceptDesc: '구현을 강제하고 다중 상속 효과를 위한 Interface.', conceptPoints: [] },
    { id: 'j_lambda', name: '람다식, 제네릭, 객체 비교', icon: '⚡', conceptTitle: '모던 자바 문법', conceptDesc: '컬렉션과 화살표 함수 등', conceptPoints: [] },
    { id: 'j_string', name: '문자열 메서드', icon: '🔤', conceptTitle: 'String 클래스', conceptDesc: '객체 주소 일치(==)와 내용 일치(equals)의 차이.', conceptPoints: [] },
  ],
  python: [
    { 
      id: 'p_basic', name: '파이썬 문법 기초', icon: '🐍',
      conceptTitle: 'Python 기초 연산',
      conceptDesc: '다중 할당(Tuple Unpacking) 및 스왑 등 직관적인 문법을 다룹니다.',
      conceptPoints: ['a, b = b, a 형태로 임시 변수 없이 값을 교환할 수 있습니다.']
    },
    { 
      id: 'p_str', name: '파이썬 문자열 처리', icon: '✂️',
      conceptTitle: '강력한 Slicing',
      conceptDesc: '인덱스를 자유롭게 다루는 파이썬의 슬라이싱 기법.',
      conceptPoints: ['list[start:end:step]: start부터 end미만까지 step간격으로 추출 (음수 인덱스 지원)']
    },
    { id: 'p_dict', name: '파이썬 자료구조 - Dictionary', icon: '📖', conceptTitle: 'Dictionary', conceptDesc: 'K-V 자료 주고', conceptPoints: [] },
    { id: 'p_set', name: '파이썬 자료구조 - SET', icon: '⭕', conceptTitle: 'Set', conceptDesc: '중복을 허용하지 않고 순서가 없는 자료형', conceptPoints: [] },
    { id: 'p_tuple', name: '파이썬 자료구조 - Tuple', icon: '🔒', conceptTitle: 'Tuple', conceptDesc: '생성 후 요소 변경(수정/삭제)이 불가능한 컬렉션', conceptPoints: [] },
    { id: 'p_global', name: '파이썬 함수 - 전역변수', icon: '🌐', conceptTitle: '전역변수', conceptDesc: '함수 내부의 global 예약어', conceptPoints: [] },
    { id: 'p_comp', name: '리스트 컴프리헨션', icon: '🚀', conceptTitle: '리스트 컴프리헨션', conceptDesc: '간결한 배열 필터 및 생성', conceptPoints: [] },
    { id: 'p_lambda', name: '람다 함수', icon: '🪝', conceptTitle: '익명 함수 Lambda', conceptDesc: 'lambda 인자: 리턴값', conceptPoints: [] },
    { id: 'p_closure', name: '클로저', icon: '🔐', conceptTitle: 'Closure', conceptDesc: '외부 변수를 기억하는 내부 함수', conceptPoints: [] },
    { id: 'p_print', name: '파이썬 출력', icon: '🖨️', conceptTitle: '다양한 print', conceptDesc: 'end, sep 파라미터', conceptPoints: [] },
  ],
};

export const LANGUAGE_INFO: Record<Language, { label: string; color: string; icon: string }> = {
  c:      { label: 'C',      color: '#3b82f6', icon: '🔧' },
  python: { label: 'Python', color: '#f59e0b', icon: '🐍' },
  java:   { label: 'Java',   color: '#ef4444', icon: '☕' },
};
