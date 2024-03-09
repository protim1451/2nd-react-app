import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'

function App() {
  
  function handleClick(){
    alert('Button Clicked');
  }
  const handleClick2 = () =>{
    alert('Button 2 Clicked');
  }
  return (
    <>
      <h1>React Core concept 2</h1>

      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('third clicked')}}>Click3</button>
    </>
  )
}

export default App
