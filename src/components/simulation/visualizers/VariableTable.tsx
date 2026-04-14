import type { Step } from '@/data/types';

interface Props {
  step: Step;
}

export function VariableTable({ step }: Props) {
  const vars = step.variables ?? {};
  const entries = Object.entries(vars);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 h-full">
      <div className="text-[0.75rem] font-bold" style={{ color: 'var(--text-muted)' }}>
        변수 상태
      </div>

      {entries.length > 0 ? (
        <div className="w-full max-w-md rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
          <table className="w-full text-[0.82rem]">
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                <th className="px-4 py-2.5 text-left font-semibold" style={{ color: 'var(--text-muted)' }}>
                  변수명
                </th>
                <th className="px-4 py-2.5 text-left font-semibold" style={{ color: 'var(--text-muted)' }}>
                  값
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map(([key, val], idx) => (
                <tr
                  key={key}
                  className="transition-all duration-300 animate-fade-in"
                  style={{
                    background: idx % 2 === 0 ? 'var(--card)' : 'var(--bg-secondary)',
                    animationDelay: `${idx * 0.05}s`,
                  }}
                >
                  <td className="px-4 py-2.5 font-mono font-semibold" style={{ color: 'var(--accent)' }}>
                    {key}
                  </td>
                  <td className="px-4 py-2.5 font-mono" style={{ color: 'var(--text)' }}>
                    {String(val)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-[0.82rem] italic" style={{ color: 'var(--text-muted)' }}>
          표시할 변수가 없습니다
        </div>
      )}
    </div>
  );
}
