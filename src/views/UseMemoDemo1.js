import React, { useState } from 'react';
// Memo
function UseMemoDemo1() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const onChangeN = () => {
    setN(i => i + 1)
  }
  const onChangeM = () => {
    setM(i => i + 1)
  }
  return (
    <div>
      没有缓存，Child组件 依赖的是m，点击按钮更新的是n,也会触发 Child从新执行
      <br />
      n:{n},
      <br />
      m:{m}
      <br />
      <button onClick={onChangeN}>onChangeN</button>
      <br />
      <button onClick={onChangeM}>onChangeM</button>
      <Child data={m} />
      <Child3 data={m} />
    </div>
  )
}

function Child(props) {
  console.log('Child执行了')
  console.log('Child内大量逻辑1')
  console.log('Child内大量逻辑2')
  console.log('Child内大量逻辑3')
  return (<div>child:{props.data}</div>)
}

function Child2(props) {
  console.log('Child2执行了')
  console.log('Child2内大量逻辑1')
  console.log('Child2内大量逻辑2')
  console.log('Child2内大量逻辑3')
  return (<div>child2:{props.data}</div>)
}

// 被缓存，第一次执行后，当依赖的值变了才会更新
const Child3 = React.memo(Child2)

export default UseMemoDemo1;