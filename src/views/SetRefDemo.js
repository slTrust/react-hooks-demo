import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  createRef
} from "react";

function SetRefDemo() {
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log(buttonRef.current);
  });
  return (
    <div className="App">
      <Button2 ref={buttonRef}>按钮</Button2>
      <button
        className="close"
        onClick={() => {
          console.log(buttonRef);
          buttonRef.current.x();
        }}
      >
      </button>
    </div>
  );
}

const Button2 = React.forwardRef((props, ref) => {
  const realButton = createRef(null);
  const setRef = useImperativeHandle;
  // 对 ref进行自定义的包装返回
  setRef(ref, () => {
    return {
      x: () => {
        realButton.current.remove();
      },
      realButton: realButton
    };
  });
  return <button ref={realButton} {...props} />;
});

export default SetRefDemo;