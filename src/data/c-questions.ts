import type { Question } from './types';

export const C_QUESTIONS: Question[] = [
  // 1. 기초 연산 및 비트 연산 (Basic & Bitwise) - 10 questions
  {
    id: 'c_basic_1',
    language: 'c',
    category: 'c_basic',
    title: '증감 연산자 우선순위',
    questionText: '다음 코드의 실행 결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int i = 5, j = 5;',
      '    int a = ++i;',
      '    int b = j++;',
      '    printf("%d %d", a, b);',
      '    return 0;',
      '}'
    ],
    choices: ['6 5', '6 6', '5 5', '5 6'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: 'i=5, j=5 초기화.', output: '', variables: { i: 5, j: 5 } },
      { codeLine: 4, desc: '++i는 먼저 1을 더한 후 대입합니다. a=6.', output: '', variables: { i: 6, a: 6 } },
      { codeLine: 5, desc: 'j++는 대입을 먼저 한 후 1을 더합니다. b=5, j=6.', output: '', variables: { j: 6, b: 5 } },
      { codeLine: 6, desc: 'a와 b를 출력합니다.', output: '6 5', variables: {} },
    ],
  },
  {
    id: 'c_basic_2',
    language: 'c',
    category: 'c_basic',
    title: '비트 단위 AND 연산',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int x = 7;  // 0111',
      '    int y = 5;  // 0101',
      '    printf("%d", x & y);',
      '    return 0;',
      '}'
    ],
    choices: ['5', '7', '1', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '0111 & 0101 = 0101 (5) 입니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'c_basic_3',
    language: 'c',
    category: 'c_basic',
    title: '복합 대입 연산자',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 10;',
      '    a += 5 * 2;',
      '    printf("%d", a);',
      '    return 0;',
      '}'
    ],
    choices: ['20', '30', '10', '25'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '우변인 5*2=10이 먼저 계산되고, a = a + 10이 수행됩니다.', output: '20', variables: { a: 20 } },
    ],
  },
  {
    id: 'c_basic_4',
    language: 'c',
    category: 'c_basic',
    title: '삼항 연산자',
    questionText: '결과는?',
    code: [
      '#include <stdio.h>',
      'int main() {',
      '    int a = 5, b = 10;',
      '    int max = (a > b) ? a : b;',
      '    printf("%d", max);',
      '    return 0;',
      '}'
    ],
    choices: ['10', '5', '0', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 3, desc: '(a > b) 즉 5 > 10은 거짓이므로 콜론(:) 뒤의 b가 반환됩니다.', output: '', variables: { max: 10 } },
      { codeLine: 4, desc: '10을 출력합니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_basic_5',
    language: 'c',
    category: 'c_basic',
    title: '논리 연산자 (AND)',
    questionText: '출력 결과는?',
    code: [
      'int a = 1, b = 0;',
      'printf("%d", a && b);'
    ],
    choices: ['0', '1', '-1', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '하나가 0(거짓)이므로 결과는 0입니다.', output: '0', variables: {} },
    ],
  },
  {
    id: 'c_basic_6',
    language: 'c',
    category: 'c_basic',
    title: '콤마 연산자',
    questionText: 'a의 값은?',
    code: [
      'int a = (1, 2, 3);'
    ],
    choices: ['3', '1', '6', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '콤마 연산자는 왼쪽부터 수행하고 가장 오른쪽의 값을 결과로 가집니다.', output: '', variables: { a: 3 } },
    ],
  },
  {
    id: 'c_basic_7',
    language: 'c',
    category: 'c_basic',
    title: 'sizeof 연산자',
    questionText: 'int가 4바이트일 때 sizeof(char) + sizeof(int)는?',
    code: [
      'printf("%d", (int)(sizeof(char) + sizeof(int)));'
    ],
    choices: ['5', '8', '4', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '1 + 4 = 5 입니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'c_basic_8',
    language: 'c',
    category: 'c_basic',
    title: '나머지 연산자 (%)',
    questionText: '10 % 3 의 결과는?',
    code: [
      'printf("%d", 10 % 3);'
    ],
    choices: ['1', '3', '0', '10'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '10을 3으로 나눈 나머지는 1입니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'c_basic_9',
    language: 'c',
    category: 'c_basic',
    title: '형변환 (Casting)',
    questionText: '결과는?',
    code: [
      'float f = 3.9;',
      'printf("%d", (int)f);'
    ],
    choices: ['3', '4', '3.9', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '(int) 캐스팅은 소수점을 절삭합니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'c_basic_10',
    language: 'c',
    category: 'c_basic',
    title: '비트 Shift 연산',
    questionText: '2 << 2 의 결과는?',
    code: [
      'printf("%d", 2 << 2);'
    ],
    choices: ['8', '4', '16', '2'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '2(binary 10)를 왼쪽으로 2칸 밀면 1000(8)이 됩니다.', output: '8', variables: {} },
    ],
  },
  // 2. 제어문 (Control Flow) - 10 questions
  {
    id: 'c_ctrl_1',
    language: 'c',
    category: 'c_ctrl',
    title: 'for문 기초',
    questionText: '실행 결과는?',
    code: [
      'int sum = 0;',
      'for(int i=1; i<=3; i++) sum += i;',
      'printf("%d", sum);'
    ],
    choices: ['6', '3', '5', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '1+2+3 = 6이 됩니다.', output: '6', variables: { sum: 6 } },
    ],
  },
  {
    id: 'c_ctrl_2',
    language: 'c',
    category: 'c_ctrl',
    title: 'switch문 break 생략',
    questionText: '결과는?',
    code: [
      'int n = 1; switch(n) { case 1: printf("a"); case 2: printf("b"); break; }'
    ],
    choices: ['ab', 'a', 'b', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: 'case 1에 break가 없어 case 2까지 실행(Fall-through)됩니다.', output: 'ab', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_3',
    language: 'c',
    category: 'c_ctrl',
    title: 'while문 조건',
    questionText: '출력 횟수는?',
    code: [
      'int i = 0; while(i < 3) { printf("*"); i++; }'
    ],
    choices: ['3번', '0번', '2번', '4번'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: 'i=0, 1, 2일 때 반복합니다.', output: '***', variables: { i: 3 } },
    ],
  },
  {
    id: 'c_ctrl_4',
    language: 'c',
    category: 'c_ctrl',
    title: 'do-while문 특징',
    questionText: '결과는?',
    code: [
      'int i = 10; do { printf("%d", i); } while(i < 5);'
    ],
    choices: ['10', '출력없음', '5', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: 'do-while은 조건을 나중에 검사하므로 최소 1회 실행합니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_5',
    language: 'c',
    category: 'c_ctrl',
    title: 'continue 문',
    questionText: 'sum의 최종값은?',
    code: [
      'int sum = 0;',
      'for(int i=1; i<=3; i++) { if(i==2) continue; sum += i; }'
    ],
    choices: ['4', '6', '3', '2'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'i=2일 때 더하기를 건너뜁니다. 1+3 = 4.', output: '', variables: { sum: 4 } },
    ],
  },
  {
    id: 'c_ctrl_6',
    language: 'c',
    category: 'c_ctrl',
    title: '중첩 for문',
    questionText: '출력되는 * 개수는?',
    code: [
      'for(int i=0; i<2; i++) for(int j=0; j<3; j++) printf("*");'
    ],
    choices: ['6', '5', '2', '3'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '2 * 3 = 6번 반복됩니다.', output: '******', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_7',
    language: 'c',
    category: 'c_ctrl',
    title: 'if-else 조건',
    questionText: '결과는?',
    code: [
      'int a = 5; if(a > 10) printf("X"); else printf("Y");'
    ],
    choices: ['Y', 'X', 'XY', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: '5 > 10은 거짓이므로 else 문이 실행됩니다.', output: 'Y', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_8',
    language: 'c',
    category: 'c_ctrl',
    title: 'for문 무한루프',
    questionText: '무한 루프가 되는 형태는?',
    code: [
      '// 1: for(;;)',
      '// 2: for(int i=0; i<1; i++)',
      '// 3: for(int i=1; i>0; i--)'
    ],
    choices: ['1번', '2번', '3번', '없음'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'for 문에서 세 조항을 모두 비우면 무한 루프입니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_ctrl_9',
    language: 'c',
    category: 'c_ctrl',
    title: 'break 문',
    questionText: 'i의 최종값은?',
    code: [
      'int i; for(i=1; i<=10; i++) if(i==5) break;'
    ],
    choices: ['5', '6', '10', '4'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'i가 5가 되는 순간 break로 탈출합니다.', output: '', variables: { i: 5 } },
    ],
  },
  {
    id: 'c_ctrl_10',
    language: 'c',
    category: 'c_ctrl',
    title: '복합 조건문',
    questionText: '출력값은?',
    code: [
      'int a=1, b=2; if(a==1 && b==3) printf("T"); else printf("F");'
    ],
    choices: ['F', 'T', 'TF', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 0, desc: 'b가 3이 아니므로 전체 성립하지 않아 else로 갑니다.', output: 'F', variables: {} },
    ],
  },
  // 3. 배열 (Arrays) - 10 questions
  {
    id: 'c_arr_1',
    language: 'c',
    category: 'c_arr',
    title: '배열 초기화',
    questionText: 'a[2]의 값은?',
    code: [
      'int a[] = {1, 2, 3, 4};'
    ],
    choices: ['3', '2', '4', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '인덱스는 0부터 시작하므로 a[2]는 세 번째 요소인 3입니다.', output: '', variables: { 'a[2]': 3 } },
    ],
  },
  {
    id: 'c_arr_2',
    language: 'c',
    category: 'c_arr',
    title: '배열의 선언',
    questionText: '잘못된 배열 선언은?',
    code: [
      'int a(5); // invalid'
    ],
    choices: ['int a(5);', 'int a[5];', 'int a[] = {1,2};', 'int a[10] = {0};'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '배열은 대괄호를 사용합니다.', output: 'Error', variables: {} }],
  },
  {
    id: 'c_arr_3',
    language: 'c',
    category: 'c_arr',
    title: '2차원 배열 크기',
    questionText: 'sizeof(a) 는?',
    code: [
      'int a[2][3]; // int는 4바이트'
    ],
    choices: ['24', '6', '20', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '2 * 3 * 4 = 24 바이트입니다.', output: '24', variables: {} },
    ],
  },
  {
    id: 'c_arr_4',
    language: 'c',
    category: 'c_arr',
    title: '배열과 포인터의 관계',
    questionText: 'a[1] 과 같은 표현은?',
    code: [
      'int a[5];'
    ],
    choices: ['*(a+1)', '*a+1', '&a+1', 'a+1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '배열 이름은 주소이며, *(주소+인덱스)는 배열 참조와 같습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr_5',
    language: 'c',
    category: 'c_arr',
    title: '2차원 배열 인덱스',
    questionText: 'a[1][1]의 값은?',
    code: [
      'int a[2][2] = {{1, 2}, {3, 4}};'
    ],
    choices: ['4', '1', '2', '3'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '두 번째 행의 두 번째 열인 4입니다.', output: '', variables: { 'a[1][1]': 4 } },
    ],
  },
  {
    id: 'c_arr_6',
    language: 'c',
    category: 'c_arr',
    title: '배열 부분 초기화',
    questionText: 'a[2]의 값은?',
    code: [
      'int a[5] = {1, 2};'
    ],
    choices: ['0', '1', '2', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '나머지 요소들은 자동으로 0으로 초기화됩니다.', output: '', variables: { 'a[2]': 0 } },
    ],
  },
  {
    id: 'c_arr_7',
    language: 'c',
    category: 'c_arr',
    title: '배열 복사',
    questionText: 'a배열을 b배열로 복사하는 옳은 방법은?',
    code: [
      'int a[3] = {1,2,3}, b[3];'
    ],
    choices: ['반복문으로 하나씩 대입', 'b = a;', 'b[] = a;', 'memcpy(a, b);'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'C언어에서 배열 이름끼리의 직접 대입은 불가능합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr_8',
    language: 'c',
    category: 'c_arr',
    title: '문자 배열 초기화',
    questionText: 'sizeof(s)는?',
    code: [
      'char s[] = "Hi";'
    ],
    choices: ['3', '2', '4', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '문자열 끝의 NULL 문자(\\0)가 포함되어 3바이트입니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'c_arr_9',
    language: 'c',
    category: 'c_arr',
    title: '배열 범위 초과',
    questionText: 'a[5] = 10; 을 수행하면?',
    code: [
      'int a[5];'
    ],
    choices: ['정의되지 않은 동작(UB)', '정상 작동', '컴파일 에러', '쓰기 방지 에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '인덱스 범위를 벗어난 접근은 메모리 오류를 유발할 수 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_arr_10',
    language: 'c',
    category: 'c_arr',
    title: '다차원 배열 선언',
    questionText: '다음 중 옳은 것은?',
    code: [
      'int a[2][3];'
    ],
    choices: ['int a[2][3];', 'int a[2,3];', 'int a(2)(3);', 'int a[2:3];'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '각 차원마다 대괄호를 따로 사용합니다.', output: '', variables: {} }],
  },
  // 4. 포인터 (Pointers) - 10 questions
  {
    id: 'c_ptr_1',
    language: 'c',
    category: 'c_ptr',
    title: '포인터 변수 선언',
    questionText: '정수형 포인터 p를 선언하는 방법은?',
    code: [
      'int *p;'
    ],
    choices: ['int *p;', 'int p*;', 'pointer p;', 'int &p;'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '자료형 뒤에 *을 붙여 포인터임을 명시합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_ptr_2',
    language: 'c',
    category: 'c_ptr',
    title: '주소 연산자 (&)',
    questionText: '변수 a의 주소를 p에 넣는 방법은?',
    code: [
      'int a = 10, *p;',
      'p = &a;'
    ],
    choices: ['p = &a;', 'p = a;', '*p = a;', 'p = *a;'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '& 연산자로 주소를 추출합니다.', output: '', variables: { p: '&a' } },
    ],
  },
  {
    id: 'c_ptr_3',
    language: 'c',
    category: 'c_ptr',
    title: '역참조 연산자 (*)',
    questionText: '출력 결과는?',
    code: [
      'int a = 7, *p = &a;',
      'printf("%d", *p);'
    ],
    choices: ['7', '주소값', '에러', '0'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'p가 가리키는 곳(*p)의 값은 a의 값인 7입니다.', output: '7', variables: {} },
    ],
  },
  {
    id: 'c_ptr_4',
    language: 'c',
    category: 'c_ptr',
    title: '포인터 산술 연산',
    questionText: 'p가 100번지일 때 p+1은? (int가 4바이트인 경우)',
    code: [
      'int a[5], *p = a;',
      'p = p + 1;'
    ],
    choices: ['104', '101', '100', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '포인터에 1을 더하면 해당 자료형의 크기만큼 증가합니다.', output: '104', variables: {} },
    ],
  },
  {
    id: 'c_ptr_5',
    language: 'c',
    category: 'c_ptr',
    title: 'NULL 포인터',
    questionText: '아무것도 가리키지 않는 포인터의 상태는?',
    code: [
      'int *p = NULL;'
    ],
    choices: ['NULL', '0', 'None', 'void'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '안전한 포인터 사용을 위해 NULL로 초기화하곤 합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_ptr_6',
    language: 'c',
    category: 'c_ptr',
    title: '이중 포인터',
    questionText: 'a의 값을 출력하는 방법은?',
    code: [
      'int a = 5, *p = &a, **pp = &p;'
    ],
    choices: ['**pp', '*pp', 'pp', 'p'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '두 번 타고 들어가야 실제 값에 도달합니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'c_ptr_7',
    language: 'c',
    category: 'c_ptr',
    title: '문자열 포인터',
    questionText: '출력 문자는?',
    code: [
      'char *s = "Hello";',
      'printf("%c", *(s+1));'
    ],
    choices: ['e', 'H', 'l', 'o'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: '두 번째 문자인 \'e\'가 출력됩니다.', output: 'e', variables: {} },
    ],
  },
  {
    id: 'c_ptr_8',
    language: 'c',
    category: 'c_ptr',
    title: '포인터의 크기',
    questionText: 'sizeof(p)의 결과는? (64비트 시스템 가정)',
    code: [
      'double d; double *p = &d;',
      'printf("%d", (int)sizeof(p));'
    ],
    choices: ['8', '4', '16', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '시스템의 주소 체계에 따라 포인터 크기가 결정됩니다. (보통 8바이트)', output: '8', variables: {} },
    ],
  },
  {
    id: 'c_ptr_9',
    language: 'c',
    category: 'c_ptr',
    title: '배열 이름의 주소',
    questionText: 'a 와 같은 값은?',
    code: [
      'int a[3];'
    ],
    choices: ['&a[0]', 'a[0]', '*a', '&a'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '배열 명은 첫 번째 요소의 주소와 같습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'c_ptr_10',
    language: 'c',
    category: 'c_ptr',
    title: 'void 포인터',
    questionText: 'void * 포인터의 특징은?',
    code: [
      'void *p;'
    ],
    choices: ['형 변환 없이 어떠한 주소도 담을 수 있다', '역참조가 바로 가능하다', '산술 연산이 바로 된다', '에러가 항상 난다'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '범용 포인터로 사용되지만 역참조 시 캐스팅이 필요합니다.', output: '', variables: {} }],
  },
  // 5. 문자열 (Strings) - 10 questions
  {
    id: 'c_string_1',
    language: 'c',
    category: 'c_string',
    title: '문자열 끝 문자',
    questionText: '문자열의 끝을 나타내는 제어 문자는?',
    code: [
      'char s[] = "A"; // A\\0'
    ],
    choices: ['\\0', '\\n', '\\t', '\\r'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'NULL 문자로 문자열의 종결을 알립니다.', output: '', variables: {} }],
  },
  {
    id: 'c_string_2',
    language: 'c',
    category: 'c_string',
    title: 'strlen() 함수',
    questionText: 'strlen("Hello") 의 결과는?',
    code: [
      '#include <string.h>',
      'printf("%d", (int)strlen("Hello"));'
    ],
    choices: ['5', '6', '1', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 1, desc: 'NULL 문자를 제외한 순수 문자의 개수입니다.', output: '5', variables: {} }],
  },
  {
    id: 'c_string_3',
    language: 'c',
    category: 'c_string',
    title: 'strcpy() 함수',
    questionText: '문자열을 복사할 때 사용하는 목적지 인자의 위치는?',
    code: [
      'strcpy(dest, src);'
    ],
    choices: ['첫 번째 인자', '두 번째 인자', '반환값', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'strcpy(목적지, 출발지) 형태로 사용합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_string_4',
    language: 'c',
    category: 'c_string',
    title: 'strcmp() 함수',
    questionText: '두 문자열이 같을 때 반환값은?',
    code: [
      'strcmp("A", "A");'
    ],
    choices: ['0', '1', '-1', 'True'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '동일하면 0, 다르면 0이 아닌 값을 반환합니다.', output: '0', variables: {} }],
  },
  {
    id: 'c_string_5',
    language: 'c',
    category: 'c_string',
    title: '문자열 결합',
    questionText: '문자열 뒤에 추가할 때 사용하는 함수는?',
    code: [
      'strcat(dest, src);'
    ],
    choices: ['strcat', 'strcpy', 'strlen', 'strcmp'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'string concatenate의 약자입니다.', output: '', variables: {} }],
  },
  {
    id: 'c_string_6',
    language: 'c',
    category: 'c_string',
    title: '문자형 출력 서식',
    questionText: '문자열을 출력할 때 사용하는 서식 문자는?',
    code: [
      'printf("%s", "Hello");'
    ],
    choices: ['%s', '%d', '%c', '%f'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [{ codeLine: 0, desc: '%s 는 string의 약자입니다.', output: 'Hello', variables: {} }],
  },
  {
    id: 'c_string_7',
    language: 'c',
    category: 'c_string',
    title: '문자 배열의 크기',
    questionText: 'char s[10] = "ABC"; 일 때 sizeof(s)는?',
    code: [
      'char s[10] = "ABC";'
    ],
    choices: ['10', '3', '4', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '배열의 전체 크기인 10바이트가 나옵니다.', output: '10', variables: {} }],
  },
  {
    id: 'c_string_8',
    language: 'c',
    category: 'c_string',
    title: 'getchar() 함수',
    questionText: 'getchar()의 역할은?',
    code: [
      'char c = getchar();'
    ],
    choices: ['하나의 문자를 입력받는다', '문자열을 입력받는다', '문자를 출력한다', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [{ codeLine: 0, desc: '한 글자씩 처리할 때 주로 사용합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_string_9',
    language: 'c',
    category: 'c_string',
    title: '문자열 내 문자 검색',
    questionText: '특정 문자를 찾는 함수는?',
    code: [
      'strchr(s, \'A\');'
    ],
    choices: ['strchr', 'strstr', 'strlen', 'strcmp'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'character의 위치를 반환합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_string_10',
    language: 'c',
    category: 'c_string',
    title: '문자열 상수 변경',
    questionText: 'char *s = "Hi"; s[0] = "h"; 를 수행하면?',
    code: [
      'char *s = "Hi"; s[0] = \'h\';'
    ],
    choices: ['런타임 에러 발생 가능성', '정상 작동', '컴파일 에러', '아무 일 없음'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '문자열 상수는 읽기 전용 영역에 저장되곤 합니다.', output: 'Error', variables: {} }],
  },
  // 6. 구조체 (Structures) - 10 questions
  {
    id: 'c_struct_1',
    language: 'c',
    category: 'c_struct',
    title: '구조체 선언',
    questionText: '올바른 구조체 선언 키워드는?',
    code: [
      'struct Point { int x; int y; };'
    ],
    choices: ['struct', 'class', 'union', 'typedef'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '다양한 자료형을 묶는 틀을 만듭니다.', output: '', variables: {} }],
  },
  {
    id: 'c_struct_2',
    language: 'c',
    category: 'c_struct',
    title: '멤버 접근 연산자',
    questionText: '구조체 변수 st의 멤버 age에 접근하는 방법은?',
    code: [
      'struct S st; st.age = 10;'
    ],
    choices: ['st.age', 'st->age', 'st:age', 'st age'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '일반 변수는 도트(.)를 사용합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_struct_3',
    language: 'c',
    category: 'c_struct',
    title: '구조체 포인터 접근',
    questionText: '포인터 p를 통해 멤버 age에 접근하는 방법은?',
    code: [
      'struct S *p; p->age = 10;'
    ],
    choices: ['p->age', 'p.age', '*p.age', 'p:age'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '포인터를 통해 접근할 때는 화살표(->) 연산자를 씁니다.', output: '', variables: {} }],
  },
  {
    id: 'c_struct_4',
    language: 'c',
    category: 'c_struct',
    title: '구조체 크기 (Alignment)',
    questionText: 'sizeof(struct)가 멤버 합보다 클 수 있는 이유는?',
    code: [
      'struct S { char c; int i; };'
    ],
    choices: ['메모리 정렬(Alignment) 때문', '자동 초기값 때문', '파일 입출력 때문', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'CPU 접근 효율을 위해 패딩 바이트가 삽입될 수 있습니다.', output: '8 (align 4)', variables: {} }],
  },
  {
    id: 'c_struct_5',
    language: 'c',
    category: 'c_struct',
    title: '구조체 배열',
    questionText: 'st[0].x 에 접근하는 올바른 예는?',
    code: [
      'struct S st[10];'
    ],
    choices: ['st[0].x', 'st.x[0]', 'st->x[0]', 'st[0]->x'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '배열 요소를 먼저 선택한 후 멤버에 접근합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_struct_6',
    language: 'c',
    category: 'c_struct',
    title: 'typedef 활용',
    questionText: '구조체 이름을 줄여 쓰기 위해 사용하는 키워드는?',
    code: [
      'typedef struct S { ... } S_TYPE;'
    ],
    choices: ['typedef', 'define', 'alias', 'using'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '새로운 타입을 정의하여 매번 struct를 안 써도 되게 합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_struct_7',
    language: 'c',
    category: 'c_struct',
    title: '중첩 구조체',
    questionText: 'st.p.x 접근이 의미하는 것은?',
    code: [
      'struct P { int x; }; struct S { struct P p; };'
    ],
    choices: ['구조체 내부에 다른 구조체 변수가 있음', '에러', '포인터 접근', '함수 호출'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '구조체를 멤버로 가질 수 있어 계층 구조가 가능합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_struct_8',
    language: 'c',
    category: 'c_struct',
    title: '공용체 (Union) 특징',
    questionText: '구조체와 다른 점은?',
    code: [
      'union U { int i; char c; };'
    ],
    choices: ['모든 멤버가 메모리를 공유한다', '모두 독립적이다', '상속이 된다', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '가장 큰 멤버의 크기만큼만 할당하여 공간을 아낍니다.', output: '', variables: {} }],
  },
  {
    id: 'c_struct_9',
    language: 'c',
    category: 'c_struct',
    title: '열거형 (Enum) 기초',
    questionText: '기본적으로 할당되는 값은 무엇인가?',
    code: [
      'enum Color { RED, BLUE };'
    ],
    choices: ['정수값 (0, 1, ...)', '문자열', '실수', '불리언'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '0부터 순차적으로 정수가 할당됩니다.', output: '0', variables: {} }],
  },
  {
    id: 'c_struct_10',
    language: 'c',
    category: 'c_struct',
    title: '구조체 대입',
    questionText: 'struct S s1, s2; s1 = s2; 가능한가?',
    code: [
      's1 = s2;'
    ],
    choices: ['네 (모든 멤버가 복사됨)', '아니오', '포인터여야 가능', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '구조체 변수끼리의 직접 대입은 멤버 전체 복사를 수행합니다.', output: '', variables: {} }],
  },
  // 7. 함수 및 스코프 (Functions/Scope) - 10 questions
  {
    id: 'c_func_1',
    language: 'c',
    category: 'c_func',
    title: '함수 선언 (Prototype)',
    questionText: 'main 뒤에 함수를 정의할 때 앞에 필요한 것은?',
    code: [
      'void f(); // prototype',
      'int main() { f(); }'
    ],
    choices: ['함수 원형(Prototype)', '에러 로그', '헤더 파일 무조건', '주석'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '컴파일러에게 함수의 정보를 미리 알려줍니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_2',
    language: 'c',
    category: 'c_func',
    title: '지역 변수 특징',
    questionText: '함수 탈출 시 지역 변수는 어떻게 되나?',
    code: [
      'void f() { int x = 10; }'
    ],
    choices: ['소멸된다', '보존된다', '전역이 된다', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '스택 프레임이 사라지면서 자동으로 메모리에서 해제됩니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_3',
    language: 'c',
    category: 'c_func',
    title: '정적 변수 (static)',
    questionText: '함수 내 static 변수의 특징은?',
    code: [
      'void f() { static int count = 0; }'
    ],
    choices: ['함수가 끝나도 값이 유지된다', '매번 초기화된다', '에러난다', '공유안됨'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '데이터 영역에 할당되어 프로그램 종료 시까지 살아있습니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_4',
    language: 'c',
    category: 'c_func',
    title: 'Call by Value',
    questionText: '결과는?',
    code: [
      'void f(int n) { n = 20; }',
      'int a = 10; f(a); printf("%d", a);'
    ],
    choices: ['10', '20', '0', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '값이 복사되어 전달되므로 원본 a는 바뀌지 않습니다.', output: '10', variables: { a: 10 } },
    ],
  },
  {
    id: 'c_func_5',
    language: 'c',
    category: 'c_func',
    title: 'Call by Reference (유사)',
    questionText: '값을 바꾸기 위해 전달해야 하는 것은?',
    code: [
      'void f(int *p) { *p = 20; }'
    ],
    choices: ['변수의 주소 (&a)', '변수 이름 (a)', '값 (10)', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '주소를 통해 원본 데이터에 접근하여 수정합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_6',
    language: 'c',
    category: 'c_func',
    title: 'return 문의 역할',
    questionText: '값을 반환하고 함수를 종료하는 키워드는?',
    code: [
      'return 0;'
    ],
    choices: ['return', 'break', 'exit', 'stop'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '호출한 지점으로 결과를 돌려줍니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_7',
    language: 'c',
    category: 'c_func',
    title: '재귀 함수 기초',
    questionText: '반드시 포함해야 하는 것은?',
    code: [
      'void rec() { if(...) return; rec(); }'
    ],
    choices: ['탈출 조건 (Base Case)', '무한 루프', '포인터', 'main 호출'],
    correctAnswer: 0,
    visualizer: 'stack',
    steps: [{ codeLine: 0, desc: '종료 조건이 없으면 Stack Overflow 에러가 발생합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_8',
    language: 'c',
    category: 'c_func',
    title: '매개변수 가변 인자',
    questionText: 'printf 처럼 인자수가 변하는 함수에 쓰는 키워드는?',
    code: [
      '#include <stdarg.h>'
    ],
    choices: ['va_list / ...', 'pointer', 'array', 'void'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'stdarg.h 헤더를 사용하여 구현합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_9',
    language: 'c',
    category: 'c_func',
    title: '전역 변수의 위험성',
    questionText: '지양해야 하는 주된 이유는?',
    code: [
      'int global_x;'
    ],
    choices: ['어디서든 수정 가능하여 추적이 어렵다', '메모리를 적게 쓴다', '속도가 느리다', '에러가 안 나서'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '데이터 무결성을 해칠 수 있어 필요한 경우에만 최소화합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_func_10',
    language: 'c',
    category: 'c_func',
    title: '함수 포인터',
    questionText: '가장 올바른 선언 형태는?',
    code: [
      'void (*fp)();'
    ],
    choices: ['void (*fp)();', 'void *fp();', 'void fp*();', 'void fp();'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '함수 자체의 주소를 담아 동적으로 호출할 수 있습니다.', output: '', variables: {} }],
  },
  // 8. 파일 입출력 및 메모리 (I/O & Memory) - 10 questions
  {
    id: 'c_io_1',
    language: 'c',
    category: 'c_io',
    title: '파일 열기 함수',
    questionText: '파일을 열 때 사용하는 함수는?',
    code: [
      'FILE *fp = fopen("t.txt", "r");'
    ],
    choices: ['fopen', 'fclose', 'fread', 'fwrite'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '파일명과 모드(r, w, a 등)를 지정합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_2',
    language: 'c',
    category: 'c_io',
    title: '파일 닫기 용도',
    questionText: 'fclose()를 하는 가장 큰 이유는?',
    code: [
      'fclose(fp);'
    ],
    choices: ['메모리 및 버퍼 자원 해제', '파일 내용 삭제', '속도 향상', '에러 방지'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '열어둔 파일을 닫아야 OS 자원이 반환됩니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_3',
    language: 'c',
    category: 'c_io',
    title: '동적 할당 (malloc)',
    questionText: '힙 메모리를 수동으로 할당하는 함수는?',
    code: [
      'int *p = (int*)malloc(sizeof(int));'
    ],
    choices: ['malloc', 'free', 'alloc', 'calloc'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '지정한 바이트 크기만큼 힙 영역을 빌려옵니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_4',
    language: 'c',
    category: 'c_io',
    title: '메모리 해제 (free)',
    questionText: 'malloc 후 하지 않으면 생기는 현상은?',
    code: [
      'free(p);'
    ],
    choices: ['메모리 누수 (Memory Leak)', '스택 오버플로우', '파일 삭제', '정상 종료'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '필요 없는 메모리를 계속 쥐고 있으면 시스템 자원이 고갈됩니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_5',
    language: 'c',
    category: 'c_io',
    title: 'fprintf() 역할',
    questionText: '어디에 출력하는가?',
    code: [
      'fprintf(fp, "%s", "Hi");'
    ],
    choices: ['파일 스트림', '표준 출력(콘솔)', '문자열 변수', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'printf와 사용법은 같으나 첫 인자로 파일 포인터를 받습니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_6',
    language: 'c',
    category: 'c_io',
    title: 'feof() 함수',
    questionText: '용도는?',
    code: [
      'while(!feof(fp)) { ... }'
    ],
    choices: ['파일의 끝(End Of File)인지 확인', '파일 삭제', '파일 생성', '파일 이름 반환'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '더 읽을 내용이 있는지 루프 조건에 자주 씁니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_7',
    language: 'c',
    category: 'c_io',
    title: 'calloc() 과 malloc()',
    questionText: 'calloc의 큰 차이점은?',
    code: [
      'p = calloc(5, sizeof(int));'
    ],
    choices: ['할당 후 모든 비트를 0으로 초기화한다', '더 빠르다', '자동 해제된다', '에러가 안난다'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '할당과 초기화를 동시에 수행합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_8',
    language: 'c',
    category: 'c_io',
    title: 'scanf() 의 특징',
    questionText: '문자열 %s 입력 시의 제약은?',
    code: [
      'scanf("%s", s);'
    ],
    choices: ['공백 문자를 만나면 입력을 멈춘다', '공백도 받는다', '정수만 받는다', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [{ codeLine: 0, desc: '띄어쓰기가 있는 문자열은 gets() 등을 사용해야 합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_9',
    language: 'c',
    category: 'c_io',
    title: '메모리 재할당 (realloc)',
    questionText: '기존 할당 크기를 조절할 때 쓰는 것은?',
    code: [
      'p = realloc(p, 20);'
    ],
    choices: ['realloc', 'malloc', 'size', 'resize'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '기존 데이터를 최대한 보존하며 크기를 변경합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_io_10',
    language: 'c',
    category: 'c_io',
    title: '파일 열기 모드 "a"',
    questionText: '의미는?',
    code: [
      'fp = fopen("t.txt", "a");'
    ],
    choices: ['append (기존 내용 뒤에 추가)', 'all (모두 읽기)', 'access (접근만)', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '파일이 없으면 만들고 있으면 끝에 이어 씁니다.', output: '', variables: {} }],
  },
  // 9. 전처리기 및 비트 (Preprocessor/Bit) - 10 questions
  {
    id: 'c_prep_1',
    language: 'c',
    category: 'c_prep',
    title: '#define 매크로',
    questionText: 'PI의 값은?',
    code: [
      '#define PI 3.14',
      'printf("%f", PI);'
    ],
    choices: ['3.14', '변수값', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 1, desc: '컴파일 전 PI가 모두 3.14로 실제 치환됩니다.', output: '3.14', variables: {} }],
  },
  {
    id: 'c_prep_2',
    language: 'c',
    category: 'c_prep',
    title: '#include < > 와 " "',
    questionText: '차이점은?',
    code: [
      '#include <stdio.h>',
      '#include "myheader.h"'
    ],
    choices: ['검색 경로 (< > 는 시스템 경로)', '속도', '파일 형식', '에러 여부'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '꺽쇠는 표준 라이브러리, 따옴표는 현재 작업 디렉토리 우선 검색입니다.', output: '', variables: {} }],
  },
  {
    id: 'c_prep_3',
    language: 'c',
    category: 'c_prep',
    title: '비트 연산 (NOT)',
    questionText: '~0 의 결과는? (8비트 1의 보수 가정 시)',
    code: [
      'unsigned char a = 0; printf("%d", (unsigned char)~a);'
    ],
    choices: ['255', '0', '1', '-1'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '00000000 을 뒤집으면 11111111 (255)가 됩니다.', output: '255', variables: {} }],
  },
  {
    id: 'c_prep_4',
    language: 'c',
    category: 'c_prep',
    title: '매크로 함수 주의점',
    questionText: '결과는?',
    code: [
      '#define SQUARE(x) x * x',
      'printf("%d", SQUARE(1+2));'
    ],
    choices: ['5 (1+2*1+2)', '9 (3*3)', '에러', '3'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 1, desc: '괄호를 꼼꼼히 안 하면 1+2 * 1+2 로 치환되어 5가 나옵니다.', output: '5', variables: {} }],
  },
  {
    id: 'c_prep_5',
    language: 'c',
    category: 'c_prep',
    title: '조건부 컴파일',
    questionText: '#ifdef 의 용도는?',
    code: [
      '#ifdef DEBUG ... #endif'
    ],
    choices: ['특정 매크로 정의 여부에 따라 코드 포함/제외', '무조건 포함', '항상 제외', '에러 체크'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '디버그 모드나 OS별 처리에 필수적입니다.', output: '', variables: {} }],
  },
  {
    id: 'c_prep_6',
    language: 'c',
    category: 'c_prep',
    title: '비트 XOR 연산 (^)',
    questionText: '5 ^ 5 의 결과는?',
    code: [
      'printf("%d", 5 ^ 5);'
    ],
    choices: ['0', '1', '5', '10'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '같은 비트끼리는 0, 다른 비트면 1이므로 자기 자신 XOR은 0입니다.', output: '0', variables: {} }],
  },
  {
    id: 'c_prep_7',
    language: 'c',
    category: 'c_prep',
    title: '#pragma once',
    questionText: '기능은?',
    code: [
      '#pragma once',
      'struct S { int x; };'
    ],
    choices: ['헤더 파일 중복 포함 방지', '속도 향상', '컴파일 중지', '메모리 할당'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '컴파일러에게 현재 파일을 한 번만 포함하라고 요청합니다.', output: '', variables: {} }],
  },
  {
    id: 'c_prep_8',
    language: 'c',
    category: 'c_prep',
    title: '__LINE__ 매크로',
    questionText: '무엇을 출력하는가?',
    code: [
      'printf("%d", __LINE__);'
    ],
    choices: ['현재 코드의 라인 번호', '현재 시간', '파일명', '에러 코드'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [{ codeLine: 0, desc: '현재 소스파일 내의 줄 번호로 치환됩니다.', output: '1', variables: {} }],
  },
  {
    id: 'c_prep_9',
    language: 'c',
    category: 'c_prep',
    title: '비트 OR 연산 (|)',
    questionText: '1 | 2 의 결과는?',
    code: [
      'printf("%d", 1 | 2);'
    ],
    choices: ['3', '0', '1', '2'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '01 | 10 = 11 (3) 입니다.', output: '3', variables: {} }],
  },
  {
    id: 'c_prep_10',
    language: 'c',
    category: 'c_prep',
    title: '#undef',
    questionText: '용도는?',
    code: [
      '#define MAX 100',
      '#undef MAX'
    ],
    choices: ['정의된 매크로를 해제한다', '다시 정의한다', '파일을 닫는다', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '이미 정의된 매크로 식별자를 지웁니다.', output: '', variables: {} }],
  },
  // 10. 종합 응용 (Integrated) - 10 questions
  {
    id: 'c_app_1',
    language: 'c',
    category: 'c_app',
    title: '문자열 역순 출력',
    questionText: '출력 결과는?',
    code: [
      'char s[] = "abc";',
      'for(int i=2; i>=0; i--) printf("%c", s[i]);'
    ],
    choices: ['cba', 'abc', 'cb', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [
      { codeLine: 1, desc: '인덱스 2(c) -> 1(b) -> 0(a) 순으로 출력합니다.', output: 'cba', variables: { i: -1 } },
    ],
  },
  {
    id: 'c_app_2',
    language: 'c',
    category: 'c_app',
    title: '포인터와 배열 반복',
    questionText: '출력 합계는?',
    code: [
      'int a[] = {1, 2, 3}, sum = 0, *p = a;',
      'for(int i=0; i<3; i++) sum += *(p+i);',
      'printf("%d", sum);'
    ],
    choices: ['6', '3', '0', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 1, desc: '포인터 연산으로 배열의 모든 요소를 더합니다.', output: '6', variables: { sum: 6 } }],
  },
  {
    id: 'c_app_3',
    language: 'c',
    category: 'c_app',
    title: '전치/후치 연산 혼합',
    questionText: 'a의 최종값은?',
    code: [
      'int i=1, a=0;',
      'a = ++i + i++;',
      'printf("%d", a);'
    ],
    choices: ['4 (2 + 2)', '3 (2 + 1)', '5', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 1, desc: '++i(2)가 먼저 되고, 그 시점 i값인 2를 더한 후 i++가 됩니다.', output: '4', variables: { a: 4 } }],
  },
  {
    id: 'c_app_4',
    language: 'c',
    category: 'c_app',
    title: '구조체 포인터와 ++',
    questionText: 'p->x++ 수행 시 증가하는 것은?',
    code: [
      'struct S { int x; } s = {10}, *p = &s;',
      'p->x++;'
    ],
    choices: ['구조체 멤버 x의 값', '포인터 p의 주소', '에러', '아무 일 없음'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 1, desc: '멤버 x를 10에서 11로 증가시킵니다.', output: '', variables: { 's.x': 11 } }],
  },
  {
    id: 'c_app_5',
    language: 'c',
    category: 'c_app',
    title: '다중 if 가리기',
    questionText: '결과는?',
    code: [
      'int x=5, y=10; if(x>0) if(y<5) printf("A"); else printf("B");'
    ],
    choices: ['B', 'A', '출력 없음', '에러'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [{ codeLine: 0, desc: 'else는 가장 가까운 if(y<5)와 짝을 이룹니다.', output: 'B', variables: {} }],
  },
  {
    id: 'c_app_6',
    language: 'c',
    category: 'c_app',
    title: '문자열 길이와 크기',
    questionText: '결과는?',
    code: [
      'char s[10] = "ABC";',
      'printf("%d %d", (int)strlen(s), (int)sizeof(s));'
    ],
    choices: ['3 10', '3 4', '4 10', '10 10'],
    correctAnswer: 0,
    visualizer: 'console',
    steps: [{ codeLine: 1, desc: 'strlen은 \0 전까지 3, sizeof는 배열 크기 10입니다.', output: '3 10', variables: {} }],
  },
  {
    id: 'c_app_7',
    language: 'c',
    category: 'c_app',
    title: 'static 변수 유지',
    questionText: 'f()를 두 번 호출했을 때 두 번째 반환값은?',
    code: [
      'int f() { static int n=0; return ++n; }'
    ],
    choices: ['2', '1', '0', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '이전 호출에서 증가한 1이 유지된 상태로 한 번 더 증가합니다.', output: '2', variables: {} }],
  },
  {
    id: 'c_app_8',
    language: 'c',
    category: 'c_app',
    title: '포인터 캐스팅',
    questionText: '실행 후 c의 값은? (리틀 엔디언 가정)',
    code: [
      'int a = 0x1234; char c = *(char*)&a;'
    ],
    choices: ['0x34', '0x12', '0', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: 'int의 첫 1바이트 주소만 읽어옵니다.', output: '0x34', variables: {} }],
  },
  {
    id: 'c_app_9',
    language: 'c',
    category: 'c_app',
    title: '배열과 포인터 비교',
    questionText: '다른 하나는?',
    code: [
      'int a[3] = {1, 2, 3};'
    ],
    choices: ['a+1 (주소)', 'a[1] (값)', '*(a+1) (값)', '1[a] (값)'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '나머지는 모두 정수 2를 나타내지만 a+1은 주소입니다.', output: '', variables: {} }],
  },
  {
    id: 'c_app_10',
    language: 'c',
    category: 'c_app',
    title: '정렬 기초 (버블)',
    questionText: '한 번 회전 후 [3, 1, 2] 의 상태는?',
    code: [
      'int a[] = {3, 1, 2}; // 오름차순 버블 정렬 1회전'
    ],
    choices: ['[1, 2, 3]', '[1, 3, 2]', '[3, 1, 2]', '에러'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [{ codeLine: 0, desc: '가장 큰 3이 맨 뒤로 밀려납니다.', output: '[1, 2, 3]', variables: { 'a[0]': 1, 'a[1]': 2, 'a[2]': 3 } }],
  },
];
