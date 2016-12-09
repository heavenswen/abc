/*本地存储 
 db:[
 	name:{object}
 ];三维存储
 * */

//创建数据db
(function() {
	window.storageDb = storageDb;

	function storageDb(db, arrobj) {
		if(!window.localStorage) {
			console.log('抱歉您的浏览器可能不能很好的显示页面');
			return false;
		}
		//判断是否需要创建数据库
		if(arrobj || !localStorage[db]) {

			this._init(arrobj) //创建存储
			
		} else if(!db) {
			console.log("数据库名为字符串")
		}

		this.datas = localStorage[db]; //数据库
		this.name = db; //数据库名
	};
	//转成可以存储的状态
	storageDb.prototype._object_string = function(arrString) {
			
			if(typeof arrobj != "string") {
				arrString = JSON.stringify(arrString); //转化成json
			}

			return arrString;
		}
		//初始化
	storageDb.prototype._init = function(obj) {
		
		var arrString = this._object_string(obj);
		
		localStorage.setItem(this.name, arrString); //创建存储
		
			
	};
		//读取db true转成string
	storageDb.prototype.data = function(bool) {
		var data = localStorage[this.name];
		var arrobj = data;
		if(!bool) {
			//转换成对象
			arrobj = arrobj?JSON.parse(data):[];
		}
		return arrobj; //返回一个对象
	};
	//添加数据（数据名，数据）
	storageDb.prototype.add = function(obj){
		var arrs = this.data();//获得对象
		if(!arrs)arrs = [];
		arrs.push(obj); 
		this._init(arrs);
		return this.data();
	};
	//修改数据(index)
	storageDb.prototype.query_index = function(index,obj){
		var arrs = this.data();//获得对象
		var arr = arrs[index];
		if(!arr){
			console.log(index+"不是一个有效对象  of"+this.name )
			return false;
		}
		for(key in obj){
			arr[key] = obj[key];
		}
		
		console.log(arrs);
	};
	//删除库
	storageDb.prototype.remove = function(){
		localStorage.removeItem(this.name)
	};
	//清空
	storageDb.prototype.clean = function(tables){
		return localStorage[this.name] = [];
	};
})(window)