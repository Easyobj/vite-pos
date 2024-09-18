
import React, { useEffect } from 'react'
import { Button, message } from 'antd'
import WrappedNormalLoginForm from './WrappedNormalLoginForm'
import './App.css'
// import ErrorBoundary from './ErrorBoundary'

function App() {
  useEffect(() => {
    message.error('2323')
  }, [])
  return (
    <>
      <WrappedNormalLoginForm />
      <br />
      11
      <Button type="dashed">POS</Button>
    </>
  )
}

export default App
