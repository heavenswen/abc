<style>
	p{ text-indent:2em;}
</style>
<nav style='position:fixed;  background:#fff; border-bottom:1px solid #ccc; width:100%;top:0;'>
<a>api</a>
<a href='#js'>构造器</a></li>
<a href='#HTML'>模版指令</a></li>
<a href='#filter'>过滤器</a></li>
<a href='#push'>修饰符</a></li>
</nav>
<section id='js'>
<h2>初始化</h2>
<code>
var vm = new vue({
	el:"selected",//选择对象
	data:{
		//存放所有数据 vm.a=1; vm.$data
		a:1,
		b:"text",
		arr:[{key:1}],
	},
	created: function () {
		//创建实例后调用
		 console.log("vm init");
	 },
	methods:{
		//创建方法 vm.$methods
		functionName:function(){
			this.a++ //可以修改data内的数据
			
		}
	
	},
	watch:{
		//监听数据 vm.$watch("a",function(){});
		'a':function(val，oldVal){
			//这里监听了data.a
			console.log(val+"|"+oldVal);
		},
		"b": {
			//深度模式，子集响应
					handler: function(val, oldVal) { 
						db._init(vm.peoples); //浏览器存储
					},
					deep: true//深度模式
				}
	},
	filters:{
		//过滤器
		name:function(value){
			return name.length;
		}
	},
	computed:{
			//计算
		nameFunction:function(){
			
			return 100/2*0.6;
			
			}
					
	}
	
})
</code>
</section>

<dl id='html'>
<h3>html 模板指令</h3>

<dt>模块</dt>
<dd>&lt;template&gt; &lt;/template&gt; --模块</dd>

<dt>数据渲染</dt>
<dd>v-text='a'|| {{a}}, v-html='a'||{{a}},--数据渲染，{{*a}}--不回调 （2.0后改为v-once）</dd>

<dt>进行js表达式</dt>
<dd>{{a.split('').reverse().join('') }}--进行js表达式</dd>

