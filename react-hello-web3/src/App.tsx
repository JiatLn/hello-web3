import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [account, setAccount] = useState<null | string>(null)

  useEffect(() => {
    console.log('12', 12)
  }, [])

  function onAdd() {
    setCount((count) => count + 1)
  }

  async function onLogin() {
    if (!hasMask()) {
      alert('Please install MetaMask')
      return
    }
    const { ethereum } = window
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    if (!accounts?.length) {
      return
    }
    setAccount(accounts[0])
  }

  function hasMask() {
    return typeof window.ethereum !== 'undefined'
  }

  function formatAccount(account: string) {
    return `${account.slice(0, 6)}...${account.slice(-4)}`
  }

  return (
    <div flex="c col" h-100vh>
      <h1 text-brand-primary>Vite + React</h1>
      <div>
        {
          account ?
            <div flex="c col">
              <div mb-10px>Account: {formatAccount(account)}</div>
              <button btn onClick={onAdd}>
                count is {count}
              </button>
            </div>
            : <button btn onClick={onLogin}>login</button>
        }
      </div>
    </div>
  )
}

export default App
