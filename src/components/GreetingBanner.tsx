import { useState, useEffect } from 'react';
import './GreetingBanner.css';

function getGreeting(): { message: string; emoji: string } {
  const hour = new Date().getHours();
  if (hour < 12) return { message: 'Good morning', emoji: '🌅' };
  if (hour < 17) return { message: 'Good afternoon', emoji: '☀️' };
  if (hour < 21) return { message: 'Good evening', emoji: '🌇' };
  return { message: 'Good night', emoji: '🌙' };
}

export function GreetingBanner() {
  const [greeting, setGreeting] = useState(getGreeting);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="greeting-banner">
      <span className="greeting-emoji">{greeting.emoji}</span>
      <span className="greeting-text">{greeting.message}, welcome to the app!</span>
    </div>
  );
}
