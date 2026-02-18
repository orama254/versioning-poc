import { useState } from 'react';
import './Counter.css';

const STEP_OPTIONS = [1, 5, 10] as const;

interface CounterProps {
  initialValue?: number;
  step?: number;
  label?: string;
  min?: number;
  max?: number;
  onCountChange?: (value: number) => void;
}

export function Counter({
  initialValue = 0,
  step = 1,
  label = 'Count',
  min = -5,
  max,
  onCountChange,
}: CounterProps) {
  const [count, setCount] = useState(initialValue);
  const [currentStep, setCurrentStep] = useState(step);

  const isAtMin = min !== undefined && count <= min;
  const isAtMax = max !== undefined && count >= max;

  const increment = () => {
    if (isAtMax) return;
    const next = count + currentStep;
    const clamped = max !== undefined ? Math.min(next, max) : next;
    setCount(clamped);
    onCountChange?.(clamped);
  };

  const decrement = () => {
    if (isAtMin) return;
    const next = count - currentStep;
    const clamped = min !== undefined ? Math.max(next, min) : next;
    setCount(clamped);
    onCountChange?.(clamped);
  };

  const reset = () => {
    setCount(initialValue);
    onCountChange?.(initialValue);
  };

  return (
    <div className="counter">
      <span className="counter-label">{label}</span>
      <div className="counter-controls">
        <button
          className="counter-btn"
          onClick={decrement}
          disabled={isAtMin}
          aria-label={isAtMin ? 'Decrement (minimum reached)' : 'Decrement'}
        >
          −
        </button>
        <span className="counter-value">{count}</span>
        <button
          className="counter-btn"
          onClick={increment}
          disabled={isAtMax}
          aria-label={isAtMax ? 'Increment (maximum reached)' : 'Increment'}
        >
          +
        </button>
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
