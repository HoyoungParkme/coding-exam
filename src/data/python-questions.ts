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
    id: 'p_dict_set_1',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_2',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_3',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_4',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_5',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_6',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_7',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_8',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_dict_set_9',
    language: 'python',
    category: 'p_dict_set',
    title: 'dict keys() iteration',
    questionText: '올바른 행동은?',
    code: [
      'd = {"X": 10, "Y": 20}',
      'for k in d:',
      '    print(k, end="")'
    ],
    choices: ['XY', '1020', '('X', 10)('Y', 20)', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: '딕셔너리 d 자체를 for루프 돌리면 자동으로 "키"들만 하나씩 꺼내옵니다.', output: '', variables: {} },
      { codeLine: 2, desc: '순서대로 X, Y가 출력됩니다. (최신 파이썬은 삽입 순서 보장)', output: 'XY', variables: {} },
    ],
  },
  {
    id: 'p_dict_set_10',
    language: 'python',
    category: 'p_dict_set',
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
    id: 'p_set',
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
  // 5. Tuple
  {
    id: 'p_tuple',
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
  // 6. 전역변수
  {
    id: 'p_global',
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
  // 7. 리스트 컴프리헨션
  {
    id: 'p_comp',
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
  // 8. 람다 함수
  {
    id: 'p_lambda',
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
  // 9. 클로저
  {
    id: 'p_closure',
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
  // 10. 파이썬 출력
  {
    id: 'p_print',
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
];
