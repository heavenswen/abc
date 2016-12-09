/*es6
 */
/*参数变量使用 let var const */
var obj = {
	"a": 1,
	"b": 2,
	"c": 3
};
var arr = [1, 2, 3, 4];

var [a, b, c, e] = ["a", "b", "c"]; //var a = "a",b = "b",c = "c"; 
//console.log(e);//undfined

//字符串的解构赋值   对应一个字符串时
var {
	length: l
} = "hello";

//console.log(l+":"+length)

let {
	k: v
} = {
	k: "bb"
}; //定义变量 获得对应 key的值
//console.log(v);//bb

//=> 表示回调（no object）
//arr.forEach(v => console.log(v));// 1,2,3,

//for of 直接导出 值（no object）
//for(let v of arr){ console.log(v)}//1,2,3

//key 在es6 中不能 直接for(key in arr);需要let 声名， const 常量将不可变

//默认参 name = ''

function value(name = '默认') {
	return name;
}
//console.log(value('react')); //(is null)?"默认":react;

//不定参数  ...x 

function function01(...x) {
	return x;
}
//console.log(function01(1,2,3));//[1,2,3];

//拓展参数 ...x

function function02(a, b, c) {
	//字符串和变量 字符串模板
	//console.log(`兼容字符串${a},${b},${c}`);

};

//function02(...arr); //兼容字符串${a},${b},${c}

//无次序 函数

function fun03({
	a,
	b,
	c
}) {
	//存入 一个对象 ，传人时需对应key
}

//定义一个类 class

class Animal {
	//ES6中新型构造器  q:传参数
	constructor(name = 'qiu', send = 's') {
			this.name = name;
			this.s = send;
		}
		//实例方法
	sayName() {
		//console.log(`My name is ${this.name} : ${this.s}`);
	}
}
//类的继承  Programmer extends
class Programmer extends Animal {
	constructor(name) {
		//直接调用父类构造器进行初始化
		super(name);
	}
	program() {
		console.log("I'm coding...");
	}
}

//var a = new Animal();//init
//a.sayName();//调用

/*模块化*/
// point.js

//声明一个模块module
//module "point" {
//  export class Point {
//      constructor (x, y) {
//          public x = x;
//          public y = y;
//      }
//  }
//}

// myapp.js
//声明引用的模块
//module point from "/point.js";

//这里可以看出，尽管声明了引用的模块，还是可以通过指定需要的部分进行导入
//import Point from "point";

//var origin = new Point(0, 0);
//console.log(origin);

/*新集合类型Map，Set 和 WeakMap，WeakSet*/

var s = new Set([1, 5, 6]); //array ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
let length = s.length // undefined 不能用s[n]引用
	//add(value)：添加某个值，返回Set结构本身。
s.add(1).add(2).add(3); //[1,5,6,2,3] 添加三个数
//delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
s.delete(5);
//has(value)：返回一个布尔值，表示该值是否为Set的成员。
let s_quire = s.has("1") //false  检测一个值是否存在 bool  ===
	//size 获得数目
let s_length = s.size; //5 获得对象数目 无法用 length 获得
//clear()：清除所有成员，没有返回值

//set内部的元素可以遍历for...of...
//for(let v of s) {
//	console.log(v)
//}
//WeakSet结构与Set类似， 也是不重复的值的集合。
//WeakSet和Set的区别：
//WeakSet的成员只能是对象， 而不能是其他类型的值
//WeakSet中的对象都是弱引用， 即垃圾回收机制不考虑WeakSet对该对象的引用， 也就是说， 如果其他对象都不再引用该对象， 那么垃圾回收机制会自动回收该对象所占用的内存， 不考虑该对象还存在于WeakSet之中。 这个特点意味着， 无法引用WeakSet的成员， 因此WeakSet是不可遍历的。（Q:只能存储？）

var m = new Map(); // object
//Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

//.set（key,value） 
m.set(obj, arr); //object(...)=>arrar(...)
m.set("key", 1); //"key"=>1
//console.log(m);//object(...)=>arrar(...),"key"=>1
//.get（key） 获取
let m_get = m.get("key"); //1
//size; length
let m_size = m.size;
//console.log(m_size);//2
//WeakMap可以参考WeakSet,

//遍历 map 会返回（key，value） 两个值
for(let [key, value] of m) {
	//console.log(key, value)
}
//获得只获得 value [,value];

//+圆括号问题  解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。（尽量不要使用圆括号）

/*字变量*/
//定义原型 __proto__
//定义方法无需function name(){}
//直接调用父级

//demo
var proto = {
	//定义一个方法
	name: 'proro',
	fun() {
		console.log(this.name);
	}
};
//新建对象
var n = {
	__proto__: proto, //继承
	title: "n",
	fun02() {
		console.log(this.title);
	}
};
//proto.fun(); //proto
//n.fun(); //proto
//n.fun02(); //n
/*字符串*/

/*数值 处理  number*/
//str.includes() //：返回布尔值，表示是否找到了参数字符串。
//str.startsWith() //：返回布尔值，表示参数字符串是否在源字符串的头部。
//str.endsWith() //：返回布尔值，表示参数字符串是否在源字符串的尾部。
//	//这三个方法都支持第二个参数，表示开始搜索的位置。
//repeat()//方法返回一个新字符串，表示将原字符串重复n次

//字符串模版 `string ${变量||函数}` //会将模版中的内容toString
//也可以用于 用户输入过滤
//let str = `显示一行字符串  '\n' ${arr}`;
//document.write(str);

/*正则*/
//RegExp(reg,修饰符)构造函数es5

//var reg = str.match(/\w/g);

//RegExp.escape()
//字符串必须转义， 才能作为正则模式。给一段字符串加反编译'\'

/*Number*/
//新增了Number.isFinite() 是否是有限数, Number.isNaN() 是否为 NaN 格式
//Infinity 无限

//Number.parseInt(), Number.parseFloat() // 原parseInt() 和 parseFloat（） 整合

//Number.isInteger() 是否为整数 
Number.isInteger(3.0) //true
Number.isInteger("15") //false

//Number对象上面，新增一个极小的常量Number.EPSILON
//Number.EPSILON的实质是一个可以接受的误差范围
// 2.220446049250313e-16

//安全整数和Number.isSafeInteger()

/*Math 计算 自动转换成number计算*/
Math.trunc(-0.21) //-0 去除小数
Math.sign() //方法用来判断一个数到底是正数、负数、还是零。
	//参数为正数，返回+1；
	//参数为负数，返回-1；
	//参数为0，返回0；
	//参数为-0，返回-0;
	//其他值，返回NaN。
Math.cbrt() //方法用于计算一个数的立方根。

//但是如果这个误差能够小于Number.EPSILON，我们就可以认为得到了正确结果。
/*第六类型  Sy
 * mbol*/