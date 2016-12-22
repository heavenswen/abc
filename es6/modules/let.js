'use strict'
//let var const set map 

//用来定义局部变量
let a = "变量";

console.info(a);

//便捷赋值 
{
	var [b, c] = [1];

	console.log(`[b, c] b=${b},c=${c}`); //1,undefined
}
//指定赋值
{
	let {
		b,
		c,
		d
	} = {
		b: 1,
		c: 2
	};

	console.log(`{b,c,d} b=${b},c=${c},d=${d}`); //1,2,undefined
}
//常量 只读
const d = 8;
//d = 100;//error

//array ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
{
	let s = new Set([1, 5, 6]);
	console.log(`s = ${s} `)

	//传统array 的prototype
	console.log(`s length:${s.length}`); //undefined
	console.log(`s type:${typeof s}`); //object
	console.log(`s[0]:${s[1]}`); //不能读取属性
	//不支持arr惯用的方法属性

	//.size();返回set的数目
	console.log(`s.size = ${s.size}`); //3

	//.add(value)：添加某个值，返回Set结构本身。
	s.add(1).add(2).add(3);
	console.log(`s.add():${s.size}`); //object

	//delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
	s.delete(5);
	console.log(`s.delete():${s.size}`); //object
	
	//.has(value)：返回一个布尔值，表示该值是否为Set的成员。
	console.log(`s.has(1):${s.has(1)}`);//bool
	
	//.clear() 清空
	//console.log(`clear():${s.clear()}`)//uundefined
	
	//read 遍历for...of... or s.forEach
	for(let v of s){
		console.log(`s for: ${v}`);
	}
	s.forEach((v,k)=>console.log(`forEach ${v} ${k}`));
	//array结构时key = value; 
	
	//Map 新型的对象
	let m =new Map();
	//Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
	console.log(m)//map{}
	//m.add(1); error
	console.log(`map.size:${m.size}`);//0 支持数目
	
	//.set（key,value） 设置数组返回对象
	m.set(s, [1, 2, 3]);
	m.set(11,12);
	console.log(m)//map {object(...)=>arrar(...)}
	
	//.get（key） 获取
	let g = m.get(s);
	console.log(`get:${g}`);
	
}
//WeakSet结构与Set类似， 也是不重复的值的集合。
//WeakSet和Set的区别：
//WeakSet的成员只能是对象， 而不能是其他类型的值
//WeakSet中的对象都是弱引用， 即垃圾回收机制不考虑WeakSet对该对象的引用， 也就是说， 如果其他对象都不再引用该对象， 那么垃圾回收机制会自动回收该对象所占用的内存， 不考虑该对象还存在于WeakSet之中。 这个特点意味着， 无法引用WeakSet的成员， 因此WeakSet是不可遍历的。（Q:只能存储？）

