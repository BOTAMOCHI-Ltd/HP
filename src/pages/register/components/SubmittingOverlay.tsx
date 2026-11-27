import { useEffect, useState } from 'react';

const STEPS = [
  { label: '入力内容を確認中' },
  { label: 'データを送信中' },
  { label: '登録情報を保存中' },
];

export default function SubmittingOverlay() {
  const [stepIndex, setStepIndex] = useState(0);
  const [dots, setDots] = useState('');
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 10);

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : `${prev}.`));
    }, 380);

    const stepTimers: ReturnType<typeof setTimeout>[] = [];
    let elapsed = 700;
    STEPS.forEach((_, i) => {
      const t = setTimeout(() => setStepIndex(i), elapsed);
      stepTimers.push(t);
      elapsed += 900;
    });

    let prog = 0;
    const progressInterval = setInterval(() => {
      prog += 1;
      setProgress(Math.min(prog, 88));
      if (prog >= 88) clearInterval(progressInterval);
    }, 28);

    return () => {
      clearTimeout(enterTimer);
      clearInterval(dotsInterval);
      clearInterval(progressInterval);
      stepTimers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(250,250,249,0.85)' }}
    >
      <div
        className={`bg-white rounded-2xl px-10 py-10 flex flex-col items-center gap-7 transition-all duration-500 ${
          visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        style={{
          boxShadow: '0 12px 48px rgba(0,0,0,0.10)',
          minWidth: 300,
        }}
      >
        {/* Spinner ring */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
          <div className="absolute inset-0 rounded-full border-4 border-gray-900 border-t-transparent animate-spin" />
          <i className="ri-mail-send-line text-gray-400 text-lg" />
        </div>

        {/* Main text */}
        <div className="text-center space-y-1.5">
          <p className="text-sm font-semibold text-gray-800 tracking-wide">
            {STEPS[stepIndex].label}
            <span className="inline-block w-5 text-left">{dots}</span>
          </p>
          <p className="text-xs text-gray-400">しばらくお待ちください</p>
        </div>

        {/* Step dots */}
        <div className="flex items-center gap-1.5">
          {STEPS.map((_, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div
                className={`rounded-full transition-all duration-500 ${
                  i < stepIndex
                    ? 'w-2 h-2 bg-gray-900'
                    : i === stepIndex
                    ? 'w-3 h-3 bg-gray-900 ring-2 ring-gray-200'
                    : 'w-2 h-2 bg-gray-200'
                }`}
              />
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px w-6 transition-all duration-700 ${
                    i < stepIndex ? 'bg-gray-900' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gray-900 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step label */}
        <p className="text-xs text-gray-400 tracking-wide">
          ステップ {stepIndex + 1} / {STEPS.length}
        </p>
      </div>
    </div>
  );
}
