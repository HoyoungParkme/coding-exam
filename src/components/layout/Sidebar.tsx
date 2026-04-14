import { useMemo } from 'react';
import { useStore, ALL_QUESTIONS } from '@/store/useStore';
import { CATEGORIES, LANGUAGE_INFO } from '@/data/types';
import type { Language } from '@/data/types';

const LANGS: Language[] = ['c', 'python', 'java'];

export function Sidebar() {
  const activeLanguage = useStore((s) => s.activeLanguage);
  const setActiveLanguage = useStore((s) => s.setActiveLanguage);
  const selectedQuestionId = useStore((s) => s.selectedQuestionId);
  const setSelectedQuestionId = useStore((s) => s.setSelectedQuestionId);
  const solvedQuestions = useStore((s) => s.solvedQuestions);
  const setSidebarOpen = useStore((s) => s.setSidebarOpen);

  // 현재 언어의 카테고리별 문제 그룹
  const grouped = useMemo(() => {
    const cats = CATEGORIES[activeLanguage];
    const questions = ALL_QUESTIONS.filter((q) => q.language === activeLanguage);
    return cats.map((cat) => ({
      ...cat,
      questions: questions.filter((q) => q.category === cat.id),
    }));
  }, [activeLanguage]);

  const totalQuestions = ALL_QUESTIONS.filter((q) => q.language === activeLanguage).length;
  const solvedCount = ALL_QUESTIONS.filter(
    (q) => q.language === activeLanguage && solvedQuestions.has(q.id)
  ).length;

  return (
    <aside
      className="w-72 h-full flex flex-col border-r overflow-hidden"
      style={{ background: 'var(--sidebar-bg)', borderColor: 'var(--border)' }}
    >
      {/* 언어 탭 */}
      <div className="flex p-2 gap-1 border-b" style={{ borderColor: 'var(--border)' }}>
        {LANGS.map((lang) => {
          const info = LANGUAGE_INFO[lang];
          const isActive = activeLanguage === lang;
          return (
            <button
              key={lang}
              onClick={() => { setActiveLanguage(lang); setSidebarOpen(false); }}
              className="flex-1 py-2 px-1 rounded-lg text-xs font-bold transition-all"
              style={{
                background: isActive ? info.color : 'transparent',
                color: isActive ? 'white' : 'var(--text-muted)',
                boxShadow: isActive ? `0 2px 8px ${info.color}40` : 'none',
              }}
            >
              {info.icon} {info.label}
            </button>
          );
        })}
      </div>

      {/* 진행률 */}
      <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[0.72rem] font-semibold" style={{ color: 'var(--text-muted)' }}>
            학습 진행률
          </span>
          <span className="text-[0.72rem] font-bold" style={{ color: 'var(--accent)' }}>
            {solvedCount}/{totalQuestions}
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${totalQuestions > 0 ? (solvedCount / totalQuestions) * 100 : 0}%`,
              background: LANGUAGE_INFO[activeLanguage].color,
            }}
          />
        </div>
      </div>

      {/* 카테고리 트리 */}
      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {grouped.map((cat) => (
          <div key={cat.id} className="mb-1">
            {/* 카테고리 헤더 */}
            <div
              className="text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1.5"
              style={{ color: 'var(--text-muted)' }}
            >
              {cat.name}
            </div>

            {/* 문제 리스트 */}
            {cat.questions.map((q) => {
              const isSolved = solvedQuestions.has(q.id);
              const isSelected = selectedQuestionId === q.id;
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedQuestionId(q.id);
                    setSidebarOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-[0.8rem] transition-all flex items-center gap-2 group mb-0.5"
                  style={{
                    background: isSelected ? 'var(--sidebar-active)' : 'transparent',
                    color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
                    fontWeight: isSelected ? 600 : 400,
                  }}
                >
                  {/* 풀이 완료 체크 */}
                  <span className="flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center text-[0.6rem]"
                    style={{
                      borderColor: isSolved ? 'var(--success)' : 'var(--border)',
                      background: isSolved ? 'var(--success)' : 'transparent',
                      color: isSolved ? 'white' : 'transparent',
                    }}
                  >
                    {isSolved ? '✓' : ''}
                  </span>
                  <span className="truncate">{q.title}</span>
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* 하단 정보 */}
      <div className="px-4 py-3 border-t text-center" style={{ borderColor: 'var(--border)' }}>
        <span className="text-[0.68rem]" style={{ color: 'var(--text-muted)' }}>
          정보처리기사 실기 대비 · 총 {ALL_QUESTIONS.length}문제
        </span>
      </div>
    </aside>
  );
}
