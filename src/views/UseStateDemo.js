import React, { useState } from "react";

export default function UseStateDemo() {
  let [n, setN] = useState(0);
  return (<div>
    <div>{n}</div>
    <button onClick={() => setN(n + 1)}>add1</button>
  </div>);
}