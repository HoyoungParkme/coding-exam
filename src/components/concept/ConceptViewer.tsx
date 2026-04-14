import { motion, Variants } from 'framer-motion';
import { CATEGORIES } from '@/data/types';
import type { Language, Category } from '@/data/types';
import { SyntaxHighlighter } from '@/components/common/SyntaxHighlighter';
import { useStore } from '@/store/useStore';

import { ALL_QUESTIONS } from '@/store/useStore';

interface Props {
  language: Language;
  questionId: string;
}

export function ConceptViewer({ language, questionId }: Props) {
  const setViewMode = useStore((s) => s.setViewMode);
  
  const targetQ = ALL_QUESTIONS.find((q: any) => q.id === questionId);
  const targetCategory = CATEGORIES[language].find(c => c.id === targetQ?.category);

  if (!targetCategory) return <div>개념 데이터가 없습니다.</div>;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      
      {/* 헤더 버튼 영역 */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setViewMode('quiz')}
          className="flex items-center gap-2 text-[0.8rem] px-4 py-2 rounded-lg font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          뒤로 가기
        </button>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="rounded-3xl p-8 lg:p-12 border overflow-hidden relative shadow-sm"
        style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
      >
        {/* 우측 상단 거대 아이콘 장식 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-10 -right-10 text-[12rem] select-none pointer-events-none"
        >
          {targetCategory.icon}
        </motion.div>

        {/* 1. 타이틀 섹션 */}
        <motion.div variants={itemVariants} className="mb-10 relative z-10">
          <div className="inline-block px-4 py-1.5 rounded-full text-[0.75rem] font-black mb-4 tracking-widest text-orange-600 bg-orange-100 dark:bg-orange-500/20 dark:text-orange-300">
            핵심 개념 학습
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            {targetCategory.conceptTitle || targetCategory.name}
          </h2>
          <p className="text-[1.05rem] leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
            {targetCategory.conceptDesc}
          </p>
        </motion.div>

        {/* 2. 핵심 포인트 (요점) */}
        {targetCategory.conceptPoints && targetCategory.conceptPoints.length > 0 && (
          <motion.div variants={itemVariants} className="mb-10 relative z-10">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <span className="w-1.5 h-6 rounded-full bg-blue-500 block"></span>
              꼭 기억해야 할 포인트
            </h3>
            <div className="grid gap-4">
              {targetCategory.conceptPoints.map((point, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 5, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                  className="flex gap-4 p-4 rounded-xl border items-start transition-colors"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div className="pt-1 text-[0.95rem] font-medium leading-relaxed" style={{ color: 'var(--text)' }}>
                    {point}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3. 코드 예제 */}
        {targetCategory.conceptCode && (
          <motion.div variants={itemVariants} className="relative z-10 mt-8">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <span className="w-1.5 h-6 rounded-full bg-green-500 block"></span>
              기본 코드 형태
            </h3>
            <div className="rounded-2xl overflow-hidden border shadow-inner" style={{ borderColor: '#334155' }}>
              <div className="px-4 py-2.5 flex items-center gap-2 border-b bg-slate-800 border-slate-700">
                 <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-[0.7rem] text-slate-400 font-mono ml-2 uppercase">Example</span>
              </div>
              <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-slate-900 text-slate-300">
                <code>
                  {targetCategory.conceptCode.split('\n').map((line, idx) => (
                    <div key={idx} className="py-0.5">
                      <SyntaxHighlighter line={line} language={language} />
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="mt-12 flex justify-center">
           <button
             onClick={() => setViewMode('quiz')}
             className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
           >
             실전 문제 풀기 →
           </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
