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

## 组件对象的生命周期
	1). React组件对象生命周期的3个阶段  (为了面试)
		1.初始化阶段
			constructor
			componentWillMount
			render
			componentDidMount
	
		2.更新阶段
			当前组件setState()更新
				shouldComponentUpdate   // 返回true下面3个方法就会执行, 否则不会执行
				componentWillUpdate
				render
				componentDidUpdate
			当前组件forceUpdate()更新 // 一定更新, 不经过是否应该更新的判断
				componentWillUpdate
				render
				componentDidUpdate
			父组件更新 setState()/forceUpdate()
				componentWillReceiveProps
				shouldComponentUpdate
				componentWillUpdate
				render
				componentDidUpdate
	
		3.卸载阶段: ReactDOM.unmountComponentAtNode() / 父组件不再渲染子组件
			componentWillUnmount
	
	2) 重要的几个勾子
		constructor: 创建组件实例对象时调用
		render: 必须有, 返回要渲染显示的虚拟DOM
		componentDidMount(): 执行一次性异步任务: ajax请求/定时器/绑定监听/订阅消息
		componentWillUnMount: 做一些收尾的工作: 清除定时器/解绑监听/取消订阅
		shouldComponentUpdate: 组件优化时使用 ==> PureComponent
	
	3). 不安全的几个方法  ==> 用得很少 (了解)
		componentWillMount()
		componentWillReceiveProps()
		componentWillUpdate()
	4). 新版本的生命周期多了2个方法  ==> 用得很少 (了解)
		static getDerivedStateFromProps()
		static getSnapshotBeforeUpdate()


## react/vue中的key的作用/内部原理  (面试)
	2). 为什么列表的key尽量不要用index
	
	分析: 在更新时, key用来决定根据虚拟DOM如何得到真实DOM(复用用原本或新创建)
		如果新的虚拟DOM的key在老虚拟DOM中有对应的key, 复用原来对应的真实DOM, 如果数据内容有变化, 更新真实DOM
		如果新的虚拟DOM的key在老虚拟DOM中没有对应的key, 创建一个新的真实DOM并指定其数据
	要想效率高/没有效果问题: 同一个数据对象, 即使内部数据改变了, 也要保证其key值不要变化
	如果用下标作为key, 只要做添加/删除/排序操作, 就会导致数据对象的key值发生变化 
		==> 有可能需要新创建/复用别的数据的真实DOM
	如果用id作为key, 做添加/删除/排序操作, 不会改变数据对象的key值  ==> 就可以复用原本对应的真实DOM

## 使用react脚手架
	下载: npm i -g create-react-app
	创建项目: create-react-app react-app
	开发环境运行: yarn run start
	生产环境打包运行: yarn run build / serve build (npm i -g serve)

	react组件中图片必须通过import先引入后再使用
	组件中的class只能写成className, style必须指定为{{}}
	PWA: 在离线状态下可以访问(内部自动做了一些浏览器端的页面存储) ==> 必须在生产环境下才可以
	React.StrictMode: 对react的语法进行检查, 一旦写了不太好的语法就提示  ==> 必须在开发环境

## 组件化编码实现一个功能界面的基本流程
	1). 拆分组件: 拆分界面, 抽取定义组件
		App
			Header
			List
				Item
			Footer
	2). 实现静态组件: 组合使用组件实现静态界面
	3). 实现动态组件
		a. 初始化动态显示
			设计state数据
				类型: [{id, title, complete}]
				名称: todos
				保存在哪个组件?  看是哪个组件使用还是哪些组件使用   ==> App
			显示: 将状态数据传递给相应的组件读取显示
		b. 交互
			添加
			鼠标移入移出处理
			删除一个todo
			勾选/不勾选一个todo
			全选/全不选
			删除所有选中的

## 如何自定义create-react-app的配置
	0) 目标
		指定模块路径别名@
		禁用eslint
	1). 暴露其配置后再修改
		yarn run eject
		修改暴露出来的webpack相关配置
	2). 利用第三方工具包, 来扩展配置
		下载: yarn add react-app-rewired customize-cra
		配置启动命令:
			  "scripts": {
				-   "start": "react-scripts start",
				+   "start": "react-app-rewired start",
				-   "build": "react-scripts build",
				+   "build": "react-app-rewired build",
				-   "test": "react-scripts test",
				+   "test": "react-app-rewired test",
				    "eject": "react-scripts eject"
				}
		添加扩展配置: config-overrides.js
			const {
			  override,
			  disableEsLint,
			  addWebpackAlias
			} = require("customize-cra");
			const path = require("path");
			
			module.exports = override(
			  // 禁用eslint
			  disableEsLint(),
			
			  // 配置模块路径别名
			  addWebpackAlias({
			    '@': path.resolve(__dirname, 'src') // src的绝对路径
			  })
			);	

