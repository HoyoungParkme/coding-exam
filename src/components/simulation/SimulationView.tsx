import { useCallback, useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { LANGUAGE_INFO } from '@/data/types';
import { CodeViewer } from './CodeViewer';
import { ControlBar } from './ControlBar';
import { MemoryVisualizer } from './visualizers/MemoryVisualizer';
import { StackVisualizer } from './visualizers/StackVisualizer';
import { ObjectVisualizer } from './visualizers/ObjectVisualizer';
import { VariableTable } from './visualizers/VariableTable';
import { ConsoleOutput } from './visualizers/ConsoleOutput';
import type { Question } from '@/data/types';

interface Props {
  question: Question;
}

export function SimulationView({ question }: Props) {
  const currentStepIdx = useStore((s) => s.currentStepIdx);
  const setCurrentStepIdx = useStore((s) => s.setCurrentStepIdx);
  const isPlaying = useStore((s) => s.isPlaying);
  const setIsPlaying = useStore((s) => s.setIsPlaying);
  const setViewMode = useStore((s) => s.setViewMode);
  const playIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const steps = question.steps;
  const stepData = steps[currentStepIdx];
  const isEnd = currentStepIdx === steps.length - 1;
  const langInfo = LANGUAGE_INFO[question.language];

  const handleNext = useCallback(() => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentStepIdx, steps.length, setCurrentStepIdx, setIsPlaying]);

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
      setIsPlaying(false);
    }
  };

  const handleReset = () => {
    setCurrentStepIdx(0);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isEnd) {
      setCurrentStepIdx(0);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(handleNext, 1800);
    } else if (playIntervalRef.current) {
      clearInterval(playIntervalRef.current);
    }
    return () => {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    };
  }, [isPlaying, handleNext]);

  // 시각화 렌더러 선택
  const renderVisualizer = () => {
    switch (question.visualizer) {
      case 'memory':
        return <MemoryVisualizer step={stepData} />;
      case 'stack':
        return <StackVisualizer step={stepData} />;
      case 'object':
        return <ObjectVisualizer step={stepData} />;
      case 'variable':
      default:
        return <VariableTable step={stepData} />;
    }
  };

  return (
    <div className="animate-fade-in space-y-5">
      {/* 상단 헤더: 뒤로가기 + 설명 */}
      <div className="flex items-start gap-3">
        <button
          onClick={() => setViewMode('quiz')}
          className="p-3 rounded-xl border transition-colors flex-shrink-0 mt-1"
          style={{ background: 'var(--card)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          title="문제로 돌아가기"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div
          className="flex-1 p-5 rounded-xl border min-h-[80px] flex flex-col justify-center"
          style={{ background: langInfo.color, borderColor: langInfo.color }}
        >
          <h3 className="text-[0.68rem] font-bold text-white/70 mb-1.5 uppercase tracking-wider">
            코드 실행 흐름 추적
          </h3>
          <p className="text-[0.95rem] font-medium leading-relaxed text-white">
            {stepData.desc}
          </p>
        </div>
      </div>

      {/* 좌우 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {/* 왼쪽: 시각화 + 콘솔 + 컨트롤 */}
        <div className="flex flex-col gap-4">
          {/* 시각화 영역 */}
          <div
            className="rounded-xl border flex-1 min-h-[280px] flex flex-col"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            {renderVisualizer()}
          </div>

          {/* 콘솔 출력 */}
          <ConsoleOutput output={stepData.output} />

          {/* 컨트롤 바 */}
          <ControlBar
            currentStep={currentStepIdx}
            totalSteps={steps.length}
            isPlaying={isPlaying}
            isEnd={isEnd}
            onPrev={handlePrev}
            onNext={handleNext}
            onTogglePlay={togglePlay}
            onReset={handleReset}
          />
        </div>

        {/* 오른쪽: 코드 뷰어 */}
        <div className="min-h-[500px]">
          <CodeViewer
            code={question.code}
            language={question.language}
            activeLine={stepData.codeLine}
          />
        </div>
      </div>
    </div>
  );
}
