function img_load(obj,set_src){
	var _obj = document.querySelectorAll(obj),
		srcAll = [];
		
	if(_obj){
		for(var i = 0;i<_obj.length;i++)
		{	
			var img = new Image();
			var objec = _obj[i];
			var src = objec.getAttribute('data-src');
			if(img.complete){
				objec.src = src;
				console.log(src+":"+img.complete)
			}
			srcAll.push({'obj':_obj[i],'src':src});
			
		}
	}				
};
