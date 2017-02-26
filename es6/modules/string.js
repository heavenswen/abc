//es6 string
"use strict";
let str = "字符串";
console.info(str);

//str.charAt(n);获取第n个字符
let s = str.charAt(0); //'字'

//includes()：返回布尔值，表示是否找到了参数字符串。
{
	let bool = str.includes(s); //true
	console.log('s是否在str中' + bool);
}
//startsWith()：返回布尔值，表示参数字符串是否在源字符串的头部。
{
	let bool = str.startsWith(s); //true
	console.log('s是否在str头部' + bool);
}
//endsWith()：返回布尔值，表示参数字符串是否在源字符串的尾部。

{
	let bool = str.endsWith("串"); //true
	console.log('s是否在str尾' + bool);
}

//repeat(n) 返回 原字符串重复n次
{
	let other = str.repeat(3);
	console.log(`repeat(3):${other}`)
}
//es7  padStart(),padEnd() 补全文字 (es6不支持)
{
	//	let str2 = str.padStart(3, 'aa');
	//	console.log(str2);//errer
}
//模版字符串 ``保持内容结构
{
	let str3 = `<p>字符串内容直接显示${str}</p>`;
	let str4 = `<p>字符串中带回车
	${s}回车</p>`;
	console.log(str4);
}
