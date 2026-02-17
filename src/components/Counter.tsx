import { useState } from 'react';
import './Counter.css';

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

  const increment = () => {
    const next = count + step;
    setCount(next);
    onCountChange?.(next);
  };

  const decrement = () => {
    const next = count - step;
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
      <button className="counter-reset" onClick={reset}>Reset</button>
    </div>
  );
}
