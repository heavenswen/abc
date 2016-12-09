<?php
	function imgload()  
	{
		echo time();
	}
?>	
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>懒加载</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
	</head> 
	<body>
		<ul>
			<li><img data-src="../images/dice.png?r=<?php imgload() ?>"/></li>
			<li><img data-src="../images/dice_02.png?r=<?php imgload() ?>"/></li>
			<li><img data-src="../images/img04.jpg?r=<?php imgload() ?>"/></li>
			<li><img data-src="../images/银联_03.jpg?r=<?php imgload() ?>"/></li>
			<li><img data-src="../images/银联_04.png?r=<?php imgload() ?>"/></li>
			<li><img data-src="../images/grey.gif"></li>
		</ul>
		<script src="//cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>			
		</script>
		<script type="text/javascript" src="q.loadLoad.js" ></script>
		<script  type="text/javascript">
			var set_src = "../images/logo_green.png";		
			var img = img_load('img',set_src)
		</script>
	</body>
</html>