## 区别ajax请求与一般HTTP请求
    ajax请求是一种特别的http请求: 只有通过XHR/fetch发送的是ajax请求, 其它都是一般HTTP请求
    对服务器端来说, 没有任何区别, 区别在浏览器端
    浏览器端发请求: 只有XHR或fetch发出的才是ajax请求, 其它所有的都是非ajax请求
    浏览器端接收到响应
        一般请求: 浏览器一般会直接显示响应体数据, 也就是我们常说的刷新/跳转页面
        ajax请求: 浏览器不会对界面进行任何更新操作, 只是调用监视的回调函数并传入响应相关数据

## 发送ajax请求:
	使用什么发ajax请求?
		原生XHR
		jQuery
		axios
		原生fetch + 兼容包

	什么时候发ajax请求?
		componentDidMount()
		事件回调函数

## 配置代理解决ajax跨域
	方式一: 在package.json中配置
		"proxy": "http://localhost:4000"
		不足: 只能配置一个后台服务器(单一代理后台)
	方式二: 利用http-proxy-middlewares配置多个代理后台
		创建代理的配置文件: src/setupProxy.js
			const proxy = require('http-proxy-middleware');
			module.exports = function (app) {
			  app.use('/api', proxy({
			    target: ' http://172.16.30.166:8000',
			    pathRewrite: {
			      '^/api': ''
			    },
			    changeOrigin: true,
			  }));
			};
		在入口js中引入加载
			import './setupProxy'

## 共享state数据定义在哪个组件
	props方案
		状态提升: 如果是某个组件用就放在这个组件内, 如果是某些组件用放在共同的父组件中
	pubsub方案
		数据放在需要显示的组件内, 再通过PubSub分发给需要这个数据的其它组件
	redux方案
		多个组件共享(用)的数据交给redux管理: 有的组件要读, 有的组件要更新, 都需要找redux的store对象


## 更新状态(state/data)数据
	vue中: 
		直接更新目标数据即可: this.xxx = value
	React中:
		必须通过this.setState({xxx: value})来更新
		不要直接修改state数据, 而要指定一个新的数据(很可能依赖于原来state数据)

## React组件间通信
	1) props
		父子组件间相互通信
		父 --> 子: 非函数props  父组件将数据交给子组件是让子组件读取显示, 不能直接更新
		子 --> 父: 函数props 子组件调用父组件传入的函数, 将数据以参数的形式传递父组件,从而更新父组件数据
		问题: 祖孙组件/兄弟组件会比较麻烦
	
	2) refs
		父子组件间通信: 父组件主动进攻
		父组件得到子组件对象, 从而可以读取其状态数据或调用其方法更新其状态数据
	
	3) pubsub
		任意组件间(非父子组件)通信
		订阅消息(接收数据): 
			const token = PubSub.subscribe('msgName', (msgName, data) => {});
			const token2 = PubSub.subscribe('msgName', (msgName, data) => {});
		发布消息(发送数据): PubSub.publish('msgName', data)
		取消订阅: PubSub.unsubscribe(token/msgName);

	4) Context  ==> provider&inject

	5) redux	

## ES6常用新语法
	1) 定义常量/变量:  const/let
	2) 解构赋值: const {a, b} = this.props   import {aa} from 'xxx'  function ({name, age}) {}
	3) 对象的简洁表达: {a, b, c(){}}
	4) 箭头函数: 
		a.常用场景
			* 组件的自定义方法: xxx = () => {}
			* 参数匿名函数
		b.优点:
			* 简洁
			* 没有自己的this,使用引用this查找的是外部this
			* 不能创建实例对象
	5) 扩展(三点)运算符: 拆解对象(const MyProps = {}, <Xxx {...MyProps}>)  [a, ...b]  {...obj}
	6) 类:  class/extends/constructor/super/static
	7) ES6模块化:  export default | import
	8) promise / async&await

