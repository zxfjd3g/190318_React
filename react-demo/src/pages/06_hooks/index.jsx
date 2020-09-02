import React, { Component, useState, useEffect} from 'react'

/* 
文档: https://zh-hans.reactjs.org/docs/hooks-intro.html
工厂函数组件与ES6类组件的区别
  1. 函数组件没有this, 类组件有this (组件实例对象)
  2. 函数组件没有state/props/refs属性, 类组件对象有
    state ==> 使用hooks语法   useState()
    props ==> 函数的参数就是props
    refs ==> 通过React.forwardRef()来得到并操作函数组件内的标签对象
  3. 函数组件没有组件生命周期回调(勾子)
    componentDidMount(): 在挂载显示后执行 ==> 执行一次性异步任务
    componentDidUpdate(): 在更新显示后执行  ==> 用得少
    componentWillUnmount(): 在组件卸载前执行 ==> 做一些收尾的工作
  
    使用hooks语法 useEffect()

Hooks
  理解: react提供的一些新语法(函数)
  作用: 让函数组件也可以有自己状态以及生命周期的处理(当然不止这些)
常用语法:
  useState(): 让函数组件有状态了, 向函数组件提供状态数据的读取和更新操作
      如果是立即调用, 使用 setCount(count + 2)
      如果延迟调用, 使用: setCount(count => count + 2)
  useEffect(): 相当于componentDidMount()来执行一些带副作用的操作, 
        常用的发ajax请求/启动定时器/订阅消息
  useRef(): 2个功能, 1.标识组件中的标签, 2.保存可变属性数据的容器
  useContext(): 在函数组件中得到Context容器对象中的value数据
*/

export default function Hook() {
  return (
    <>
      <Hooks1 />
      <br/>
      <br/>
      <Hooks2 />
    </>
  )
}

function Hooks1(props) {
  // 使用useState Hook
  /* 
  const [xxx, setXxx] = useState(initValue), 
    接收初始状态值, 返回包含内部存储的状态值和设置/更新状态值的函数的数组
    initValue只在第一次调用useState时才会被使用到
  */
  const [num, setNum] = useState(1)
  const [name, setName] = useState('tom')

  console.log('Hook1()', num, name)

  /* 
  功能: 页面的title实时显示count值
  使用: useEffect
    useEffect(()=> {}) 相当于重写componentDidMount() 和componentDidUpdate()
    useEffect(()=> {}, []) 相当于重写componentDidMount()
    回调函数返回的函数在组件死亡前执行 ==> 相当于componentWillUnmount()
  一般在effect回调中执行带副作的操作
    异步操作: ajax请求, 启动定时, 绑定监听, 订阅消息
    直接修改dom
    保存数据到浏览器存储
  setXxx()
    setXxx(newValue) 
      什么时候不能用: 在不监视任何state数据(第2个参数是[])的effect回调函数中不能使用
    setXxx(value => newValue)
      什么时候都可用

  注意: 
    多次调用useEffect(()=> {}, []) ==> 内部保存的第一个回调函数
    多次调用useEffect(()=> {}, [xxx]) ==> 如果xxx的值变化了保存最新的回调函数
    多次调用useEffect(()=> {})  ==> 内部总是保存新指定回调函数
  */
  useEffect(() => {
    console.log('useEffect callback()', num, name)
    document.title = num
  }, [num])

  /* 
  功能: 过2s后让数量增加3
  */
  useEffect(() => {
    console.log('useEffect callback2()')
    const timeoutId = setTimeout(() => {
      console.log('---------')
      setNum(num + 3)
    }, 3000)

    return () => { // 返回函数在组件死亡前执行 ==> 相当于componentWillUnmount()
      console.log('effect callback 返回的函数执行')
      clearTimeout(timeoutId)
    }
  }, [])

  /* 
  功能: 每隔1s, name就会右侧加上++
  */
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('+++++++', name)
      // setName(name + '++')
      // value就是内部存储的name值
      // 函数返回一个新的name值
      setName(value => value + '++')  // 一般在新值基本老值进行计算的
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  /* 
  Hook1()
    name: tom
  effect()
  setInterval(() => {
    name
  }, );
  */




  return (
    <>
      <h2>Hooks11标题</h2>
      <p onClick={() => setName(name + '--')}>name: {name}</p>
      <p>点击次数: {num}</p>
      <button onClick={() => setNum(num + 2)}>点击</button>
    </>
  )
}

function Hooks2(props) {
  return (
    <>
      <h2>Hooks22标题</h2>
      <input type="text" /> &nbsp;
      <button>点击插入</button>&nbsp;
      <button>点击生成一个新ID</button> 
    </>
  )
}
