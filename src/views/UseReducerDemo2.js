import React, { useReducer } from "react";
const initFormData = {
  name: '',
  age: 18,
  nationality: '汉族'
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'patch':
      return { ...state, ...action.formData }
    case 'reset':
      return initFormData
    default:
      throw new Error('no match action')
  }
};

export default function UseReducerDemo2() {
  const [formData, dispatch] = useReducer(reducer, initFormData)
  const onReset = () => {
    dispatch({ type: 'reset' })
  }
  return <div>
    <div>{JSON.stringify(formData)}</div>
    <form onSubmit={onReset}>
      <div>
        <label>姓名：
          <input type="text" value={formData.name}
            onChange={e => dispatch({ type: 'patch', formData: { name: e.target.value } })}
          />
        </label>
      </div>
      <div>
        <label>年龄：
          <input type="text" value={formData.nationality}
            onChange={e => dispatch({ type: 'patch', formData: { nationality: e.target.value } })}
          />
        </label>
      </div>
      <div>
        <label>民族：
          <input type="text" value={formData.age}
            onChange={e => dispatch({ type: 'patch', formData: { age: e.target.value } })}
          />
        </label>
      </div>
    </form>
  </div>;
}