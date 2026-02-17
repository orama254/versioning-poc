import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeToggle } from './components/ThemeToggle'
import { GreetingBanner } from './components/GreetingBanner'
import { Counter } from './components/Counter'
import { Tabs } from './components/Tabs'
import './App.css'

function App() {
  const tabs = [
    {
      id: 'counter',
      label: 'Counter',
      content: <Counter label="Click counter" step={1} />,
    },
    {
      id: 'about',
      label: 'About',
      content: (
        <div className="about-panel">
          <div className="logo-row">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <p className="read-the-docs">
            Initialized with Vite + React.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <ThemeToggle />
      <GreetingBanner />
      <h1>Vite + React</h1>
      <Tabs tabs={tabs} defaultTab="counter" />
    </>
  )
}

export default App
