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

## props
	props的2个操作
	    1). 在组件外部, 向组件标签传入标签属性 <Person xxx={xxx}>
	    2). 在组件内部, 读取标签属性: this.props.xxx
	限定属性的属性名/属性值类型/属性必要性: static propTypes = {}
	限定属性的默认值: static defaultProps = {}
	一次性给组件标签传入多个属性: {...p}  ==> 将对象的所有属性分别传入组件

## refs
	作用: 标识组件中的一个特定的标签(html/组件) ==> 得到标签对象进而操作它
	使用:
		创建ref容器对象: contentRef = React.createRef()
		将ref容器传递给要标识的标签: <input ref={this.contentRef} />  
				// react会自动将标签对象保存到ref容器对象的current属性
		通过ref容器读取得到标签对象: this.contentRef.current

## event
	绑定监听: onXxx={this.handleClick}
	回调函数接收一个event对象
	react中的事件是合成事件
       	处理了浏览器对事件处理的不同(兼容处理)
       	在有的事件上响应时机不一样, 如change事件(相当于原生的input)
		内部使用了事件委托来提高事件处理效率
	如何向事件回调中传入自己的数据(3种方式)
		在外面包一层函数作为事件回调函数: (e) => this.fn('abc', e) fn(msg, e) {// 处理}
		利用bind来强制预设参数   this.fn.bind(this, 'abc')   fn(msg, e) {// 处理}
		返回事件回调函数的函数  this.fn('abc')  fn (msg) => (e) => {// 处理}

## form表单处理: 受控组件与非受控组件
	非受控组件: 输入过程中不收集数据, 点击提交时才读取输入框的数据  ==> 用得少
	受控组件: 输入过程收集数据(state + value + onChange), 点击提交只需要读取state数据
	事件监听回调函数想接收自定义的数据
		1) 在绑定监听时, 在外面包一层函数, 在函数体内调用处理事件的函数, 并传入想传的数据
		2).使用高阶函数/函数柯里化封装

		function sum (a, b, c) {
			
			return a + b + c
		}
		sum(1, 2, 3)
		
		function sum2(a) {
			//做一些操作
			return function (b) {
				// 做一些操作
				return function (c) {
					// 做一些操作
					return a + b + c
				}
			}
		}
		const f1 = sum2(1)
		const f2 = f1(2)
		f2(3)