import type { Language } from '@/data/types';

// ─── 언어별 키워드/빌트인 정의 ───
const KEYWORDS: Record<Language, Set<string>> = {
  c: new Set(['int', 'char', 'float', 'double', 'void', 'return', 'if', 'else', 'for', 'while', 'struct', 'typedef', '#include', '#define', 'sizeof', 'const', 'static', 'unsigned']),
  python: new Set(['def', 'class', 'if', 'elif', 'else', 'for', 'in', 'while', 'return', 'import', 'from', 'try', 'except', 'finally', 'raise', 'with', 'as', 'not', 'and', 'or', 'lambda', 'pass', 'break', 'continue', 'yield', 'global', 'nonlocal', 'abstract', 'extends', 'implements']),
  java: new Set(['class', 'public', 'private', 'protected', 'static', 'void', 'int', 'double', 'float', 'String', 'boolean', 'char', 'new', 'return', 'if', 'else', 'for', 'while', 'try', 'catch', 'finally', 'throw', 'throws', 'extends', 'implements', 'abstract', 'interface', 'import', 'override', 'super', 'this']),
};

const BUILTINS: Record<Language, Set<string>> = {
  c: new Set(['printf', 'scanf', 'main', 'malloc', 'free', 'strlen', 'strcpy', 'strcmp', 'sizeof', 'stdio.h', 'stdlib.h', 'string.h']),
  python: new Set(['print', 'range', 'len', 'int', 'str', 'float', 'list', 'dict', 'set', 'tuple', 'map', 'filter', 'input', 'type', 'super', 'sorted', 'enumerate', 'zip', 'sum', 'max', 'min', 'abs', 'round', 'open', 'True', 'False', 'None', 'self']),
  java: new Set(['System', 'out', 'print', 'println', 'main', 'Math', 'Integer', 'ArrayList', 'HashMap', 'Arrays', 'Collections', 'add', 'remove', 'get', 'size', 'toString']),
};

interface Props {
  line: string;
  language: Language;
}

export function SyntaxHighlighter({ line, language }: Props) {
  const commentIdx = line.indexOf('//');
  let codePart = line;
  let commentPart = '';

  if (commentIdx !== -1) {
    codePart = line.slice(0, commentIdx);
    commentPart = line.slice(commentIdx);
  }

  // 주석만 있는 줄
  if (!codePart.trim() && commentPart) {
    return <span className="text-slate-500 italic">{commentPart}</span>;
  }

  // Python의 # 주석도 처리
  if (language === 'python') {
    const hashIdx = codePart.indexOf('#');
    if (hashIdx !== -1) {
      commentPart = codePart.slice(hashIdx) + commentPart;
      codePart = codePart.slice(0, hashIdx);
    }
  }

  const tokens = codePart.split(/(\s+|\[|\]|\(|\)|:|,|==|!=|<=|>=|=|\+\+|--|\+=|-=|\*=|\/=|%=|\+|-|\*|\/|%|<|>|;|\.|{|}|&|\||!|\^|~|<<|>>|->)/g);

  const keywords = KEYWORDS[language];
  const builtins = BUILTINS[language];

  const highlighted = tokens.map((token, i) => {
    if (keywords.has(token)) {
      return <span key={i} className="text-pink-400 font-semibold">{token}</span>;
    }
    if (builtins.has(token)) {
      return <span key={i} className="text-cyan-400">{token}</span>;
    }
    // 숫자
    if (/^\d+(\.\d+)?$/.test(token)) {
      return <span key={i} className="text-orange-300">{token}</span>;
    }
    // 문자열
    if (/^["'].*["']$/.test(token)) {
      return <span key={i} className="text-emerald-400">{token}</span>;
    }
    // 연산자
    if (['=', '+', '-', '*', '/', '%', '<', '>', '==', '!=', '<=', '>=', '++', '--', '+=', '-=', '&', '|', '^', '~', ';', '.', '->', '!'].includes(token)) {
      return <span key={i} className="text-pink-400">{token}</span>;
    }
    return <span key={i} className="text-slate-200">{token}</span>;
  });

  return (
    <>
      {highlighted}
      {commentPart && <span className="text-slate-500 italic">{commentPart}</span>}
    </>
  );
}
