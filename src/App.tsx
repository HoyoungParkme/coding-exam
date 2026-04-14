import { useEffect } from 'react';
import { useStore, ALL_QUESTIONS } from '@/store/useStore';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { QuizView } from '@/components/quiz/QuizView';
import { SimulationView } from '@/components/simulation/SimulationView';
import { ConceptViewer } from '@/components/concept/ConceptViewer';

export default function App() {
  const theme = useStore((s) => s.theme);
  const selectedQuestionId = useStore((s) => s.selectedQuestionId);
  const setSelectedQuestionId = useStore((s) => s.setSelectedQuestionId);
  const viewMode = useStore((s) => s.viewMode);
  const activeLanguage = useStore((s) => s.activeLanguage);
  const sidebarOpen = useStore((s) => s.sidebarOpen);
  const setSidebarOpen = useStore((s) => s.setSidebarOpen);

  // theme → <html> 클래스 동기화
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // 언어 변경 시 첫 문제 자동 선택
  useEffect(() => {
    if (!selectedQuestionId) {
      const first = ALL_QUESTIONS.find((q) => q.language === activeLanguage);
      if (first) setSelectedQuestionId(first.id);
    }
  }, [activeLanguage, selectedQuestionId, setSelectedQuestionId]);

  const question = ALL_QUESTIONS.find((q) => q.id === selectedQuestionId);

  return (
    <div className="flex min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* 모바일 오버레이 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 사이드바 - 데스크톱: 고정, 모바일: 드로어 */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 h-screen z-50
          transform transition-transform duration-300 lg:transform-none
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <Sidebar />
      </div>

      {/* 메인 영역 */}
      <div className="flex-1 min-w-0 flex flex-col">
        <Header />

        <main className="w-full max-w-[1400px] mx-auto px-5 py-8">
          {question ? (
            viewMode === 'concept' ? (
              <ConceptViewer language={activeLanguage} questionId={question.id} />
            ) : viewMode === 'quiz' ? (
              <QuizView question={question} />
            ) : (
              <SimulationView question={question} />
            )
          ) : (
            /* 문제 미선택 시 */
            <div
              className="flex flex-col items-center justify-center py-32 rounded-2xl border border-dashed"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <span className="text-5xl mb-4">📝</span>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text)' }}>
                문제를 선택하세요
              </h3>
              <p className="text-[0.85rem]" style={{ color: 'var(--text-muted)' }}>
                좌측 사이드바에서 언어와 문제를 선택하여 학습을 시작하세요.
              </p>
            </div>
          )}

          <footer
            className="text-center pt-10 mt-10 text-[0.78rem] border-t"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border)' }}
          >
            정처기 실기 코딩 트레이너 · 총 {ALL_QUESTIONS.length}문제 ·{' '}
            C {ALL_QUESTIONS.filter(q => q.language === 'c').length} ·{' '}
            Python {ALL_QUESTIONS.filter(q => q.language === 'python').length} ·{' '}
            Java {ALL_QUESTIONS.filter(q => q.language === 'java').length}
          </footer>
        </main>
      </div>
    </div>
  );
}
