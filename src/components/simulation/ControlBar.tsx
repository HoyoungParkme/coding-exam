interface Props {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  isEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  onTogglePlay: () => void;
  onReset: () => void;
}

export function ControlBar({ currentStep, totalSteps, isPlaying, isEnd, onPrev, onNext, onTogglePlay, onReset }: Props) {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl border"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <div className="flex items-center gap-2">
        {/* 이전 */}
        <button
          onClick={onPrev}
          disabled={currentStep === 0}
          className="p-2.5 rounded-lg transition disabled:opacity-30"
          style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 20L9 12l10-8v16z" /><line x1="5" y1="19" x2="5" y2="5" />
          </svg>
        </button>

        {/* 재생/정지 */}
        <button
          onClick={onTogglePlay}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-[0.82rem] transition shadow-sm"
          style={{ background: 'var(--accent)', minWidth: '120px', justifyContent: 'center' }}
        >
          {isPlaying ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" />
              </svg>
              일시정지
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              {isEnd ? '처음부터' : '자동 실행'}
            </>
          )}
        </button>

        {/* 다음 */}
        <button
          onClick={onNext}
          disabled={isEnd}
          className="p-2.5 rounded-lg transition disabled:opacity-30"
          style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 4l10 8-10 8V4z" /><line x1="19" y1="5" x2="19" y2="19" />
          </svg>
        </button>

        {/* 초기화 */}
        <button
          onClick={onReset}
          className="p-2.5 rounded-lg transition ml-1"
          style={{ color: 'var(--text-muted)' }}
          title="초기화"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
          </svg>
        </button>
      </div>

      {/* 진행 표시 */}
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                background: i <= currentStep ? 'var(--accent)' : 'var(--border)',
                transform: i === currentStep ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
        <span className="text-[0.75rem] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
          {currentStep + 1} / {totalSteps}
        </span>
      </div>
    </div>
  );
}
