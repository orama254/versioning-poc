import { useState } from 'react';
import './Counter.css';

const STEP_OPTIONS = [1, 5, 10] as const;

interface CounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
  onCountChange?: (value: number) => void;
}

export function Counter({
  initialValue = 0,
  step = 1,
  label = 'Count',
  onCountChange,
}: CounterProps) {
  const [count, setCount] = useState(initialValue);
  const [currentStep, setCurrentStep] = useState(step);

  const increment = () => {
    const next = count + currentStep;
    setCount(next);
    onCountChange?.(next);
  };

  const decrement = () => {
    const next = count - currentStep;
    setCount(next);
    onCountChange?.(next);
  };

  const reset = () => {
    setCount(initialValue);
    onCountChange?.(initialValue);
  };

  return (
    <div className="counter">
      <span className="counter-label">{label}</span>
      <div className="counter-controls">
        <button className="counter-btn" onClick={decrement} aria-label="Decrement">−</button>
        <span className="counter-value">{count}</span>
        <button className="counter-btn" onClick={increment} aria-label="Increment">+</button>
      </div>
      <div className="counter-step-selector">
        <span className="counter-step-label">Step:</span>
        {STEP_OPTIONS.map((s) => (
          <button
            key={s}
            className={`counter-step-btn ${currentStep === s ? 'active' : ''}`}
            onClick={() => setCurrentStep(s)}
          >
            ±{s}
          </button>
        ))}
      </div>
      <button className="counter-reset" onClick={reset}>Reset</button>
    </div>
  );
}
