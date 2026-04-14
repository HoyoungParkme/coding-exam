import type { Question } from './types';

export const PYTHON_QUESTIONS: Question[] = [
  // 1. 파이썬 문법 기초
  {
    id: 'p_basic_1',
    language: 'python',
    category: 'p_basic',
    title: '동적 자료형과 스왑 연산',
    questionText: '다음 파이썬 코드의 실행 결과는?',
    code: [
      'a, b = 10, 20',
      'a, b = b, a',
      'print(a, b)',
    ],
    choices: ['20 10', '10 20', '20 20', '10 10'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'a에 10, b에 20 할당.', output: '', variables: { a: 10, b: 20 } },
      { codeLine: 1, desc: '파이썬의 다중 할당(Tuple Unpacking) 기능으로 a와 b의 값을 서로 스왑(교환)합니다.', output: '', variables: { a: 20, b: 10 } },
      { codeLine: 2, desc: '교환된 결과 20 10 을 출력합니다.', output: '20 10', variables: {} },
    ],
  },
  {
    id: 'p_basic_2',
    language: 'python',
    category: 'p_basic',
    title: '다중 변수 동일 값 할당',
    questionText: '결과는?',
    code: [
      'x = y = z = 5',
      'x += 2',
      'y -= 1',
      'print(x, y, z)'
    ],
    choices: ['7 4 5', '5 5 5', '7 4 7', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'x, y, z 모두 5를 가리킵니다. (Call by Value 형태처럼 작동)', output: '', variables: { x: 5, y: 5, z: 5 } },
      { codeLine: 1, desc: 'x만 7로 변경.', output: '', variables: { x: 7, y: 5, z: 5 } },
      { codeLine: 2, desc: 'y만 4로 변경.', output: '', variables: { x: 7, y: 4, z: 5 } },
      { codeLine: 3, desc: '7 4 5 출력.', output: '7 4 5', variables: {} },
    ],
  },
  {
    id: 'p_basic_3',
    language: 'python',
    category: 'p_basic',
    title: '동적 타이핑 특성',
    questionText: '에러가 발생하는가?',
    code: [
      'v = 10',
      'v = "Hello"',
      'print(v)'
    ],
    choices: ['Hello', '컴파일 에러', '10', '런타임 에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '동적 타이핑. 참조(가리키는 대상)가 10.', output: '', variables: { v: 10 } },
      { codeLine: 1, desc: '이름 v가 문자열 "Hello"를 새롭게 가리키게 되어 기존 10은 무시됩니다.', output: '', variables: { v: '"Hello"' } },
      { codeLine: 2, desc: 'Hello가 출력됨.', output: 'Hello', variables: {} },
    ],
  },
  {
    id: 'p_basic_4',
    language: 'python',
    category: 'p_basic',
    title: 'id() 함수 기초',
    questionText: '결과는?',
    code: [
      'a = 10',
      'b = 10',
      'print(a is b)'
    ],
    choices: ['True', 'False', '1', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'a가 정수 10 객체를 참조합니다.', output: '', variables: { a: 'id(10)' } },
      { codeLine: 1, desc: '작은 정수(보통 -5~256)는 메모리에 캐싱되므로 b도 앞서와 동일한 주소의 10을 참조합니다.', output: '', variables: { a: 'id(10)', b: 'id(10)' } },
      { codeLine: 2, desc: '메모리 주소(id)가 같으므로 True.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_basic_5',
    language: 'python',
    category: 'p_basic',
    title: '논리 연산자(and/or)',
    questionText: '결과는?',
    code: [
      'print(True and False or True)'
    ],
    choices: ['True', 'False', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '(True and False) 평가 -> False. 이후 False or True -> True.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_basic_6',
    language: 'python',
    category: 'p_basic',
    title: 'truthy와 falsy 값',
    questionText: '다음 중 if 조건에서 False로 평가되지 않는 것은?',
    code: [
      '# 빈 리스트 [], 0, None, "0", 빈 문자열 등등'
    ],
    choices: ['"0"', '0', '[]', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '"0"은 글자가 들어있는 길이 1짜리 문자열이므로 파이썬에서 Truthy 로 평가됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_basic_7',
    language: 'python',
    category: 'p_basic',
    title: '연산자 우선순위 (거듭제곱)',
    questionText: '결과는?',
    code: [
      'print(2 ** 3 ** 2)'
    ],
    choices: ['512', '64', '12', '24'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '거듭제곱 연산자 ** 는 결합 법칙이 예외적으로 우측에서 좌측방향입니다. 3**2=9. 2**9=512.', output: '512', variables: {} },
    ],
  },
  {
    id: 'p_basic_8',
    language: 'python',
    category: 'p_basic',
    title: '몫과 나머지 연산자 (//, %)',
    questionText: '결과는?',
    code: [
      'print(10 // 3, 10 % 3)'
    ],
    choices: ['3 1', '3.33 1', '3 0.33', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '//는 몫만, %는 나머지만. 각각 3과 1.', output: '3 1', variables: {} },
    ],
  },
  {
    id: 'p_basic_9',
    language: 'python',
    category: 'p_basic',
    title: '음수 나머지 연산 특징',
    questionText: '결과는?',
    code: [
      'print(-10 % 3)'
    ],
    choices: ['2', '-1', '1', '-2'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '파이썬의 나머지 연산은 제수(나누는 수 3)의 부호를 따릅니다. -10 = 3 * (-4) + 2 로 계산되어 나머지가 2가 됩니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_basic_10',
    language: 'python',
    category: 'p_basic',
    title: '복소수 기초',
    questionText: '출력은?',
    code: [
      'c = 3 + 4j',
      'print(c.real, c.imag)'
    ],
    choices: ['3.0 4.0', '3 4', '에러', '4 3'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'j 접미사로 복소수를 선언.', output: '', variables: { c: '3+4j' } },
      { codeLine: 1, desc: 'real(실수부) = 3.0, imag(허수부) = 4.0으로 float형으로 출력됨.', output: '3.0 4.0', variables: {} },
    ],
  },
  // 2. 파이썬 문자열 처리
  {
    id: 'p_str_1',
    language: 'python',
    category: 'p_str',
    title: '문자열 곱셈',
    questionText: '실행 결과는?',
    code: [
      'a = "Hi"',
      'print(a * 3)'
    ],
    choices: ['HiHiHi', 'Hi3', '에러', 'Hi Hi Hi'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: '문자열에 * n을 하면 n번 연속 반복됩니다.', output: 'HiHiHi', variables: {} },
    ],
  },
  {
    id: 'p_str_2',
    language: 'python',
    category: 'p_str',
    title: '인덱스 역방향 접근',
    questionText: '출력 결과는?',
    code: [
      's = "HELLO"',
      'print(s[-2], s[-5])'
    ],
    choices: ['L H', 'L O', 'E H', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '"HELLO" 생성', output: '', variables: { s: '"HELLO"' } },
      { codeLine: 1, desc: '-1은 맨끝 O, -2는 L. -5는 첫글자 H.', output: 'L H', variables: {} },
    ],
  },
  {
    id: 'p_str_3',
    language: 'python',
    category: 'p_str',
    title: '문자열 슬라이싱 스텝',
    questionText: '결과는?',
    code: [
      's = "0123456789"',
      'print(s[1:8:2])'
    ],
    choices: ['1357', '1234', '13579', '2468'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '[시작:끝:스텝]. 1번 인덱스(1)부터 7번 인덱스(7)까지 2칸씩 뜁니다. 1, 3, 5, 7.', output: '1357', variables: {} },
    ],
  },
  {
    id: 'p_str_4',
    language: 'python',
    category: 'p_str',
    title: '문자열 역순 뒤집기',
    questionText: '코드로 올바른 것은?',
    code: [
      's = "PYTHON"',
      '# s를 뒤집어 "NOHTYP"를 만들기 위한 슬라이싱 코드는?'
    ],
    choices: ['s[::-1]', 's.reverse()', 's[:-1]', 's[-1:0:]'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '역방향 스텝 -1과 시작/끝 생략을 조합하면 문자열이 역순이 됩니다. (문자열엔 reverse 메서드가 없음)', output: '', variables: {} },
    ],
  },
  {
    id: 'p_str_5',
    language: 'python',
    category: 'p_str',
    title: 'replace 문자열 변환',
    questionText: '출력은?',
    code: [
      's = "aa bb aa"',
      'print(s.replace("aa", "c", 1))'
    ],
    choices: ['c bb aa', 'c bb c', '에러', 'c cc c'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'replace(원래, 바꿀것, 횟수). 1번만 치환하므로 가장 앞의 aa만 c로 변함.', output: 'c bb aa', variables: {} },
    ],
  },
  {
    id: 'p_str_6',
    language: 'python',
    category: 'p_str',
    title: 'str.split() 기본',
    questionText: '결과는?',
    code: [
      's = "a,b,c"',
      'print(s.split(","))'
    ],
    choices: ["['a', 'b', 'c']", "('a', 'b', 'c')", 'abc', '["a,b,c"]'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '쉼표 기준으로 쪼개면 문자열들의 리스트가 반환됩니다.', output: "['a', 'b', 'c']", variables: {} },
    ],
  },
  {
    id: 'p_str_7',
    language: 'python',
    category: 'p_str',
    title: 'join 메서드 기초',
    questionText: '결과는?',
    code: [
      'arr = ["1", "2"]',
      'print("-".join(arr))'
    ],
    choices: ['1-2', '12-', '-12', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '"구분자".join(리스트) 는 각 문자열 요소 사이에 구분자를 끼워 합칩니다.', output: '1-2', variables: {} },
    ],
  },
  {
    id: 'p_str_8',
    language: 'python',
    category: 'p_str',
    title: 'find와 index의 차이',
    questionText: '찾는 문자가 없을 때 일어나는 일은?',
    code: [
      's = "Hello"',
      'k = s.find("z")'
    ],
    choices: ['-1 반환', 'Value Error 에러', '0 반환', 'None 반환'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'find()는 문자가 없으면 -1을 반환. (index()는 ValueError 에러 발생)', output: '', variables: {} },
    ],
  },
  {
    id: 'p_str_9',
    language: 'python',
    category: 'p_str',
    title: 'strip 문자열 여백 제거',
    questionText: '출력은?',
    code: [
      's = "  ok  "',
      'print(s.strip() + "!")'
    ],
    choices: ['ok!', '  ok!', 'ok  !', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '양쪽 공백을 제거하여 "ok"가 되고, 조인하여 "ok!" 가 됨.', output: 'ok!', variables: {} },
    ],
  },
  {
    id: 'p_str_10',
    language: 'python',
    category: 'p_str',
    title: 'f-string 서식',
    questionText: '출력은?',
    code: [
      'x = 10',
      'print(f"Num: {x+5}")'
    ],
    choices: ['Num: 15', 'Num: {15}', 'Num: x+5', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'f-string은 중괄호 {} 내부의 연산(x+5=15)을 평가하여 문자열에 바인딩합니다.', output: 'Num: 15', variables: {} },
    ],
  },
  // 3. 딕셔너리와 세트
  {
    id: 'p_dict_1',
    language: 'python',
    category: 'p_dict',
    title: '딕셔너리 get과 기본값',
    questionText: '다음 코드의 결과는?',
    code: [
      'd = {"a":1}',
      'print(d.get("b", 0) + 5)'
    ],
    choices: ['5', '에러', '0', '1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '"b"라는 키가 없으므로 두 번째 인자인 기본값 0을 반환합니다. 0 + 5 = 5', output: '5', variables: {} },
    ],
  },
  {
    id: 'p_dict_2',
    language: 'python',
    category: 'p_dict',
    title: '사전에서 직접 키 접근 에러',
    questionText: 'd["b"]를 불렀을 때의 반응은?',
    code: [
      'd = {"a":1}',
      'print(d["b"])'
    ],
    choices: ['KeyError', 'None', '0', '문법에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '[]로 접근시 키가 없으면 KeyError가 즉시 발생하여 다운됩니다. (안전을 위해 get 권장)', output: 'KeyError', variables: {} },
    ],
  },
  {
    id: 'p_dict_3',
    language: 'python',
    category: 'p_dict',
    title: 'SET 키워드 및 교집합',
    questionText: '결과는?',
    code: [
      'a = {1, 2, 3}',
      'b = {3, 4, 5}',
      'print(a & b)'
    ],
    choices: ['{3}', '{1, 2}', '{1, 2, 3, 4, 5}', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '&는 교집합을 의미하므로 둘 다 있는 원소는 3뿐입니다.', output: '{3}', variables: {} },
    ],
  },
  {
    id: 'p_dict_4',
    language: 'python',
    category: 'p_dict',
    title: 'SET 합집합 연산',
    questionText: '결과는?',
    code: [
      'a = {1, 2}',
      'b = {2, 3}',
      'print(a | b)'
    ],
    choices: ['{1, 2, 3}', '{2}', '{1, 3}', '{1, 2, 2, 3}'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '|는 합집합을 의미하므로 모두 모은 {1, 2, 3}', output: '{1, 2, 3}', variables: {} },
    ],
  },
  {
    id: 'p_dict_5',
    language: 'python',
    category: 'p_dict',
    title: 'SET 차집합 연산',
    questionText: 'a - b 의 결과는?',
    code: [
      'a = {1, 2, 3}',
      'b = {3, 4}',
      'print(a - b)'
    ],
    choices: ['{1, 2}', '{4}', '{1, 2, 4}', '{3}'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '차집합(-) a에서 b와 공통된 3을 뺀 나머지 {1, 2}', output: '{1, 2}', variables: {} },
    ],
  },
  {
    id: 'p_dict_6',
    language: 'python',
    category: 'p_dict',
    title: '사전의 키로 사용할 수 없는 타입',
    questionText: '다음 중 딕셔너리의 Key로 사용 시 에러(TypeError)가 나는 것은?',
    code: [
      'd = {}',
      '# 에러나는 한 줄은?'
    ],
    choices: ['d[[1, 2]] = "a"', 'd[(1, 2)] = "a"', 'd["s"] = "a"', 'd[1] = "a"'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '리스트[1, 2]는 값이 변할 수 있는(Mutable) 타입이라 해시(Hash)를 만들 수 없어 Key로 사용불가입니다. 튜플은 가능.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_dict_7',
    language: 'python',
    category: 'p_dict',
    title: 'del을 이용한 엔트리 삭제',
    questionText: '길이는?',
    code: [
      'd = {"a":1, "b":2}',
      'del d["a"]',
      'print(len(d))'
    ],
    choices: ['1', '0', '2', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '키 "a"와 그 매핑된 값이 딕셔너리에서 지워집니다.', output: '', variables: { 'd': '{"b":2}' } },
      { codeLine: 2, desc: '남은 요소 수가 1입니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'p_dict_8',
    language: 'python',
    category: 'p_dict',
    title: 'set 요소 추가 방법 (add vs update)',
    questionText: '출력 집합은?',
    code: [
      's = {1}',
      's.update([2, 3])',
      's.add(4)',
      'print(s)'
    ],
    choices: ['{1, 2, 3, 4}', '{1, [2, 3], 4}', '에러', '{1, 23, 4}'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'update()는 리스트 등의 요소들을 각각 풀어서 집합에 넣음', output: '', variables: { s: '{1, 2, 3}' } },
      { codeLine: 2, desc: 'add()는 단일 요소를 넣음', output: '', variables: { s: '{1, 2, 3, 4}' } },
      { codeLine: 3, desc: '{1, 2, 3, 4} 출력.', output: '{1, 2, 3, 4}', variables: {} },
    ],
  },
  {
    id: 'p_dict_9',
    language: 'python',
    category: 'p_dict',
    title: 'dict keys() iteration',
    questionText: '올바른 행동은?',
    code: [
      'd = {"X": 10, "Y": 20}',
      'for k in d:',
      '    print(k, end="")'
    ],
    choices: ['XY', '1020', '("X", 10)("Y", 20)', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: '딕셔너리 d 자체를 for루프 돌리면 자동으로 "키"들만 하나씩 꺼내옵니다.', output: '', variables: {} },
      { codeLine: 2, desc: '순서대로 X, Y가 출력됩니다. (최신 파이썬은 삽입 순서 보장)', output: 'XY', variables: {} },
    ],
  },
  {
    id: 'p_dict_10',
    language: 'python',
    category: 'p_dict',
    title: 'dict items()',
    questionText: '결과는?',
    code: [
      'd = {"A": 1}',
      'for k, v in d.items():',
      '    print(k + str(v))'
    ],
    choices: ['A1', 'A 1', '에러', 'A'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: 'items()는 (키, 값) 형태의 튜플로 반환되어 k="A", v=1 이 대입됨.', output: '', variables: {} },
      { codeLine: 2, desc: '"A" + "1" 이 조인되어 출력.', output: 'A1', variables: {} },
    ],
  },
  // 4. SET (집합)
  {
    id: 'p_set_1',
    language: 'python',
    category: 'p_set',
    title: '집합의 특성 (중복 제거)',
    questionText: '다음 코드의 결과는?',
    code: [
      'arr = [1, 2, 2, 3, 3, 3]',
      's = set(arr)',
      'print(len(s))',
    ],
    choices: ['3', '6', '1', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '리스트 arr 생성. 중복 요소가 있습니다.', output: '', variables: { 'arr': '[1, 2, 2, 3, 3, 3]' } },
      { codeLine: 1, desc: 'set() 변환 시 중복 요소가 자동으로 제거됩니다.', output: '', variables: { 's': '{1, 2, 3}' } },
      { codeLine: 2, desc: '집합 s의 길이는 3입니다.', output: '3', variables: { 'len(s)': 3 } },
    ],
  },
  {
    id: 'p_set_2',
    language: 'python',
    category: 'p_set',
    title: '빈 집합(Set) 생성 방법',
    questionText: '올바르게 생성한 것은?',
    code: [
      'a = {}',
      'b = set()',
      '# 둘의 타입 차이?'
    ],
    choices: ['a는 dict, b는 set', 'a는 set, b는 set', 'a는 list, b는 set', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '중괄호 {} 만 쓰면 빈 딕셔너리(dict)가 생성됩니다.', output: '', variables: {} },
      { codeLine: 1, desc: '빈 집합을 생성하려면 명시적으로 set() 을 호출해야 합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_set_3',
    language: 'python',
    category: 'p_set',
    title: '문자열을 set으로 변환',
    questionText: '출력은?',
    code: [
      's = set("HELLO")',
      'print(len(s))'
    ],
    choices: ['4', '5', '1', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '"HELLO" 문자열을 집합으로 만들면 \'H\', \'E\', \'L\', \'O\' 로 쪼개어 들어갑니다. (순서 무관)', output: '', variables: {} },
      { codeLine: 1, desc: '중복되는 \'L\'이 제거되어 총 4개가 됩니다.', output: '4', variables: {} },
    ],
  },
  {
    id: 'p_set_4',
    language: 'python',
    category: 'p_set',
    title: '집합의 대칭 차집합 (^ 연산자)',
    questionText: '출력 결과는?',
    code: [
      'A = {1, 2, 3}',
      'B = {3, 4, 5}',
      'print(A ^ B)'
    ],
    choices: ['{1, 2, 4, 5}', '{3}', '{1, 2, 3, 4, 5}', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '^ 연산자는 두 집합에서 겹치지 않는(한 쪽에만 있는) 서로소 부분만 합한 대칭 차집합을 구합니다.', output: '{1, 2, 4, 5}', variables: {} },
    ],
  },
  {
    id: 'p_set_5',
    language: 'python',
    category: 'p_set',
    title: '부분집합 확인 (issubset)',
    questionText: '출력으로 알맞은 것은?',
    code: [
      'A = {1, 2}',
      'B = {1, 2, 3}',
      'print(A <= B)'
    ],
    choices: ['True', 'False', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '<= 연산자는 issubset() 과 동일하여 A가 B의 부분집합인지 불리언으로 반환합니다.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_set_6',
    language: 'python',
    category: 'p_set',
    title: '집합에 여러 원소 제거시 주의 (remove vs discard)',
    questionText: '없는 원소를 지우려 할 때 에러를 피하려면?',
    code: [
      's = {1, 2}',
      '# s.remove(3) -> 에러남',
      '# 에러 안 나게 안전하게 지우려면?'
    ],
    choices: ['s.discard(3)', 's.delete(3)', 's.pop(3)', 's.clear(3)'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'remove()는 원소가 없으면 KeyError를 냅니다. discard()는 없어도 무시하므로 안전합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_set_7',
    language: 'python',
    category: 'p_set',
    title: '집합의 pop() 동작',
    questionText: 'pop() 실행 시 특징은?',
    code: [
      's = {1, 2, 3}',
      'p = s.pop()',
      'print(len(s))'
    ],
    choices: ['집계 순서 관계없이 임의의(arbitrary) 요소를 빼냄', '가장 큰 요소를 뺌', '가장 작은 요소를 뺌', '앞에서부터 뺌'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'set은 순서가 없기 때문에 pop()은 임의의 원소 하나를 꺼내어 반환하고 집합에서 제거합니다.', output: '', variables: {} },
      { codeLine: 2, desc: '1개가 뽑혔으므로 길이 2.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_set_8',
    language: 'python',
    category: 'p_set',
    title: 'frozenset',
    questionText: 'frozenset의 가장 큰 차이점은?',
    code: [
      'f = frozenset([1, 2, 3])',
      '# f.add(4) -> ???'
    ],
    choices: ['불변(Immutable) 집합이라 add나 remove가 불가능 (에러)', '변경 가능', '순서 보장', '튜플과 같음'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'frozenset은 한 번 생성되면 원소의 추가나 삭제를 허용하지 않는 불변 집합 타입입니다. (사전의 키로 사용 가능)', output: '', variables: {} },
    ],
  },
  {
    id: 'p_set_9',
    language: 'python',
    category: 'p_set',
    title: 'add()로 문자열 추가시 결과',
    questionText: '출력은?',
    code: [
      's = set()',
      's.add("XYZ")',
      'print(len(s))'
    ],
    choices: ['1', '3', '0', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'add()는 전달받은 요소 단일 객체를 원소로 넣습니다. "XYZ"라는 문자열 객체 1개가 들어갑니다. (update 시 쪼개짐에 주의)', output: '', variables: {} },
      { codeLine: 2, desc: '길이는 1입니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'p_set_10',
    language: 'python',
    category: 'p_set',
    title: 'update()와 add() 혼동 방지',
    questionText: '출력은 어떻게 되나?',
    code: [
      's = set([1])',
      's.update("ab")',
      'print("a" in s)'
    ],
    choices: ['True', 'False', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'update()에 순회 가능한 객체를 주면 쪼개서 넣습니다. 즉 "a" 와 "b" 가 각각 집합에 삽입됩니다.', output: '', variables: {} },
      { codeLine: 2, desc: '"a"가 들어있으므로 True.', output: 'True', variables: {} },
    ],
  },
  // 5. Tuple
  {
    id: 'p_tuple_1',
    language: 'python',
    category: 'p_tuple',
    title: '튜플의 불변성',
    questionText: '다음 코드를 실행했을 때 벌어지는 일은?',
    code: [
      't = (1, 2, 3)',
      'try:',
      '    t[0] = 10',
      '    print("성공")',
      'except TypeError:',
      '    print("에러")',
    ],
    choices: ['에러', '성공', '10', '1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '튜플 t 초기화.', output: '', variables: { 't': '(1, 2, 3)' } },
      { codeLine: 2, desc: 't[0] = 10 실행 시도. 튜플은 요소를 변경할 수 없습니다(불변성).', output: '', variables: { '오류': 'TypeError' } },
      { codeLine: 5, desc: 'except 블록으로 점프하여 "에러" 출력.', output: '에러', variables: {} },
    ],
  },
  {
    id: 'p_tuple_2',
    language: 'python',
    category: 'p_tuple',
    title: '단일 요소 튜플 선언',
    questionText: '요소가 1개인 튜플을 올바르게 선언한 것은?',
    code: [
      'a = (1)',
      'b = (1, )',
      'print(type(a), type(b))'
    ],
    choices: ['int, tuple', 'tuple, tuple', 'int, int', 'tuple, int'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '(1)은 연산자 괄호로 인식되어 타입이 int 입니다.', output: '', variables: {} },
      { codeLine: 1, desc: '요소가 하나일 때는 뒤에 콤마(,)를 붙여야 비로소 튜플로 인식됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_tuple_3',
    language: 'python',
    category: 'p_tuple',
    title: '튜플의 언패킹(Unpacking)',
    questionText: '결과는?',
    code: [
      't = 1, 2, 3',
      'a, b, c = t',
      'print(b)'
    ],
    choices: ['2', '1', '3', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '괄호를 생략하고 콤마로 나열해도 튜플로 팩킹됩니다.', output: '', variables: {} },
      { codeLine: 1, desc: '좌변의 변수 개수(3개)와 튜플 요소 수(3개)가 맞아 차례대로 a=1, b=2, c=3 언패킹 할당됩니다.', output: '', variables: {} },
      { codeLine: 2, desc: 'b의 값 2 출력.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_tuple_4',
    language: 'python',
    category: 'p_tuple',
    title: '부분 언패킹 (Asterisk)',
    questionText: '출력은?',
    code: [
      'a, *b, c = (1, 2, 3, 4, 5)',
      'print(b)'
    ],
    choices: ['[2, 3, 4]', '2', '(2, 3, 4)', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '첫 번째 1은 a, 마지막 5는 c로 들어가고, 가운데 남은 2, 3, 4는 *에 의해 리스트 형태로 b에 묶여 들어갑니다.', output: '', variables: {} },
      { codeLine: 1, desc: '[2, 3, 4]가 출력됩니다.', output: '[2, 3, 4]', variables: {} },
    ],
  },
  {
    id: 'p_tuple_5',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 덧셈',
    questionText: '결과는?',
    code: [
      't1 = (1, 2)',
      't2 = (3, )',
      'print(t1 + t2)'
    ],
    choices: ['(1, 2, 3)', '(4, 2)', '[1, 2, 3]', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '튜플 간 덧셈 연산은 두 튜플을 연결해 새로운 튜플을 반환합니다.', output: '(1, 2, 3)', variables: {} },
    ],
  },
  {
    id: 'p_tuple_6',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 변경 우회법',
    questionText: '요소를 변경하려면?',
    code: [
      't = (1, 2)',
      '# 변경하고 싶을 때 올바른 패턴'
    ],
    choices: ['list()로 변환 후 변경하고 다시 tuple() 사용', 't.update()', '포인터 접근', '불가능'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '튜플 자체는 불변이므로 요소를 불가피하게 변경해야 한다면 list로 변환하여 수정한 뒤 다시 튜플로 씌워야 합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_tuple_7',
    language: 'python',
    category: 'p_tuple',
    title: '값 스왑 (Swap)',
    questionText: 'x, y 값을 맞바꿀 때 사용된 원리는?',
    code: [
      'x = 1',
      'y = 2',
      'x, y = y, x'
    ],
    choices: ['튜플 패킹과 언패킹', '내장함수 swap()', '얕은 복사', '다중 상속'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '우변의 y, x 가 튜플 (2, 1) 로 팩킹되고, 이는 곧바로 좌변의 변수 쌍에 언패킹되어 값 교환이 일어납니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_tuple_8',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 안의 가변 객체 (Mutable inside Immutable)',
    questionText: '이 코드는 파이썬에서 실행이 되나?',
    code: [
      't = ([1, 2], 3)',
      't[0].append(3)',
      'print(t)'
    ],
    choices: ['됨: ([1, 2, 3], 3)', '에러난다 (TypeError)', '무시됨', '리스트가 튜플로 바뀜'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '튜플이 가진 리스트의 "주소(참조)"는 못 바꾸지만, 그 참조를 따라간 리스트 내부 객체의 조작은 가능합니다! 따라서 성공 반영됨.', output: '', variables: {} },
      { codeLine: 2, desc: '수정 된 내역이 출력됨', output: '([1, 2, 3], 3)', variables: {} },
    ],
  },
  {
    id: 'p_tuple_9',
    language: 'python',
    category: 'p_tuple',
    title: '리스트 안의 튜플 정렬',
    questionText: 'sort() 기준은?',
    code: [
      'arr = [(2, "B"), (1, "Z"), (2, "A")]',
      'arr.sort()',
      'print(arr[1])'
    ],
    choices: ['(2, "A")', '(1, "Z")', '(2, "B")', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '튜플을 정렬할 때는 첫 번째 요소를 먼저 비교하고(1이 가장 앞), 같으면 두 번째 요소를 비교("A" < "B") 합니다.', output: '', variables: {} },
      { codeLine: 2, desc: '졍렬결과: [(1, "Z"), (2, "A"), (2, "B")]. 인덱스 1은 (2, "A") 입니다.', output: '(2, \'A\')', variables: {} },
    ],
  },
  {
    id: 'p_tuple_10',
    language: 'python',
    category: 'p_tuple',
    title: 'in 연산자',
    questionText: '결과는?',
    code: [
      't = (1, 2, 3)',
      'print(2 in t)'
    ],
    choices: ['True', 'False', '에러', '2'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '시퀀스 타입이므로 포함 여부를 반환하는 in 연산이 정상 작동하여 True가 출력됩니다.', output: 'True', variables: {} },
    ],
  },
  // 6. 전역변수
  {
    id: 'p_global_1',
    language: 'python',
    category: 'p_global',
    title: 'global 키워드',
    questionText: '다음 코드의 출력값은?',
    code: [
      'x = 10',
      'def modify():',
      '    global x',
      '    x = 20',
      'modify()',
      'print(x)',
    ],
    choices: ['20', '10', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '전역 변수 x에 10 할당.', output: '', variables: { '전역 x': 10 } },
      { codeLine: 4, desc: '함수 modify() 호출.', output: '', variables: {} },
      { codeLine: 2, desc: 'global 예약어로 함수 밖의 x를 사용하겠다고 선언.', output: '', variables: {} },
      { codeLine: 3, desc: '전역 변수 x를 20으로 변경.', output: '', variables: { '전역 x': 20 } },
      { codeLine: 5, desc: '전역 변수 값이 20으로 바뀌었으므로 20 출력.', output: '20', variables: {} },
    ],
  },
  {
    id: 'p_global_2',
    language: 'python',
    category: 'p_global',
    title: '로컬 변수와 은닉 현상',
    questionText: '출력은 어떻게 되나?',
    code: [
      'k = 5',
      'def action():',
      '    k = 3',
      '    print(k, end=" ")',
      'action()',
      'print(k)'
    ],
    choices: ['3 5', '5 3', '3 3', '5 5'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '함수 내부의 k는 global 선언이 없으므로 새로 생성된 "지역 변수"입니다. 이름이 겹쳐도 바깥에 영향을 주지 않음.', output: '', variables: {} },
      { codeLine: 4, desc: '함수 튜플 내부에선 지역 k(3) 출력. 끝나면 복귀', output: '3', variables: {} },
      { codeLine: 5, desc: '바깥 k는 그대로 5 이므로 5 출력.', output: '3 5', variables: {} },
    ],
  },
  {
    id: 'p_global_3',
    language: 'python',
    category: 'p_global',
    title: 'global 없이 읽기 전용 접근',
    questionText: '에러가 발생할까?',
    code: [
      'g = 100',
      'def see():',
      '    print(g)',
      'see()'
    ],
    choices: ['100 정상출력', '에러 발생', 'None 출력', '0 출력'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '값을 수정(할당)하지 않고 그저 읽어오기만 할 때는 global 선언 없이도 바깥쪽 스코프를 탐색하여 값을 빌려 정상 출력합니다.', output: '100', variables: {} },
    ],
  },
  {
    id: 'p_global_4',
    language: 'python',
    category: 'p_global',
    title: 'UnboundLocalError 유발 원리',
    questionText: '이 코드의 문제는?',
    code: [
      'a = 1',
      'def fail():',
      '    print(a)',
      '    a = 2',
      'fail()'
    ],
    choices: ['변수 a를 정의 전(프린트 위)에 로컬로 간주하여 에러 발생', '정상작동하여 1출력하고 끝', '무한루프', '2 로 변경됨'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '함수 내에 a = 2 가 있으므로, 파이썬 해석기는 해당 함수 내에서 a를 지역변수 취급합니다. 그런데 그 할당보다 앞줄(print)에서 a를 읽으려 하니 할당 전 참조(UnboundLocalError)가 납니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_global_5',
    language: 'python',
    category: 'p_global',
    title: 'nonlocal의 의미',
    questionText: 'nonlocal은 언제 쓰는가?',
    code: [
      'def outer():',
      '    x = 1',
      '    def inner():',
      '        nonlocal x',
      '        x = 2'
    ],
    choices: ['내부 함수에서 바로 위 껍질(외부함수 지역 변수)을 수정할 때', '전역변수 고칠 때', '상수 만들 때', '메모리 할당 해제할 때'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '전역(global)까지는 가지 않고 하나 바깥의 함수로 감싸인 부모 지역 변수에 접근해 값을 변경하고자 할 때 씁니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_global_6',
    language: 'python',
    category: 'p_global',
    title: '클래스와 스코프',
    questionText: '클래스는 네임스페이스 범위를 생성하는가?',
    code: [
      '# 파이썬에서 LEGB 룰 (Local, Enclosing, Global, Built-in)'
    ],
    choices: ['그렇다. 함수 내부, 모듈 전역, 클로저 환경처럼 영역을 가짐', '그렇지 않다', '자바와 똑같다', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '파이썬 스코프의 탐색 순서는 LEGB(지역->외부함수지역->전역->빌트인)를 따릅니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_global_7',
    language: 'python',
    category: 'p_global',
    title: 'global 변수와 리스트 변경',
    questionText: '결과는?',
    code: [
      'lst = [1, 2]',
      'def push():',
      '    lst.append(3)',
      'push()',
      'print(lst)'
    ],
    choices: ['[1, 2, 3] (정상 작동)', '에러난다 (global 필요)', '[1, 2]', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '리스트 내부에 append 등을 하는 것은 참조 자체를 재할당(lst = [새로운것])하는 행위가 아니므로, global 선언 없이도 원본을 갱신 가능합니다.', output: '', variables: {} },
      { codeLine: 4, desc: '업데이트 된 리스트 튜플 출력. 3이 추가됨.', output: '[1, 2, 3]', variables: {} },
    ],
  },
  {
    id: 'p_global_8',
    language: 'python',
    category: 'p_global',
    title: '함수 내 함수(클로저 기본)',
    questionText: '결과는?',
    code: [
      'def a():',
      '    print("A")',
      'def b(f):',
      '    f()',
      'b(a)'
    ],
    choices: ['A', 'B', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '파이썬의 함수는 일급 객체입니다. 함수 이름을 매개변수로 던져서 그 함수 튜플 내부에서 콜백으로 실행되게 할 수 있습니다.', output: '', variables: {} },
      { codeLine: 1, desc: '"A" 튜플 실행 및 출력', output: 'A', variables: {} },
    ],
  },
  {
    id: 'p_global_9',
    language: 'python',
    category: 'p_global',
    title: 'globals() 딕셔너리',
    questionText: 'globals()["z"] 의 역할은?',
    code: [
      'z = 100',
      'def show():',
      '    print(globals()["z"])',
      'show()'
    ],
    choices: ['100', '문법에러', 'None', 'z 문자열'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'globals() 는 현재 전역 심볼 테이블을 딕셔너리 형태로 리턴해 줍니다. 따라서 변수 z의 값 100에 접근합니다.', output: '100', variables: {} },
    ],
  },
  {
    id: 'p_global_10',
    language: 'python',
    category: 'p_global',
    title: 'locals() 딕셔너리',
    questionText: '출력으로 옳은 것은?',
    code: [
      'def cal(x):',
      '    y = x + 1',
      '    print(len(locals()))',
      'cal(5)'
    ],
    choices: ['2', '1', '0', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'locals() 는 함수의 로컬 변수 목록을 저장한 사전. 현재 이 함수 내에는 인자 x 와 변수 y 두개가 등록되어 있으므로 길이는 2', output: '2', variables: {} },
    ],
  },
  // 7. 리스트 컴프리헨션
  {
    id: 'p_comp_1',
    language: 'python',
    category: 'p_comp',
    title: 'if문을 포함한 컴프리헨션',
    questionText: '다음 코드의 실행 결과는?',
    code: [
      'a = [x for x in range(1, 6) if x % 2 == 0]',
      'print(a)',
    ],
    choices: ['[2, 4]', '[1, 3, 5]', '[2, 4, 6]', '[1, 2, 3, 4, 5]'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'range(1, 6)은 1부터 5까지입니다.', output: '', variables: { 'range': '[1, 2, 3, 4, 5]' } },
      { codeLine: 0, desc: 'if x % 2 == 0: 이 중 짝수만 걸러내어 요소를 만듭니다.', output: '', variables: { '필터링': '[2, 4]' } },
      { codeLine: 1, desc: '리스트 a=[2, 4]를 출력합니다.', output: '[2, 4]', variables: {} },
    ],
  },
  {
    id: 'p_comp_2',
    language: 'python',
    category: 'p_comp',
    title: '이중 for문 컴프리헨션',
    questionText: '경우의 수는 몇 개인가?',
    code: [
      'a = [x+y for x in "AB" for y in "12"]',
      'print(len(a))'
    ],
    choices: ['4', '2', '6', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '중첩 for문처럼 작용하여 A1, A2, B1, B2 를 만듭니다.', output: '', variables: {} },
      { codeLine: 1, desc: '총 4개가 출력됩니다.', output: '4', variables: {} },
    ],
  },
  {
    id: 'p_comp_3',
    language: 'python',
    category: 'p_comp',
    title: 'if-else 컴프리헨션 문법',
    questionText: '올바른 if-else 컴프리헨션 문법은?',
    code: [
      '# 짝수면 "E", 홀수면 "O"',
      'a = [??? for x in range(3)]'
    ],
    choices: ['"E" if x % 2 == 0 else "O"', 'x if x % 2 == 0 else "E"', 'if x % 2 == 0: "E" else "O"', 'for문 뒤에 if-else 위치'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'if-else를 쓸 때는 조건부 표현식을 맨 앞에 씁니다. [참일값 if 조건 else 거짓일값 for ...]', output: '', variables: {} },
    ],
  },
  {
    id: 'p_comp_4',
    language: 'python',
    category: 'p_comp',
    title: 'Set 컴프리헨션',
    questionText: '결과는?',
    code: [
      's = {x % 2 for x in range(5)}',
      'print(s)'
    ],
    choices: ['{0, 1}', '{0, 1, 0, 1, 0}', '[0, 1]', '{1, 2}'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'range(5)는 0,1,2,3,4. % 2 하면 0,1,0,1,0. 중괄호 {} 로 감샀으므로 Set(집합) 컴프리헨션입니다.', output: '', variables: {} },
      { codeLine: 1, desc: '중복이 제거되어 {0, 1}만 남습니다.', output: '{0, 1}', variables: {} },
    ],
  },
  {
    id: 'p_comp_5',
    language: 'python',
    category: 'p_comp',
    title: 'Dict 컴프리헨션',
    questionText: '결과는?',
    code: [
      'd = {k: k*10 for k in (1, 2)}',
      'print(d[2])'
    ],
    choices: ['20', '10', '2', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '1:10, 2:20 의 쌍을 가진 딕셔너리가 생성됩니다.', output: '', variables: {} },
      { codeLine: 1, desc: '키가 2인 값을 찾으므로 20입니다.', output: '20', variables: {} },
    ],
  },
  {
    id: 'p_comp_6',
    language: 'python',
    category: 'p_comp',
    title: '제너레이터 표현식',
    questionText: 'type(g) 은무엇인가?',
    code: [
      'g = (x for x in range(3))',
      'print(type(g))'
    ],
    choices: ['<class \'generator\'>', '<class \'tuple\'>', '<class \'list\'>', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '컴프리헨션을 소괄호() 로 묶으면 튜플 컴프리헨션이 아니라 제너레이터(generator) 객체가 됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_comp_7',
    language: 'python',
    category: 'p_comp',
    title: '2차원 배열 초기화 (얕은 복사 방지)',
    questionText: '안전하게 3x3 2차원 배열을 초기화하는 것은?',
    code: [
      '# 1: [[0]*3]*3',
      '# 2: [[0]*3 for _ in range(3)]'
    ],
    choices: ['2번', '1번', '둘 다 안전', '둘 다 에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '1번은 내부 리스트의 [참조]를 3번 복사하여, 하나를 바꾸면 전부 바뀝니다.', output: '', variables: {} },
      { codeLine: 1, desc: '2번은 매 루프마다 새로운 리스트를 생성하므로 안전합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_comp_8',
    language: 'python',
    category: 'p_comp',
    title: '다중 조건 컴프리헨션',
    questionText: '출력은?',
    code: [
      'a = [x for x in range(10) if x > 5 if x % 2 == 0]',
      'print(a)'
    ],
    choices: ['[6, 8]', '[6, 7, 8, 9]', '[2, 4]', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'if 절을 연달아 쓰면 논리 AND (x > 5 and x % 2 == 0) 와 동일하게 작동합니다.', output: '', variables: {} },
      { codeLine: 1, desc: '5보다 큰 짝수 6, 8 이 남습니다.', output: '[6, 8]', variables: {} },
    ],
  },
  {
    id: 'p_comp_9',
    language: 'python',
    category: 'p_comp',
    title: '문자열 필터링 컴프리헨션',
    questionText: '결과는?',
    code: [
      's = "a1b2c3"',
      'r = "".join([c for c in s if c.isalpha()])',
      'print(r)'
    ],
    choices: ['abc', '123', 'a1b2c3', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '알파벳인 것만 필터링해서 추출. "a", "b", "c". 그 후 join으로 묶습니다.', output: '', variables: {} },
      { codeLine: 2, desc: 'abc 가 출력됩니다.', output: 'abc', variables: {} },
    ],
  },
  {
    id: 'p_comp_10',
    language: 'python',
    category: 'p_comp',
    title: 'map과 컴프리헨션의 성능적 등가교환',
    questionText: 'map(int, ["1", "2"]) 와 가장 유사한 리스트 컴프리헨션은?',
    code: [
      '# map 과 컴프리헨션 변환 문제'
    ],
    choices: ['[int(x) for x in ["1", "2"]]', 'int([x for x in ["1", "2"]])', '[x.int() for x in ["1", "2"]]', '불가능'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '각 요소를 int() 로 래핑하는 것이므로 1번과 완전히 동일한 역할을 합니다.', output: '', variables: {} },
    ],
  },
  // 8. 람다 함수
  {
    id: 'p_lambda_1',
    language: 'python',
    category: 'p_lambda',
    title: 'lambda 와 map',
    questionText: '다음 코드의 결과는?',
    code: [
      'arr = [1, 2, 3]',
      'res = list(map(lambda x: x*x, arr))',
      'print(res)',
    ],
    choices: ['[1, 4, 9]', '[1, 2, 3]', '[2, 4, 6]', '[1, 8, 27]'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '리스트 arr에 [1, 2, 3] 할당.', output: '', variables: { 'arr': '[1, 2, 3]' } },
      { codeLine: 1, desc: 'map 함수로 모든 요소에 거듭제곱 람다식(x*x)을 일괄 적용.', output: '', variables: { 'map': '1, 4, 9 생성' } },
      { codeLine: 2, desc: '리스트로 변환된 [1, 4, 9] 출력.', output: '[1, 4, 9]', variables: {} },
    ],
  },
  {
    id: 'p_lambda_2',
    language: 'python',
    category: 'p_lambda',
    title: 'lambda 와 filter',
    questionText: '출력은?',
    code: [
      'arr = [1, 2, 3, 4]',
      'f = list(filter(lambda a: a % 2 == 1, arr))',
      'print(f)'
    ],
    choices: ['[1, 3]', '[2, 4]', '[False, True, False, True]', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'filter 함수는 조건(홀수)이 True인 요소만 통과시킵니다.', output: '', variables: {} },
      { codeLine: 2, desc: '홀수인 [1, 3] 출력.', output: '[1, 3]', variables: {} },
    ],
  },
  {
    id: 'p_lambda_3',
    language: 'python',
    category: 'p_lambda',
    title: 'sort 기준(key) 람다',
    questionText: '결과는?',
    code: [
      'words = ["apple", "bat", "carrot"]',
      'words.sort(key=lambda x: len(x))',
      'print(words)'
    ],
    choices: ['[\'bat\', \'apple\', \'carrot\']', '[\'apple\', \'bat\', \'carrot\']', '[\'carrot\', \'apple\', \'bat\']', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '정렬의 척도를 글자 길이(len)로 지정합니다. 즉 가장 짧은 단어부터 정렬됩니다.', output: '', variables: {} },
      { codeLine: 2, desc: '길이 순 [ bat(3), apple(5), carrot(6) ]', output: '[\'bat\', \'apple\', \'carrot\']', variables: {} },
    ],
  },
  {
    id: 'p_lambda_4',
    language: 'python',
    category: 'p_lambda',
    title: '람다 다중 인자',
    questionText: '결과는?',
    code: [
      'add = lambda x, y: x + y',
      'print(add(5, 7))'
    ],
    choices: ['12', '57', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '인자를 여러 개(x, y) 받는 람다를 정의해 add 변수에 할당합니다.', output: '', variables: {} },
      { codeLine: 1, desc: 'add(5, 7) 로 일반 함수처럼 호출되어 12를 반환.', output: '12', variables: {} },
    ],
  },
  {
    id: 'p_lambda_5',
    language: 'python',
    category: 'p_lambda',
    title: '람다와 콜백',
    questionText: '출력은?',
    code: [
      'def run(cb, x):',
      '    return cb(x)',
      'print(run(lambda n: n*2, 3))'
    ],
    choices: ['6', '3', 'None', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'run 함수의 첫번째 인자 설계서에 맞춰 람다를 인라인으로 넘깁니다.', output: '', variables: {} },
      { codeLine: 1, desc: 'cb는 n*2, x는 3이므로 6 리턴.', output: '6', variables: {} },
    ],
  },
  {
    id: 'p_lambda_6',
    language: 'python',
    category: 'p_lambda',
    title: '이차원 배열 정렬시 람다',
    questionText: '두 번째 원소를 기준으로 내림차순 정렬하는 식은?',
    code: [
      '# .sort(key=?, reverse=True)'
    ],
    choices: ['lambda x: x[1]', 'lambda x[1]', 'lambda x: 1', '불가능'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '행(배열 1개) 단위로 x가 들어오므로, x[1]을 반환하는 람다 객체를 던지면 두 번째 원소 기준 정렬이 됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_lambda_7',
    language: 'python',
    category: 'p_lambda',
    title: '람다 즉시 실행 (IIFE)',
    questionText: '이 코드의 결과는?',
    code: [
      'a = (lambda x: x**2)(4)',
      'print(a)'
    ],
    choices: ['16', 'lambda 객체', '4', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '람다를 괄호로 감싸고 바로 뒤에 (4) 를 붙이면 자바스크립트의 즉시실행함수(IIFE)처럼 바로 실행되어 평가됩니다.', output: '', variables: {} },
      { codeLine: 1, desc: '4의 제곱 16', output: '16', variables: {} },
    ],
  },
  {
    id: 'p_lambda_8',
    language: 'python',
    category: 'p_lambda',
    title: '람다 안의 지역 scope',
    questionText: '이 코드의 함정은?',
    code: [
      'funcs = [lambda: i for i in range(3)]',
      'print(funcs[0]())'
    ],
    choices: ['2가 출력됨 (지연 바인딩)', '0 출력', '1 출력', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '유명한 파이썬 클로저 질문. 정의될 당시에 변수 i의 "값"을 고정하는게 아니라 "이름"을 바인딩합니다.', output: '', variables: {} },
      { codeLine: 1, desc: '호출되는 시점(루프 종료 후)엔 i가 2로 끝나 있으므로 어떤 함수를 부르건 다 2가 출력됩니다. (방지: lambda x=i: x)', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_lambda_9',
    language: 'python',
    category: 'p_lambda',
    title: '람다의 한계',
    questionText: '람다에서 사용할 수 없는 구문은?',
    code: [
      '# 제약 사항 관련'
    ],
    choices: ['여러 줄의 복수 문장 (단일 표현식만 가능)', '조건부 표현식 (if-else)', '수학 연산자', '함수 호출'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '파이썬의 람다는 반드시 "단 하나의 표현식(Expression)"만을 허용합니다. 내부에 할당문(x=1)이나 여러 줄을 적을 수 없습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_lambda_10',
    language: 'python',
    category: 'p_lambda',
    title: 'reduce와 람다',
    questionText: 'functools.reduce의 작동원리로 볼 때 결과는?',
    code: [
      'from functools import reduce',
      'res = reduce(lambda x, y: x + y, [1, 2, 3, 4])',
      'print(res)'
    ],
    choices: ['10', '4', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'reduce는 첫 번째와 두 번째 원소를 누적기(x)와 현재값(y)으로 받아 더하고, 그 결과를 다음의 누적기로 남기면서 배열을 축소합니다. 1+2=3, 3+3=6, 6+4=10.', output: '10', variables: {} },
    ],
  },
  // 9. 클로저
  {
    id: 'p_closure_1',
    language: 'python',
    category: 'p_closure',
    title: '파이썬 클로저 활용',
    questionText: '다음 코드의 결과는?',
    code: [
      'def make_adder(n):',
      '    def adder(x):',
      '        return x + n',
      '    return adder',
      'add5 = make_adder(5)',
      'print(add5(10))',
    ],
    choices: ['15', '5', '10', 'None'],
    correctAnswer: 0,
    visualizer: 'stack',
    steps: [
      { codeLine: 4, desc: 'make_adder(5) 호출. n=5인 상태를 기억하는 내부 함수 adder가 반환됩니다.', output: '', callStack: ['make_adder(5)'] },
      { codeLine: 5, desc: '반환된 함수를 add5라는 이름으로 사용합니다. add5(10) 호출 (x=10)', output: '', callStack: ['add5(10)'] },
      { codeLine: 2, desc: 'x(10) + 기억한 n(5) = 15 반환.', output: '', callStack: ['add5 반환 → 15'] },
      { codeLine: 5, desc: '15 출력.', output: '15', callStack: [] },
    ],
  },
  {
    id: 'p_closure_2',
    language: 'python',
    category: 'p_closure',
    title: '클로저 상태 변경 (nonlocal)',
    questionText: '출력은?',
    code: [
      'def counter():',
      '    c = 0',
      '    def tick():',
      '        nonlocal c',
      '        c += 1',
      '        return c',
      '    return tick',
      't = counter()',
      'print(t(), t())'
    ],
    choices: ['1 2', '1 1', '0 1', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 7, desc: 'counter 반환 함수를 t에 담습니다. t는 자신만의 c=0 상태를 가집니다.', output: '', variables: {} },
      { codeLine: 8, desc: 't()를 연달아 부르면 클로저 내부 상태인 c가 공유되어 1, 2로 점진적 증가합니다.', output: '1 2', variables: {} },
    ],
  },
  {
    id: 'p_closure_3',
    language: 'python',
    category: 'p_closure',
    title: '독립적인 클로저 환경',
    questionText: '결과는?',
    code: [
      'def cnt():',
      '    x = 0',
      '    def inc():',
      '        nonlocal x',
      '        x+=1; return x',
      '    return inc',
      'a = cnt()',
      'b = cnt()',
      'print(a(), b(), a())'
    ],
    choices: ['1 1 2', '1 2 3', '1 1 1', '1 2 1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 6, desc: 'a와 b는 cnt()를 각각 따로 호출하여 생성되었기 때문에, 클로저 환경(변수 x구역)도 서로 완전히 독립되어 별개로 동작합니다.', output: '', variables: {} },
      { codeLine: 8, desc: 'a가 1, 독립된 b는 자기꺼 1, 다시 a는 자기꺼 누적되어 2. 결과는 1 1 2', output: '1 1 2', variables: {} },
    ],
  },
  {
    id: 'p_closure_4',
    language: 'python',
    category: 'p_closure',
    title: '__closure__ 속성',
    questionText: '클로저 변수 값은 어디에 저장되는가?',
    code: [
      '# 함수객체의 어트리뷰트'
    ],
    choices: ['함수.__closure__[0].cell_contents 로 접근 가능', '메모리에서 소멸됨', '접근 불가', 'global 영역'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '파이썬의 내부 함수 객체는 __closure__ 라는 튜플을 유지하여(cell 이라 부름) 환경 변수들을 캡처해 둡니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_closure_5',
    language: 'python',
    category: 'p_closure',
    title: '데코레이터 문법과의 관계',
    questionText: '파이썬 데코레이터(@) 패턴은 기본적으로 어떤 기술을 베이스로 하는가?',
    code: [
      '@deco',
      'def func(): pass'
    ],
    choices: ['클로저(Closure)', '다중상속', '제너레이터', '비동기 코루틴'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '@deco 는 func = deco(func) 와 완전히 같습니다. 함수를 인자로 받아 내부 래퍼(wrapper)를 만들고 반환하므로 필수적으로 클로저 패턴이 쓰입니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_closure_6',
    language: 'python',
    category: 'p_closure',
    title: '기억하는 함수 응용',
    questionText: '이 코드의 실행 결과는?',
    code: [
      'def prefix(pre):',
      '    return lambda word: f"{pre}{word}"',
      'log = prefix("[LOG] ")',
      'print(log("Hi"))'
    ],
    choices: ['[LOG] Hi', 'Hi', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'prefix는 내부 람다를 리턴하며, 이 람다는 부모의 pre 값을 스냅샷(클로저) 뜹니다.', output: '', variables: {} },
      { codeLine: 3, desc: '"[LOG] " 가 고정된 함수 log에 "Hi"를 주어 "[LOG] Hi" 출력.', output: '[LOG] Hi', variables: {} },
    ],
  },
  {
    id: 'p_closure_7',
    language: 'python',
    category: 'p_closure',
    title: '조건부 클로저 환경',
    questionText: '에러가 발생할까?',
    code: [
      'def wrap():',
      '    lst = []',
      '    def inner(v):',
      '        lst.append(v)',
      '        return lst',
      '    return inner',
      'print(wrap()("A")[0])'
    ],
    choices: ['A출력', '에러', 'None', '빈 리스트'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 6, desc: 'wrap() 평가시 inner 함수 반환, 그 직후 ("A") 평가. inner가 리스트의 주소를 캡처하므로 작동합니다.', output: 'A', variables: {} },
    ],
  },
  {
    id: 'p_closure_8',
    language: 'python',
    category: 'p_closure',
    title: 'nonlocal이 없는 경우(에러)',
    questionText: '에러가 발생하는 이유는?',
    code: [
      'def out():',
      '    c = 0',
      '    def in_():',
      '        c += 1 # 에러',
      '    return in_'
    ],
    choices: ['할당(증감)이 일어나서 in_의 지역스코프로 착각하고 로컬 c를 찾음', 'c가 상수라', '단순 문법 에러', '전역변수가 아니라서'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: 'c += 1 은 c = c + 1 이므로 우변에서 c를 찾는데, 새로운 할당(좌변)이 있기 때문에 c를 로컬이라고 여쭤어 UnboundLocalError를 유발합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_closure_9',
    language: 'python',
    category: 'p_closure',
    title: '클로저와 클래스 차이',
    questionText: '객체 지향적 관점에서 클로저의 위치는?',
    code: [
      '# 데이터와 함수를 묶는다는 측면의 개념 문제'
    ],
    choices: ['객체가 내부 데이터와 메서드를 갖듯, 클로저 함수는 단일 메서드와 보존된 상태(환경)를 가지는 것에 속한다', '아무 연관 없음', '객체 지향 파괴 행위', '항상 클래스보다 빠르다'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '클로저는 클래스의 경량화된 대체재로 자주 쓰입니다. 단일 책임을 가진 보존 환경이 필요할 때 객체를 만드는 것보다 가볍게 쓸 수 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_closure_10',
    language: 'python',
    category: 'p_closure',
    title: '데코레이터 작성',
    questionText: 'time_check 데코레이터를 짜려고 한다. 올바른 구조는?',
    code: [
      'def t_check(func):',
      '    def wrapper(*args):',
      '        # 시간 측정',
      '        return func(*args)',
      '    return wrapper'
    ],
    choices: ['올바름 (함수 안에 래퍼 함수 생성 및 반환)', '틀림', '반환값이 func 여야함', 'wrapper를 호출해서 반환해야함'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '가장 정석적인 클로저 활용입니다. 인자로 받은 함수 객체 func를 둘러싸는(wrapper) 새로운 함수를 찍어내어 교체합니다.', output: '', variables: {} },
    ],
  },
  // 10. 파이썬 출력
  {
    id: 'p_print_1',
    language: 'python',
    category: 'p_print',
    title: 'print 옵션 (end, sep)',
    questionText: '이 코드의 실행 결과로 맞는 것은?',
    code: [
      'print("A", "B", sep="-", end="")',
      'print("C")',
    ],
    choices: ['A-BC', 'A-B\\nC', 'A B C', 'ABC'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'sep="-" 로 A와 B 사이를 -로 연결, end="" 로 줄바꿈 없이 출력.', output: 'A-B', variables: {} },
      { codeLine: 1, desc: '바로 옆에 붙여서 C를 출력합니다.', output: 'A-BC', variables: {} },
    ],
  },
  {
    id: 'p_print_2',
    language: 'python',
    category: 'p_print',
    title: 'print 줄바꿈 동작 차이',
    questionText: '다음의 출력 줄 수는 총 몇 줄인가?',
    code: [
      'print("A\\nB")',
      'print("C")'
    ],
    choices: ['3줄', '2줄', '1줄', '4줄'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '내부에 개행 \\n 가 있으므로 A 출력 후 줄을 바꾸고 B를 출력합니다. (여기서 print 기본 end="\\n" 때문에 또 내려감)', output: 'A 줄바뀜 B', variables: {} },
      { codeLine: 1, desc: '다음 줄에 C 출력. 총 A, B, C가 3개의 독립된 라인에 나옵니다.', output: 'A(엔터)B(엔터)C', variables: {} },
    ],
  },
  {
    id: 'p_print_3',
    language: 'python',
    category: 'p_print',
    title: 'f-string 연산자 내포',
    questionText: '출력은 어떻게 되나?',
    code: [
      'v = 3',
      'print(f"[{v:03d}]")'
    ],
    choices: ['[003]', '[3  ]', '[  3]', '[3]'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: 'f-string의 포맷 미니 랭귀지. :03d는 숫자 3자리를 차지하며 남은 왼쪽 공간을 0으로 채우라는 zero-pad 의미입니다.', output: '[003]', variables: {} },
    ],
  },
  {
    id: 'p_print_4',
    language: 'python',
    category: 'p_print',
    title: '다중인자 print시 띄어쓰기 기본값',
    questionText: '이 코드의 실행 결과는?',
    code: [
      'print("X", "Y")'
    ],
    choices: ['X Y (공백 있음)', 'XY (공백 없음)', 'X\\nY', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: 'print 함수는 인자를 콤마로 연결 시 자동으로 sep=" " (공백 1칸) 을 띄워 줍니다.', output: 'X Y', variables: {} },
    ],
  },
  {
    id: 'p_print_5',
    language: 'python',
    category: 'p_print',
    title: '문자열 곱셈과 콤마의 차이',
    questionText: '출력은?',
    code: [
      'print("A" * 3)'
    ],
    choices: ['AAA', 'A A A', 'A,A,A', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '문자열 곱셈은 문자열 객체 자체를 바로 연장하여 만드므로 중간에 어떠한 공백도 끼어들지 않습니다.', output: 'AAA', variables: {} },
    ],
  },
  {
    id: 'p_print_6',
    language: 'python',
    category: 'p_print',
    title: 'print 언패킹 출력',
    questionText: '출력 결과는?',
    code: [
      'arr = [1, 2, 3]',
      'print(arr)',
      'print(*arr)'
    ],
    choices: ['[1, 2, 3] 의 다음줄에 1 2 3', '[1, 2, 3] 두 번 출력', '1 2 3 두번 출력', '[1 2 3]'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: '리스트 변수를 그냥 넣으면 꺾쇠 괄호를 포함하여 출력합니다. [1, 2, 3]', output: '', variables: {} },
      { codeLine: 2, desc: '애스터리스크(*)를 달아서 전달하면 인자를 3개 따로따로 전송한 print(1, 2, 3) 과 같아져 1 2 3 이 공백 띄워 출력됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_print_7',
    language: 'python',
    category: 'p_print',
    title: '따옴표 이스케이프 (Escape)',
    questionText: '에러 없이 "It\'s good" 을 출력하는 코드는?',
    code: [
      '# 1: print("It\'s good")',
      '# 2: print(\'It\\\'s good\')'
    ],
    choices: ['둘 다 올바름', '1번', '2번', '둘다 에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '쌍따옴표 내부에선 홑따옴표가 충돌 안 남. 홑따옴표 내부에선 역슬래시로 이스케이프(\\\') 처리되어 무사 통과합니다.', output: 'It\'s good', variables: {} },
    ],
  },
  {
    id: 'p_print_8',
    language: 'python',
    category: 'p_print',
    title: 'file 파라미터',
    questionText: 'print(..., file=??) 의 용도는?',
    code: [
      'import sys',
      'print("Error", file=sys.stderr)'
    ],
    choices: ['표준 에러 스트림(또는 특정 파일 객체)로 출력 리다이렉트', '화면과 파일 동시에 쓰기', '읽어오기', '프린트 금지'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: '파이썬 print 함수는 파라미터를 통해 쉽게 출력을 화면(stdout)이 아닌 특정 텍스트 파일이나 로그 콘솔(stderr)로 분기시킬 수 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_print_9',
    language: 'python',
    category: 'p_print',
    title: 'raw 문자열 출력',
    questionText: '출력 결과는?',
    code: [
      'print(r"C:\\new_folder")'
    ],
    choices: ['C:\\new_folder (이스케이프 무시됨)', 'C: ew_folder (개행 발동)', '에러난다', '빈문자열'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '문자열 앞에 프리픽스 r (raw string) 을 달면 \\n 같은 백슬래시 조합이 특수기호로 발동하지 않고 일반 텍스트 그대로 인쇄됩니다.', output: 'C:\\new_folder', variables: {} },
    ],
  },
  {
    id: 'p_print_10',
    language: 'python',
    category: 'p_print',
    title: '여러 변수의 형식화 (.format)',
    questionText: '출력은?',
    code: [
      'print("{1} {0}".format("A", "B"))'
    ],
    choices: ['B A', 'A B', '{B} {A}', '문법 에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '중괄호 안의 숫자는 파라미터의 인덱스를 가리킵니다. 1번은 "B", 0번은 "A" 이므로 역순 조립됩니다.', output: 'B A', variables: {} },
    ],
  }
];
