## 创建虚拟DOM的2种方式
	js: React.createElement(type, [props], [...children])
	jsx: <h1 id={myId}>{content}</h1>
	注意: 浏览器不认识jsx语法代码, 需要使用babel编译成js代码才能运行

## 比较虚拟DOM与真实DOM
	虚拟DOM是一个更轻的一般JS Object对象
	只是更新虚拟DOM界面不会更新, 但真实DOM更新界面会更新
	虚拟DOM最终会生成对应的真实DOM (虚拟DOM是真实DOM的重要信息的描述对象)

## JSX
	javascript + XML   // 标签名可以是任意的
	作用: 创建虚拟DOM(对象)
	语法:
		以<开头, 以>结尾, 就会以标签来解析
		如果标签名是小写开头, 当做html解析 ==> 如果不存在报错
		如果标签名是大写开头, 当做组件解析 ==> 如果不存在报错
		以{开头, 里面的代码当做js代码解析  {js表达式}  ==> 动态属性值/动态标签体文本
	动态数据列表显示: 根据数据的数组生成标签的数组 array.map()

## 定义/创建组件的2种方式
	工厂函数组件 => 简单组件(无状态, 不会创建组件实例对象)
	ES6类组件 => 复杂组件(可以有状态, 会创建组件实例对象)

## 类组件对象的三大属性
## state
	作用: 用来控制界面的显示/更新的数据来源
	使用:
		初始化: state = {xxx: value}
		读取: this.state.xxx  => 可以使用解构语法
		更新: this.setState({xxx: value2})
	解决组件中自定义的方法的this是undefined问题?
		箭头函数  ==> 项目开发常用
		bind() ==> 用得少