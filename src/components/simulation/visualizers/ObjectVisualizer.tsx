import type { Step } from '@/data/types';

interface Props {
  step: Step;
}

export function ObjectVisualizer({ step }: Props) {
  const staticVars = step.staticVars;
  const heapObjects = step.heapObjects ?? [];

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full py-4">
      {/* Static 영역 (있을 때만) */}
      {staticVars && (
        <div className="flex-1 border-2 rounded-xl p-4 flex flex-col relative overflow-hidden"
          style={{ borderColor: '#6ee7b7', background: 'var(--card)' }}
        >
          <div className="absolute top-0 left-0 px-3 py-1 rounded-br-lg text-[0.65rem] font-bold text-white"
            style={{ background: '#10b981' }}
          >
            Static Area
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-3 mt-6">
            {Object.entries(staticVars).map(([key, val]) => (
              <div
                key={key}
                className="px-6 py-4 rounded-lg border-2 flex flex-col items-center transition-all duration-500"
                style={{
                  borderColor: step.highlightObj ? 'var(--success)' : 'var(--border)',
                  background: step.highlightObj ? 'var(--success-light)' : 'var(--bg-secondary)',
                }}
              >
                <span className="text-[0.7rem] font-mono mb-1" style={{ color: 'var(--text-muted)' }}>
                  {key}
                </span>
                <span className="text-2xl font-black" style={{ color: 'var(--success)' }}>
                  {String(val)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Heap 영역 */}
      <div className="flex-1 border-2 rounded-xl p-4 flex flex-col relative overflow-hidden"
        style={{ borderColor: '#93c5fd', background: 'var(--card)' }}
      >
        <div className="absolute top-0 left-0 px-3 py-1 rounded-br-lg text-[0.65rem] font-bold text-white"
          style={{ background: '#3b82f6' }}
        >
          Heap Area (객체)
        </div>

        <div className="flex-1 flex flex-col justify-center gap-3 mt-6">
          {heapObjects.map((obj, idx) => {
            const isHighlighted = step.highlightObj === obj.name;
            return (
              <div
                key={idx}
                className={`p-3 rounded-lg border-2 transition-all duration-500 ${
                  isHighlighted ? 'shadow-md scale-[1.02]' : ''
                }`}
                style={{
                  borderColor: isHighlighted ? 'var(--accent)' : 'var(--border)',
                  background: isHighlighted ? 'var(--accent-light)' : 'var(--bg-secondary)',
                }}
              >
                {/* 객체 이름 */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[0.68rem] font-bold text-white"
                    style={{ background: 'var(--accent)' }}
                  >
                    {obj.name}
                  </span>
                </div>
                {/* 필드 */}
                {Object.keys(obj.fields).length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(obj.fields).map(([k, v]) => (
                      <div
                        key={k}
                        className="px-2 py-1 rounded text-[0.72rem] font-mono"
                        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                      >
                        <span style={{ color: 'var(--text-muted)' }}>{k}:</span>{' '}
                        <span className="font-semibold" style={{ color: 'var(--text)' }}>{String(v)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {heapObjects.length === 0 && (
            <div className="text-center text-[0.8rem] italic py-4" style={{ color: 'var(--text-muted)' }}>
              아직 생성된 객체가 없습니다
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
