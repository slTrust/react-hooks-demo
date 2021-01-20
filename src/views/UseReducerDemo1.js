import React, { useReducer } from "react";
// step01 创建initData
const initData = {
  n: 1
}

// step02创建所有操作 reducer(state,action)
const reducer = (state, action) => {
  if (action.type === 'add') {
    return { n: state.n + 1 }
  }
  else if (action.type === 'add2') {
    return { n: state.n + 2 }
  } else if (action.type === 'add3') {
    return { n: state.n + action.payload }
  } else {
    throw new Error('no match action')
  }
};

export default function UseReducerDemo() {
  // step03 传递 useReducer, 得到 读写API
  const [state, dispatch] = useReducer(reducer, initData)
  const { n } = state
  const onClick = () => {
    // step04 调用 写API
    dispatch({ type: 'add' })
  }
  const onClick2 = () => {
    dispatch({ type: 'add2', payload: parseInt(Math.random() * 100) })
  }
  return <div>
    <div>{n}</div>
    <button onClick={onClick}>add</button>
    <button onClick={onClick2}>addRandom</button>
  </div>;
}