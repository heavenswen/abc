// npm install [-g] fis3-hook-commonjs

/*相对路径*/
fis.hook('relative');
fis.match('**', {
	relative: true
})

fis.hook('commonjs');
fis.match('/mod/*.js', {
	isMod: true, // 设置 mod 下都是一些组件，组件建议都是匿名方式 define
	//release: '/js/$0'
});

fis.match('::package', {
	// npm install [-g] fis3-postpackager-loader
	// 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
	postpackager: fis.plugin('loader', {
		resourceType: 'commonJs',
		useInlineMap: true // 资源映射表内嵌
	})
})

/*压缩*/
fis.match('*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
});
fis.match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});
fis.match('*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});

// fis3 release prod 产品发布，进行合并
//fis.match('*.js', {
//		packTo: '/static/aio.js'
//	});

//工作目录
fis.media('web').match('**', {
	deploy: [
		fis.plugin('skip-packed'),
		fis.plugin('local-deliver', {
			to: '/web/'
		})
	]
})