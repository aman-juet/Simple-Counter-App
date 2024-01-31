import React, { useState } from 'react'

function App() {

  const [counter , setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  function removeValue(){
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value {counter}</h2>
      <button
      onClick={addValue}
      >Add a Value</button> {" "}
      <button
      onClick={removeValue}
      >Remove value</button>
      <button
      onClick={() =>{
        setCounter(0)
      }}
      >RESET</button>
      <p>footer:{counter} </p>
    </>
  )
}

export default App