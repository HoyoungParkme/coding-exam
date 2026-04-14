import type { Step } from '@/data/types';

interface Props {
  step: Step;
}

export function MemoryVisualizer({ step }: Props) {
  const memory = step.memory ?? [];
  const labels = step.memoryLabels ?? memory.map((_, i) => `[${i}]`);
  const baseAddr = 100;

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-4">
      {/* 배열 라벨 */}
      <div className="text-[0.75rem] font-bold" style={{ color: 'var(--text-muted)' }}>
        Memory Layout
      </div>

      {/* 메모리 셀 */}
      <div className="flex gap-1 flex-wrap justify-center">
        {memory.map((val, idx) => {
          const isActive = step.activeIdx === idx;
          const isPointed = step.pointerIdx === idx;
          const isEmpty = val === null;

          return (
            <div key={idx} className="flex flex-col items-center">
              {/* 레이블 */}
              <div className="text-[0.65rem] mb-1 font-mono" style={{ color: 'var(--text-muted)' }}>
                {labels[idx]}
              </div>
              {/* 셀 */}
              <div
                className={`w-16 h-14 flex items-center justify-center text-lg font-bold font-mono border-2 rounded-lg transition-all duration-500 ${
                  isActive
                    ? 'scale-110 shadow-lg z-10'
                    : isEmpty
                    ? 'opacity-40'
                    : ''
                }`}
                style={{
                  borderColor: isActive ? 'var(--accent)' : isPointed ? 'var(--warning)' : 'var(--border)',
                  background: isActive ? 'var(--accent-light)' : isEmpty ? 'var(--bg-secondary)' : 'var(--card)',
                  color: isActive ? 'var(--accent)' : isEmpty ? 'var(--text-muted)' : 'var(--text)',
                }}
              >
                {isEmpty ? '×' : String(val)}
              </div>
              {/* 주소 */}
              <div
                className="text-[0.6rem] mt-1 px-1.5 py-0.5 rounded font-mono"
                style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
              >
                {baseAddr + idx * 4}
              </div>
            </div>
          );
        })}
      </div>

      {/* 포인터 표시 */}
      {step.pointerIdx !== null && step.pointerIdx !== undefined && (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="w-0.5 h-5" style={{ background: 'var(--accent)' }} />
          <div
            className="w-0 h-0 -mt-1"
            style={{
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '8px solid var(--accent)',
              transform: 'rotate(180deg)',
            }}
          />
          <span
            className="mt-1 px-3 py-1 rounded-full text-[0.72rem] font-bold text-white shadow"
            style={{ background: 'var(--accent)' }}
          >
            포인터 p → [{step.pointerIdx}]
          </span>
        </div>
      )}
    </div>
  );
}
