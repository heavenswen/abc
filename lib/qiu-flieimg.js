function fileImg(obj,file_box){
				var file_box = document.getElementById(file_box);
				if(!window.FileReader)
				{
					file_box.innerHTML ="<small></small>浏览器版本过低！</small>";
					return false;
				};
				var	file = obj.files[0];	
				if(/image\/\w+/.test(file.type)){ 
             var reader = new FileReader();
             reader.readAsDataURL(file);
             reader.onload = function ( event ) { 
				var txt = event.target.result;
				var img ="<img src='"+txt+"'style='width:100%;'/>";
				file_box.innerHTML=img;
				};     
	        }else{
	        	alert("图片的格式错误！")
	        	return false;
	        }
}//fileImg
/*
*html5-FileReader读取文件。fileImg(this,file_box)
*/	