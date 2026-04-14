import { SyntaxHighlighter } from '@/components/common/SyntaxHighlighter';
import type { Language } from '@/data/types';
import { useRef, useEffect } from 'react';

interface Props {
  code: string[];
  language: Language;
  activeLine: number;
}

export function CodeViewer({ code, language, activeLine }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 활성 라인이 바뀌면 부드럽게 스크롤 (코드가 길 때만)
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current.querySelector('[data-active="true"]');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeLine]);

  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden border" style={{ borderColor: '#334155' }}>
      {/* 타이틀 바 */}
      <div className="px-4 py-2.5 flex items-center gap-2 border-b" style={{ background: '#1e293b', borderColor: '#334155' }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <span className="text-[0.68rem] text-slate-500 font-mono ml-2 uppercase">{language} code</span>
      </div>

      {/* 코드 본문 */}
      <div
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto overflow-x-auto text-sm font-mono text-slate-300"
        style={{ background: '#0f172a', scrollBehavior: 'smooth' }}
      >
        {code.map((line, idx) => {
          const isActive = activeLine === idx;
          return (
            <div
              key={idx}
              data-active={isActive ? 'true' : 'false'}
              className={`flex items-start rounded transition-colors duration-300 ${
                isActive
                  ? 'code-line-active text-white font-semibold'
                  : 'border-l-[3px] border-transparent'
              }`}
              style={{ padding: '2px 8px' }}
            >
              {/* 줄 번호 */}
              <span
                className="inline-block w-8 text-right mr-4 select-none flex-shrink-0 text-[0.75rem]"
                style={{ color: isActive ? 'var(--accent)' : '#475569' }}
              >
                {idx + 1}
              </span>
              <span style={{ whiteSpace: 'pre' }}>
                {line ? <SyntaxHighlighter line={line} language={language} /> : ' '}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
