import { useStore } from '@/store/useStore';
import { LANGUAGE_INFO } from '@/data/types';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighlighter';
import type { Question } from '@/data/types';

interface Props {
  question: Question;
}

export function QuizView({ question }: Props) {
  const selectedChoice = useStore((s) => s.selectedChoice);
  const setSelectedChoice = useStore((s) => s.setSelectedChoice);
  const showAnswer = useStore((s) => s.showAnswer);
  const setShowAnswer = useStore((s) => s.setShowAnswer);
  const setViewMode = useStore((s) => s.setViewMode);
  const markSolved = useStore((s) => s.markSolved);

  const langInfo = LANGUAGE_INFO[question.language];

  const handleCheck = () => {
    setShowAnswer(true);
    if (selectedChoice === question.correctAnswer) {
      markSolved(question.id);
    }
  };

  const handleSimulation = () => {
    setViewMode('simulation');
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* 문제 카드 */}
      <div className="rounded-2xl p-8 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
        {/* 태그 */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="px-3 py-1 rounded-full text-[0.7rem] font-bold text-white"
            style={{ background: langInfo.color }}
          >
            {langInfo.icon} {langInfo.label}
          </span>
          {question.source ? (
            <span
              className="px-3 py-1 rounded-full text-[0.7rem] font-bold border"
              style={{ borderColor: '#f59e0b', color: '#f59e0b', background: 'rgba(245,158,11,0.1)' }}
            >
              {question.source} 기출
            </span>
          ) : (
            <span
              className="px-3 py-1 rounded-full text-[0.7rem] font-semibold border"
              style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              기출유형 연습
            </span>
          )}
        </div>

        {/* 문제 텍스트 */}
        <h2 className="text-lg font-bold mb-6" style={{ color: 'var(--text)' }}>
          {question.questionText}
        </h2>

        {/* 코드 블록 */}
        <div className="rounded-xl overflow-hidden mb-8 border" style={{ borderColor: 'var(--border)' }}>
          <div className="px-4 py-2 flex items-center gap-2 border-b"
            style={{ background: '#1e293b', borderColor: '#334155' }}
          >
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <span className="text-[0.68rem] text-slate-400 font-mono ml-2">
              {question.id}.{question.language === 'c' ? 'c' : question.language === 'python' ? 'py' : 'java'}
            </span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed" style={{ background: '#0f172a' }}>
            <code>
              {question.code.map((line, i) => (
                <div key={i} className="py-0.5">
                  <span style={{ whiteSpace: 'pre' }}>
                    {line ? <SyntaxHighlighter line={line} language={question.language} /> : ' '}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* 선택지 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {question.choices.map((choice, idx) => {
            const isSelected = selectedChoice === idx;
            const isCorrect = idx === question.correctAnswer;

            let borderColor = 'var(--border)';
            let bg = 'transparent';
            let textColor = 'var(--text)';
            let extraClass = '';

            if (showAnswer) {
              if (isCorrect) {
                borderColor = 'var(--success)';
                bg = 'var(--success-light)';
                textColor = 'var(--success)';
                extraClass = 'choice-correct';
              } else if (isSelected && !isCorrect) {
                borderColor = 'var(--danger)';
                bg = 'var(--danger-light)';
                textColor = 'var(--danger)';
                extraClass = 'choice-wrong';
              }
            } else if (isSelected) {
              borderColor = 'var(--accent)';
              bg = 'var(--accent-light)';
              textColor = 'var(--accent-text)';
            }

            return (
              <button
                key={idx}
                onClick={() => !showAnswer && setSelectedChoice(idx)}
                disabled={showAnswer}
                className={`p-4 border-2 rounded-xl text-left font-semibold text-[0.9rem] transition-all ${extraClass}`}
                style={{ borderColor, background: bg, color: textColor }}
              >
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full border mr-3 text-[0.75rem] font-bold"
                  style={{ borderColor }}
                >
                  {idx + 1}
                </span>
                {choice.split('\\n').map((part, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    <code className="font-mono text-[0.85rem]">{part}</code>
                  </span>
                ))}
              </button>
            );
          })}
        </div>

        {/* 버튼 영역 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end border-t pt-6" style={{ borderColor: 'var(--border)' }}>
          {!showAnswer ? (
            <button
              onClick={handleCheck}
              disabled={selectedChoice === null}
              className="px-6 py-3 rounded-xl font-bold text-white transition-all disabled:opacity-40"
              style={{ background: selectedChoice !== null ? 'var(--accent)' : 'var(--text-muted)' }}
            >
              정답 확인
            </button>
          ) : (
            <button
              onClick={handleSimulation}
              className="px-6 py-3 rounded-xl font-bold text-white flex items-center gap-2 transition-all shadow-lg"
              style={{ background: langInfo.color }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              시뮬레이션으로 해설 보기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
