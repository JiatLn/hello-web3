import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  function onAdd() {
    setCount((count) => count + 1)
  }

  return (
    <div flex="c col" h-100vh>
      <h1 text-brand-primary>Vite + React</h1>
      <div>
        <button btn onClick={onAdd}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