## react-router-dom
	作用: 实现基本react的SPA
	相关的组件:
		HashRouter: hash路由, 路径带#, 
				刷新路由路径, #路径部分不提交, 提交的总是根路径, 得到index页面, 加载js解析#路径得到对应的路由组件显示
		BrowserRouter: history路由, 路径不带#, 刷新路由路径提交完整路径 ==> 404 ==> 配置webpack/nginx返回index页面
		Route: 配置路由, path/compoent
		Switch: 不用Switch会渲染所有指定<Route>, 而使用Switch只渲染匹配的第一个路由的<Route>
		Redirect: 重定向指定路径, 匹配任意, 一般放在最后==> 前面都不匹配就使用它
		NavLink: 导航路由链接, 当前路由链接就会有特定类名, 用来定义特定样式
		Link: 一般路由链接, 所有都一样, 用于不需要指定当前路由链接的特定样式的情况
	相关对象或函数:
		props.history: 对象, 包含控制路由跳转的一些方法, 如: push()/replace()/goBack()
		props.location: 对象, 包含路由相关信息的对象, 如: pathname / search / state
		props.match: 对象, 包含路由相关信息的对象, 如: params
		
		withRouter: 函数, 包装非路由组件返回一个新组件 ==> 向非路由组件传递上面3个属性
				==> 如果一个非路由组件要操作路由, 就需要用withRouter包装
	
	跳转路由的2种方式
		声明式: 通过路由链接点击跳转  ==> 用于跳转前没有逻辑处理的场景
		编程式: 通过history.push()/replace() ==> 用于跳转前有逻辑处理的场景
	
	携带参数的3种方式
		params: n个字符串   ==> 用得最多
			携带数据: /home/message/detail/12/abc  
			读取数据: this.props.match.params.id
			注意: 注意路由时指定标识名称  /home/message/detail/:id/:xxx
		query: n个字符串  ==> 用得少
			携带数据: /home/message/detail/12/abc?name=tom&age=12
			读取数据: this.props.location.search  ==> ?name=tom&age=12
			注意: 得到数据不能直接使用, 需要手动处理 ==> 可以使用qs工具包
		state: 一个任意类型数据, 一般是对象或数组 ==> 用得少些
			携带数据: this.props.history.push(path, state数据对象/数组)
			读取数据: this.props.location.state
			注意: history模式才可用, hash模式不可用
	
	组件一个特别的props: children
		是谁? 组件标签体内容
		值是多少?
		  字符串   ==> 组件标签体是文本
		  标签对象  ==> 组件标签体是一个标签
		  标签对象的数组 ==> 组件标签体是多个标签
	
	路由匹配的2种模式:
		模糊匹配(默认): 请求的路径只是前面部分与路由的path相同就匹配了 ==> 对于多层嵌套的路由是必要的
		完全匹配: 只请求路径与路由的path完全相同才匹配了 ==> <Route exact> ==> 多级路由路径对应同一级路由组件

## 使用antd
	在create-react-app创建的项目中来引入antd
	基本配置使用
		下载antd: yarn add antd
		引入需要使用组件进行使用: import {Button} from 'antd'
		引入antd的css样式: import 'antd/dist/antd.css'
	高级配置使用(参照课件文档实现)
		按需引入打包
			下载: yarn add babel-plugin-import
			配置: 
				fixBabelImports('import', { // 使用babel-plugin-import
				    libraryName: 'antd', // 只针对antd库
				    libraryDirectory: 'es', // 在es目录下查找组件的js
				    style: 'css', // 自动打包组件的对应的css
				}),
		自定义主题样式
			下载: yarn add less less-loader
			配置:
				 fixBabelImports('import', {
				   	...
				    style: true, // 编译less
			  	}),
				addLessLoader({	// 添加less配置
					lessOptions:{
				        modifyVars: { '@primary-color': '#1DA57A'}, // 修改antd中less源码中的主颜色变量的值
						javascriptEnabled: true,
					}
				}),

## redux理解
	用来管理多个组件共享状态的工具包/库
	它不是react的插件, 但一般与react配合使用

## redux的基本使用
	下载: yarn add redux
	redux
		store: 对象 ===> 内部管理reducer函数和state数据 								==> 等同于store
			getState(): 用于得到内部状态数据											==> 相当于.state
			dispatch(action对象): 分发action ==> 触发reducer调用产生新的state数据		==> 相当于dispatch(actionName, data)
			subscribe(listener): 监视store内部state数据的改变  ==> 用于在回调中更新组件
		reducer: 函数 ==> 接收当前的state数据和指定的action对象来计算产生新的state数据   ==> 相当于mutation
		actions: 工厂函数 ==> 用于产生action对象的action creator
		action-types: 包含action对象的type名称常量									==> 相当于mutation-types

	App.jsx
		引入store对象
		得到状态数据: store.getState()
		更新状态数据: store.dispatch(action对象)
		订阅状态改变监听更新组件: store.subscibe(() => {this.setState()})
		
	问题:
		1)redux与react组件的代码耦合度太高: 直接在组件中使用了store
		2)编码不够简洁

