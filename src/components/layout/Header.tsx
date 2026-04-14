import { useStore } from '@/store/useStore';

export function Header() {
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const setSidebarOpen = useStore((s) => s.setSidebarOpen);

  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-md"
      style={{
        background: theme === 'dark' ? 'rgba(15,23,42,0.85)' : 'rgba(248,250,252,0.85)',
        borderColor: 'var(--border)',
      }}
    >
      <div className="flex items-center justify-between px-5 py-3 max-w-screen-2xl mx-auto">
        {/* 왼쪽: 모바일 메뉴 + 타이틀 */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="메뉴 열기"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-sm">
              <span className="text-white text-xs font-bold">&lt;/&gt;</span>
            </div>
            <div>
              <h1 className="text-[0.95rem] font-bold leading-tight" style={{ color: 'var(--text)' }}>
                정처기 실기 코딩 트레이너
              </h1>
              <p className="text-[0.7rem] leading-tight" style={{ color: 'var(--text-muted)' }}>
                인터랙티브 코드 실행 추적
              </p>
            </div>
          </div>
        </div>

        {/* 오른쪽: 다크모드 토글 */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition"
          style={{
            background: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
          }}
          aria-label="다크모드 토글"
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
