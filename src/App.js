import './App.css'
import TestUseFetch from './pages/TestUseFetch'
import Dialog from './pages/Dialog'
import { useState } from 'react'

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const showDialog = () => {
    setDialogOpen(!dialogOpen)
  }
  return (
    <div className='App'>
      <details open>
        <summary>Test UserFetch</summary>
        <TestUseFetch></TestUseFetch>
      </details>
      <details open>
        <summary>Test UseEventListener</summary>
        <button onClick={showDialog}>show dialog</button>
        <Dialog show={dialogOpen}></Dialog>
      </details>
    </div>
  )
}

export default App
