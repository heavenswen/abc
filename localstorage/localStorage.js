/*本地存储 
 db{
 	data:[{1},{2}]
 }
 * */
if (!window.localStorage) {
	console.log('抱歉您的浏览器可能不能很好的显示页面');
}
//创建数据db
function storage_db(db, arrobj) {
	var arrString = arrobj;
	if (typeof arrobj != "string") {
		arrString = JSON.stringify(arrString);//转化成json
	}

	localStorage.setItem(db, arrString);//存储
	return (db+":"+arrString);
}
//读取db true转成string
function storage_read(db, bool) {
	var data = localStorage.getItem(db);
	if (!bool) {
		arrobj = JSON.parse(data);
	}else{
		console.log(db+"没找到！");
		return false;	
	}
	return arrobj;
}


//替换数据 表名，key查询 ，替换数据，最大条数
function storage_updata(db,key,value,arr,max){
	var data = storage_read(db);
	var datas = data.data,
		n = datas.length,
		m =max?max:5;
		console.log(datas)
	for(var i = 0;i<datas.length;i++)
	{
		if(datas[i][key] == value)
		{
			
			datas.shift(i);
			datas.push(arr);
			break;
		}else{
			
			n--;
		}
	}
	console.log(n+' '+m)
	if(n <1&&datas.length<m){
		
		datas.push(arr);
	}else{
		datas.shift(0);
		datas.push(arr);
	}
	data.data = datas;
	var arrobj =  data;
	return storage_db(db, arrobj)
		
}
//id查询更新
function storage_id(db,value,arr,max)
{
	return storage_updata(db,'id',value,arr,max);
}
//读取所以数据
function storage_all(bool) {
	var storage =localStorage,
		arrData =[],
		arrKay = [];
	for (var i = 0; i < storage.length; i++) {
		//key(i)获得相应的键，再用getItem()方法获得对应的值
		arrKay.push(storage.key(i))
		if(bool){
			arrData.push(storage.getItem(storage.key(i)))
		}else{
			var obj = JSON.stringify(storage.getItem(storage.key(i)));
			arrData.push(obj);
		}	
	} //获取所有数据
	var data = storage.length?[arrKay,arrData]:'';
	return data;
}
//删除db
function storage_del(db) {
	return localStorage.removeItem(db);
}
//清空数据
function storage_clean() {
 return localStorage.removeItem(db);
}