import React from 'react';
import useList from "../hooks/useList";

function HooksDemo() {
  const { list, deleteIndex } = useList();
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => {
                  deleteIndex(index);
                }}
              >
                x
              </button>
            </li>
          ))}
        </ol>
      ) : (
          "加载中..."
        )}
    </div>
  );
}

export default HooksDemo;