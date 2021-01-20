import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function UseEffectDemo1() {
  return (
    <div className="demo1">
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
    </div>
  )
}


function Demo1() {
  const [n, setN] = useState(0)
  useEffect(() => {
    document.querySelector('#x').innerText = `n:1000`
  }, [n])
  return (
    <div className="demo1">
      <h1>useEffect</h1>
      <div id="x">n:{n}</div>
    </div>
  )
}

function Demo2() {
  const [n, setN] = useState(0)
  useLayoutEffect(() => {
    document.querySelector('#x2').innerText = `n:1000`
  }, [n])
  return (
    <div className="demo2">
      <h1>useEffect</h1>
      <div id="x2">n:{n}</div>
    </div>
  )
}


function Demo3() {
  const [x, setX] = useState(0)
  const time = useRef(null)
  const onClickX = () => {
    setX(i => i + 1)
    time.current = performance.now()
  }

  useEffect(() => {
    if (time.current) {
      console.log('demo3:' + (performance.now() - time.current))
    }
  }, [x])

  return (
    <div className="demo3">
      <h1>useEffect的更新UI时间更长</h1>
      x:{x}
      <br />
      <button onClick={onClickX}>x+1</button>
    </div>
  )
}

function Demo4() {
  const [x, setX] = useState(0)
  const time = useRef(null)

  const onClickX = () => {
    setX(i => i + 1)
    time.current = performance.now()
  }

  useLayoutEffect(() => {
    if (time.current) {
      console.log('demo4:' + (performance.now() - time.current))
    }
  }, [x])

  return (
    <div className="demo4">
      <h1>useLayoutEffect的更新UI时间更短</h1>
      x:{x}
      <br />
      <button onClick={onClickX}>x+1</button>
    </div>
  )
}

function Demo5() {
  useEffect(() => {
    console.log('demo5:1')
  }, []);
  useLayoutEffect(() => {
    console.log('demo5:2')
  }, []);

  return (
    <div className="demo5">
      <h1>demo5:useLayoutEffect 比 useEffect 先执行</h1>
    </div>
  )
}

export default UseEffectDemo1