<dt>判断</dt>
<dd>v-if='a',v-else--dom是否渲染
<p>{{#if a}}{{/if}}--模版</p>
</dd>
<dt>显示/隐藏</dt>
<dd>v-show='a',v-else --css绘制显示隐藏</dd>

<dt>循环</dt>
<dd>v-for='value in arr'||v-for='value of arr' ,, v-text='value.key'--按数组循环输出

<p>(2.0 多参数声明)for = "(value,key,index in arr)"--支持三个值 变量 ，key(键)， index(引索)</p>

<p>(2.0 声明参数)去除了functionName($index) 的用法，改成在声明循环的模版中先声明使用v-bind:index='' v-bind:key=''，再调用</p>
<p>
<code>
	<template v-for='(value,index in arr)' v-bind:index ='index'>
		<li v-text='value.' @click='functionName(index)'>
	</template>
</code>
</p>
<p>v-for ='n in 10'--整数循环</p>
</dd>

<dt>绑定事件</dt>
<dd>v-on:click='functionName($event)' ，@click='functonName'--事件绑定
<p>
(内联参数)@click = "functionName('string',$event)";--传 字符串'string' 和 event对象
</p>
</dd>


<dt>绑定样式</dt>
<dd>v-bind:class="a",:class="{{a}}",:class="{a:bool,'classStr',bool?'classStr':''}"--绑定属性
:class="{str:bool}"//当bool存在添加className='str';
:class="[str,str]"//赋值多个
）</dd>
</dl>
<div id='filter'>
<h3>过滤器</h3>

<p>Vue.js 允许在表达式后添加可选的“过滤器 (Filter) ”，以“管道符”指示：</p>

<p>{{ message | capitalize }}<p>
这里我们将表达式 message 的值“管输（pipe）”到内置的 capitalize 过滤器，这个过滤器其实只是一个 JavaScript 函数，返回大写化的值。Vue.js 提供数个内置过滤器，在后面我们会谈到如何开发自己的过滤器。

注意管道语法不是 JavaScript 语法，因此不能在表达式内使用过滤器，只能添加到表达式的后面。

过滤器可以串联：

<p>{{ message | filterA | filterB }}</p>
过滤器也可以接受参数：

<p>{{ message | filterA ('arg1',sarg2) }}</p>
<p>
过滤器函数始终以表达式的值作为第一个参数。带引号的参数视为字符串，而不带引号的参数按表达式计算。这里，字符串 'arg1' 将传给过滤器作为第二个参数，表达式 arg2 的值在计算出来之后作为第三个参数。
</p>
<h5>添加一个过滤器</h5>
<p>
//添加一个arraylength 过滤器
		Vue.filter('length', function(value) {
			return value.length;
		});
<p>
</div>
</section>
<section id='math'>
<h3 id='push'>修饰符</h3>
<p>
修饰符（Modifiers）是以半角句号 . 指明的特殊后缀，用于指出一个指定应该以特殊方式绑定。例如，.prevent 装饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：</p>
<code>
v-on:submit.prevent="onSubmit" --去除默认
@keyup.enter = ''--按键.回车键
</code>
<ul>
	<h5>事件修饰符</h5>
	<li>.stop --阻止事件冒泡</li>
	<li>.prevent -- 阻止默认事件</li>
	<li>.capture -- 添加事件侦听器时使用 capture 模式</li>
	<li>.self --只当事件在该元素本身（而不是子元素）触发时触发回调</li>
	<li>.native --监听一个原生事件
	<li>(串联使用).stop.prevent</li>
</ul>
<ul>
	<h5>按键修饰符 keyup</h5>
	<li>.enter--回车</li>
	<li>.tab --tab
	<li>.delete --delete or backspace
	<li>.esc --esc
	<li>.space --空格
	<li>.up --上
	<li>.down--下
	<li>.left --左
	<li>.right--右
	<div>直接使用keycode： :keyup.13='functionName'</div>
	<div>直接使用按键别名： :keyup.f1='functionName'</div>	
</ul>
<ul>
	<h5>表弟修饰符</h5>
	<li>.lazy--在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步.
	<li>.number--如果想自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值），可以添加一个修饰符 number 给 v-model 来处理输入值.
	<p>&lt;input v-model.number="age" type="number"&gt;</p>
	<li>.trim--如果要自动过滤用户输入的首尾空格，可以添加 trim 修饰符到 v-model 上过滤输入
</ul>
<hr />
<h2 style='text-align:center'>组件</h2>
<p>全局组件</p>
<code>
Vue.component('my-component', {
  // 选项
})
</code>
<p>组件在注册之后，便可以在父实例的模块中以自定义元素 <my-component></my-component> 的形式使用。要确保在初始化根实例 之前 注册了组件：</p>

<p>引用组件：</p>
<ol>
	<li>demo:<code>&lt;div id="example"&gt;&lt;my-component&gt;&lt;/my-component&gt;&lt;/div&gt;</code>
	<li>注册组件：
	<code>// 注册 
	Vue.component('my-component', {
 	 template: '<div>A custom component!</div>'
	})
</code>
<li>创建根实例
<code>
new Vue({
  el: '#example'
})</code>
</ol>
<p>局部组件</p>
<code>
var Child = {
  template: '<div>A custom component!</div>'
}
new Vue({
  // ...
  components: {
    // <my-component> 将只在父模板可用
    'my-component': Child
  }
})
</code>
DOM 模版解析说明

当使用 DOM 作为模版时 (例如，将 el 选项挂载到一个已存在的元素上), 你会受到 HTML 的一些限制, 因为 Vue 只有在浏览器解析 HTML 后才能检索模版。尤其像这些元素 <ul> ， <ol>， <table> ， <select> 限制了能被它包裹的元素， <option> 只能出现在其它元素内部。

在自定义组件中使用这些受限制的元素时会导致一些问题，例如：

<table>
  <my-row>...</my-row>
</table>
自定义组件 <my-row> 被认为是无效的内容，因此在渲染的时候会导致错误。变通的方案是使用特殊的 is 属性：

<table>
  <tr is="my-row"></tr>
</table>
需要注意的是这些限制不适用于在以下场景中使用字符串模版时

<script type="text/x-template">
JavaScript内联模版字符串
.vue 组件
因此，有必要的话请使用字符串模版
</section>