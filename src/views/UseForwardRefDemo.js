import React, { useEffect, useRef } from "react";

function UseForwardRefDemo() {
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log(buttonRef.current)
  })
  return (
    <div className="UseForwardRefDemo">
      <Button3 ref={buttonRef}>按钮</Button3>
    </div>
  );
}

const Button2 = (props, ref) => {
  return <button className="red" ref={ref} {...props} />;
}

// React.forwardRef 可以额外多传递一个参数
// 把ref参数 转发给 Button2
const Button3 = React.forwardRef(Button2);

export default UseForwardRefDemo;