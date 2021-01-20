import React, { useCallback, useMemo, useState } from 'react';
// useMemo
function UseMemoDemo2() {
  const [n, setN] = useState(0)
  const [m, setM] = useState(0)
  const onChangeN = () => {
    setN(i => i + 1)
  }
  const onChangeM = () => {
    setM(i => i + 1)
  }
  const onClickChild = () => { } // 这个每次执行的时候 都会重新生成一个 而且是引用的地址 ，child依赖它，它变了，child无法被缓存

  /*
  useMemo(()=>{
    return 复用的函数
  },[依赖的变量]) 
  这个函数复用 
    return 就是复用的函数
    第二个参数里的 [] 内是依赖变化的值
  */
  const onClickChildMemo = useMemo(() => {
    // return的东西 就是你要缓存的函数
    return () => { }
  }, [m]) // []里是依赖的东西变了才更新

  /*
  useCallback(fn,[m]) 
  等价于
  useMemo(()=>fn,[m])
  */
  const fn = () => console.log(m)
  const onClickChildMemo2 = useMemo(() => fn, [m])
  const onClickChildMemo3 = useCallback(fn, [m])
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
      <Child2 data={m} onClick={onClickChild} />
      <Child4 data={m} onChilk={onClickChildMemo} />
    </div>
  )
}

function Child(props) {
  console.log('Child执行了')
  console.log('Child内大量逻辑1')
  console.log('Child内大量逻辑2')
  console.log('Child内大量逻辑3')
  return (<div onClick={props.onClick}>child:{props.data}</div>)
}

const Child2 = React.memo(Child)

function Child3(props) {
  console.log('Child3执行了')
  console.log('Child3内大量逻辑1')
  console.log('Child3内大量逻辑2')
  console.log('Child3内大量逻辑3')
  return (<div onClick={props.onClick}>child:{props.data}</div>)
}

const Child4 = React.memo(Child3)

export default UseMemoDemo2;