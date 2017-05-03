// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Base = {
	template: '<div>使用router-view 输出 </div>'
};

//$route.params 外，$route 对象还提供了其它有用的信息，例如，$route.query（如果 URL 中有查询参数）、$route.hash 等等。你可以查看 API 文档 的详细说明。
const Data = {
	template: "<div>传参$route{{ $route.params }}</div>"
};
//路由嵌套
const Child = {
	//设置一个内部过渡
	template: '<div>路由嵌套：<transition name="fade"><router-view></<router-view></transition></div>'
}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。

const routes = [{
		//路径 string
		path: '/base',
		//模版 object
		component: Base,
		//重定向 string 'path' || object{name:'name'} || function
		//redirect: '',
		//别名 string 
		//a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
		//alias:"",
		beforeEnter: function(to, from, next) {
			//局部钩子
			return next()
		},
		beforeRouteEnter(to, from, next) {
			// 在渲染该组件的对应路由被 confirm 前调用
			// 不！能！获取组件实例 `this`
			// 因为当钩子执行前，组件实例还没被创建
		},
		beforeRouteUpdate(to, from, next) {
			// 在当前路由改变，但是该组件被复用时调用
			// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
			// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
			// 可以访问组件实例 `this`

		},
		beforeRouteLeave(to, from, next) {
			// 导航离开该组件的对应路由时调用
			// 可以访问组件实例 `this`
		}

	}, {
		//『路径参数』使用冒号 : 标记
		path: "/get/:id",
		name: "get", //也可以用name 来命名
		component: Data
	}, {
		//多参数
		path: "/get/:id/post/:even",
		component: Data,
	}, {
		//多个视图
		path: "/more",
		//多个模版使用components
		components: {
			default: Base, //没有命名 为 default
			main: Data
		}
	}, {
		//嵌套路由
		path: "/child",
		component: Child,
		children: [
			//子集路由
			{
				//为空时会直接加载
				path: "",
				component: {
					template: "<div>path为空 直接加载</div>"
				}
			}, {
				// 当 /[parentname]/[cellname] 匹配成功，
				// component 会被渲染在 parent 的 <router-view> 中
				path: "cell",
				component: {
					template: "<div>子集内容匹配 path:cell </div>"
				}
			}
		]
	}

];

// 3. 创建 router 实例，然后传 `routes` 配置
//*一个页面只会有一个路由
var router = new VueRouter({
	routes: routes, // 相当于 routes（缩写）,
	scrollBehavior(to, from, savedPosition) {
		// return { x: 0, y: 0 }期望滚动到哪个的位置
		//仅当 popstate 导航 可用
		//滚动锚点
		if(to.hash) {
			return {
				selector: to.hash
			}
		}
	}
});
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
const app = new Vue({
	data:{
		data:111
	},
	router: router,
	watch: {
		"$route": function(to, from) {
			//路由变换时执行
			//console.log(["$route", to, from])
			console.log(this.$route.matched)
		}
	}
}).$mount('#app')

//直接跳转到 /get/:id
router.push({
		name: "get",
		params: {
			"id": "id"
		},
		query: {
			"a": 111,
			"b": 222
		}
	}) // #/get/id?a=111&b=222

//全局钩子router.beforeEach
//当一个导航触发时，全局的 before 钩子按照创建顺序调用。
//router.beforeEach((to, from, next) => {
//// ...
//})