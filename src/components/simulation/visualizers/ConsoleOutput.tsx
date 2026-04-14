interface Props {
  output: string;
}

export function ConsoleOutput({ output }: Props) {
  return (
    <div className="rounded-lg overflow-hidden border shadow-inner" style={{ borderColor: '#334155' }}>
      <div
        className="px-3 py-1.5 flex items-center gap-2 border-b text-[0.65rem] font-mono"
        style={{ background: '#1e293b', borderColor: '#334155', color: '#64748b' }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
        Console Output
      </div>
      <div
        className="p-3 font-mono text-[0.85rem] min-h-[48px] whitespace-pre-wrap"
        style={{ background: '#0f172a', color: '#34d399' }}
      >
        {output ? output : <span style={{ color: '#475569' }}>&gt; _</span>}
      </div>
    </div>
  );
}
