import { useState } from 'react'
import reactLogo from './assets/monkey.jpeg.jfif'
import viteLogo from './assets/monkey.jpeg.jfif'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Trabalhar é pior que Morrer!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Tomadas no cu em 2026 até o momento: {count}
        </button>
        <p>
          Deus <code>socorro deus</code> porque deus ajuda deus
        </p>
      </div>
      <p className="read-the-docs">
        o q eu fiz deus
      </p>
    </>
  )
}

export default App
