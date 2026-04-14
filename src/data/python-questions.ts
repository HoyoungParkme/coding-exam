import type { Question } from './types';

export const PYTHON_QUESTIONS: Question[] = [
  // 1. 파이썬 문법 기초 (p_basic) - 10 questions
  {
    id: 'p_basic_1',
    language: 'python',
    category: 'p_basic',
    title: '비트 시프트 연산',
    questionText: '다음 파이썬 코드의 실행 결과는?',
    code: [
      'a = 100',
      'result = 0',
      'for i in range(1, 3):',
      '    result = a >> i',
      '    result += 1',
      'print(result)'
    ],
    choices: ['26', '51', '25', '101'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'a에 100 할당', output: '', variables: { a: 100 } },
      { codeLine: 2, desc: 'i=1일 때: 100 >> 1 = 50. result = 50 + 1 = 51', output: '', variables: { i: 1, result: 51 } },
      { codeLine: 2, desc: 'i=2일 때: 100 >> 2 = 25. result = 25 + 1 = 26', output: '', variables: { i: 2, result: 26 } },
      { codeLine: 5, desc: '최종 result 값 26 출력', output: '26', variables: {} },
    ],
  },
  {
    id: 'p_basic_2',
    language: 'python',
    category: 'p_basic',
    title: '동시 할당과 연산',
    questionText: '다음 코드 실행 후 출력값은?',
    code: [
      'a, b = 10, 20',
      'a, b = b, a + b',
      'print(a, b)'
    ],
    choices: ['20 30', '10 20', '20 10', '30 20'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'a=10, b=20 초기화', output: '', variables: { a: 10, b: 20 } },
      { codeLine: 1, desc: '우변 (b, a+b)가 먼저 계산된 후 할당됨. a=20, b=30.', output: '', variables: { a: 20, b: 30 } },
      { codeLine: 2, desc: '20 30 출력', output: '20 30', variables: {} },
    ],
  },
  {
    id: 'p_basic_3',
    language: 'python',
    category: 'p_basic',
    title: '불리언 연산 결과',
    questionText: '다음 코드의 출력값은?',
    code: [
      'a, b = 100, 200',
      'print(a == b)'
    ],
    choices: ['False', 'True', 'false', 'true'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '100과 200은 다르므로 False 반환. 파이썬은 대문자로 시작함.', output: 'False', variables: {} },
    ],
  },
  {
    id: 'p_basic_4',
    language: 'python',
    category: 'p_basic',
    title: '복합 대입 연산',
    questionText: '실행 후 result 값은?',
    code: [
      'a = 10',
      'a *= 2 + 3',
      'print(a)'
    ],
    choices: ['50', '23', '30', '25'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '우변 2+3이 먼저 계산됨(5). a = 10 * 5 = 50.', output: '50', variables: { a: 50 } },
    ],
  },
  {
    id: 'p_basic_5',
    language: 'python',
    category: 'p_basic',
    title: '거듭제곱과 나머지',
    questionText: '결과는?',
    code: [
      'print(2 ** 3 % 5)'
    ],
    choices: ['3', '1', '2', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '2의 3승은 8. 8을 5로 나눈 나머지는 3.', output: '3', variables: {} },
    ],
  },
  {
    id: 'p_basic_6',
    language: 'python',
    category: 'p_basic',
    title: 'is 연산자 기초',
    questionText: '결과는?',
    code: [
      'a = [1, 2]',
      'b = [1, 2]',
      'print(a is b)'
    ],
    choices: ['False', 'True', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '가리키는 주소가 다르므로 False입니다. ==는 True입니다.', output: 'False', variables: {} },
    ],
  },
  {
    id: 'p_basic_7',
    language: 'python',
    category: 'p_basic',
    title: '다중 할당 swap',
    questionText: '출력 결과는?',
    code: [
      'a, b = 1, 2',
      'a, b = b, a',
      'print(a, b)'
    ],
    choices: ['2 1', '1 2', '2 2', '1 1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '두 변수의 값을 교체합니다.', output: '2 1', variables: { a: 2, b: 1 } },
    ],
  },
  {
    id: 'p_basic_8',
    language: 'python',
    category: 'p_basic',
    title: '논리 연산자 우선순위',
    questionText: '결과는?',
    code: [
      'print(True or False and False)'
    ],
    choices: ['True', 'False', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'and가 or보다 우선순위가 높습니다. True or (False) 가 되어 True입니다.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_basic_9',
    language: 'python',
    category: 'p_basic',
    title: '정수 나눗셈 (//)',
    questionText: '결과는?',
    code: [
      'print(7 // 2)'
    ],
    choices: ['3', '3.5', '4', '2'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '// 연산자는 소수점을 버립니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'p_basic_10',
    language: 'python',
    category: 'p_basic',
    title: '타입 확인',
    questionText: 'type(1.0) 의 결과는?',
    code: [
      'print(type(1.0))'
    ],
    choices: ["<class 'float'>", "<class 'int'>", "<class 'str'>", '1.0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '소수점이 있으면 float 타입입니다.', output: "<class 'float'>", variables: {} },
    ],
  },

  // 2. 파이썬 문자열 처리 (p_str) - 10 questions
  {
    id: 'p_str_1',
    language: 'python',
    category: 'p_str',
    title: '문자열 슬라이싱 기초',
    questionText: '다음 코드의 실행 결과는?',
    code: [
      'a = "REMEMBER NOVEMBER"',
      'b = a[:3] + a[12:16]',
      'print(b)'
    ],
    choices: ['REMEMBER', 'REMN', 'EMEMBER', 'REMBER'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'a[:3]은 "REM", a[12:16]은 "EMBER". 합치면 "REMEMBER".', output: 'REMEMBER', variables: { b: 'REMEMBER' } },
    ],
  },
  {
    id: 'p_str_2',
    language: 'python',
    category: 'p_str',
    title: '복합 슬라이싱',
    questionText: '출력 결과는?',
    code: [
      'a = "engineer information processing"',
      'b = a[:3]',
      'c = a[4:6]',
      'd = a[28:]',
      'print(b + c + d)'
    ],
    choices: ['engneing', 'enginpro', 'enginfo', 'enginein'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'eng, ne, ing를 추출하여 합칩니다.', output: 'engneing', variables: {} },
    ],
  },
  {
    id: 'p_str_3',
    language: 'python',
    category: 'p_str',
    title: 'split() 메서드',
    questionText: '결과는?',
    code: [
      'str = "a,b,c"',
      'res = str.split(",")',
      'print(res)'
    ],
    choices: ["['a', 'b', 'c']", "('a', 'b', 'c')", '"abc"', "['a,b,c']"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '구분자로 잘라 리스트를 생성합니다.', output: "['a', 'b', 'c']", variables: {} },
    ],
  },
  {
    id: 'p_str_4',
    language: 'python',
    category: 'p_str',
    title: 'join() 메서드',
    questionText: '결과는?',
    code: [
      'a = ["S", "E", "O", "U", "L"]',
      'print("-".join(a))'
    ],
    choices: ['S-E-O-U-L', 'SEOUL', 'S-E-O-U-L-', '-S-E-O-U-L'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '리스트 요소들을 특정 문자로 연결합니다.', output: 'S-E-O-U-L', variables: {} },
    ],
  },
  {
    id: 'p_str_5',
    language: 'python',
    category: 'p_str',
    title: 'find() vs index()',
    questionText: '찾는 문자가 없을 때 find()의 결과는?',
    code: [
      'a = "ABCD"',
      'print(a.find("Z"))'
    ],
    choices: ['-1', '0', 'Error', 'False'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'find는 없을 때 -1을 리턴합니다.', output: '-1', variables: {} },
    ],
  },
  {
    id: 'p_str_6',
    language: 'python',
    category: 'p_str',
    title: 'strip() 메서드',
    questionText: '출력 결과는?',
    code: [
      'a = " hello "',
      'print(a.strip())'
    ],
    choices: ['hello', ' hello ', ' hello', 'hello '],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '좌우 공백을 제거합니다.', output: 'hello', variables: {} },
    ],
  },
  {
    id: 'p_str_7',
    language: 'python',
    category: 'p_str',
    title: '문자열 대소문자 변환',
    questionText: '결과는?',
    code: [
      'a = "Python"',
      'print(a.upper(), a.lower())'
    ],
    choices: ['PYTHON python', 'python PYTHON', 'Python python', 'PYTHON Python'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '전체 대문자, 전체 소문자로 변환합니다.', output: 'PYTHON python', variables: {} },
    ],
  },
  {
    id: 'p_str_8',
    language: 'python',
    category: 'p_str',
    title: '문자열 replace',
    questionText: '결과는?',
    code: [
      'a = "Apple Pie"',
      'print(a.replace("Apple", "Banana"))'
    ],
    choices: ['Banana Pie', 'Apple Pie', 'Banana', 'Pie'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '특정 단어를 교체합니다.', output: 'Banana Pie', variables: {} },
    ],
  },
  {
    id: 'p_str_9',
    language: 'python',
    category: 'p_str',
    title: '문자열 포맷팅 (%)',
    questionText: '결과는?',
    code: [
      'a = "R AND %s" % "STR"',
      'print(a)'
    ],
    choices: ['R AND STR', 'R AND string', 'Error', 'R AND %sSTR'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '%s 에 문자열이 대입됩니다.', output: 'R AND STR', variables: {} },
    ],
  },
  {
    id: 'p_str_10',
    language: 'python',
    category: 'p_str',
    title: '슬라이싱 간격(Step)',
    questionText: '결과는?',
    code: [
      'a = "123456"',
      'print(a[0:6:2])'
    ],
    choices: ['135', '246', '123', '456'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '0부터 6전까지 2씩 건너뜁니다 (1, 3, 5).', output: '135', variables: {} },
    ],
  },

  // 3. 파이썬 자료구조 - Dictionary (p_dict) - 10 questions
  {
    id: 'p_dict_1',
    language: 'python',
    category: 'p_dict',
    title: '딕셔너리 값 수정',
    questionText: '출력 결과는?',
    code: [
      "a = {'name': 'Park', 'age': 20}",
      "a['age'] = 30",
      "print(a['age'])"
    ],
    choices: ['30', '20', "{'age': 30}", 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'key를 이용해 값을 변경합니다.', output: '30', variables: { a: "{'name': 'Park', 'age': 30}" } },
    ],
  },
  {
    id: 'p_dict_2',
    language: 'python',
    category: 'p_dict',
    title: '딕셔너리 요소 추가',
    questionText: 'len(a) 는?',
    code: [
      "a = {'A': 1}",
      "a['B'] = 2",
      "print(len(a))"
    ],
    choices: ['2', '1', '에러', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '새로운 key-value 쌍이 추가됩니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_dict_3',
    language: 'python',
    category: 'p_dict',
    title: '딕셔너리 keys() 메서드',
    questionText: '결과는?',
    code: [
      "a = {'val': 10}",
      "print(list(a.keys()))"
    ],
    choices: ["['val']", "['10']", '[10]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'key 목록을 가져옵니다.', output: "['val']", variables: {} },
    ],
  },
  {
    id: 'p_dict_4',
    language: 'python',
    category: 'p_dict',
    title: 'get() 메서드 장점',
    questionText: '없는 키를 get할 때 결과는?',
    code: [
      "a = {'A': 1}",
      "print(a.get('Z'))"
    ],
    choices: ['None', 'Error', '-1', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'get은 키가 없어도 에러 대신 None을 반환합니다.', output: 'None', variables: {} },
    ],
  },
  {
    id: 'p_dict_5',
    language: 'python',
    category: 'p_dict',
    title: 'del 키워드',
    questionText: '출력 결과는?',
    code: [
      "a = {'A': 1, 'B': 2}",
      "del a['A']",
      "print(len(a))"
    ],
    choices: ['1', '2', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '특정 항목을 삭제합니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'p_dict_6',
    language: 'python',
    category: 'p_dict',
    title: 'in 연산자와 딕셔너리',
    questionText: '결과는?',
    code: [
      "a = {'name': 'Kim'}",
      "print('name' in a)"
    ],
    choices: ['True', 'False', 'Kim', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '키가 존재하는지 확인합니다.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_dict_7',
    language: 'python',
    category: 'p_dict',
    title: 'clear() 메서드',
    questionText: '결과는?',
    code: [
      "a = {'A': 1}",
      "a.clear()",
      "print(a)"
    ],
    choices: ['{}', 'None', 'Error', 'set()'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '모든 항목을 비웁니다.', output: '{}', variables: {} },
    ],
  },
  {
    id: 'p_dict_8',
    language: 'python',
    category: 'p_dict',
    title: 'update() 메서드',
    questionText: '결과는?',
    code: [
      "a = {'A': 1}",
      "a.update({'B': 2})",
      "print(len(a))"
    ],
    choices: ['2', '1', '{}', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '딕셔너리를 병합합니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_dict_9',
    language: 'python',
    category: 'p_dict',
    title: 'items() 메서드',
    questionText: '아이템 출력 형태는?',
    code: [
      "a = {'A': 1}",
      "for k, v in a.items(): print(k, v)"
    ],
    choices: ['A 1', "('A', 1)", 'A', '1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '키와 값을 튜플 형태로 각각 받습니다.', output: 'A 1', variables: {} },
    ],
  },
  {
    id: 'p_dict_10',
    language: 'python',
    category: 'p_dict',
    title: '딕셔너리 컴프리헨션 기초',
    questionText: '결과는?',
    code: [
      "a = {x: x*2 for x in [1, 2]}",
      "print(a[2])"
    ],
    choices: ['4', '2', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: "{1: 2, 2: 4} 딕셔너리가 생성됩니다.", output: '4', variables: {} },
    ],
  },

  // 4. 파이썬 자료구조 - SET (p_set) - 10 questions
  {
    id: 'p_set_1',
    language: 'python',
    category: 'p_set',
    title: '집합의 특성 (중복 제거)',
    questionText: '다음 코드의 결과는?',
    code: [
      "a = {'KR', 'CH', 'JP', 'KR'}",
      "print(len(a))"
    ],
    choices: ['3', '4', '2', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '중복된 KR은 하나로 처리됩니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'p_set_2',
    language: 'python',
    category: 'p_set',
    title: '요소 추가 (add)',
    questionText: '결과는?',
    code: [
      "a = {1, 2}",
      "a.add(3)",
      "a.add(1)",
      "print(len(a))"
    ],
    choices: ['3', '4', '2', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '3 추가. (1, 2, 3)', output: '', variables: {} },
      { codeLine: 2, desc: '1 추가 (이미 있음). (1, 2, 3)', output: '3', variables: {} },
    ],
  },
  {
    id: 'p_set_3',
    language: 'python',
    category: 'p_set',
    title: '여러 요소 추가 (update)',
    questionText: 'len(a)는?',
    code: [
      "a = {1}",
      "a.update([1, 2, 3])",
      "print(len(a))"
    ],
    choices: ['3', '4', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'update는 여러 요소를 한꺼번에 추가합니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'p_set_4',
    language: 'python',
    category: 'p_set',
    title: '요소 제거 (remove)',
    questionText: '출력 결과는?',
    code: [
      "a = {1, 2, 3}",
      "a.remove(2)",
      "print(len(a))"
    ],
    choices: ['2', '3', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'remove는 특정 요소를 삭제합니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_set_5',
    language: 'python',
    category: 'p_set',
    title: '교집합 연산',
    questionText: '결과는?',
    code: [
      "s1 = {1, 2, 3}",
      "s2 = {3, 4, 5}",
      "print(s1 & s2)"
    ],
    choices: ['{3}', '{1, 2, 3, 4, 5}', 'set()', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '& 기호는 교집합을 의미합니다.', output: '{3}', variables: {} },
    ],
  },
  {
    id: 'p_set_6',
    language: 'python',
    category: 'p_set',
    title: '합집합 연산',
    questionText: '결과는?',
    code: [
      "s1 = {1, 2}",
      "s2 = {2, 3}",
      "print(s1 | s2)"
    ],
    choices: ['{1, 2, 3}', '{2}', '{1, 2, 2, 3}', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '| 기호는 합집합을 의미합니다.', output: '{1, 2, 3}', variables: {} },
    ],
  },
  {
    id: 'p_set_7',
    language: 'python',
    category: 'p_set',
    title: '차집합 연산',
    questionText: '결과는?',
    code: [
      "s1 = {1, 2, 3}",
      "s2 = {2}",
      "print(s1 - s2)"
    ],
    choices: ['{1, 3}', '{1, 2}', '{3}', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '- 기호는 차집합을 의미합니다.', output: '{1, 3}', variables: {} },
    ],
  },
  {
    id: 'p_set_8',
    language: 'python',
    category: 'p_set',
    title: '리스트 중복 제거 활용',
    questionText: '결과는?',
    code: [
      "l = [1, 2, 2, 3]",
      "print(list(set(l)))"
    ],
    choices: ["[1, 2, 3]", "[1, 2, 2, 3]", "[1, 2]", "Error"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'set으로 변환하여 중복을 없애고 다시 리스트로 만듭니다.', output: '[1, 2, 3]', variables: {} },
    ],
  },
  {
    id: 'p_set_9',
    language: 'python',
    category: 'p_set',
    title: '비대칭 차집합 (symmetric_difference)',
    questionText: '결과는?',
    code: [
      "s1 = {1, 2}",
      "s2 = {2, 3}",
      "print(s1 ^ s2)"
    ],
    choices: ['{1, 3}', '{2}', '{1, 2, 3}', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '^ 기호는 합집합에서 교집합을 뺀 차이를 의미합니다.', output: '{1, 3}', variables: {} },
    ],
  },
  {
    id: 'p_set_10',
    language: 'python',
    category: 'p_set',
    title: '빈 집합 생성',
    questionText: 'type({}) 의 결과는?',
    code: [
      "print(type({}))"
    ],
    choices: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "Error"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '{} 는 빈 딕셔너리를 생성합니다. 빈 집합은 set() 이어야 합니다.', output: "<class 'dict'>", variables: {} },
    ],
  },

  // 5. 파이썬 자료구조 - Tuple (p_tuple) - 10 questions
  {
    id: 'p_tuple_1',
    language: 'python',
    category: 'p_tuple',
    title: '튜플의 불변성',
    questionText: '다음 코드의 결과는?',
    code: [
      "t = (1, 2)",
      "# t[0] = 3"
    ],
    choices: ['에러 (TypeError)', 't=(3, 2)가 됨', '(1, 2)', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '튜플은 합성이 아닌 개별 수정이 불가능합니다.', output: 'TypeError', variables: {} },
    ],
  },
  {
    id: 'p_tuple_2',
    language: 'python',
    category: 'p_tuple',
    title: '싱글톤 튜플 주의점',
    questionText: 'type((1)) 의 결과는?',
    code: [
      "print(type((1)))"
    ],
    choices: ["<class 'int'>", "<class 'tuple'>", '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '괄호만 있으면 연산 우선순위 괄호로 취급되어 int가 됩니다. (1,) 이어야 튜플입니다.', output: "<class 'int'>", variables: {} },
    ],
  },
  {
    id: 'p_tuple_3',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 언패킹',
    questionText: '결과는?',
    code: [
      "t = (1, 2)",
      "a, b = t",
      "print(a + b)"
    ],
    choices: ['3', '12', 'Error', '(1, 2)'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '튜플 요소를 각각 분해하여 변수에 할당합니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'p_tuple_4',
    language: 'python',
    category: 'p_tuple',
    title: '함수 리턴과 튜플',
    questionText: '리턴 타입은?',
    code: [
      "def get(): return 1, 2",
      "print(type(get()))"
    ],
    choices: ["<class 'tuple'>", "<class 'list'>", "int", "Error"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '쉼표로 나열된 여러 리턴값은 튜플로 묶여 반환됩니다.', output: "<class 'tuple'>", variables: {} },
    ],
  },
  {
    id: 'p_tuple_5',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 인덱싱',
    questionText: '결과는?',
    code: [
      "t = (10, 20, 30)",
      "print(t[1])"
    ],
    choices: ['20', '10', '30', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '리스트와 동일하게 0부터 시작합니다.', output: '20', variables: {} },
    ],
  },
  {
    id: 'p_tuple_6',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 결합',
    questionText: '결과는?',
    code: [
      "t1 = (1, 2)",
      "t2 = (3,)",
      "print(t1 + t2)"
    ],
    choices: ['(1, 2, 3)', '(1, 2, 3,)', 'Error', '(1, 2, (3,))'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '+ 연산으로 두 튜플을 합친 새로운 튜플을 만듭니다.', output: '(1, 2, 3)', variables: {} },
    ],
  },
  {
    id: 'p_tuple_7',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 요소 개수 (count)',
    questionText: '결과는?',
    code: [
      "t = (1, 1, 2)",
      "print(t.count(1))"
    ],
    choices: ['2', '1', '3', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '특정 요소의 개수를 셉니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_tuple_8',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 반복 (*)',
    questionText: '결과는?',
    code: [
      "t = (0,)",
      "print(t * 3)"
    ],
    choices: ['(0, 0, 0)', '0, 0, 0', 'Error', '(0, 3)'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '거듭제곱과 같이 요소를 반복합니다.', output: '(0, 0, 0)', variables: {} },
    ],
  },
  {
    id: 'p_tuple_9',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 vs 리스트 메모리',
    questionText: '상대적으로 메모리를 적게 차지하는 것은?',
    code: [
      "# t = (1, 2, 3)",
      "# l = [1, 2, 3]"
    ],
    choices: ['튜플(tuple)', '리스트(list)', '동일함', '알수없음'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '튜플은 변경이 불가능하므로 리스트보다 메모리 효율이 좋습니다.', output: 'tuple', variables: {} },
    ],
  },
  {
    id: 'p_tuple_10',
    language: 'python',
    category: 'p_tuple',
    title: '튜플 슬라이싱',
    questionText: '결과는?',
    code: [
      "t = (1, 2, 3, 4)",
      "print(t[1:])"
    ],
    choices: ['(2, 3, 4)', '(1, 2, 3)', '(2, 3)', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '리스트와 마찬가지로 슬라이싱 결과를 새 튜플로 반환합니다.', output: '(2, 3, 4)', variables: {} },
    ],
  },

  // 6. 파이썬 함수 - 전역변수 (p_global) - 10 questions
  {
    id: 'p_global_1',
    language: 'python',
    category: 'p_global',
    title: '전역 변수 수정 (global)',
    questionText: '실행 결과는?',
    code: [
      "val = 10",
      "def func():",
      "    global val",
      "    val = 20",
      "func()",
      "print(val)"
    ],
    choices: ['20', '10', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'global 예약어로 외부 변수를 사용하겠다고 알립니다.', output: '', variables: { val: 20 } },
      { codeLine: 5, desc: '외부 val 값이 20으로 바뀌어 출력됩니다.', output: '20', variables: {} },
    ],
  },
  {
    id: 'p_global_2',
    language: 'python',
    category: 'p_global',
    title: '지역 변수의 독립성',
    questionText: '출력 결과는?',
    code: [
      "x = 5",
      "def change():",
      "    x = 10",
      "change()",
      "print(x)"
    ],
    choices: ['5', '10', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '함수 내부의 x는 로컬 변수로 바깥 x와 무관합니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'p_global_3',
    language: 'python',
    category: 'p_global',
    title: '기본 매개변수 값',
    questionText: '실행 결과는?',
    code: [
      "def show(a, b=2):",
      "    print(a + b)",
      "show(10)"
    ],
    choices: ['12', '10', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'b의 기본값 2가 사용되어 10+2=12가 출력됩니다.', output: '12', variables: {} },
    ],
  },
  {
    id: 'p_global_4',
    language: 'python',
    category: 'p_global',
    title: '매개변수 전달 (Mutable)',
    questionText: '결과는?',
    code: [
      "def add(l): l.append(1)",
      "my = [0]",
      "add(my)",
      "print(my)"
    ],
    choices: ['[0, 1]', '[0]', '[1]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '리스트는 주소가 전달되므로 함수 내 변경이 원본에 영향을 줍니다.', output: '[0, 1]', variables: {} },
    ],
  },
  {
    id: 'p_global_5',
    language: 'python',
    category: 'p_global',
    title: '가변 매개변수 (*args)',
    questionText: '결과는?',
    code: [
      "def count(*n): return len(n)",
      "print(count(1, 2, 3))"
    ],
    choices: ['3', '1', 'Error', '6'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '*n은 인자들을 튜플로 모읍니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'p_global_6',
    language: 'python',
    category: 'p_global',
    title: '키워드 매개변수 (**kwargs)',
    questionText: '결과는?',
    code: [
      "def test(**k): return k['a']",
      "print(test(a=1, b=2))"
    ],
    choices: ['1', '2', 'Error', "{'a': 1}"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '**k는 키워드 인자들을 딕셔너리로 모읍니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'p_global_7',
    language: 'python',
    category: 'p_global',
    title: 'local 변수 선언 전 참조',
    questionText: '다음 코드의 결과는?',
    code: [
      "x = 10",
      "def f():",
      "    # print(x) # 주석 해제 시",
      "    x = 20"
    ],
    choices: ['UnboundLocalError 발생', '10 출력', '20 출력', '에러 없음'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '함수 내에서 x에 값을 넣으면 파이썬은 x를 지역변수로 간주합니다. 정의 전 사용 시 에러.', output: 'UnboundLocalError', variables: {} },
    ],
  },
  {
    id: 'p_global_8',
    language: 'python',
    category: 'p_global',
    title: '람다(Lambda) 함수 기본',
    questionText: '결과는?',
    code: [
      "f = lambda a, b: a * b",
      "print(f(3, 4))"
    ],
    choices: ['12', '7', 'Error', '3, 4'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '한 줄로 된 익명 함수입니다.', output: '12', variables: {} },
    ],
  },
  {
    id: 'p_global_9',
    language: 'python',
    category: 'p_global',
    title: '재귀 함수 기초',
    questionText: 'f(3) 의 결과는?',
    code: [
      "def f(n):",
      "    if n == 0: return 0",
      "    return n + f(n-1)",
      "print(f(3))"
    ],
    choices: ['6', '3', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'stack',
    steps: [
      { codeLine: 3, desc: '3 + 2 + 1 + 0 = 6.', output: '6', variables: {} },
    ],
  },
  {
    id: 'p_global_10',
    language: 'python',
    category: 'p_global',
    title: '함수 내 중첩 함수',
    questionText: '결과는?',
    code: [
      "def out():",
      "    def in_(): return 'HI'",
      "    return in_()",
      "print(out())"
    ],
    choices: ['HI', 'Error', 'None', 'in_'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '내부 함수를 정의하고 호출할 수 있습니다.', output: 'HI', variables: {} },
    ],
  },

  // 7. 리스트 컴프리헨션 (p_comp) - 10 questions
  {
    id: 'p_comp_1',
    language: 'python',
    category: 'p_comp',
    title: '기본 리스트 컴프리헨션',
    questionText: '결과는?',
    code: [
      "a = [i for i in range(3)]",
      "print(a)"
    ],
    choices: ['[0, 1, 2]', '[1, 2, 3]', '[0, 1, 2, 3]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'range(3)은 0, 1, 2를 생성합니다.', output: '[0, 1, 2]', variables: { a: '[0, 1, 2]' } },
    ],
  },
  {
    id: 'p_comp_2',
    language: 'python',
    category: 'p_comp',
    title: '조건부 컴프리헨션',
    questionText: 'len(a)는?',
    code: [
      "a = [x for x in range(10) if x % 2 == 0]",
      "print(len(a))"
    ],
    choices: ['5', '4', '6', '10'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '0, 2, 4, 6, 8 총 5개가 생성됩니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'p_comp_3',
    language: 'python',
    category: 'p_comp',
    title: '제곱수 리스트 생성',
    questionText: '결과는?',
    code: [
      "a = [x*x for x in [1, 2, 3]]",
      "print(a)"
    ],
    choices: ['[1, 4, 9]', '[1, 2, 3]', '[2, 4, 6]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '각 요소를 제곱하여 리스트를 만듭니다.', output: '[1, 4, 9]', variables: {} },
    ],
  },
  {
    id: 'p_comp_4',
    language: 'python',
    category: 'p_comp',
    title: '문자열 길이 리스트',
    questionText: '결과는?',
    code: [
      "a = ['a', 'abc']",
      "b = [len(x) for x in a]",
      "print(b)"
    ],
    choices: ['[1, 3]', '[1, 2, 3]', "['a', 'abc']", 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'len 함수를 적용한 결과를 모읍니다.', output: '[1, 3]', variables: {} },
    ],
  },
  {
    id: 'p_comp_5',
    language: 'python',
    category: 'p_comp',
    title: '이중 루프 컴프리헨션',
    questionText: 'len(a)는?',
    code: [
      "a = [x + y for x in [1] for y in [1, 2]]",
      "print(len(a))"
    ],
    choices: ['2', '1', '4', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '1+1, 1+2 가 차례로 수행됩니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_comp_6',
    language: 'python',
    category: 'p_comp',
    title: 'if-else 컴프리헨션',
    questionText: '결과는?',
    code: [
      "a = ['A' if x > 0 else 'B' for x in [1, -1]]",
      "print(a)"
    ],
    choices: ["['A', 'B']", "['A', 'A']", "['B', 'B']", "['A']"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '항목마다 if-else 삼항 연산을 적용합니다.', output: "['A', 'B']", variables: {} },
    ],
  },
  {
    id: 'p_comp_7',
    language: 'python',
    category: 'p_comp',
    title: '중첩 리스트 펼치기',
    questionText: '결과는?',
    code: [
      "l = [[1], [2]]",
      "a = [x for sub in l for x in sub]",
      "print(a)"
    ],
    choices: ['[1, 2]', '[[1], [2]]', '[1, [2]]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '중첩 루프를 사용하여 리스트를 평탄화합니다.', output: '[1, 2]', variables: {} },
    ],
  },
  {
    id: 'p_comp_8',
    language: 'python',
    category: 'p_comp',
    title: 'Set 컴프리헨션',
    questionText: 'type(a)는?',
    code: [
      "a = {x % 2 for x in range(10)}",
      "print(type(a))"
    ],
    choices: ["<class 'set'>", "<class 'dict'>", "<class 'list'>", "Error"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '중괄호를 사용한 컴프리헨션은 세트를 만듭니다.', output: "<class 'set'>", variables: {} },
    ],
  },
  {
    id: 'p_comp_9',
    language: 'python',
    category: 'p_comp',
    title: '딕셔너리 컴프리헨션',
    questionText: '결과는?',
    code: [
      "a = {k: v for k, v in [('a', 1)]}",
      "print(a['a'])"
    ],
    choices: ['1', 'a', "('a', 1)", 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '키와 값을 지정하여 딕셔너리를 만듭니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'p_comp_10',
    language: 'python',
    category: 'p_comp',
    title: '문자열 필터링',
    questionText: '결과는?',
    code: [
      "a = [c for c in 'ABC' if c != 'B']",
      "print(''.join(a))"
    ],
    choices: ['AC', 'ABC', 'A C', 'A'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: "B가 아닌 문자들(['A', 'C'])을 합칩니다.", output: 'AC', variables: {} },
    ],
  },

  // 8. 람다 함수 및 내장 함수 (p_lambda) - 10 questions
  {
    id: 'p_lambda_1',
    language: 'python',
    category: 'p_lambda',
    title: 'map() 과 람다',
    questionText: '결과는?',
    code: [
      "l = [1, 2, 3]",
      "r = list(map(lambda x: x + 10, l))",
      "print(r)"
    ],
    choices: ['[11, 12, 13]', '[1, 2, 3]', '[10, 10, 10]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '모든 요소에 10을 더하는 함수를 적용합니다.', output: '[11, 12, 13]', variables: {} },
    ],
  },
  {
    id: 'p_lambda_2',
    language: 'python',
    category: 'p_lambda',
    title: 'filter() 와 람다',
    questionText: '결과는?',
    code: [
      "l = [1, 2, 3, 4]",
      "r = list(filter(lambda x: x % 2 == 0, l))",
      "print(r)"
    ],
    choices: ['[2, 4]', '[1, 3]', '[1, 2, 3, 4]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '조건이 참(짝수)인 요소만 걸러냅니다.', output: '[2, 4]', variables: {} },
    ],
  },
  {
    id: 'p_lambda_3',
    language: 'python',
    category: 'p_lambda',
    title: 'sorted() 와 key',
    questionText: '출력 결과는?',
    code: [
      "a = [(1, 2), (0, 10)]",
      "r = sorted(a, key=lambda x: x[1])",
      "print(r[0][0])"
    ],
    choices: ['1', '0', '2', '10'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '두 번째 요소 기준으로 정렬하면 (1, 2) 가 먼저 옵니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'p_lambda_4',
    language: 'python',
    category: 'p_lambda',
    title: 'all() 내장 함수',
    questionText: '결과는?',
    code: [
      "l = [True, True, 1]",
      "print(all(l))"
    ],
    choices: ['True', 'False', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '모든 요소가 Truthy 이면 True를 반환합니다.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_lambda_5',
    language: 'python',
    category: 'p_lambda',
    title: 'any() 내장 함수',
    questionText: '결과는?',
    code: [
      "l = [0, False, 'A']",
      "print(any(l))"
    ],
    choices: ['True', 'False', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '하나라도 Truthy 가 있으면 True를 반환합니다.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_lambda_6',
    language: 'python',
    category: 'p_lambda',
    title: 'chr() 와 ord()',
    questionText: '결과는?',
    code: [
      "print(chr(ord('A') + 1))"
    ],
    choices: ['B', 'A', '66', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'ord는 문자의 코드를, chr은 코드의 문자를 반환합니다. A 다음 문자는 B.', output: 'B', variables: {} },
    ],
  },
  {
    id: 'p_lambda_7',
    language: 'python',
    category: 'p_lambda',
    title: 'zip() 내장 함수',
    questionText: '결과는?',
    code: [
      "a = [1, 2]",
      "b = ['A', 'B']",
      "print(list(zip(a, b))[0])"
    ],
    choices: ["(1, 'A')", "[1, 'A']", "1A", "Error"],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '동일 인덱스 요소끼리 튜플로 묶습니다.', output: "(1, 'A')", variables: {} },
    ],
  },
  {
    id: 'p_lambda_8',
    language: 'python',
    category: 'p_lambda',
    title: 'enumerate() 활용',
    questionText: '첫 번째 출력값은?',
    code: [
      "l = ['A', 'B']",
      "for i, v in enumerate(l): print(i, v); break"
    ],
    choices: ['0 A', '1 A', 'A 0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '인덱스와 값을 함께 가져옵니다. 0부터 시작.', output: '0 A', variables: {} },
    ],
  },
  {
    id: 'p_lambda_9',
    language: 'python',
    category: 'p_lambda',
    title: 'divmod() 활용',
    questionText: '결과는?',
    code: [
      "print(divmod(7, 3))"
    ],
    choices: ['(2, 1)', '[2, 1]', '2 1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '몫과 나머지를 한꺼번에 튜플로 반환합니다.', output: '(2, 1)', variables: {} },
    ],
  },
  {
    id: 'p_lambda_10',
    language: 'python',
    category: 'p_lambda',
    title: 'eval() 함수 주의점',
    questionText: '결과는?',
    code: [
      "s = '1 + 2'",
      "print(eval(s))"
    ],
    choices: ['3', '1 + 2', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '문자열로 된 코드를 실행합니다.', output: '3', variables: {} },
    ],
  },

  // 9. 클로저 및 클래스 기초 (p_closure) - 10 questions
  {
    id: 'p_closure_1',
    language: 'python',
    category: 'p_closure',
    title: '클로저(Closure) 기초',
    questionText: '출력 결과는?',
    code: [
      "def out(x):",
      "    def inner(y): return x + y",
      "    return inner",
      "f = out(10)",
      "print(f(5))"
    ],
    choices: ['15', '10', '5', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '내부 함수가 외부 스코프의 x(10)을 기억합니다.', output: '15', variables: {} },
    ],
  },
  {
    id: 'p_closure_2',
    language: 'python',
    category: 'p_closure',
    title: '클래스 인스턴스 변수',
    questionText: '결과는?',
    code: [
      "class T:",
      "    def __init__(self, n): self.n = n",
      "obj1 = T(10)",
      "obj2 = T(20)",
      "print(obj1.n)"
    ],
    choices: ['10', '20', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '각 인스턴스마다 독립적인 값을 가집니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'p_closure_3',
    language: 'python',
    category: 'p_closure',
    title: '클래스 변수 공유',
    questionText: '결과는?',
    code: [
      "class T:",
      "    count = 0",
      "    def __init__(self): T.count += 1",
      "a, b = T(), T()",
      "print(T.count)"
    ],
    choices: ['2', '1', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '두 번 생성되어 공용 count가 2가 됩니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'p_closure_4',
    language: 'python',
    category: 'p_closure',
    title: '상속(Inheritance) 기초',
    questionText: '결과는?',
    code: [
      "class A: pass",
      "class B(A): pass",
      "b = B()",
      "print(isinstance(b, A))"
    ],
    choices: ['True', 'False', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '상속받은 자식 객체는 부모 타입이기도 합니다.', output: 'True', variables: {} },
    ],
  },
  {
    id: 'p_closure_5',
    language: 'python',
    category: 'p_closure',
    title: '메서드 오버라이딩',
    questionText: '결과는?',
    code: [
      "class A: def f(self): print('A')",
      "class B(A): def f(self): print('B')",
      "B().f()"
    ],
    choices: ['B', 'A', 'AB', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '자식에서 새로 정의한 메서드가 호출됩니다.', output: 'B', variables: {} },
    ],
  },
  {
    id: 'p_closure_6',
    language: 'python',
    category: 'p_closure',
    title: 'super() 활용',
    questionText: '결과는?',
    code: [
      "class A: def __init__(self): print('A')",
      "class B(A):",
      "    def __init__(self):",
      "        super().__init__()",
      "        print('B')",
      "B()"
    ],
    choices: ['A B', 'B A', 'B', 'A'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '부모 생성자를 먼저 호출한 후 자신의 코드를 실행합니다.', output: 'A B', variables: {} },
    ],
  },
  {
    id: 'p_closure_7',
    language: 'python',
    category: 'p_closure',
    title: '클래스 내 변수와 루프',
    questionText: '결과는?',
    code: [
      "class good:",
      "    li = ['seoul', 'inchon']",
      "g = good()",
      "res = ''",
      "for i in g.li: res += i[0]",
      "print(res)"
    ],
    choices: ['si', 'se', '서울인천', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: 'seoul의 s, inchon의 i를 가져옵니다.', output: 'si', variables: {} },
    ],
  },
  {
    id: 'p_closure_8',
    language: 'python',
    category: 'p_closure',
    title: '__str__ 매직 메서드',
    questionText: 'print(obj) 의 결과는?',
    code: [
      "class A:",
      "    def __str__(self): return 'OBJ'",
      "print(A())"
    ],
    choices: ['OBJ', '에러', '주소값', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '객체를 문자열로 표현할 때 사용됩니다.', output: 'OBJ', variables: {} },
    ],
  },
  {
    id: 'p_closure_9',
    language: 'python',
    category: 'p_closure',
    title: '비공개 멤버 (__)',
    questionText: '결과?',
    code: [
      "class A: def __init__(self): self.__v = 1",
      "a = A()",
      "# print(a.__v)"
    ],
    choices: ['AttributeError 발생', '1', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '더블 언더스코어는 캡슐화되어 직접 접근이 어렵습니다.', output: 'AttributeError', variables: {} },
    ],
  },
  {
    id: 'p_closure_10',
    language: 'python',
    category: 'p_closure',
    title: 'nonlocal 키워드',
    questionText: '결과는?',
    code: [
      "def out():",
      "    x = 10",
      "    def in_():",
      "        nonlocal x",
      "        x = 20",
      "    in_()",
      "    return x",
      "print(out())"
    ],
    choices: ['20', '10', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '바깥쪽 비전역 변수를 수정합니다.', output: '20', variables: {} },
    ],
  },

  // 10. 파이썬 출력 및 기타 (p_print) - 10 questions
  {
    id: 'p_print_1',
    language: 'python',
    category: 'p_print',
    title: 'print sep 옵션',
    questionText: '결과는?',
    code: [
      "print(1, 2, sep='-')"
    ],
    choices: ['1-2', '1 2', '12', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '구분자를 하이픈으로 지정합니다.', output: '1-2', variables: {} },
    ],
  },
  {
    id: 'p_print_2',
    language: 'python',
    category: 'p_print',
    title: 'print end 옵션',
    questionText: '결과는?',
    code: [
      "print(1, end='')",
      "print(2)"
    ],
    choices: ['12', '1\n2', '1 2', '21'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '줄바꿈을 하지 않고 이어서 출력하게 합니다.', output: '12', variables: {} },
    ],
  },
  {
    id: 'p_print_3',
    language: 'python',
    category: 'p_print',
    title: '조건문 삼항 연산 스타일',
    questionText: 'res의 값은?',
    code: [
      "x = 10",
      "res = 'A' if x > 5 else 'B'",
      "print(res)"
    ],
    choices: ['A', 'B', '10', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '참일때 값 if 조건 else 거짓일때 값 순서입니다.', output: 'A', variables: {} },
    ],
  },
  {
    id: 'p_print_4',
    language: 'python',
    category: 'p_print',
    title: 'round() 함수 반올림',
    questionText: '결과는?',
    code: [
      "print(round(3.5), round(4.5))"
    ],
    choices: ['4 4', '4 5', '3 4', '4.0 5.0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '파이썬의 round는 짝수 쪽으로 반올림하는 오사오입 방식입니다.', output: '4 4', variables: {} },
    ],
  },
  {
    id: 'p_print_5',
    language: 'python',
    category: 'p_print',
    title: '리스트 역순 정렬',
    questionText: '결과는?',
    code: [
      "l = [1, 3, 2]",
      "l.sort(reverse=True)",
      "print(l)"
    ],
    choices: ['[3, 2, 1]', '[1, 2, 3]', '[3, 1, 2]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '역순으로 정렬합니다.', output: '[3, 2, 1]', variables: {} },
    ],
  },
  {
    id: 'p_print_6',
    language: 'python',
    category: 'p_print',
    title: 'sys.stdin.readline 기초',
    questionText: '특징은?',
    code: [
      "import sys",
      "line = sys.stdin.readline()"
    ],
    choices: ['개행 문자(\n)를 포함하여 읽는다', '개행 문자를 빼고 읽는다', 'int로 자동 변환한다', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '개행 문자를 포함하므로 .strip() 등이 필요할 수 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'p_print_7',
    language: 'python',
    category: 'p_print',
    title: 'random.randint 범위',
    questionText: 'randint(1, 3) 이 가질 수 있는 값은?',
    code: [
      "import random",
      "# print(random.randint(1, 3))"
    ],
    choices: ['1, 2, 3', '1, 2', '2, 3', '1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'randint는 양 끝 값을 모두 포함(Inclusive)합니다.', output: '1, 2, 3', variables: {} },
    ],
  },
  {
    id: 'p_print_8',
    language: 'python',
    category: 'p_print',
    title: '문자열 곱셈 에러 케이스',
    questionText: '결과는?',
    code: [
      "# print('A' * 'B')"
    ],
    choices: ['TypeError', 'AB', 'A', 'B'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '문자열끼리 곱할 수는 없습니다.', output: 'TypeError', variables: {} },
    ],
  },
  {
    id: 'p_print_9',
    language: 'python',
    category: 'p_print',
    title: '리스트 filter 함수 활용',
    questionText: '결과는?',
    code: [
      "a = [1, 2, 3]",
      "b = list(filter(lambda x: x > 2, a))",
      "print(b)"
    ],
    choices: ['[3]', '[1, 2]', '[1, 2, 3]', '[]'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '2보다 큰 3만 남습니다.', output: '[3]', variables: {} },
    ],
  },
  {
    id: 'p_print_10',
    language: 'python',
    category: 'p_print',
    title: '전역 변수 global 적용 범위',
    questionText: '결과는?',
    code: [
      "x = 10",
      "def a(): x = 20",
      "a()",
      "print(x)"
    ],
    choices: ['10', '20', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '함수 내 지역변수 x가 생성되어 전역 x에는 영향이 없습니다.', output: '10', variables: {} },
    ],
  },
];