## 使用react-redux
	作用: 专门用来简化react应用中使用redux的react插件
	下载: yarn add react-redux
	使用 Provider
		<Provider store={store}><App/></Provider>
		作用: 向基所有任意层级的后后代容器组件提供store
	使用connect
		connect(
			state => ({ // 将对象中的所有属性传递给UI组件App(一般属性), 属性值从store中的state中读取
				count: state
			}),
	
			dispatch => ({ // 将对象中的所有函数传递给UI组件App(函数属性), 一旦执行函数就会dispatch()更新store的state
				increment: number => dispatch(increment(number)),
				decrement: number => dispatch(decrement(number)),
			})
		)(App)		
	
		connect(
			state => ({
				count: state
			}),
	
			{
				increment, // 内部传递给App是: increment: (...args) => dispatch(increment(...args))   参数透传
				decrement // 内部传递给App是: decrement: (...args) => dispatch(decrement(...args))
			}
		)(App)	
	
		区别容器组件与UI组件
			UI组件
				主要做界面显示, 不直接与redux(store)通信, 不直接使用任何redux相关API
				通过接收一般属性得到store中的状态数据显示
				通过接收函数属性, 内部调用它来更新store中的状态数据==> 更新组件
			容器组件
				通过connect产生的组件: connect()(UI组件) 返回的是容器组件
				是redux与UI组件之间进行通信的桥梁(连接者):  
				负责向UI组件传递一般属性, 属性值从state中读取
				负责向UI组件传递函数属性, 函数内部调用dispatch()==>reducer调用 ==> 产生新状态数据 ==> 更新组件
					class ContainerComp {
						render () {
							return <UIComp count={}  increment={} decrement={}/>
						}
					}
			
		高阶函数:
			接收的参数是函数
			返回值是函数
		高阶组件:
			一个特别的高阶函数: 接收的参数是组件, 且返回的也是组件
		connect就是高阶函数, 但不是高阶组件
		connect函数返回的函数才是高阶组件
		注意: 交流时常说: connect高阶组件
	问题:
		redux本身不支持异步操作

## redux-thunk
	作用: 实现redux异步编码
	下载: yarn add redux-thunk
	使用:
		应用上异步中间件: createStore(reducer, applyMiddleware(thunk))
		定义异步action creator: 
			incrementAsync = (number) => {
			 return dispatch => {
			  // 执行异步操作
			  // 完成后, 分发同步action
			 }
			}
		区别同步action与异步action
			同步action: 对象类型 {type: 'xxx', data: value}
			异步action: 函数类型 dispatch => {执行异步代码, 完成后, dispatch(同步action对象)}

## 应用上redux调试工具:
	下载redux的chrome
	下载工具包: yarn add -D redux-devtools-extension
	编写应用代码: 
		process.env.NODE_ENV==='production' ? applyMiddleware(thunk)
		 : composeWithDevTools(applyMiddleware(thunk)) 

## 整合多个reducer
	合并多个reducer:
		combineReducers({
		  count,
		  user
		})
	总state的结构: 包含所有子reducer的状态数据的对象
		{
			count: 1,
			user: {username, age}
		}
	组件中看到的state就是总的state

## 将users练习改造成redux的版本
	compoents
		Search.jsx
		Main.jsx
	redux
		store.js
		reducers.js
		actions.js
		action-types.js
	App.jsx
	index.js

	管理的状态数据:
		firstView: true, // 是否显示第一个界面
	    loading: false, // 是否存在加载中
	    users: [], // 搜索得到的用户列表
	    errorMsg: '', // 请求错误提示信息


## 纯函数
	1)一类特别的函数: 只要是同样的输入(参数)，必定得到同样的输出(返回值)
	2). 要求:
		1.不要修改参数对象返回, 而要产生一个新的对象返回
		2.不要读取/修改外部数据
		3.只是根据传入函数进行计算得到一个你想要的结果数据
	3). 例子
		纯函数: reducer函数
		非纯函数: Date.now()

	arr.reduce(reducer函数, initValue)
	arr.reduce((pre, item) => newPre)

## 使用装饰器简化高阶组件的使用
	下载插件包: @babel/plugin-proposal-decorators
	配置插件: config-overrides.js中: addDecoratorsLegacy()
	使用: 
		装饰connect高阶组件: @connect(null, {search})
		装饰withRouter高阶组件: @withRouter
	装饰器语法的本质:
		@decorator
		class A {}
		// 等同于
		class A {}
		A = decorator(A) || A

		@withRouter
		Header = withRouter(Header)