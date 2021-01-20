import React, { createContext, useState, useContext } from 'react';

const C = createContext(null);

function UseContextDemo1() {
  const [n, setN] = useState(0)
  return (
    <C.Provider value={{ n, setN }}>
      <div className="UseContextDemo1">
        <Baba />
      </div>
    </C.Provider>
  )
}

function Baba() {
  return (
    <div>
      我是爸爸
      <Child />
    </div>
  )
}

function Child() {
  const { n, setN } = useContext(C);
  const onClick = () => {
    setN(i => i + 1)
  }
  return (
    <div>
      我是儿子，我得到n:{n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}


export default UseContextDemo1