const links = [
  {
    name: 'Home',
    children: [{
      name: 'Home', path: '/'
    }]
  },
  {
    name: 'UseState',
    children: [{
      name: 'use_state_demo', path: '/use_state_demo'
    }]
  },
  {
    name: 'UseReducer',
    children: [
      { name: 'use_reducer_demo1', path: '/use_reducer_demo1' },
      { name: 'use_reducer_demo2', path: '/use_reducer_demo2' },
      { name: 'useReducer代替redux', path: '/use_reducer_replace_redux' },
      { name: 'useReducer代替redux模块化', path: '/use_reducer_module' }
    ]
  },
  {
    name: 'UseContext',
    children: [
      { name: 'use_context_demo1', path: '/use_context_demo1' }
    ]
  },
  {
    name: 'useEffect',
    children: [
      { name: 'use_effect_demo1', path: '/use_effect_demo1' },
      { name: 'use_layout_effect_demo1', path: '/use_layout_effect_demo1' }
    ]
  },
  {
    name: 'useMemo',
    children: [
      { name: 'useMemoDemo1', path: '/use_memo_demo1' },
      { name: 'useMemoDemo2', path: '/use_memo_demo2' },
    ]
  },
  {
    name: 'useRef',
    children: [
      { name: 'useRefDemo1', path: '/use_ref_demo1' },
      { name: 'useforwardRefDemo1', path: '/use_forward_ref_demo' },
      { name: 'useImperativeHandle等价于setRef', path: '/set_ref_demo' }
    ]
  },
  {
    name: '自定义Hooks',
    children: [
      { name: 'HooksDemo', path: '/hooks_demo' }
    ]
  }



]

export default links