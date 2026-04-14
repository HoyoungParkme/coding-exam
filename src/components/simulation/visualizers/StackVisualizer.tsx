import type { Step } from '@/data/types';

interface Props {
  step: Step;
}

export function StackVisualizer({ step }: Props) {
  const stack = step.callStack ?? [];

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 h-full">
      <div className="text-[0.75rem] font-bold" style={{ color: 'var(--text-muted)' }}>
        Call Stack
      </div>

      <div className="flex flex-col-reverse gap-1.5 w-full max-w-xs">
        {stack.map((frame, idx) => {
          const isTop = idx === stack.length - 1;
          const hasReturnVal = frame.includes('→');

          return (
            <div
              key={idx}
              className={`px-4 py-3 rounded-lg border-2 font-mono text-[0.82rem] font-semibold text-center transition-all duration-500 ${
                isTop ? 'scale-105 shadow-lg' : ''
              }`}
              style={{
                borderColor: isTop
                  ? hasReturnVal ? 'var(--success)' : 'var(--accent)'
                  : 'var(--border)',
                background: isTop
                  ? hasReturnVal ? 'var(--success-light)' : 'var(--accent-light)'
                  : 'var(--card)',
                color: isTop
                  ? hasReturnVal ? 'var(--success)' : 'var(--accent)'
                  : 'var(--text-secondary)',
              }}
            >
              {isTop && (
                <span className="text-[0.6rem] block mb-0.5 font-sans uppercase tracking-wider opacity-70">
                  ▼ TOP
                </span>
              )}
              {frame}
            </div>
          );
        })}
      </div>

      {stack.length === 0 && (
        <div className="text-[0.82rem] font-semibold italic" style={{ color: 'var(--text-muted)' }}>
          스택이 비어 있습니다
        </div>
      )}
    </div>
  );
}
