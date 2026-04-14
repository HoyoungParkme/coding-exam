import { useState, useMemo } from 'react';
import { useStore, ALL_QUESTIONS } from '@/store/useStore';
import { CATEGORIES, LANGUAGE_INFO } from '@/data/types';
import type { Language } from '@/data/types';
import { motion, AnimatePresence } from 'framer-motion';

const LANGS: Language[] = ['c', 'python', 'java'];

export function Sidebar() {
  const activeLanguage = useStore((s) => s.activeLanguage);
  const setActiveLanguage = useStore((s) => s.setActiveLanguage);
  const selectedQuestionId = useStore((s) => s.selectedQuestionId);
  const setSelectedQuestionId = useStore((s) => s.setSelectedQuestionId);
  const viewMode = useStore((s) => s.viewMode);
  const setViewMode = useStore((s) => s.setViewMode);
  const solvedQuestions = useStore((s) => s.solvedQuestions);
  const setSidebarOpen = useStore((s) => s.setSidebarOpen);

  // 열려있는 카테고리 상태 관리 (초기에는 모두 닫힘)
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (catId: string) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(catId)) next.delete(catId);
      else next.add(catId);
      return next;
    });
  };

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
      className="w-[300px] h-full flex flex-col border-r overflow-hidden"
      style={{ background: 'var(--sidebar-bg)', borderColor: 'var(--border)' }}
    >
      {/* 언어 탭 */}
      <div className="flex p-3 gap-2 border-b" style={{ borderColor: 'var(--border)' }}>
        {LANGS.map((lang) => {
          const info = LANGUAGE_INFO[lang];
          const isActive = activeLanguage === lang;
          return (
            <button
              key={lang}
              onClick={() => { setActiveLanguage(lang); setSidebarOpen(false); setOpenCategories(new Set()); }}
              className="flex-1 py-2.5 px-1 rounded-xl text-xs font-bold transition-all shadow-sm"
              style={{
                background: isActive ? info.color : 'var(--bg-secondary)',
                color: isActive ? 'white' : 'var(--text-muted)',
                boxShadow: isActive ? `0 4px 12px ${info.color}50` : 'none',
              }}
            >
              {info.icon} {info.label}
            </button>
          );
        })}
      </div>

      {/* 카테고리 아코디언 트리 */}
      <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {grouped.map((cat) => {
          const isOpen = openCategories.has(cat.id);
          // 해당 파트의 문제 중 몇 개 풀었는지
          const solvedInCat = cat.questions.filter(q => solvedQuestions.has(q.id)).length;
          
          return (
            <div key={cat.id} className="mb-3 selection:bg-transparent">
              {/* 파트 단위 토글 헤더 */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all group"
                style={{
                  background: isOpen ? 'var(--bg-secondary)' : 'var(--card)',
                  border: '1px solid var(--border)',
                  boxShadow: isOpen ? 'inset 0 2px 4px rgba(0,0,0,0.05)' : '0 1px 3px rgba(0,0,0,0.02)'
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[0.8rem] font-bold" style={{ color: 'var(--text)' }}>
                      {cat.name}
                    </span>
                    <span className="text-[0.65rem] font-medium" style={{ color: 'var(--text-muted)' }}>
                      {solvedInCat} / {cat.questions.length} 완료
                    </span>
                  </div>
                </div>
                
                <motion.svg 
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  style={{ color: 'var(--text-muted)' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </button>

              {/* 자식 (개념 보기 + 문제 리스트) */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
                    className="overflow-hidden pl-3 pr-1 py-2"
                  >
                    <div className="relative border-l-2 ml-4 pl-4 py-1" style={{ borderColor: 'var(--border)' }}>
                      
                      {/* 파트별 기본 개념 버튼 */}
                      <button
                        onClick={() => {
                          setSelectedQuestionId(cat.questions[0]?.id || null); // 카테고리 구분을 위해 임의 값 세팅
                          setViewMode('concept');
                          setSidebarOpen(false);
                        }}
                        className="w-full text-left py-2 mb-2 rounded-lg text-[0.75rem] transition-all flex items-center gap-2 group"
                        style={{
                          color: viewMode === 'concept' && selectedQuestionId === cat.questions[0]?.id ? 'var(--accent)' : 'var(--text-secondary)'
                        }}
                      >
                        <span className="w-5 flex justify-center text-orange-400">💡</span>
                        <span className="font-semibold underline decoration-orange-400/30 underline-offset-4">필수 개념 학습하기</span>
                      </button>

                      {/* 문제 목록 */}
                      {cat.questions.map((q, idx) => {
                        const isSolved = solvedQuestions.has(q.id);
                        const isSelected = selectedQuestionId === q.id && viewMode !== 'concept';
                        return (
                          <button
                            key={q.id}
                            onClick={() => {
                              setSelectedQuestionId(q.id);
                              setViewMode('quiz');
                              setSidebarOpen(false);
                            }}
                            className="w-full text-left py-2 rounded-lg text-[0.75rem] transition-all flex items-center gap-2 group relative"
                            style={{
                              color: isSelected ? 'var(--accent)' : 'var(--text-secondary)',
                              fontWeight: isSelected ? 700 : 500,
                            }}
                          >
                            <span 
                              className={`absolute -left-[1.32rem] w-2.5 h-2.5 rounded-full ${isSolved ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                            />
                            <span className="w-4 flex justify-center text-[0.65rem] opacity-50">Q{idx+1}</span>
                            <span className="truncate">{q.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* 상태 표시 (하단) */}
      <div className="px-5 py-4 border-t flex flex-col gap-2" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
        <div className="flex justify-between items-center text-[0.7rem] font-bold" style={{ color: 'var(--text-muted)' }}>
          <span>진행률</span>
          <span style={{ color: LANGUAGE_INFO[activeLanguage].color }}>
            {Math.round(totalQuestions > 0 ? (solvedCount / totalQuestions) * 100 : 0)}%
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${totalQuestions > 0 ? (solvedCount / totalQuestions) * 100 : 0}%` }}
            className="h-full rounded-full"
            style={{ background: LANGUAGE_INFO[activeLanguage].color }}
          />
        </div>
      </div>
    </aside>
  );
}
