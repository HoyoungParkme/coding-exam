import type { Question } from './types';

export const JAVA_QUESTIONS: Question[] = [
  // 1. 클래스와 객체 - 생성자 (j_constructor) - 10 questions
  {
    id: 'j_constructor_1',
    language: 'java',
    category: 'j_constructor',
    title: '기본 생성자 호출',
    questionText: '다음 코드의 실행 결과는?',
    code: [
      'class Test {',
      '    int x;',
      '    Test() { x = 10; }',
      '}',
      'public class Main {',
      '    public static void main(String[] args) {',
      '        Test t = new Test();',
      '        System.out.println(t.x);',
      '    }',
      '}'
    ],
    choices: ['10', '0', 'Error', 'null'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 0, desc: 'Test 객체를 생성하며 생성자를 호출합니다.', output: '', variables: {}, heapObjects: [{ name: 'Test t', fields: { x: 0 } }] },
      { codeLine: 2, desc: '생성자에서 x에 10을 대입합니다.', output: '', variables: {}, heapObjects: [{ name: 'Test t', fields: { x: 10 } }] },
      { codeLine: 7, desc: '10을 출력합니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'j_constructor_2',
    language: 'java',
    category: 'j_constructor',
    title: 'this() 생성자 체이닝',
    questionText: '출력 결과는?',
    code: [
      'class A {',
      '    A() { this(10); }',
      '    A(int x) { System.out.println(x); }',
      '}',
      'public class Main {',
      '    public static void main(String[] args) { new A(); }',
      '}'
    ],
    choices: ['10', '0', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '기본 생성자에서 인자가 있는 생성자를 호출합니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'j_constructor_3',
    language: 'java',
    category: 'j_constructor',
    title: '매개변수가 있는 생성자',
    questionText: '결과는?',
    code: [
      'class B {',
      '    B(int n) { System.out.print(n); }',
      '}',
      'public class Main {',
      '    public static void main(String[] args) { B b = new B(5); }',
      '}'
    ],
    choices: ['5', '0', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 4, desc: '인자 5를 전달하며 생성자를 호출합니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'j_constructor_4',
    language: 'java',
    category: 'j_constructor',
    title: '기본 생성자의 부재',
    questionText: '다음 중 에러가 발생하는 코드는?',
    code: [
      'class C { C(int x) {} }',
      '// ...',
      'C c = new C();'
    ],
    choices: ['C c = new C();', 'C c = new C(3);', '둘 다 정상', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '사용자가 생성자를 하나라도 정의하면 기본 생성자는 자동 생성되지 않습니다.', output: 'Compile Error', variables: {} },
    ],
  },
  {
    id: 'j_constructor_5',
    language: 'java',
    category: 'j_constructor',
    title: 'this 키워드 활용',
    questionText: 'obj.x의 값은?',
    code: [
      'class D {',
      '    int x;',
      '    D(int x) { this.x = x; }',
      '}',
      'D d = new D(100);'
    ],
    choices: ['100', '0', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: 'this.x 는 멤버 변수를, x는 매개변수를 가리킵니다.', output: '', variables: {}, heapObjects: [{ name: 'D d', fields: { x: 100 } }] },
    ],
  },
  {
    id: 'j_constructor_6',
    language: 'java',
    category: 'j_constructor',
    title: '생성자의 리턴 타입',
    questionText: '옳은 설명은?',
    code: [
      'public MyClass() { ... }'
    ],
    choices: ['반환 타입이 없어야 한다', 'void를 써야 한다', 'int를 써야 한다', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '생성자는 클래스 이름과 같으며 반환 타입이 아예 없습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_constructor_7',
    language: 'java',
    category: 'j_constructor',
    title: '생성자 내의 메서드 호출',
    questionText: '결과는?',
    code: [
      'class E {',
      '    E() { init(); }',
      '    void init() { System.out.print("OK"); }',
      '}',
      'new E();'
    ],
    choices: ['OK', 'None', 'Error', 'init'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '생성자 안에서 다른 일반 메서드를 호출할 수 있습니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_constructor_8',
    language: 'java',
    category: 'j_constructor',
    title: '복사 생성자 느낌',
    questionText: 't2.val 은?',
    code: [
      'class T {',
      '    int val;',
      '    T(int v) { val = v; }',
      '    T(T other) { val = other.val; }',
      '}',
      'T t1 = new T(10); T t2 = new T(t1);'
    ],
    choices: ['10', '0', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 5, desc: '다른 객체의 값을 복사하여 생성합니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'j_constructor_9',
    language: 'java',
    category: 'j_constructor',
    title: 'Private 생성자',
    questionText: '외부에서 new 클래스() 가 가능한가?',
    code: [
      'class S { private S() {} }'
    ],
    choices: ['불가능하다 (에러)', '가능하다', '경고만 뜬다', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'private 생성자는 외부에서 인스턴스화를 막을 때 사용합니다 (예: Singleton).', output: '', variables: {} },
    ],
  },
  {
    id: 'j_constructor_10',
    language: 'java',
    category: 'j_constructor',
    title: '초기화 블록 vs 생성자',
    questionText: 'x의 값은?',
    code: [
      'class F {',
      '    int x = 1;',
      '    { x = 2; }',
      '    F() { x = 3; }',
      '}',
      'System.out.print(new F().x);'
    ],
    choices: ['3', '2', '1', 'Error'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '명시적 초기화(1) -> 초기화 블록(2) -> 생성자(3) 순으로 덮어써집니다.', output: '3', variables: {} },
    ],
  },

  // 2. 상속과 생성자 - super() 호출 (j_super) - 10 questions
  {
    id: 'j_super_1',
    language: 'java',
    category: 'j_super',
    title: '상속 관계의 생성자 호출 순서',
    questionText: '다음 코드의 결과는?',
    code: [
      'class Parent { Parent() { System.out.print("P"); } }',
      'class Child extends Parent { Child() { System.out.print("C"); } }',
      'public class Main {',
      '    public static void main(String[] args) { new Child(); }',
      '}'
    ],
    choices: ['PC', 'CP', 'C', 'P'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '자식 생성자 첫 줄에는 항상 부모의 기본 생성자 super() 가 달려있습니다. P 출력 후 C 출력.', output: 'PC', variables: {} },
    ],
  },
  {
    id: 'j_super_2',
    language: 'java',
    category: 'j_super',
    title: '명시적 super() 호출',
    questionText: '출력 결과는?',
    code: [
      'class Parent { Parent(int x) { System.out.print(x); } }',
      'class Child extends Parent {',
      '    Child() { super(10); System.out.print("C"); }',
      '}',
      'new Child();'
    ],
    choices: ['10C', 'C10', 'C', '10'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: 'super(10)에 의해 Parent(int x)가 호출됩니다.', output: '10C', variables: {} },
    ],
  },
  {
    id: 'j_super_3',
    language: 'java',
    category: 'j_super',
    title: 'super 키워드로 부모 멤버 접근',
    questionText: '결과는?',
    code: [
      'class A { int x = 10; }',
      'class B extends A {',
      '    int x = 20;',
      '    void show() { System.out.print(super.x); }',
      '}',
      'new B().show();'
    ],
    choices: ['10', '20', '30', 'Error'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 3, desc: 'super.x 는 부모 클래스의 x 값을 가져옵니다.', output: '10', variables: {} },
    ],
  },
  {
    id: 'j_super_4',
    language: 'java',
    category: 'j_super',
    title: '부모 메서드 호출 (super)',
    questionText: '결과는?',
    code: [
      'class A { void f() { System.out.print("A"); } }',
      'class B extends A {',
      '    void f() { super.f(); System.out.print("B"); }',
      '}',
      'new B().f();'
    ],
    choices: ['AB', 'B', 'BA', 'Error'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '부모의 f()를 먼저 실행하고 자신의 로직을 실행합니다.', output: 'AB', variables: {} },
    ],
  },
  {
    id: 'j_super_5',
    language: 'java',
    category: 'j_super',
    title: '상속과 다중 할당(?)',
    questionText: 'obj.a 는?',
    code: [
      'class P { int a = 10; }',
      'class C extends P { int a = 20; }',
      'P obj = new C();'
    ],
    choices: ['10', '20', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '변수 하이딩: 필드는 참조 변수의 타입을 따릅니다. Parent 타입이므로 10.', output: '', variables: {}, heapObjects: [{ name: 'obj', fields: { a: 10 } }] },
    ],
  },
  {
    id: 'j_super_6',
    language: 'java',
    category: 'j_super',
    title: '추상 클래스 상속',
    questionText: '결과는?',
    code: [
      'abstract class A { A() { System.out.print("A"); } }',
      'class B extends A {}',
      'new B();'
    ],
    choices: ['A', 'None', 'Error', 'B'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '추상 클래스도 객체 생성(자식을 통한) 시 생성자가 호출됩니다.', output: 'A', variables: {} },
    ],
  },
  {
    id: 'j_super_7',
    language: 'java',
    category: 'j_super',
    title: 'super()의 위치',
    questionText: 'super()는 어디에 있어야 하나?',
    code: [
      'Child() {',
      '    int a = 1;',
      '    super(); // ??',
      '}'
    ],
    choices: ['항상 첫 줄에 있어야 한다', '어디든 상관없다', '마지막에 있어야 한다', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '생성자 내에서 super() 호출은 반드시 첫 줄에 위치해야 합니다.', output: 'Compile Error', variables: {} },
    ],
  },
  {
    id: 'j_super_8',
    language: 'java',
    category: 'j_super',
    title: '상속의 깊이와 호출',
    questionText: '출력 순서는?',
    code: [
      'class A { A() { System.out.print(1); } }',
      'class B extends A { B() { System.out.print(2); } }',
      'class C extends B { C() { System.out.print(3); } }',
      'new C();'
    ],
    choices: ['123', '321', '1', '123321'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 3, desc: '가장 꼭대기 부모부터 차례로 출력됩니다.', output: '123', variables: {} },
    ],
  },
  {
    id: 'j_super_9',
    language: 'java',
    category: 'j_super',
    title: '부모의 private 멤버',
    questionText: '자식에서 super.a 로 접근 가능한가?',
    code: [
      'class P { private int a = 1; }',
      'class C extends P { ... super.a ... }'
    ],
    choices: ['불가능하다(컴파일 에러)', '가능하다', 'protected 면 가능하다', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'private은 상속되어도 직접 접근이 차단됩니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_super_10',
    language: 'java',
    category: 'j_super',
    title: 'final 클래스의 상속',
    questionText: '가능한가?',
    code: [
      'final class A {}',
      'class B extends A {}'
    ],
    choices: ['불가능하다(컴파일 에러)', '가능하다', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'final 로 선언된 클래스는 자식을 가질 수 없습니다.', output: 'Error', variables: {} },
    ],
  },

  // 3. 다형성 - 메서드 오버로딩 (j_overload) - 10 questions
  {
    id: 'j_overload_1',
    language: 'java',
    category: 'j_overload',
    title: '기본 오버로딩',
    questionText: '출력 결과는?',
    code: [
      'class T {',
      '    void f(int x) { System.out.print("INT"); }',
      '    void f(String s) { System.out.print("STR"); }',
      '}',
      'new T().f(10);'
    ],
    choices: ['INT', 'STR', 'Error', 'Both'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 4, desc: '매개변수 타입에 맞는 메서드가 호출됩니다.', output: 'INT', variables: {} },
    ],
  },
  {
    id: 'j_overload_2',
    language: 'java',
    category: 'j_overload',
    title: '오버로딩 성립 조건',
    questionText: '다음 중 오버로딩인 것은?',
    code: [
      '1. void a(int x)',
      '2. int a(int x)',
      '3. void a(int x, int y)'
    ],
    choices: ['1과 3', '1과 2', '모두 오버로딩', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '반환 타입만 다른 것은 오버로딩으로 인정되지 않습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_overload_3',
    language: 'java',
    category: 'j_overload',
    title: '오버로딩과 자동 형변환',
    questionText: '결과는?',
    code: [
      'void show(double d) { System.out.print("D"); }',
      'show(10); // 10은 int'
    ],
    choices: ['D', 'Error', '10', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '일치하는 타입이 없으면 더 넓은 범위의 타입(double)으로 형변환되어 호출됩니다.', output: 'D', variables: {} },
    ],
  },
  {
    id: 'j_overload_4',
    language: 'java',
    category: 'j_overload',
    title: '가변 인자 오버로딩',
    questionText: '결과는?',
    code: [
      'void f(int n) { System.out.print(1); }',
      'void f(int... n) { System.out.print(2); }',
      'f(10);'
    ],
    choices: ['1', '2', 'Error', '12'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '고정 인자 메서드가 가변 인자보다 우선순위가 높습니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'j_overload_5',
    language: 'java',
    category: 'j_overload',
    title: 'Null 인자와 오버로딩',
    questionText: '어느 것이 호출될까?',
    code: [
      'void f(Object o) { System.out.print(1); }',
      'void f(String s) { System.out.print(2); }',
      'f(null);'
    ],
    choices: ['2', '1', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '가장 하위 클래스(구체적인 타입)인 String이 선택됩니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'j_overload_6',
    language: 'java',
    category: 'j_overload',
    title: '오버로딩의 정적 바인딩',
    questionText: '설명 중 옳은 것은?',
    code: [
      '// f(int), f(double)...'
    ],
    choices: ['컴파일 시점에 호출될 메서드가 결정된다', '런타임에 결정된다', '결정되지 않는다', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '오버로딩은 컴파일러가 파일 타입 기반으로 결정하는 정적 바인딩입니다.', output: 'Static Binding', variables: {} },
    ],
  },
  {
    id: 'j_overload_7',
    language: 'java',
    category: 'j_overload',
    title: '엠비규어스(Ambiguous) 에러',
    questionText: 'f(10, 10) 호출 시 결과는?',
    code: [
      'void f(int a, double b) {}',
      'void f(double a, int b) {}',
      '# f(10, 10);'
    ],
    choices: ['컴파일 에러 (모호함)', '둘 중 하나 호출', '정상 실행', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: '둘 다 똑같은 거리에 있어 결정하지 못하고 에러를 냅니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_overload_8',
    language: 'java',
    category: 'j_overload',
    title: '매개변수 순서만 다른 오버로딩',
    questionText: '허용되는가?',
    code: [
      'void f(int a, String b) {}',
      'void f(String b, int a) {}'
    ],
    choices: ['허용된다', '에러', '둘 중 하나만 선언 가능', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '매개변수의 순서가 다르면 타입 시그니처가 다른 것으로 간주합니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_overload_9',
    language: 'java',
    category: 'j_overload',
    title: 'Arrays.sort() 오버로딩',
    questionText: '정적 메서드도 오버로딩이 가능한가?',
    code: [
      'static void f(int a) {}',
      'static void f(double a) {}'
    ],
    choices: ['가능하다', '불가능하다', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'static 여부와 무관하게 메서드 이름과 매개변수로 식별합니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_overload_10',
    language: 'java',
    category: 'j_overload',
    title: '상속 관계에서의 오버로딩',
    questionText: '결과는?',
    code: [
      'class P { void f(int a) { System.out.print(1); } }',
      'class C extends P { void f(String s) { System.out.print(2); } }',
      'new C().f(10);'
    ],
    choices: ['1', '2', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '부모로부터 물려받은 f(int)도 사용 가능하므로 1이 출력됩니다.', output: '1', variables: {} },
    ],
  },

  // 4. 다형성 - 메서드 오버라이딩 (j_override) - 10 questions
  {
    id: 'j_override_1',
    language: 'java',
    category: 'j_override',
    title: '동적 바인딩의 핵심',
    questionText: '다음 코드의 실행 결과는?',
    code: [
      'class Parent { void show() { System.out.print("P"); } }',
      'class Child extends Parent { void show() { System.out.print("C"); } }',
      'public class Main {',
      '    public static void main(String[] args) {',
      '        Parent obj = new Child();',
      '        obj.show();',
      '    }',
      '}'
    ],
    choices: ['C', 'P', 'PC', 'Error'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 4, desc: '참조 타입은 Parent지만 실제 객체는 Child입니다.', output: '', variables: {}, heapObjects: [{ name: 'obj', fields: {} }] },
      { codeLine: 5, desc: '동적 바인딩에 의해 실제 인스턴스인 Child의 메서드가 실행됩니다.', output: 'C', variables: {} },
    ],
  },
  {
    id: 'j_override_2',
    language: 'java',
    category: 'j_override',
    title: '오버라이딩과 업캐스팅',
    questionText: '출력은?',
    code: [
      'class A { void f() { System.out.print(1); } }',
      'class B extends A { void f() { System.out.print(2); } }',
      'A a = new B(); a.f();'
    ],
    choices: ['2', '1', '12', 'Error'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '업캐스팅을 해도 오버라이딩된 메서드는 실제 객체(B) 로직을 따릅니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'j_override_3',
    language: 'java',
    category: 'j_override',
    title: '오버라이딩 체크 (Annotation)',
    questionText: '@Override 를 붙이는 이유는?',
    code: [
      '@Override',
      'void show() { ... }'
    ],
    choices: ['실수를 방지하고 컴파일러에게 명시함', '반드시 있어야 실행됨', '성속 속도를 올림', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '철자 실수 등을 컴파일 단에서 잡아주는 역할을 합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_override_4',
    language: 'java',
    category: 'j_override',
    title: '오버라이딩 불가 조건 (private)',
    questionText: '자식에서 똑같이 정의하면 오버라이딩인가?',
    code: [
      'class P { private void f() {} }',
      'class C extends P { public void f() {} }'
    ],
    choices: ['오버라이딩이 아니며 별개의 메서드임', '오버라이딩임', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '부모의 private 메서드는 보이지 않으므로 재정의의 대상이 아닙니다.', output: 'Different Method', variables: {} },
    ],
  },
  {
    id: 'j_override_5',
    language: 'java',
    category: 'j_override',
    title: '상속과 리턴 타입의 변화',
    questionText: '결과는?',
    code: [
      'class P { P get() { return this; } }',
      'class C extends P { @Override C get() { return this; } }',
      '// ...'
    ],
    choices: ['정상 (공변 반환 타입)', '에러 (반환 타입 불일치)', '경고', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '오버라이딩 시 반환 타입을 부모 클래스의 하위 클래스로 바꿀 수 있습니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_override_6',
    language: 'java',
    category: 'j_override',
    title: '접근 제한자 확장 범위',
    questionText: '부모가 protected 면 자식은?',
    code: [
      'class P { protected void f() {} }',
      'class C extends P { private void f() {} } // ?'
    ],
    choices: ['컴파일 에러 (더 좁은 접근 범주 불가)', '정상', '경고', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '오버라이딩할 때는 부모보다 좁은 접근 제한자를 쓸 수 없습니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_override_7',
    language: 'java',
    category: 'j_override',
    title: 'final 메서드의 오버라이딩',
    questionText: '가능한가?',
    code: [
      'class P { final void f() {} }',
      'class C extends P { void f() {} } // ?'
    ],
    choices: ['불가능 (컴파일 에러)', '가능', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'final 메서드는 재정의(Override)를 금지합니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_override_8',
    language: 'java',
    category: 'j_override',
    title: 'static 메서드 오버라이딩?',
    questionText: '결과는?',
    code: [
      'static void f() { ... }'
    ],
    choices: ['오버라이딩 불가능 (하이딩 발생)', '가능', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '정적 메서드는 인스턴스에 속하지 않으므로 오버라이딩(동적 바인딩)되지 않습니다.', output: 'Hiding', variables: {} },
    ],
  },
  {
    id: 'j_override_9',
    language: 'java',
    category: 'j_override',
    title: '생성자에서 오버라이딩된 메서드 호출',
    questionText: '결과는? (난이도 높음)',
    code: [
      'class P { P() { f(); } void f() { System.out.print(1); } }',
      'class C extends P { void f() { System.out.print(2); } }',
      'new C();'
    ],
    choices: ['2', '1', '12', 'Error'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '생성자 도중이라도 실제 객체가 Child이면 Child의 f()가 불립니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'j_override_10',
    language: 'java',
    category: 'j_override',
    title: '추상 메서드 구현',
    questionText: '이것도 오버라이딩인가?',
    code: [
      'abstract class A { abstract void f(); }',
      'class B extends A { void f() { ... } }'
    ],
    choices: ['그렇다. 의무적인 오버라이딩이다.', '아니다', '별개의 개념이다', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '내용이 없는 것을 있게 만드는 것도 재정의(Overriding)의 범주입니다.', output: 'OK', variables: {} },
    ],
  },

  // 5. 다형성 - 하이딩 (j_hiding) - 10 questions
  {
    id: 'j_hiding_1',
    language: 'java',
    category: 'j_hiding',
    title: '변수 하이딩 (Variable Hiding)',
    questionText: '다음 코드의 출력 결과는?',
    code: [
      'class Parent { int x = 10; }',
      'class Child extends Parent { int x = 20; }',
      'public class Main {',
      '    public static void main(String[] args) {',
      '        Parent p = new Child();',
      '        System.out.println(p.x);',
      '    }',
      '}'
    ],
    choices: ['10', '20', 'Error', '30'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 4, desc: '객체는 Child지만 참조형은 Parent입니다.', output: '', variables: {} },
      { codeLine: 5, desc: '필드는 참조 변수 타입에 따라 정적으로 결정됩니다(Hiding). 10 출력.', output: '10', variables: {} },
    ],
  },
  {
    id: 'j_hiding_2',
    language: 'java',
    category: 'j_hiding',
    title: '정적 메서드 하이딩',
    questionText: '결과는?',
    code: [
      'class A { static void f() { System.out.print(1); } }',
      'class B extends A { static void f() { System.out.print(2); } }',
      'A a = new B(); a.f();'
    ],
    choices: ['1', '2', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'static 메서드는 참조 변수(A) 타입을 따릅니다. 1 출력.', output: '1', variables: {} },
    ],
  },
  {
    id: 'j_hiding_3',
    language: 'java',
    category: 'j_hiding',
    title: '실제 객체 타입으로 필드 접근',
    questionText: '결과는?',
    code: [
      'Parent p = new Child();',
      'System.out.print(((Child)p).x);'
    ],
    choices: ['20', '10', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '강제 형변환(Downcasting)을 하면 Child의 x에 접근합니다.', output: '20', variables: {} },
    ],
  },
  {
    id: 'j_hiding_4',
    language: 'java',
    category: 'j_hiding',
    title: '필드와 메서드의 차이',
    questionText: '옳은 설명은?',
    code: [
      '// Parent p = new Child();'
    ],
    choices: ['메서드는 재정의, 필드는 은폐(Hiding) 된다', '둘 다 재정의된다', '둘 다 은폐된다', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '자바 다형성의 가장 중요한 원칙 중 하나입니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_hiding_5',
    language: 'java',
    category: 'j_hiding',
    title: '하이딩된 부모 필드 찾기',
    questionText: '자식 내부에서 부모 x를 부르려면?',
    code: [
      'class Child extends Parent {',
      '    int x = 20;',
      '    void show() { // Parent.x 를 어떻게? }',
      '}'
    ],
    choices: ['super.x', 'this.x', 'x', 'Parent.x'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: 'super 를 통해 은폐된 부모 멤버를 지칭할 수 있습니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_hiding_6',
    language: 'java',
    category: 'j_hiding',
    title: '메서드 하이딩의 다른 이름',
    questionText: '정적 메서드는 상속 시?',
    code: [
      'static void f()...'
    ],
    choices: ['Shadowing / Hiding', 'Overriding', 'Overloading', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '재정의가 아닌 단순 은폐 현상이 나타납니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_hiding_7',
    language: 'java',
    category: 'j_hiding',
    title: '필드 하이딩의 중첩',
    questionText: 'A a = new C(); a.x 는?',
    code: [
      'class A { int x = 1; }',
      'class B extends A { int x = 2; }',
      'class C extends B { int x = 3; }'
    ],
    choices: ['1', '2', '3', 'Error'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 0, desc: '가장 겉에 있는 참조 형인 A의 x가 선택됩니다.', output: '1', variables: {} },
    ],
  },
  {
    id: 'j_hiding_8',
    language: 'java',
    category: 'j_hiding',
    title: '상속 관계에서의 초기화 블록',
    questionText: '누가 먼저 실행되나?',
    code: [
      'class P { { System.out.print(1); } }',
      'class C extends P { { System.out.print(2); } }'
    ],
    choices: ['1 -> 2', '2 -> 1', '둘 다 안됨', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '부모 생성이 우선이므로 부모의 초기화 블록이 선행됩니다.', output: '12', variables: {} },
    ],
  },
  {
    id: 'j_hiding_9',
    language: 'java',
    category: 'j_hiding',
    title: '추상 클래스의 필드 하이딩',
    questionText: '가능한가?',
    code: [
      'abstract class A { int x = 10; }',
      'class B extends A { int x = 20; }'
    ],
    choices: ['가능하다', '불가능하다', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '추상 클래스도 필드를 가질 수 있으며 일반 클래스와 동일하게 작동합니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_hiding_10',
    language: 'java',
    category: 'j_hiding',
    title: '다형성 활용 예제',
    questionText: '출력은?',
    code: [
      'Parent p = new Child();',
      'p.show(); // show()는 오버라이딩됨',
      'System.out.print(p.x); // x는 하이딩됨'
    ],
    choices: ['Child메서드 + Parent변수', 'Parent메서드 + Child변수', '둘 다 자식것', '둘 다 부모것'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '자바의 핵심 함정 유형입니다.', output: 'Child + Parent', variables: {} },
    ],
  },

  // 6. static 변수와 메서드 (j_static) - 10 questions
  {
    id: 'j_static_1',
    language: 'java',
    category: 'j_static',
    title: 'Static 변수 공유',
    questionText: '다음 코드의 실행 결과는?',
    code: [
      'class Counter { static int count = 0; Counter() { count++; } }',
      'public class Main {',
      '    public static void main(String[] args) {',
      '        new Counter(); new Counter();',
      '        System.out.println(Counter.count);',
      '    }',
      '}'
    ],
    choices: ['2', '1', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'static 변수는 모든 인스턴스가 하나의 메모리 공간을 공유합니다.', output: '', staticVars: { 'Counter.count': 0 } },
      { codeLine: 3, desc: '두 번 객체 생성 시 count가 2가 됩니다.', output: '2', staticVars: { 'Counter.count': 2 } },
    ],
  },
  {
    id: 'j_static_2',
    language: 'java',
    category: 'j_static',
    title: 'Static 메서드 내의 인스턴스 멤버',
    questionText: '다음 중 에러가 발생하는 이유는?',
    code: [
      'class T {',
      '    int x = 10;',
      '    static void show() { System.out.println(x); }',
      '}'
    ],
    choices: ['static 메서드에서 인스턴스 변수(x)에 직접 접근 불가', 'x가 private이라서', '타입 불일치', 'Error 없음'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'static은 객체 생성 없이 실행되므로, 생성 후 사용 가능한 x를 인지할 수 없습니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_static_3',
    language: 'java',
    category: 'j_static',
    title: 'Static 초기화 블록',
    questionText: '결과는?',
    code: [
      'class T { static int x; static { x = 100; } }',
      'System.out.print(T.x);'
    ],
    choices: ['100', '0', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '클래스가 메모리에 로드될 때 단 한 번 실행됩니다.', output: '100', variables: {} },
    ],
  },
  {
    id: 'j_static_4',
    language: 'java',
    category: 'j_static',
    title: '객체를 통한 Static 접근',
    questionText: '결과는?',
    code: [
      'Counter c = new Counter();',
      'c.count = 5; // count는 static',
      'System.out.print(Counter.count);'
    ],
    choices: ['5', '0', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '인스턴스 변수로 접근해도 실제로는 클래스 공용 변수를 건드립니다.', output: '5', variables: {} },
    ],
  },
  {
    id: 'j_static_5',
    language: 'java',
    category: 'j_static',
    title: 'Singleton 패턴 기초',
    questionText: '결과는?',
    code: [
      'class S {',
      '    private static S instance = new S();',
      '    static S get() { return instance; }',
      '}'
    ],
    choices: ['하나의 인스턴스만 공유하여 사용함', '매번 생성함', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'static을 사용하여 전역적으로 접근 가능한 단일 객체를 유지합니다.', output: 'Singleton', variables: {} },
    ],
  },
  {
    id: 'j_static_6',
    language: 'java',
    category: 'j_static',
    title: 'static final 상수',
    questionText: '이름 규칙은?',
    code: [
      'static final double PI = 3.14;'
    ],
    choices: ['모두 대문자와 언더스코어', '소문자 camelCase', '상관없음', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '자바 관례상 상수는 대문자로 작성합니다.', output: 'PI', variables: {} },
    ],
  },
  {
    id: 'j_static_7',
    language: 'java',
    category: 'j_static',
    title: 'static 메서드에서 this 사용',
    questionText: '가능한가?',
    code: [
      'static void f() { System.out.println(this); }'
    ],
    choices: ['불가능 (에러)', '가능', 'None', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'this는 "현재 객체"를 의미하는데, static은 객체가 없을 때도 존재하므로 사용 불가합니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_static_8',
    language: 'java',
    category: 'j_static',
    title: '클래스 로딩 시점',
    questionText: 'static 멤버는 언제 생성되나?',
    code: [
      '// class Loading...'
    ],
    choices: ['JVM이 클래스를 처음 읽어들일 때', 'new 할 때', '프로그램 종료 시', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '인스턴스 생성보다 훨씬 앞선 시점에 Method Area에 할당됩니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_static_9',
    language: 'java',
    category: 'j_static',
    title: 'main 메서드가 static인 이유',
    questionText: '이유는?',
    code: [
      'public static void main'
    ],
    choices: ['객체 생성 없이 JVM이 호출해야 하므로', '속도가 빨라서', '보안 때문', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '진입점 역할이므로 인스턴스화 과정 없이 즉시 실행되어야 합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_static_10',
    language: 'java',
    category: 'j_static',
    title: 'static 변수의 초기값',
    questionText: 'int형 static 변수 초기화를 안 하면?',
    code: [
      'static int a;'
    ],
    choices: ['0', '쓰레기값', 'Error', 'Null'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '멤버 변수(static 포함)는 타입별 기본값으로 자동 초기화됩니다.', output: '0', variables: {} },
    ],
  },

  // 7. 예외처리 (j_exception) - 10 questions
  {
    id: 'j_exception_1',
    language: 'java',
    category: 'j_exception',
    title: 'try-catch-finally 흐름',
    questionText: '다음 코드의 출력 결과는?',
    code: [
      'try {',
      '    int x = 10 / 0;',
      '} catch(Exception e) {',
      '    System.out.print("E");',
      '} finally {',
      '    System.out.print("F");',
      '}'
    ],
    choices: ['EF', 'E', 'F', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '0으로 나우어 예외가 발생합니다.', output: '', variables: {} },
      { codeLine: 3, desc: 'catch 블록이 실행됩니다.', output: 'E', variables: {} },
      { codeLine: 5, desc: 'finally 블록은 예외 여부와 상관없이 무조건 실행됩니다.', output: 'EF', variables: {} },
    ],
  },
  {
    id: 'j_exception_2',
    language: 'java',
    category: 'j_exception',
    title: 'NullPointerException 발생',
    questionText: '언제 발생하는가?',
    code: [
      'String s = null;',
      'System.out.print(s.length());'
    ],
    choices: ['객체 참조가 없는 변수를 사용할 때', '배열 범위 초과', '0으로 나눌 때', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '실제 연결된 인스턴스가 없는데 멤버에 접근하려 할 때 발생합니다.', output: 'NPE', variables: {} },
    ],
  },
  {
    id: 'j_exception_3',
    language: 'java',
    category: 'j_exception',
    title: '예외 던지기 (throws)',
    questionText: '의미는?',
    code: [
      'void show() throws Exception { ... }'
    ],
    choices: ['예외를 호출한 쪽으로 넘긴다', '직접 처리한다', '무시한다', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '메서드 내부에서 처리하지 않고 호출부에게 책임을 전가합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_exception_4',
    language: 'java',
    category: 'j_exception',
    title: 'Checked vs Unchecked',
    questionText: 'RuntimeException을 상속받은 예외는?',
    code: [
      '// ArithmeticException, NPE...'
    ],
    choices: ['Unchecked (컴파일러가 강제 안함)', 'Checked (반드시 try 필요)', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '실행 중에 판단되는 예외들로 명시적 처리가 선택적입니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_exception_5',
    language: 'java',
    category: 'j_exception',
    title: '강제 예외 발생 (throw)',
    questionText: '결과는?',
    code: [
      'throw new RuntimeException("MSG");'
    ],
    choices: ['즉시 예외가 발생함', '넘김', '정상 종료', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '사용자가 의도적으로 에러를 일으킬 때 사용합니다.', output: 'RuntimeException', variables: {} },
    ],
  },
  {
    id: 'j_exception_6',
    language: 'java',
    category: 'j_exception',
    title: '다중 catch 순서',
    questionText: '올바른 순서는?',
    code: [
      'catch(ChildException e) { ... }',
      'catch(ParentException e) { ... }'
    ],
    choices: ['작은 예외(자식)부터 잡아야 한다', '큰 예외부터 잡아야 한다', '상관없다', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '부모 예외가 위에 있으면 자식 예외까지 다 가로채므로 의미가 없어집니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_exception_7',
    language: 'java',
    category: 'j_exception',
    title: 'finally 와 return 함정',
    questionText: '최종 리턴값은?',
    code: [
      'int f() {',
      '    try { return 1; }',
      '    finally { return 2; }',
      '}'
    ],
    choices: ['2', '1', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'finally 블록 안의 return이 try/catch의 리턴을 덮어써 버립니다 (권장되지 않음).', output: '2', variables: {} },
    ],
  },
  {
    id: 'j_exception_8',
    language: 'java',
    category: 'j_exception',
    title: 'ArrayIndexOutOfBoundsException',
    questionText: '언제 발생하나?',
    code: [
      'int[] a = {1, 2};',
      'print(a[2]);'
    ],
    choices: ['인덱스 범위를 벗어난 접근', 'null 접근', '형변환 실패', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '배열 크기가 2인 경우 인덱스는 0, 1만 유효합니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_exception_9',
    language: 'java',
    category: 'j_exception',
    title: 'try-with-resources',
    questionText: '목적은?',
    code: [
      'try(Reader r = ...) { ... }'
    ],
    choices: ['리소스(파일 등)를 자동 반납(close)함', '속도 향상', '보안', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'AutoCloseable 인터페이스 구현체를 자동으로 닫아줍니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_exception_10',
    language: 'java',
    category: 'j_exception',
    title: '커스텀 예외 클래스 만들기',
    questionText: '상속해야 할 클래스는?',
    code: [
      'class MyE extends Exception { ... }'
    ],
    choices: ['Exception 또는 RuntimeException', 'Object', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '예외 타입을 확장하여 비즈니스에 특화된 에러를 만듭니다.', output: '', variables: {} },
    ],
  },

  // 8. 추상 클래스 / Interface (j_abstract) - 10 questions
  {
    id: 'j_abstract_1',
    language: 'java',
    category: 'j_abstract',
    title: '추상 클래스 인스턴스화',
    questionText: '실행 가능한 코드는?',
    code: [
      'abstract class A {}',
      'A a = new A();'
    ],
    choices: ['에러 발생 (인스턴스화 불가)', '정상 실행', '경고', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '추상 클래스는 미완성 상태이므로 직접 객체를 만들 수 없습니다.', output: 'Error', variables: {} },
    ],
  },
  {
    id: 'j_abstract_2',
    language: 'java',
    category: 'j_abstract',
    title: '인터페이스(Interface)의 필드 특징',
    questionText: '인터페이스 내 int x = 10; 의 실제 성격은?',
    code: [
      'interface I { int x = 10; }'
    ],
    choices: ['public static final 상수', '일반 변수', 'private 변수', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '인터페이스의 모든 필드는 상수로 간주됩니다.', output: 'Public Static Final', variables: {} },
    ],
  },
  {
    id: 'j_abstract_3',
    language: 'java',
    category: 'j_abstract',
    title: '인터페이스 다중 구현',
    questionText: '가능한가?',
    code: [
      'class T implements A, B { ... }'
    ],
    choices: ['가능하다', '불가능하다', '추상 클래스만 가능하다', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '클래스 상속은 1개만 가능하지만 인터페이스 구현은 여러 개가 가능합니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_abstract_4',
    language: 'java',
    category: 'j_abstract',
    title: 'Default 메서드 (자바 8+)',
    questionText: '인터페이스 내 내용이 있는 메서드?',
    code: [
      'interface I { default void f() { ... } }'
    ],
    choices: ['가능 (인터페이스에도 구현 코드를 넣을 수 있음)', '불가능', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '기존 구현체들에 영향을 주지 않고 새로운 기능을 추가하기 위해 도입되었습니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_abstract_5',
    language: 'java',
    category: 'j_abstract',
    title: '익명 구현 클래스',
    questionText: '결과는?',
    code: [
      'interface I { void f(); }',
      'I i = new I() { public void f() { System.out.print("H"); } };',
      'i.f();'
    ],
    choices: ['H', 'Error', 'None', 'I'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 1, desc: '일회용 구현체를 즉석에서 만들어 사용합니다.', output: 'H', variables: {} },
    ],
  },
  {
    id: 'j_abstract_6',
    language: 'java',
    category: 'j_abstract',
    title: '추상 클래스 vs 인터페이스',
    questionText: '공통점은?',
    code: [
      '// A & I'
    ],
    choices: ['추상 메서드를 가질 수 있고 직접 인스턴스화 불가함', '필드 성격 동일', '다중 상속 동일', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '둘 다 객체 설계의 틀을 제공하는 용도입니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_abstract_7',
    language: 'java',
    category: 'j_abstract',
    title: '인터페이스 상속',
    questionText: '결과는?',
    code: [
      'interface A {}',
      'interface B extends A {}'
    ],
    choices: ['가능 (인터페이스끼리 상속 가능)', '불가능 (implements 만 가능)', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '인터페이스끼리는 extends 키워드를 사용하여 기능을 확장할 수 있습니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_abstract_8',
    language: 'java',
    category: 'j_abstract',
    title: 'static 메서드 in Interface',
    questionText: '자바 8 이후 가능한가?',
    code: [
      'interface I { static void f() {} }'
    ],
    choices: ['가능하다', '불가능하다', '에러', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '헬퍼 메서드 용도로 사용할 수 있습니다.', output: 'OK', variables: {} },
    ],
  },
  {
    id: 'j_abstract_9',
    language: 'java',
    category: 'j_abstract',
    title: '다중 구현 시 메서드 충돌',
    questionText: '동일 이름의 default 메서드가 있는 두 인터페이스 구현 시?',
    code: [
      'class T implements A, B { ... }'
    ],
    choices: ['반드시 클래스에서 직접 오버라이딩해야 함', 'A것 선택됨', '에러 나고 끝남', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '모호함을 없애기 위해 사용자가 직접 선택(재정의)하도록 강제합니다.', output: 'Error if not overridden', variables: {} },
    ],
  },
  {
    id: 'j_abstract_10',
    language: 'java',
    category: 'j_abstract',
    title: '실제 기출 (Abstract 클래스 구조)',
    questionText: '출력 결과는?',
    code: [
      'abstract class Shape { abstract void draw(); }',
      'class Circle extends Shape { void draw() { System.out.print("O"); } }',
      'Shape s = new Circle(); s.draw();'
    ],
    choices: ['O', 'Shape', 'Circle', 'None'],
    correctAnswer: 0,
    visualizer: 'object',
    steps: [
      { codeLine: 2, desc: '추상 클래스 타입으로 자식 객체를 다루는 전형적 다형성.', output: 'O', variables: {} },
    ],
  },

  // 9. 람다식 및 모던 문법 (j_lambda) - 10 questions
  {
    id: 'j_lambda_1',
    language: 'java',
    category: 'j_lambda',
    title: '함수형 인터페이스 (Functional Interface)',
    questionText: '어노테이션은?',
    code: [
      '@FunctionalInterface',
      'interface My { void f(); }'
    ],
    choices: ['단 하나의 추상 메서드만 가져야 함', '메서드 개수 상관없음', 'static 만 가능', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '람다식으로 연동하기 위한 엄격한 제약 조건을 확인합니다.', output: 'Single Abstract Method', variables: {} },
    ],
  },
  {
    id: 'j_lambda_2',
    language: 'java',
    category: 'j_lambda',
    title: '기본 람다 표현식',
    questionText: '결과는?',
    code: [
      'My f = (a, b) -> a + b;',
      'System.out.println(f.sum(1, 2));'
    ],
    choices: ['3', '12', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '코드를 간결하게 표현하는 익명 함수 방식입니다.', output: '3', variables: {} },
    ],
  },
  {
    id: 'j_lambda_3',
    language: 'java',
    category: 'j_lambda',
    title: '리스트 순회 (forEach)',
    questionText: '결과는?',
    code: [
      'List<String> l = Arrays.asList("A", "B");',
      'l.forEach(s -> System.out.print(s));'
    ],
    choices: ['AB', 'A, B', 'A\nB', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '리스트의 각 요소를 하나씩 전달하며 람다를 적용합니다.', output: 'AB', variables: {} },
    ],
  },
  {
    id: 'j_lambda_4',
    language: 'java',
    category: 'j_lambda',
    title: '메서드 참조 (::)',
    questionText: '똑같은 의미는?',
    code: [
      'System.out::println'
    ],
    choices: ['(x) -> System.out.println(x)', 'new PrintStream()', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '기존에 정의된 메서드를 람다식 대신 그대로 사용합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_lambda_5',
    language: 'java',
    category: 'j_lambda',
    title: '내보내기 타입 (Predicate)',
    questionText: '어떤 결과를 반환하나?',
    code: [
      'Predicate<Integer> p = (x) -> x > 0;'
    ],
    choices: ['boolean (True/False)', 'int', 'String', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '조건을 검사하여 논리값을 반환하는 표준 함수형 인터페이스입니다.', output: 'boolean', variables: {} },
    ],
  },
  {
    id: 'j_lambda_6',
    language: 'java',
    category: 'j_lambda',
    title: '람다 내의 지역 변수 접근',
    questionText: '조건은?',
    code: [
      'int n = 10;',
      'Runnable r = () -> System.out.print(n);'
    ],
    choices: ['n이 final이거나 실질적 final이어야 함', '제한 없음', 'private 이어야 함', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '바깥 변수가 수정되면 람다의 일관성이 깨지므로 수정을 금지합니다.', output: 'Effectively Final', variables: {} },
    ],
  },
  {
    id: 'j_lambda_7',
    language: 'java',
    category: 'j_lambda',
    title: 'Stream filter() 활용',
    questionText: '개수는?',
    code: [
      'list.stream().filter(x -> x > 5).count();'
    ],
    choices: ['5보다 큰 요소의 개수', '전체 개수', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '함수형 언어 스타일로 데이터를 필터링합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_lambda_8',
    language: 'java',
    category: 'j_lambda',
    title: 'Optional (Java 8+)',
    questionText: '목적은?',
    code: [
      'Optional.ofNullable(obj).orElse("Default");'
    ],
    choices: ['NullPointerException을 방지하고 코드 가독성 증대', '속도 향상', '동기화', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '값이 있을 수도, 없을 수도 있음을 타입으로 명시합니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_lambda_9',
    language: 'java',
    category: 'j_lambda',
    title: 'Consumer 인터페이스',
    questionText: '반환값은?',
    code: [
      'Consumer<String> c = (s) -> System.out.print(s);'
    ],
    choices: ['void (반환 없음)', 'String', 'boolean', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '데이터를 받아서 소비만 하고 결과를 주지 않습니다.', output: 'void', variables: {} },
    ],
  },
  {
    id: 'j_lambda_10',
    language: 'java',
    category: 'j_lambda',
    title: 'Comparator 람다',
    questionText: '정렬 기준은?',
    code: [
      'list.sort((a, b) -> b.compareTo(a));'
    ],
    choices: ['내림차순 (DESC)', '오름차순 (ASC)', '랜덤', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '비교 로직을 람다로 전달하여 정렬 순서를 바꿉니다.', output: 'Descending', variables: {} },
    ],
  },

  // 10. 문자열 메서드 (j_string) - 10 questions
  {
    id: 'j_string_1',
    language: 'java',
    category: 'j_string',
    title: 'String 주소 비교 (==)',
    questionText: '다음 코드의 결과는?',
    code: [
      'String s1 = "HI";',
      'String s2 = "HI";',
      'String s3 = new String("HI");',
      'System.out.print((s1 == s2) + " " + (s1 == s3));'
    ],
    choices: ['true false', 'true true', 'false false', 'false true'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: '리터럴은 내부적으로 String Pool에서 공유됩니다. s1 == s2는 true.', output: '', variables: {} },
      { codeLine: 3, desc: 'new는 새로운 힙 객체를 만듭니다. s1 == s3는 false.', output: 'true false', variables: {} },
    ],
  },
  {
    id: 'j_string_2',
    language: 'java',
    category: 'j_string',
    title: '내용 비교 (equals)',
    questionText: '결과는?',
    code: [
      'String s1 = "HI";',
      'String s2 = new String("HI");',
      'System.out.print(s1.equals(s2));'
    ],
    choices: ['true', 'false', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 2, desc: 'equals는 주소가 아닌 실제 문자열 시퀀스를 비교합니다.', output: 'true', variables: {} },
    ],
  },
  {
    id: 'j_string_3',
    language: 'java',
    category: 'j_string',
    title: 'substring() 인덱스 범위',
    questionText: '"ABCDE".substring(1, 3) 의 결과는?',
    code: [
      'String s = "ABCDE";',
      'System.out.print(s.substring(1, 3));'
    ],
    choices: ['BC', 'BCD', 'ABC', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'index 1부터 3전(2)까지인 "BC"가 반환됩니다.', output: 'BC', variables: {} },
    ],
  },
  {
    id: 'j_string_4',
    language: 'java',
    category: 'j_string',
    title: '문자열 결합과 성능 (StringBuilder)',
    questionText: '반복문 내에서 + 연산 대신 쓰는 것은?',
    code: [
      'StringBuilder sb = new StringBuilder();',
      'for(...) sb.append("A");'
    ],
    choices: ['StringBuilder / StringBuffer', 'String', 'Array', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: 'String은 불변(Immutable) 객체라 +마다 새로 만드느라 느립니다. 가변 버퍼를 씁니다.', output: '', variables: {} },
    ],
  },
  {
    id: 'j_string_5',
    language: 'java',
    category: 'j_string',
    title: 'indexOf() 메서드',
    questionText: '없는 문자를 찾으면?',
    code: [
      'System.out.print("ABC".indexOf("Z"));'
    ],
    choices: ['-1', '0', 'Error', 'null'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '위치를 발견하지 못하면 -1을 리턴합니다.', output: '-1', variables: {} },
    ],
  },
  {
    id: 'j_string_6',
    language: 'java',
    category: 'j_string',
    title: 'charAt() 인덱스',
    questionText: '"JAVA".charAt(0) 의 결과는?',
    code: [
      'System.out.print("JAVA".charAt(0));'
    ],
    choices: ['J', 'V', 'A', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '0번째 문자인 J를 반환합니다.', output: 'J', variables: {} },
    ],
  },
  {
    id: 'j_string_7',
    language: 'java',
    category: 'j_string',
    title: '문자열 분리 (split)',
    questionText: '리턴 타입은?',
    code: [
      'String[] res = "A:B".split(":");'
    ],
    choices: ['String 배열 (String[])', 'List', 'char 배열', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '구분자로 나누어 배열로 리턴합니다.', output: "['A', 'B']", variables: {} },
    ],
  },
  {
    id: 'j_string_8',
    language: 'java',
    category: 'j_string',
    title: 'trim() 메서드',
    questionText: '결과는?',
    code: [
      'System.out.print(" hi ".trim().length());'
    ],
    choices: ['2', '4', '0', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '앞뒤 공백을 제거한 "hi"의 길이는 2입니다.', output: '2', variables: {} },
    ],
  },
  {
    id: 'j_string_9',
    language: 'java',
    category: 'j_string',
    title: '상태 불변성 (Immutability)',
    questionText: '결과는?',
    code: [
      'String s = "A";',
      's.concat("B");',
      'System.out.print(s);'
    ],
    choices: ['A', 'AB', 'B', 'Error'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 1, desc: 'concat은 새 문자열을 리턴할 뿐, s 자체를 바꾸지 못합니다.', output: 'A', variables: {} },
    ],
  },
  {
    id: 'j_string_10',
    language: 'java',
    category: 'j_string',
    title: '형변환 (valueOf)',
    questionText: '숫자를 문자열로 바꿀 때?',
    code: [
      'String s = String.valueOf(10);'
    ],
    choices: ['"10"', '10', 'Error', 'None'],
    correctAnswer: 0,
    visualizer: 'variable',
    steps: [
      { codeLine: 0, desc: '다양한 타입을 문자열 객체로 변환해줍니다.', output: '"10"', variables: {} },
    ],
  },
];
