import React, { useEffect, useState } from 'react';

function UseEffectDemo1() {
  return (
    <div className="demo1">
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
      <Demo6 />
      <Demo7 />
    </div>
  )
}


function Demo1() {
  const [n, setN] = useState(0)

  useEffect(() => {
    // 任何一个变了变量变了都执行
    // 第一次 和 第二三四 。。。 次
    console.log('demo1:第一次 和 第二三四 。。。 次,任何一个变量变了都执行')
  })

  const onClick = () => {
    setN(i => i + 1)
  }
  return (
    <div className="demo1">
      <h1>useEffect不传递第二个参数， 第一二三。。。次执行,任何一个变量变了都执行</h1>
      n:{n}
      <br />
      <button onClick={onClick}>+1</button>
    </div>
  )
}

function Demo2() {
  const [n, setN] = useState(0)
  useEffect(() => {
    // n更新之后
    console.log('demo2:n更新之后')
  }, [n])

  const onClick = () => {
    setN(i => i + 1)
  }
  return (
    <div className="demo2">
      <h1>useEffect传递第二个参数[n]， 第一次执行,以及n变了执行</h1>
      n:{n}
      <br />
      <button onClick={onClick}>+1</button>
    </div>
  )
}


function Demo3() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    // x更新之后,
    console.log('demo3:第一次执行，以及x更新之后才变，y改变不会触发effect')
  }, [x])

  const onClickX = () => {
    setX(i => i + 1)
  }
  const onClickY = () => {
    setY(i => i + 1)
  }
  return (
    <div className="demo2">
      <h1>useEffect传递第二个参数[x]，第一次执行，以及x更新之后才变，y改变不会触发effect</h1>
      x:{x}
      <br />
      y:{y}
      <br />
      <button onClick={onClickX}>x+1</button>
      <button onClick={onClickY}>y+1</button>
    </div>
  )
}

function Demo4() {
  const initValue = 0;
  const [z, setZ] = useState(initValue)
  useEffect(() => {
    // 跳过第一次
    if (z !== initValue) {
      // 跳过第一次
      console.log('demo4:通过if(z!== initValue)判断，跳过第一次，z修改后执行')
    }
  }, [z])

  const onClick = () => {
    setZ(i => i + 1)
  }
  return (
    <div className="demo2">
      z:{z}
      <br />
      <button onClick={onClick}>z+1</button>
    </div>
  )
}

function Demo5() {
  const [z, setZ] = useState(0)
  useEffect(() => {
    console.log('demo5:useEffect 第二个参数为空数组[],只执行一次')
  }, []);

  const onClick = () => {
    setZ(i => i + 1)
  }
  return (
    <div className="demo5">
      <h1>demo5:useEffect 第二个参数为空数组[],只执行一次</h1>
      z:{z}
      <br />
      <button onClick={onClick}>z+1</button>
    </div>
  )
}

function Demo6() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log('demo6:useEffect 移除时执行 return里写一个函数')
    }, 3000)
    return () => {
      window.clearInterval(id);
      console.log('demo6:组件销毁的时候执行')
    }
  }, []);

  return (
    <div className="demo6">
      <h1>demo6:useEffect 移除时执行操作 return一个函数进行操作</h1>
    </div>
  )
}


function Demo7() {
  useEffect(() => {
    console.log('demo7:1')
  }, []);
  useEffect(() => {
    console.log('demo7:2')
  }, []);

  return (
    <div className="demo7">
      <h1>demo7:多个useEffect 按顺序执行</h1>
      <br />
    </div>
  )
}

export default UseEffectDemo1