// 启用 es6-babel 插件，解析 .es6 后缀为 .js
fis.match('./modules/*.*', {
	rExt: '.js',
	parser: fis.plugin('es6-babel')
});

// 开启模块化开发
fis.hook('module');//模块化模式 本地地址模式是不行的

fis.match('modules/*.*', {
	isMod: true//自动模块化。只有在配置中的才能模块化
});

fis.match('::package', {
	postpackager: fis.plugin('loader')
});

//fis-parser-node-sass
fis.match('*.scss', {
	parser: fis.plugin('node-sass'),
	rExt: '.css',
	useSprite: true
})