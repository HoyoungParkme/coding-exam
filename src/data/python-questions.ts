import type { Question } from './types';

export const PYTHON_QUESTIONS: Question[] = [
  // ── 1. 리스트 슬라이싱 ──
  {
    id: 'py_slicing',
    language: 'python',
    category: 'slicing',
    title: '리스트 슬라이싱과 역순',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'a = [1, 2, 3, 4, 5]',
      'print(a[1:4])',
      'print(a[::-1])',
    ],
    choices: [
      '[2, 3, 4]\\n[5, 4, 3, 2, 1]',
      '[1, 2, 3]\\n[5, 4, 3, 2, 1]',
      '[2, 3, 4]\\n[1, 2, 3, 4, 5]',
      '[2, 3, 4, 5]\\n[5, 4, 3, 2, 1]',
    ],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: '리스트 a = [1, 2, 3, 4, 5]가 생성됩니다. 인덱스는 0부터 시작합니다.',
        output: '',
        variables: { 'a': '[1, 2, 3, 4, 5]', 'a[0]': 1, 'a[1]': 2, 'a[2]': 3, 'a[3]': 4, 'a[4]': 5 },
      },
      {
        codeLine: 1,
        desc: 'a[1:4] → 인덱스 1부터 3까지(4 미포함). [2, 3, 4]를 출력합니다.',
        output: '[2, 3, 4]',
        variables: { 'a[1:4]': '[2, 3, 4]', '시작': 'index 1', '끝': 'index 3 (4미포함)' },
      },
      {
        codeLine: 2,
        desc: 'a[::-1] → 전체 리스트를 역순으로. [5, 4, 3, 2, 1]을 출력합니다.',
        output: '[2, 3, 4]\n[5, 4, 3, 2, 1]',
        variables: { 'a[::-1]': '[5, 4, 3, 2, 1]', 'step': '-1 (역방향)' },
      },
    ],
  },

  // ── 2. 딕셔너리 ──
  {
    id: 'py_dict',
    language: 'python',
    category: 'dict',
    title: '딕셔너리 접근과 메서드',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'd = {"a": 1, "b": 2, "c": 3}',
      'd["b"] = 5',
      'print(d.get("d", 0))',
      'print(d["b"])',
    ],
    choices: ['None\\n5', '0\\n5', '0\\n2', 'KeyError'],
    correctAnswer: 1,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: '딕셔너리 d가 생성됩니다. 키-값 쌍: {"a":1, "b":2, "c":3}',
        output: '',
        variables: { 'd["a"]': 1, 'd["b"]': 2, 'd["c"]': 3 },
      },
      {
        codeLine: 1,
        desc: 'd["b"] = 5 → 기존 키 "b"의 값을 2에서 5로 변경합니다.',
        output: '',
        variables: { 'd["a"]': 1, 'd["b"]': 5, 'd["c"]': 3 },
      },
      {
        codeLine: 2,
        desc: 'd.get("d", 0) → 키 "d"가 없으므로 기본값 0을 반환합니다. (KeyError 방지!)',
        output: '0',
        variables: { 'get("d", 0)': '키 없음 → 기본값 0' },
      },
      {
        codeLine: 3,
        desc: 'd["b"] → 변경된 값 5를 출력합니다.',
        output: '0\n5',
        variables: { 'd["b"]': 5 },
      },
    ],
  },

  // ── 3. 함수와 매개변수 ──
  {
    id: 'py_function',
    language: 'python',
    category: 'function_py',
    title: '기본값 인자와 가변 인자',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'def func(a, b=10):',
      '    return a + b',
      '',
      'print(func(3))',
      'print(func(3, 5))',
    ],
    choices: ['13\\n8', '3\\n8', '13\\n5', '3\\n15'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: '함수 func 정의: 매개변수 b에 기본값 10이 설정되어 있습니다.',
        output: '',
        variables: { 'a': '필수', 'b': '선택 (기본값 10)' },
      },
      {
        codeLine: 3,
        desc: 'func(3) 호출 → a=3, b는 전달하지 않았으므로 기본값 10 사용 → 3+10 = 13',
        output: '13',
        variables: { a: 3, b: 10, '반환값': 13 },
      },
      {
        codeLine: 4,
        desc: 'func(3, 5) 호출 → a=3, b=5 (기본값 무시) → 3+5 = 8',
        output: '13\n8',
        variables: { a: 3, b: 5, '반환값': 8 },
      },
    ],
  },

  // ── 4. 클래스 기초 ──
  {
    id: 'py_class',
    language: 'python',
    category: 'class_py',
    title: '클래스 초기화와 메서드',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'class Dog:',
      '    count = 0',
      '    def __init__(self, name):',
      '        self.name = name',
      '        Dog.count += 1',
      '',
      'd1 = Dog("Max")',
      'd2 = Dog("Buddy")',
      'print(d1.name, Dog.count)',
    ],
    choices: ['Max 1', 'Buddy 2', 'Max 2', 'Max 0'],
    correctAnswer: 2,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 1,
        desc: '클래스 변수 count = 0이 선언됩니다. 모든 인스턴스가 공유합니다.',
        output: '',
        variables: { 'Dog.count': 0 },
      },
      {
        codeLine: 6,
        desc: 'Dog("Max") → __init__ 호출. self.name = "Max", Dog.count가 0→1.',
        output: '',
        variables: { 'Dog.count': 1, 'd1.name': 'Max' },
      },
      {
        codeLine: 7,
        desc: 'Dog("Buddy") → __init__ 호출. self.name = "Buddy", Dog.count가 1→2.',
        output: '',
        variables: { 'Dog.count': 2, 'd1.name': 'Max', 'd2.name': 'Buddy' },
      },
      {
        codeLine: 8,
        desc: 'd1.name → "Max", Dog.count → 2. 클래스 변수는 공유되므로 2!',
        output: 'Max 2',
        variables: { 'd1.name': 'Max', 'Dog.count': 2 },
      },
    ],
  },

  // ── 5. 리스트 컴프리헨션 ──
  {
    id: 'py_comprehension',
    language: 'python',
    category: 'comprehension',
    title: '조건부 리스트 컴프리헨션',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'a = [x**2 for x in range(1, 6) if x % 2 == 1]',
      'print(a)',
    ],
    choices: ['[1, 4, 9, 16, 25]', '[1, 9, 25]', '[4, 16]', '[1, 3, 5]'],
    correctAnswer: 1,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: 'range(1,6) → [1, 2, 3, 4, 5]. 여기서 x%2==1인 홀수만 필터링합니다.',
        output: '',
        variables: { 'range': '[1, 2, 3, 4, 5]', '필터': 'x % 2 == 1 (홀수)' },
      },
      {
        codeLine: 0,
        desc: '홀수: [1, 3, 5]. 각각을 제곱합니다: 1²=1, 3²=9, 5²=25',
        output: '',
        variables: { '홀수': '[1, 3, 5]', '1²': 1, '3²': 9, '5²': 25 },
      },
      {
        codeLine: 1,
        desc: '결과 리스트 [1, 9, 25]를 출력합니다.',
        output: '[1, 9, 25]',
        variables: { a: '[1, 9, 25]' },
      },
    ],
  },

  // ── 6. 람다/map/filter ──
  {
    id: 'py_lambda',
    language: 'python',
    category: 'lambda',
    title: 'lambda와 map 함수',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'a = [1, 2, 3, 4]',
      'b = list(map(lambda x: x * 2, a))',
      'print(b)',
    ],
    choices: ['[1, 2, 3, 4]', '[2, 4, 6, 8]', '[1, 4, 9, 16]', '[3, 6, 9, 12]'],
    correctAnswer: 1,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: '리스트 a = [1, 2, 3, 4]가 생성됩니다.',
        output: '',
        variables: { a: '[1, 2, 3, 4]' },
      },
      {
        codeLine: 1,
        desc: 'map(lambda x: x*2, a) → 각 원소에 ×2를 적용합니다: 1→2, 2→4, 3→6, 4→8',
        output: '',
        variables: { '1×2': 2, '2×2': 4, '3×2': 6, '4×2': 8 },
      },
      {
        codeLine: 2,
        desc: 'list()로 변환 후 출력: [2, 4, 6, 8]',
        output: '[2, 4, 6, 8]',
        variables: { b: '[2, 4, 6, 8]' },
      },
    ],
  },

  // ── 7. 문자열 메서드 ──
  {
    id: 'py_str_method',
    language: 'python',
    category: 'str_method',
    title: 'split과 join 메서드',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      's = "hello world python"',
      'words = s.split()',
      'result = "-".join(words)',
      'print(result)',
    ],
    choices: ['hello world python', 'hello-world-python', 'h-e-l-l-o', 'hello world-python'],
    correctAnswer: 1,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: '문자열 s = "hello world python"이 생성됩니다.',
        output: '',
        variables: { s: '"hello world python"' },
      },
      {
        codeLine: 1,
        desc: 's.split() → 공백 기준으로 분리. ["hello", "world", "python"]',
        output: '',
        variables: { words: '["hello", "world", "python"]' },
      },
      {
        codeLine: 2,
        desc: '"-".join(words) → 리스트 요소들을 "-"로 연결합니다.',
        output: '',
        variables: { result: '"hello-world-python"' },
      },
      {
        codeLine: 3,
        desc: 'hello-world-python을 출력합니다.',
        output: 'hello-world-python',
        variables: { result: '"hello-world-python"' },
      },
    ],
  },

  // ── 8. 재귀 함수 ──
  {
    id: 'py_recursion',
    language: 'python',
    category: 'recursion_py',
    title: '재귀 함수 반환값 추적',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'def f(n):',
      '    if n <= 1:',
      '        return 1',
      '    return n * f(n - 1)',
      '',
      'print(f(4))',
    ],
    choices: ['4', '10', '24', '120'],
    correctAnswer: 2,
    visualizer: 'stack',
    steps: [
      {
        codeLine: 5,
        desc: 'f(4) 호출 → 4 * f(3)을 계산해야 합니다.',
        output: '',
        callStack: ['f(4)'],
        variables: { n: 4 },
      },
      {
        codeLine: 3,
        desc: 'f(3) 호출 → 3 * f(2)를 계산해야 합니다.',
        output: '',
        callStack: ['f(4)', 'f(3)'],
        variables: { n: 3 },
      },
      {
        codeLine: 3,
        desc: 'f(2) 호출 → 2 * f(1)을 계산해야 합니다.',
        output: '',
        callStack: ['f(4)', 'f(3)', 'f(2)'],
        variables: { n: 2 },
      },
      {
        codeLine: 2,
        desc: 'f(1) → n≤1이므로 1을 반환합니다. (기저 조건)',
        output: '',
        callStack: ['f(4)', 'f(3)', 'f(2)', 'f(1)→1'],
        variables: { n: 1, '반환': 1 },
      },
      {
        codeLine: 3,
        desc: 'f(2) = 2 × f(1) = 2 × 1 = 2 반환',
        output: '',
        callStack: ['f(4)', 'f(3)', 'f(2)→2'],
        variables: { 'f(2)': '2 × 1 = 2' },
      },
      {
        codeLine: 3,
        desc: 'f(3) = 3 × f(2) = 3 × 2 = 6 반환',
        output: '',
        callStack: ['f(4)', 'f(3)→6'],
        variables: { 'f(3)': '3 × 2 = 6' },
      },
      {
        codeLine: 5,
        desc: 'f(4) = 4 × f(3) = 4 × 6 = 24 → 최종 출력!',
        output: '24',
        callStack: ['f(4)→24'],
        variables: { 'f(4)': '4 × 6 = 24' },
      },
    ],
  },

  // ── 9. 튜플/세트 ──
  {
    id: 'py_tuple_set',
    language: 'python',
    category: 'tuple_set',
    title: '세트 연산 (합집합, 교집합)',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'a = {1, 2, 3, 4}',
      'b = {3, 4, 5, 6}',
      'print(a & b)',
      'print(a - b)',
    ],
    choices: ['{3, 4}\\n{1, 2}', '{1, 2, 3, 4, 5, 6}\\n{1, 2}', '{3, 4}\\n{5, 6}', '{1, 2}\\n{3, 4}'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: '세트 a = {1, 2, 3, 4}, b = {3, 4, 5, 6}이 생성됩니다.',
        output: '',
        variables: { a: '{1, 2, 3, 4}', b: '{3, 4, 5, 6}' },
      },
      {
        codeLine: 2,
        desc: 'a & b → 교집합: 양쪽 모두에 있는 원소 → {3, 4}',
        output: '{3, 4}',
        variables: { 'a & b': '{3, 4}', '의미': '교집합' },
      },
      {
        codeLine: 3,
        desc: 'a - b → 차집합: a에만 있고 b에는 없는 원소 → {1, 2}',
        output: '{3, 4}\n{1, 2}',
        variables: { 'a - b': '{1, 2}', '의미': '차집합' },
      },
    ],
  },

  // ── 10. 예외 처리 ──
  {
    id: 'py_exception',
    language: 'python',
    category: 'exception_py',
    title: 'try/except/finally 실행 흐름',
    questionText: '다음 Python 프로그램의 실행 결과로 알맞은 것은?',
    code: [
      'try:',
      '    x = 10 / 0',
      '    print("A")',
      'except ZeroDivisionError:',
      '    print("B")',
      'finally:',
      '    print("C")',
    ],
    choices: ['A\\nC', 'B\\nC', 'A\\nB\\nC', 'C'],
    correctAnswer: 1,
    visualizer: 'variable',
    steps: [
      {
        codeLine: 0,
        desc: 'try 블록 진입. 예외가 발생할 수 있는 코드를 실행합니다.',
        output: '',
        variables: { '실행 위치': 'try 블록' },
      },
      {
        codeLine: 1,
        desc: '10 / 0 → ZeroDivisionError 예외 발생! 이후 코드(print("A"))는 실행되지 않습니다.',
        output: '',
        variables: { '예외': 'ZeroDivisionError', 'print("A")': '실행 안 됨!' },
      },
      {
        codeLine: 4,
        desc: 'except ZeroDivisionError 블록으로 점프 → "B"를 출력합니다.',
        output: 'B',
        variables: { '실행 위치': 'except 블록' },
      },
      {
        codeLine: 6,
        desc: 'finally 블록은 예외 발생 여부와 관계없이 항상 실행됩니다 → "C" 출력.',
        output: 'B\nC',
        variables: { '실행 위치': 'finally 블록 (항상 실행!)' },
      },
    ],
  },
];
