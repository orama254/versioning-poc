import { useTheme } from '../hooks/useTheme';
import './ThemeToggle.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <label className="theme-toggle" aria-label="Toggle dark mode">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span className="icon">{isDark ? '🌙' : '☀️'}</span>
      </span>
    </label>
  );
}
