import React, { useEffect, useRef, useState } from 'react';
function UseRefDemo1() {
  const count = useRef(0)
  const [_, set_] = useState(null)
  const onChangeN = () => {

    count.current += 1
  }
  const onChangeNUpdatedUI = () => {
    count.current += 1
    set_(Math.random())
  }
  useEffect(() => {
    console.log(count)
  })
  return (
    <div>
      count:{count.current},
      <br />
      <button onClick={onChangeN}>onChangeRef不更新UI</button>
      <button onClick={onChangeNUpdatedUI}>onChangeRef更新UI</button>
    </div>
  )
}

export default UseRefDemo1;