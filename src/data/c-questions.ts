import type { Question } from './types';

export const C_QUESTIONS: Question[] = [
  // 1. 입출력 함수 & 연산자 (c_io) - 10 questions
  {
    id: 'c_io_1',
    language: 'c',
    category: 'c_io',
    title: '증감 연산자 및 printf',
    questionText: '다음 코드의 출력값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int i = 5, j = 5;',
      '    printf("%d %d", ++i, j++);',
      '    return 0;',
      '}'
    ],
    choices: ['6 5', '6 6', '5 5', '5 6'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'i=5, j=5 할당', output: '', variables: { i: 5, j: 5 } },
      { codeLine: 3, desc: '++i는 6이 되고 출력됨. j++는 5가 먼저 출력된 후 6이 됨.', output: '6 5', variables: { i: 6, j: 6 } },
    ],
  },
  {
    id: 'c_io_2',
    language: 'c',
    category: 'c_io',
    title: '비트 연산자 (AND, OR)',
    questionText: '다음 코드의 출력값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 15; // 1111',
      '    int b = 10; // 1010',
      '    printf("%d", a & b);',
      '    return 0;',
      '}'
    ],
    choices: ['10', '15', '5', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '1111 & 1010 = 1010 (10) 입니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_io_3',
    language: 'c',
    category: 'c_io',
    title: '나머지 연산자 (%)',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    printf("%d", 10 % 3);',
      '    return 0;',
      '}'
    ],
    choices: ['1', '3', '0', '3.33'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '10을 3으로 나눈 나머지는 1입니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'c_io_4',
    language: 'c',
    category: 'c_io',
    title: '포맷 지정자 (%x)',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 10;',
      '    printf("%x", a);',
      '    return 0;',
      '}'
    ],
    choices: ['a', '10', 'A', '12'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '10을 소문자 16진수로 출력하면 a입니다.', output: 'a', variables: {} },
    ],
  },
  {
    id: 'c_io_5',
    language: 'c',
    category: 'c_io',
    title: '삼항 연산자',
    questionText: '출력값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 10, b = 20;',
      '    int res = (a > b) ? a : b;',
      '    printf("%d", res);',
      '    return 0;',
      '}'
    ],
    choices: ['20', '10', '30', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: 'a(10) > b(20) 은 거짓이므로 b(20)이 res에 대입됩니다.', output: '20', variables: {} },
    ],
  },
  {
    id: 'c_io_6',
    language: 'c',
    category: 'c_io',
    title: '연산자 우선순위 (비트 shift)',
    questionText: '출력 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 1 << 3;',
      '    printf("%d", a);',
      '    return 0;',
      '}'
    ],
    choices: ['8', '1', '3', '4'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '1을 왼쪽으로 3비트 이동시키면 2^3 = 8이 됩니다.', output: '8', variables: {} },
    ],
  },
  {
    id: 'c_io_7',
    language: 'c',
    category: 'c_io',
    title: '복합 대입 연산 (곱셈)',
    questionText: '실행 후 a값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 2;',
      '    a *= 5 + 3;',
      '    printf("%d", a);',
      '    return 0;',
      '}'
    ],
    choices: ['16', '13', '10', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '우변 5+3(8)이 먼저 계산된 후 2 * 8 = 16 이 수행됩니다.', output: '16', variables: { a: 16 } },
    ],
  },
  {
    id: 'c_io_8',
    language: 'c',
    category: 'c_io',
    title: '실수 포맷 지정자(%.1f)',
    questionText: '출력값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    float f = 3.14159;',
      '    printf("%.1f", f);',
      '    return 0;',
      '}'
    ],
    choices: ['3.1', '3.14', '3.141', '3'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '소수점 첫째 자리까지 나타냅니다.', output: '3.1', variables: {} },
    ],
  },
  {
    id: 'c_io_9',
    language: 'c',
    category: 'c_io',
    title: '논리 연산자 (NOT)',
    questionText: '출력값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 0;',
      '    printf("%d", !a);',
      '    return 0;',
      '}'
    ],
    choices: ['1', '0', '-1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '0(거짓)의 부정은 1(참)입니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'c_io_10',
    language: 'c',
    category: 'c_io',
    title: '캐스팅(강제 형변환)',
    questionText: '출력 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    printf("%d", (int)3.9);',
      '    return 0;',
      '}'
    ],
    choices: ['3', '4', '3.9', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '(int)는 소수점을 자릅니다 (버림).', output: '3', variables: {} },
    ],
  },

  // 2. 제어문 & 반복문 (c_ctrl) - 10 questions
  {
    id: 'c_ctrl_1',
    language: 'c',
    category: 'c_ctrl',
    title: 'Switch문 Fall-through 함정',
    questionText: '다음 코드의 실행 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int i = 3, n = 0;',
      '    switch(i) {',
      '        case 1: n++;',
      '        case 2: n++;',
      '        case 3: n++;',
      '        case 4: n++; break;',
      '        case 5: n++;',
      '    }',
      '    printf("%d", n);',
      '    return 0;',
      '}'
    ],
    choices: ['2', '1', '3', '4'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: 'i가 3이므로 case 3으로 들어옵니다. n=1.', output: '', variables: { n: 1 } },
      { codeLine: 7, desc: 'break가 없어서 다음 case 4도 실행됩니다. n=2. 이후 break로 탈출.', output: '', variables: { n: 2 } },
      { codeLine: 10, desc: '최종 n값 2가 출력됩니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_2',
    language: 'c',
    category: 'c_ctrl',
    title: 'while 반복문과 증감',
    questionText: '출력 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int i = 0, sum = 0;',
      '    while(i < 3) {',
      '        sum += ++i;',
      '    }',
      '    printf("%d", sum);',
      '    return 0;',
      '}'
    ],
    choices: ['6', '3', '5', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: 'i가 1, 2, 3으로 변하며 sum에 더해집니다. 1+2+3 = 6.', output: '6', variables: { sum: 6 } },
    ],
  },
  {
    id: 'c_ctrl_3',
    language: 'c',
    category: 'c_ctrl',
    title: 'for문과 continue',
    questionText: '출력 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int sum = 0;',
      '    for(int i=1; i<=3; i++) {',
      '        if(i == 2) continue;',
      '        sum += i;',
      '    }',
      '    printf("%d", sum);',
      '    return 0;',
      '}'
    ],
    choices: ['4', '6', '1', '3'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: 'i=2일 때 continue가 수행되어 sum+=i 를 건너뜁니다. 1+3 = 4.', output: '4', variables: { sum: 4 } },
    ],
  },
  {
    id: 'c_ctrl_4',
    language: 'c',
    category: 'c_ctrl',
    title: 'do-while문 특징',
    questionText: '출력 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int i = 10;',
      '    do { i++; } while(i < 5);',
      '    printf("%d", i);',
      '    return 0;',
      '}'
    ],
    choices: ['11', '10', '5', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '조건이 거짓이라도 무조건 한 번은 실행합니다. 10 -> 11.', output: '11', variables: { i: 11 } },
    ],
  },
  {
    id: 'c_ctrl_5',
    language: 'c',
    category: 'c_ctrl',
    title: '중첩 for문 기초',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int cnt = 0;',
      '    for(int i=0; i<2; i++)',
      '        for(int j=0; j<2; j++) cnt++;',
      '    printf("%d", cnt);',
      '    return 0;',
      '}'
    ],
    choices: ['4', '2', '8', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '2 * 2 번 수행됩니다.', output: '4', variables: { cnt: 4 } },
    ],
  },
  {
    id: 'c_ctrl_6',
    language: 'c',
    category: 'c_ctrl',
    title: '복합 조건식 (AND)',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 5, b = 10;',
      '    if(a > 0 && b < 15) printf("T");',
      '    else printf("F");',
      '    return 0;',
      '}'
    ],
    choices: ['T', 'F', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '두 조건이 모두 참이므로 T가 출력됩니다.', output: 'T', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_7',
    language: 'c',
    category: 'c_ctrl',
    title: 'break문 사용',
    questionText: '출력 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    for(int i=1; i<10; i++) {',
      '        if(i == 3) break;',
      '        printf("%d", i);',
      '    }',
      '    return 0;',
      '}'
    ],
    choices: ['12', '123', '123456789', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: 'i=3이 되는 순간 반복문을 빠져나갑니다. 1, 2만 출력됩니다.', output: '12', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_8',
    language: 'c',
    category: 'c_ctrl',
    title: '단항 음수 연산',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 10;',
      '    a = -a + 5;',
      '    printf("%d", a);',
      '    return 0;',
      '}'
    ],
    choices: ['-5', '15', '5', '-15'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '-10 + 5 = -5 입니다.', output: '-5', variables: { a: -5 } },
    ],
  },
  {
    id: 'c_ctrl_9',
    language: 'c',
    category: 'c_ctrl',
    title: 'goto문 (거의 안쓰지만 시험용)',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int i = 0;',
      '    START: i++;',
      '    if(i < 2) goto START;',
      '    printf("%d", i);',
      '    return 0;',
      '}'
    ],
    choices: ['2', '1', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: 'i가 2가 될 때까지 점프하여 반복합니다.', output: '2', variables: { i: 2 } },
    ],
  },
  {
    id: 'c_ctrl_10',
    language: 'c',
    category: 'c_ctrl',
    title: '비교 연산의 참/거짓 값',
    questionText: '출력값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    printf("%d", 10 > 5);',
      '    return 0;',
      '}'
    ],
    choices: ['1', '0', 'True', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'C언어에서 참은 1로 표현됩니다.', output: '1', variables: {} },
    ],
  },

  // 3. 함수와 변수의 유효범위 (c_scope) - 10 questions
  {
    id: 'c_scope_1',
    language: 'c',
    category: 'c_scope',
    title: 'Static 변수의 특성',
    questionText: '다음 코드의 출력 결과는?',
    code: [
      '#include <stdio.h>',
      'void func() {',
      '    static int s = 0;',
      '    int a = 0;',
      '    printf("%d %d ", ++s, ++a);',
      '}',
      'int main() {',
      '    func(); func();',
      '    return 0;',
      '}'
    ],
    choices: ['1 1 2 1', '1 1 1 1', '1 1 2 2', '2 1 3 1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 7, desc: '첫 번째 호출: s=1, a=1 출력.', output: '1 1 ', variables: { s: 1, a: 1 } },
      { codeLine: 7, desc: '두 번째 호출: s는 상태 유지하여 2, a는 초기화되어 1 출력.', output: '1 1 2 1 ', variables: { s: 2, a: 1 } },
    ],
  },
  {
    id: 'c_scope_2',
    language: 'c',
    category: 'c_scope',
    title: '재귀 함수 (Factorial)',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int fact(int n) {',
      '    if(n <= 1) return 1;',
      '    return n * fact(n-1);',
      '}',
      'int main() {',
      '    printf("%d", fact(3));',
      '    return 0;',
      '}'
    ],
    choices: ['6', '3', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'stack',
    steps: [
      { codeLine: 3, desc: '3 * 2 * 1 = 6 이 계산됩니다.', output: '6', variables: {} },
    ],
  },
  {
    id: 'c_scope_3',
    language: 'c',
    category: 'c_scope',
    title: 'Call by Value',
    questionText: '출력되는 x의 값은?',
    code: [
      '#include <stdio.h>',
      'void sub(int n) { n = 20; }',
      'int main() {',
      '    int x = 10;',
      '    sub(x);',
      '    printf("%d", x);',
      '    return 0;',
      '}'
    ],
    choices: ['10', '20', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '값만 복사되므로 함수 내부의 변경이 호출부 x에 영향을 주지 않습니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_scope_4',
    language: 'c',
    category: 'c_scope',
    title: '전역 변수 우선순위',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int a = 100;',
      'int main() {',
      '    int a = 10;',
      '    printf("%d", a);',
      '    return 0;',
      '}'
    ],
    choices: ['10', '100', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '동일 이름일 때 지역 변수가 전역 변수를 가립니다 (Hiding).', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_scope_5',
    language: 'c',
    category: 'c_scope',
    title: '매개변수의 생명주기',
    questionText: '함수 종료 후 매개변수는?',
    code: [
      '// void f(int x) { ... }'
    ],
    choices: ['소멸한다', '유지된다', '전역이 된다', '알 수 없다'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '매개변수도 지역변수의 일종으로 함수 종료 시 스택에서 사라집니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_scope_6',
    language: 'c',
    category: 'c_scope',
    title: 'return 문의 동작',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int f() { return 1; return 2; }',
      'int main() { printf("%d", f()); return 0; }'
    ],
    choices: ['1', '2', '12', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '첫 번째 return을 만나는 순간 함수는 즉시 종료됩니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'c_scope_7',
    language: 'c',
    category: 'c_scope',
    title: '외부 변수 참조 (extern)',
    questionText: '역할은?',
    code: [
      'extern int val;'
    ],
    choices: ['다른 파일의 전역변수 선언', '상수 선언', '지역 변수 선언', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'extern 키워드는 외부에 이미 정의된 변수를 사용하겠다고 알립니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_scope_8',
    language: 'c',
    category: 'c_scope',
    title: '재귀 함수의 기저 조건',
    questionText: '기저 조건(Base Case)이 없으면?',
    code: [
      'void f() { f(); }'
    ],
    choices: ['Stack Overflow 발생', '정상 종료', '컴파일 에러', '메모리 절약'],
    correctAnswer: 0,
    visualizer: 'stack',
    steps: [
      { codeLine: 0, desc: '무한 호출로 인해 스택 메모리가 꽉 차게 됩니다.', output: 'Stack Overflow', variables: {} },
    ],
  },
  {
    id: 'c_scope_9',
    language: 'c',
    category: 'c_scope',
    title: '자동 변수 (auto)',
    questionText: '일반 지역 변수와 같은 의미의 키워드는?',
    code: [
      'auto int a = 10;'
    ],
    choices: ['auto', 'static', 'register', 'extern'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'C에서 auto는 기본값이므로 생략 가능하며 지역 변수를 의미합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_scope_10',
    language: 'c',
    category: 'c_scope',
    title: '함수 프로토타입(선언)',
    questionText: '목적은?',
    code: [
      'int add(int, int);'
    ],
    choices: ['함수의 존재를 미리 알림', '함수 실행', '변수 선언', '데이터 필터'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '메인 함수보다 뒤에 정의된 함수를 호출하기 위해 선언이 필요합니다.', output: '', variables: {} },
    ],
  },

  // 4. 배열과 포인터 - 1차원 배열 (c_arr1) - 10 questions
  {
    id: 'c_arr1_1',
    language: 'c',
    category: 'c_arr1',
    title: '배열 초기화와 크기',
    questionText: 'sizeof(arr) / sizeof(int) 의 값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int arr[] = {1, 2, 3, 4, 5};',
      '    printf("%d", sizeof(arr)/sizeof(int));',
      '    return 0;',
      '}'
    ],
    choices: ['5', '20', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 2, desc: '요소 개수에 맞춰 배열이 생성됩니다.', output: '', variables: {}, memory: [1, 2, 3, 4, 5], memoryLabels: ['arr[0]', 'arr[1]', 'arr[2]', 'arr[3]', 'arr[4]'] },
      { codeLine: 3, desc: '전체 크기(20byte) / int크기(4byte) = 5.', output: '5', variables: {} },
    ],
  },
  {
    id: 'c_arr1_2',
    language: 'c',
    category: 'c_arr1',
    title: '배열과 포인터의 관계',
    questionText: '*(arr + 1) 과 같은 표현은?',
    code: [
      'int arr[5] = {10, 20, 30};'
    ],
    choices: ['arr[1]', 'arr[0]', 'arr[2]', '&arr[1]'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '배열 이름은 시작 주소입니다. +1은 다음 인덱스 주소를 가리키고 *는 그 값을 가져옵니다.', output: '20', variables: {}, memory: [10, 20, 30, 0, 0] },
    ],
  },
  {
    id: 'c_arr1_3',
    language: 'c',
    category: 'c_arr1',
    title: '배열 인덱스 범위를 넘을 때',
    questionText: 'arr[5] 를 참조하면?',
    code: [
      'int arr[5] = {1, 2, 3, 4, 5};'
    ],
    choices: ['정의되지 않은 값(쓰레기값)', '0', '컴파일 에러', '1'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '인덱스는 0~4까지만 유효합니다. 범위를 넘으면 메모리 오염의 위험이 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr1_4',
    language: 'c',
    category: 'c_arr1',
    title: '부분 초기화',
    questionText: 'arr[2] 의 값은?',
    code: [
      'int arr[5] = {1, 2};'
    ],
    choices: ['0', '쓰레기값', '에러', '2'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '일부만 초기화하면 나머지 요소는 0으로 자동 초기화됩니다.', output: '0', variables: {}, memory: [1, 2, 0, 0, 0] },
    ],
  },
  {
    id: 'c_arr1_5',
    language: 'c',
    category: 'c_arr1',
    title: '정수형 배열의 주소 연산',
    questionText: '&arr[1] - &arr[0] 의 결과는?',
    code: [
      'int arr[5];'
    ],
    choices: ['1', '4', '주소값', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '포인터 간 뺄셈은 단위 데이터 타입의 개수를 반환합니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'c_arr1_6',
    language: 'c',
    category: 'c_arr1',
    title: '문자 배열 (문자열)',
    questionText: 'sizeof(str) 과 strlen(str) 의 각각 결과는?',
    code: [
      '#include <string.h>',
      'char str[] = "ABC";'
    ],
    choices: ['4 3', '3 3', '4 4', '3 4'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'sizeof는 널 문자(\0)를 포함하고, strlen은 포함하지 않습니다.', output: '4 3', variables: {} },
    ],
  },
  {
    id: 'c_arr1_7',
    language: 'c',
    category: 'c_arr1',
    title: '버블 정렬 1회전 결과',
    questionText: '1회전(가장 큰 수가 뒤로) 후 배열 상태는?',
    code: [
      'int a[3] = {3, 2, 1};'
    ],
    choices: ['{2, 1, 3}', '{1, 2, 3}', '{3, 2, 1}', '{2, 3, 1}'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '3과 2 교체 -> 2, 3, 1. 다시 3과 1 교체 -> 2, 1, 3.', output: '{2, 1, 3}', variables: {}, memory: [2, 1, 3] },
    ],
  },
  {
    id: 'c_arr1_8',
    language: 'c',
    category: 'c_arr1',
    title: '포인터를 이용한 값 변경',
    questionText: '출력되는 arr[0] 값은?',
    code: [
      'int arr[1] = {10};',
      'int *p = arr;',
      '*p = 20;',
      'printf("%d", arr[0]);'
    ],
    choices: ['20', '10', '주소값', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 2, desc: '포인터가 가리키는 실제 메모리 주소의 값을 바꿉니다.', output: '20', variables: {}, memory: [20] },
    ],
  },
  {
    id: 'c_arr1_9',
    language: 'c',
    category: 'c_arr1',
    title: '포인터 증감 연산',
    questionText: '*(p++) 는?',
    code: [
      'int a[] = {10, 20}; int *p = a;'
    ],
    choices: ['10', '20', '주소값', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '후위 증감이므로 p가 가리키는 현재 값 10을 먼저 반환하고 p를 증가시킵니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_arr1_10',
    language: 'c',
    category: 'c_arr1',
    title: '널 문자 (\0) 의 아스키 코드',
    questionText: '문자열의 끝을 알리는 \0 의 정수값은?',
    code: [
      '#include <stdio.h>'
    ],
    choices: ['0', '32', '48', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '\0 문자 상수값은 0 입니다.', output: '0', variables: {} },
    ],
  },

  // 5. 배열과 포인터 - 2차원 배열 (c_arr2) - 10 questions
  {
    id: 'c_arr2_1',
    language: 'c',
    category: 'c_arr2',
    title: '2차원 배열의 값 접근',
    questionText: 'arr[1][0] 의 값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int arr[2][3] = {1, 2, 3, 4, 5, 6};',
      '    printf("%d", arr[1][0]);',
      '    return 0;',
      '}'
    ],
    choices: ['4', '2', '3', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 2, desc: '메모리에는 1,2,3(0행) / 4,5,6(1행) 순으로 들어갑니다.', output: '4', variables: {}, memory: [1, 2, 3, 4, 5, 6] },
    ],
  },
  {
    id: 'c_arr2_2',
    language: 'c',
    category: 'c_arr2',
    title: '2차원 배열 이름의 의미',
    questionText: 'arr + 1 (행 단위 주소 이동) 은 어떤 행을 가리키는가?',
    code: [
      'int arr[2][3];'
    ],
    choices: ['1행 (두 번째 행)', '0행 (첫 번째 행)', '1열', '알 수 없음'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '2차원 배열에서 +1 은 한 "행"의 크기만큼 이동합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr2_3',
    language: 'c',
    category: 'c_arr2',
    title: '포인터 표현식 호환성',
    questionText: '*(*(arr + 1) + 2) 와 같은 배열 표현은?',
    code: [
      'int arr[2][3];'
    ],
    choices: ['arr[1][2]', 'arr[1][1]', 'arr[2][1]', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '1행의 2열 요소에 접근하는 포인터 역참조 방식입니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr2_4',
    language: 'c',
    category: 'c_arr2',
    title: '행렬 초기화 (중괄호 누락)',
    questionText: 'arr[1][0] 의 값은?',
    code: [
      'int arr[2][2] = {{1}, {3, 4}};'
    ],
    choices: ['3', '1', '0', '4'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '0행: {1, 0}, 1행: {3, 4}. 1행 0열은 3입니다.', output: '3', variables: {}, memory: [1, 0, 3, 4] },
    ],
  },
  {
    id: 'c_arr2_5',
    language: 'c',
    category: 'c_arr2',
    title: '2차원 배열 크기 계산',
    questionText: 'sizeof(arr) 의 값은?',
    code: [
      'int arr[3][4]; // int는 4byte'
    ],
    choices: ['48', '12', '7', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '3 * 4 * 4(int) = 48 바이트.', output: '48', variables: {} },
    ],
  },
  {
    id: 'c_arr2_6',
    language: 'c',
    category: 'c_arr2',
    title: '배열 포인터 선언 (함정)',
    questionText: 'int (*p)[3] 의 의미는?',
    code: [
      'int (*p)[3];'
    ],
    choices: ['크기가 3인 정수형 배열을 가리키는 포인터', '크기가 3인 포인터들의 배열', '3차원 포인터', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '괄호를 묶으면 배열 전체를 가리키는 "배열 포인터"가 됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr2_7',
    language: 'c',
    category: 'c_arr2',
    title: '2차원 배열을 함수 인자로 전달',
    questionText: '올바른 매개변수 선언은?',
    code: [
      'void sub(int a[][3]);'
    ],
    choices: ['int a[][3]', 'int a[3][]', 'int a[][]', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '열의 크기는 반드시 명시해야 주소 계산이 가능합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr2_8',
    language: 'c',
    category: 'c_arr2',
    title: '행 단위 합계 구하기',
    questionText: '첫 행의 합계는?',
    code: [
      'int arr[2][2] = {10, 20, 30, 40};'
    ],
    choices: ['30', '70', '10', '40'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '10 + 20 = 30.', output: '30', variables: {} },
    ],
  },
  {
    id: 'c_arr2_9',
    language: 'c',
    category: 'c_arr2',
    title: '포인터 배열과 2차원 배열',
    questionText: 'int *p[3]; 의 의미는?',
    code: [
      'int *p[3];'
    ],
    choices: ['포인터 3개를 담는 배열', '배열을 가리키는 포인터', '이중 포인터', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '[]가 우선순위가 높아 "포인터 배열"이 됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr2_10',
    language: 'c',
    category: 'c_arr2',
    title: '메모리 상의 물리적 배치',
    questionText: '어떻게 저장되는가?',
    code: [
      'int a[2][2];'
    ],
    choices: ['연속적인 1차원 공간', '행마다 따로 떨어진 공간', '랜덤 공간', 'None'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '2차원 배열도 메모리에는 일련의 연속된 공간으로 잡힙니다 (Row Major).', output: '', variables: {} },
    ],
  },

  // 6. 배열과 포인터 - 포인터 배열 등 (c_ptr_arr) - 10 questions
  {
    id: 'c_ptr_arr_1',
    language: 'c',
    category: 'c_ptr_arr',
    title: '문자열 포인터 상세',
    questionText: 'p[1] 이 가리키는 문자는?',
    code: [
      'char *p = "HELLO";'
    ],
    choices: ['E', 'H', 'L', 'O'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: 'p[0]=\'H\', p[1]=\'E\' 입니다.', output: 'E', variables: {}, memory: ['H', 'E', 'L', 'L', 'O', 0] },
    ],
  },
  {
    id: 'c_ptr_arr_2',
    language: 'c',
    category: 'c_ptr_arr',
    title: '포인터 증감 함정 (*p++)',
    questionText: '출력 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    char *p = "KOREA";',
      '    printf("%c ", *p++);',
      '    printf("%c", *p);',
      '    return 0;',
      '}'
    ],
    choices: ['K O', 'K K', 'O O', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 3, desc: 'K를 출력 후 p는 O를 가리키게 됨.', output: 'K ', variables: {} },
      { codeLine: 4, desc: '현재 p가 가리키는 O 출력.', output: 'K O', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_3',
    language: 'c',
    category: 'c_ptr_arr',
    title: '상수 문자열 수정 시도',
    questionText: '결과는?',
    code: [
      'char *p = "ABC";',
      '# *p = "Z";'
    ],
    choices: ['런타임 에러(Segmentation Fault)', 'ZBC', 'Error', 'ABC'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '문자열 리터럴은 읽기 전용 영역에 있어 수정이 불가능합니다.', output: 'Runtime Error', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_4',
    language: 'c',
    category: 'c_ptr_arr',
    title: '포인터 배열 활용',
    questionText: 'p[1] 을 출력하면?',
    code: [
      'char *p[] = {"C", "JAVA", "PYTHON"};',
      'printf("%s", p[1]);'
    ],
    choices: ['JAVA', 'C', 'PYTHON', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '1번 인덱스인 "JAVA" 문자열의 주소를 찾아 출력합니다.', output: 'JAVA', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_5',
    language: 'c',
    category: 'c_ptr_arr',
    title: '포인터 타입과 크기',
    questionText: '64비트 시스템에서 sizeof(int*) 는?',
    code: [
      'int *p;'
    ],
    choices: ['8', '4', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '주소를 담는 변수는 해당 시스템의 word 크기와 같습니다.', output: '8', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_6',
    language: 'c',
    category: 'c_ptr_arr',
    title: 'NULL 포인터',
    questionText: '포인터 초기화에 권장되는 값은?',
    code: [
      'int *p = NULL;'
    ],
    choices: ['NULL', '0', '-1', '랜덤'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '아무것도 가리키지 않음을 명시하여 안전성을 높입니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_7',
    language: 'c',
    category: 'c_ptr_arr',
    title: '포인터 덧셈 연산',
    questionText: 'p + 1 은 실제 몇 바이트 이동하는가?',
    code: [
      'int *p;'
    ],
    choices: ['4바이트 (int 크기)', '1바이트', '8바이트', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '가리키는 데이터 타입의 크기만큼 이동합니다.', output: '4', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_8',
    language: 'c',
    category: 'c_ptr_arr',
    title: 'void 포인터',
    questionText: '특징은?',
    code: [
      'void *p;'
    ],
    choices: ['어떠한 주소든 저장 가능(만능)', '값 수정 불가', '출력 불가', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '타입 정보를 무시하고 주소만 저장하며, 사용 시 형변환이 필요합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_9',
    language: 'c',
    category: 'c_ptr_arr',
    title: '함수 포인터 선언',
    questionText: '역할은?',
    code: [
      'int (*pf)(int, int);'
    ],
    choices: ['함수의 주소를 저장하는 포인터', '함수가 리턴하는 포인터', '이중 포인터', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '함수를 데이터처럼 변수로 다룰 수 있게 합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_ptr_arr_10',
    language: 'c',
    category: 'c_ptr_arr',
    title: '댕글링 포인터 (Dangling)',
    questionText: '의미는?',
    code: [
      '#include <stdlib.h>',
      'int *p = malloc(4); free(p);'
    ],
    choices: ['해제된 메모리를 계속 가리키는 위험한 포인터', '무한 루프 포인터', 'NULL 포인터', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 1, desc: '메모리 해제 후 p를 NULL로 초기화하지 않으면 잘못된 접근이 가능해집니다.', output: '', variables: {} },
    ],
  },

  // 7. 배열과 포인터 - 이중 포인터 (c_dbl_ptr) - 10 questions
  {
    id: 'c_dbl_ptr_1',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '이중 포인터 기초',
    questionText: '**pp 의 값은?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int n = 100;',
      '    int *p = &n;',
      '    int **pp = &p;',
      '    printf("%d", **pp);',
      '    return 0;',
      '}'
    ],
    choices: ['100', '주소값', 'Error', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 5, desc: 'pp -> p -> n 의 흐름을 따라가서 100을 반환합니다.', output: '100', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_2',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '포인터 주소 변경 (함수호출)',
    questionText: '결과는?',
    code: [
      'void get(int **p, int *v) { *p = v; }',
      'int main() { ... }'
    ],
    choices: ['포인터 변수 자체의 주소를 변경함', '포인터가 가리키는 값을 변경함', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '이중 포인터를 통하면 호출자(main)의 포인터 변수 값을 바꿀 수 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_3',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '동적 할당과 이중 포인터',
    questionText: '2차원 배열 동적 할당의 첫 선언은?',
    code: [
      'int **arr = (int**)malloc(...);'
    ],
    choices: ['int **', 'int *', 'int', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '행(row)의 주소들을 담는 포인터 배열을 먼저 할당합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_4',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '이중 포인터 크기',
    questionText: 'sizeof(int**) 의 결과는?',
    code: [
      '// 64bit 시스템'
    ],
    choices: ['8', '16', '4', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '포인터의 포인터도 결국 주소이므로 포인터 일반 크기와 같습니다.', output: '8', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_5',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '다중 포인터 해제 순서',
    questionText: '2차원 동적 배열 해제 시?',
    code: [
      '// for loop(free cols) -> free row_ptr'
    ],
    choices: ['내부 요소들부터 해제 후 부모 해제', '부모부터 해제', '한번에 해제', 'None'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '부모 포인터를 먼저 해제하면 자식들의 주소를 잃어버려 메모리 누수가 발생합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_6',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '포인터 배열 이름과 이중 포인터',
    questionText: 'char *p[] = {"A", "B"}; 인 경우 p의 타입 호환은?',
    code: [
      'char **pp = p;'
    ],
    choices: ['호환 가능', '호환 불가', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '포인터 배열의 이름은 첫 번째 원소(포인터)의 주소이므로 이중 포인터 타입입니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_7',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '연쇄 역참조',
    questionText: '***ppp 의 의미는?',
    code: [
      'int n = 10; int *p = &n; int **pp = &p; int ***ppp = &pp;'
    ],
    choices: ['n의 값(10)', '주소', '에러', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '3단계를 거슬러 올라가 실제 정수값에 도달합니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_8',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '함수 매개변수 제어',
    questionText: '다음 중 옳은 것은?',
    code: [
      'void f(int **p) { **p = 5; }'
    ],
    choices: ['포인터의 포인터를 통해 값을 직접 수정함', '수정 불가', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '역참조를 두 번 하여 실제 목적지 상자에 접근합니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_9',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '포인터 상수화 (const)',
    questionText: 'int * const p 의 의미는?',
    code: [
      'int * const p = &x;'
    ],
    choices: ['포인터 변수 자체가 상수(주소 변경 불가)', '가리키는 값이 상수', '둘 다 상수', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'const가 p 앞에 붙으면 주소값을 바꿀 수 없습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_dbl_ptr_10',
    language: 'c',
    category: 'c_dbl_ptr',
    title: '메인 함수의 인자 (argv)',
    questionText: 'char *argv[] 의 실제 타입은?',
    code: [
      'int main(int argc, char **argv)'
    ],
    choices: ['char **', 'char *', 'char', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '커맨드 라인 인자들은 문자열 배열이므로 이중 포인터와 같습니다.', output: '', variables: {} },
    ],
  },

  // 8. 구조체와 공용체 - 구조체 배열 (c_struct_arr) - 10 questions
  {
    id: 'c_struct_arr_1',
    language: 'c',
    category: 'c_struct_arr',
    title: '구조체 크기 (Alignment)',
    questionText: 'sizeof(struct T) 의 일반적인 값은?',
    code: [
      'struct T { char a; int b; };'
    ],
    choices: ['8', '5', '4', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '패딩(Padding)으로 인해 1+3(padding)+4 = 8 바이트가 될 가능성이 큽니다.', output: '8', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_2',
    language: 'c',
    category: 'c_struct_arr',
    title: '구조체 배열 초기화',
    questionText: 's[1].x 의 값은?',
    code: [
      'struct S { int x; } s[2] = {{10}, {20}};'
    ],
    choices: ['20', '10', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '인덱스 1번 요소의 x값을 찾습니다.', output: '20', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_3',
    language: 'c',
    category: 'c_struct_arr',
    title: '공용체(union) 특징',
    questionText: '결과값은?',
    code: [
      'union U { int a; char b; } u;',
      'u.a = 0x1234; u.b = 0x56;',
      'printf("%x", u.a);'
    ],
    choices: ['1256', '1234', '56', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 1, desc: '메모리를 공유하므로 b를 바꾸면 a의 하위 바이트도 바뀝니다.', output: '1256', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_4',
    language: 'c',
    category: 'c_struct_arr',
    title: '구조체 변수 대입',
    questionText: 'a = b 를 수행하면?',
    code: [
      'struct S a, b = {10};',
      'a = b;'
    ],
    choices: ['모든 멤버의 값이 복사됨', '주소만 복사됨', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '배열과 달리 구조체는 통째로 값이 복사되는 특징이 있습니다.', output: 'Value Copy', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_5',
    language: 'c',
    category: 'c_struct_arr',
    title: 'typedef 활용',
    questionText: '목적은?',
    code: [
      'typedef struct { int x; } Point;'
    ],
    choices: ['구조체 타입을 새로운 이름으로 정의함', '변수 선언', '값 대입', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'struct 키워드를 매번 안 써도 되게끔 단축 명령어를 만드는 것과 같습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_6',
    language: 'c',
    category: 'c_struct_arr',
    title: '익명 구조체',
    questionText: '어떻게 접근하나?',
    code: [
      'struct { int x; } s;'
    ],
    choices: ['s.x', 'struct.x', 'x', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '타입 이름은 없지만 변수명(s)이 있으므로 s.x로 접근 가능합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_7',
    language: 'c',
    category: 'c_struct_arr',
    title: '중첩 구조체',
    questionText: '접근 방법은?',
    code: [
      'struct A { struct { int x; } b; } a;'
    ],
    choices: ['a.b.x', 'a.x', 'b.x', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '계층 구조에 맞춰 점(.) 연산자를 연달아 사용합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_8',
    language: 'c',
    category: 'c_struct_arr',
    title: '구조체를 함수 인자로 (값 복사)',
    questionText: '함수 내 변경이 원본에 미치는 영향은?',
    code: [
      'void sub(struct S s) { s.x = 20; }'
    ],
    choices: ['영향 없음', '값이 바뀜', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '구조체 전체가 복사되어 전달되므로 원본은 바뀌지 않습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_9',
    language: 'c',
    category: 'c_struct_arr',
    title: '구조체 내 배열',
    questionText: '결과는?',
    code: [
      'struct S { char n[10]; };'
    ],
    choices: ['전체 크기는 10바이트 이상', '에러', '1바이트', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '배열 요소를 포함한 만큼의 공간을 점유합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_arr_10',
    language: 'c',
    category: 'c_struct_arr',
    title: '비트 필드 (Bit Field)',
    questionText: '결과는?',
    code: [
      'struct { unsigned int a : 1; } s;'
    ],
    choices: ['a는 0 또는 1만 가질 수 있음', '32비트 사용', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '변수의 크기를 비트 단위로 세밀하게 조절합니다.', output: '1 bit', variables: {} },
    ],
  },

  // 9. 구조체와 공용체 - 구조체 포인터 (c_struct_ptr) - 10 questions
  {
    id: 'c_struct_ptr_1',
    language: 'c',
    category: 'c_struct_ptr',
    title: '화살표 연산자 (->)',
    questionText: 'p를 통한 x 접근 방법은?',
    code: [
      'struct S { int x; } s; struct S *p = &s;'
    ],
    choices: ['p->x', 'p.x', '*p.x', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '포인터를 통해 구조체 멤버에 접근할 때는 -> 를 사용합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_2',
    language: 'c',
    category: 'c_struct_ptr',
    title: '구조체 포인터와 점 연산자 함정',
    questionText: '(*p).x 와 똑같은 표현은?',
    code: [
      'struct S *p;'
    ],
    choices: ['p->x', 'p.x', '*p->x', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '역참조 후 멤버 접근 시 점(.) 연산자보다 * 우선순위가 낮아 괄호가 필수입니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_3',
    language: 'c',
    category: 'c_struct_ptr',
    title: '동적 할당 구조체',
    questionText: '결과는?',
    code: [
      'struct S *p = malloc(sizeof(struct S));',
      'p->x = 10; printf("%d", p->x);'
    ],
    choices: ['10', '주소값', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 1, desc: '힙 영역에 생성된 구조체 공간에 값을 채우고 읽어옵니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_4',
    language: 'c',
    category: 'c_struct_ptr',
    title: '자기 참조 구조체 (Linked List)',
    questionText: '용도는?',
    code: [
      'struct Node { int d; struct Node *next; };'
    ],
    choices: ['연결 리스트 구현', '정적 배열', '상수 정의', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: '자신의 타입과 동일한 포인터를 가져 데이터를 체인처럼 엮습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_5',
    language: 'c',
    category: 'c_struct_ptr',
    title: '구조체 포인터 연산',
    questionText: 'p++ 시 이동 크기는?',
    code: [
      'struct S { int a[10]; } *p;'
    ],
    choices: ['40바이트 (구조체 전체 크기)', '4바이트', '8바이트', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '단일 타입이 아닌 구조체 전체 크기만큼 건너뜁니다.', output: '40', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_6',
    language: 'c',
    category: 'c_struct_ptr',
    title: 'scanf와 구조체 멤버',
    questionText: '올바른 호출은?',
    code: [
      'struct S { int x; } s;'
    ],
    choices: ['scanf("%d", &s.x);', 'scanf("%d", s.x);', 'scanf("%d", &s);', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '구조체 멤버의 주소를 정확히 전달해야 합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_7',
    language: 'c',
    category: 'c_struct_ptr',
    title: '이중 포인터를 통한 구조체 리턴',
    questionText: 'f(&p) 시 p의 상태는?',
    code: [
      'void f(struct S **pp) { *pp = malloc... }'
    ],
    choices: ['새로운 구조체 주소를 갖게 됨', '값만 복사됨', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '포인터의 주소를 넘겨 실제 포인터가 가리키는 곳을 바꿀 수 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_8',
    language: 'c',
    category: 'c_struct_ptr',
    title: '포인터 멤버와 연산자 우선순위',
    questionText: '++p->x 의 의미는?',
    code: [
      'struct S { int x; } s; struct S *p = &s;'
    ],
    choices: ['멤버 x의 값을 먼저 가져오고 x를 1 증가시킴', 'p를 증가시킴', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '-> 가 ++ 보다 우선순위가 높습니다. (p->x)를 먼저 수행 후 증가시킵니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_9',
    language: 'c',
    category: 'c_struct_ptr',
    title: 'const struct 포인터',
    questionText: 'const struct S *p 로 할 수 없는 일은?',
    code: [
      'const struct S *p;'
    ],
    choices: ['p->x = 20; (값 수정)', 'p = &another; (주소 변경)', '둘 다 가능', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'const가 앞에 붙으면 가리키는 대상(값)을 수정할 수 없습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_struct_ptr_10',
    language: 'c',
    category: 'c_struct_ptr',
    title: '실제 기출 (Person 구조체)',
    questionText: 'p->name 출력 시 결과는?',
    code: [
      'struct P { char name[10]; int age; } s = {"Lee", 38};',
      'struct P *p = &s;',
      'printf("%s %d", p->name, p->age);'
    ],
    choices: ['Lee 38', 'Lee', '38', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'Lee 38 이 순차적으로 출력됩니다.', output: 'Lee 38', variables: {} },
    ],
  },

  // 10. C언어 주요 함수 (c_funcs) - 10 questions
  {
    id: 'c_funcs_1',
    language: 'c',
    category: 'c_funcs',
    title: '문자열 길이 (strlen)',
    questionText: '결과는?',
    code: [
      '#include <string.h>',
      'printf("%d", strlen("ABC"));'
    ],
    choices: ['3', '4', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '널 문자를 제외한 문자 개수를 셉니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'c_funcs_2',
    language: 'c',
    category: 'c_funcs',
    title: '문자열 복사 (strcpy)',
    questionText: 'dest의 상태는?',
    code: [
      'char dest[10]; char *src = "HI";',
      'strcpy(dest, src);'
    ],
    choices: ['"HI"', 'HI', 'H', 'Error'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 1, desc: '널 문자를 만날 때까지 복사합니다.', output: 'HI', variables: {}, memory: ['H', 'I', 0] },
    ],
  },
  {
    id: 'c_funcs_3',
    language: 'c',
    category: 'c_funcs',
    title: '문자열 비교 (strcmp)',
    questionText: '같을 때 결과값은?',
    code: [
      'strcmp("A", "A");'
    ],
    choices: ['0', '1', 'True', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '두 문자열이 동일하면 0을 반환합니다.', output: '0', variables: {} },
    ],
  },
  {
    id: 'c_funcs_4',
    language: 'c',
    category: 'c_funcs',
    title: '정수 변환 (atoi)',
    questionText: '결과는?',
    code: [
      '#include <stdlib.h>',
      'printf("%d", atoi("123") + 1);'
    ],
    choices: ['124', '1231', 'Error', '123'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '문자열을 정수형으로 바꿔줍니다.', output: '124', variables: {} },
    ],
  },
  {
    id: 'c_funcs_5',
    language: 'c',
    category: 'c_funcs',
    title: '메모리 할당 (malloc)',
    questionText: '할당 실패 시 리턴값은?',
    code: [
      'void *p = malloc(1000000000000LL);'
    ],
    choices: ['NULL', '0', '-1', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '메모리가 부족하면 NULL 포인터를 반환합니다.', output: 'NULL', variables: {} },
    ],
  },
  {
    id: 'c_funcs_6',
    language: 'c',
    category: 'c_funcs',
    title: '메모리 초기화 할당 (calloc)',
    questionText: 'malloc과의 큰 차이점은?',
    code: [
      'calloc(10, sizeof(int));'
    ],
    choices: ['할당 후 0으로 자동 초기화함', '빠름', '에러 방지', 'None'],
    correctAnswer: 0,
    visualizer: 'memory',
    steps: [
      { codeLine: 0, desc: 'calloc은 할당된 모든 비트를 0으로 밀어줍니다.', output: 'All Zero', variables: {} },
    ],
  },
  {
    id: 'c_funcs_7',
    language: 'c',
    category: 'c_funcs',
    title: '수학 함수 (pow)',
    questionText: 'pow(2, 3) 의 결과는?',
    code: [
      '#include <math.h>',
      'printf("%.0f", pow(2, 3));'
    ],
    choices: ['8', '6', '9', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '2의 3제곱은 8입니다. 리턴 타입은 double임에 주의.', output: '8', variables: {} },
    ],
  },
  {
    id: 'c_funcs_8',
    language: 'c',
    category: 'c_funcs',
    title: '파일 닫기 (fclose)',
    questionText: '잊지 말아야 할 이유는?',
    code: [
      'FILE *fp = fopen(...); fclose(fp);'
    ],
    choices: ['리소스 누수 방지', '속도 향상', '파일 삭제', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '연 파일을 닫지 않으면 시스템 자원을 계속 점유하게 됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_funcs_9',
    language: 'c',
    category: 'c_funcs',
    title: '문자열 검색 (strchr)',
    questionText: '결과는?',
    code: [
      'char *p = strchr("APPLE", \'L\');'
    ],
    choices: ['L의 주소를 반환', 'L의 인덱스(3) 반환', 'True', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '문자를 찾아 해당 위치의 포인터(주소)를 반환합니다.', output: 'Address of L', variables: {} },
    ],
  },
  {
    id: 'c_funcs_10',
    language: 'c',
    category: 'c_funcs',
    title: '출력 버퍼 비우기 (fflush)',
    questionText: '표준 입력 버퍼 비울 때?',
    code: [
      'fflush(stdin);'
    ],
    choices: ['엔터(\n) 등 찌꺼기 제거', '데이터 삭제', '에러 방지', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '버퍼에 남아있는 원치 않는 데이터를 강제로 비웁니다.', output: '', variables: {} },
    ],
  },
];
