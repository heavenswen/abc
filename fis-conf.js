/*
 * web基本配置 2016-05-17
 */
var
	name = 'style', //js合并名称
	stylecss = '/css/_*.css', //公共css
	js = '/js/_*.js', //公共js
	releaseServer = '../changshuo/Public/cs/', //产出路径
	releaseUrl = '../FHZJ/cs_html/'; //产出路径

/*相对路径*/
fis.hook('relative');
fis.match('**', {
		relative: true
	})
	//// 开启模块化开发
	//fis.hook('module');//模块化模式 本地地址模式是不行的
	//
	//fis.match('modules/*.*', {
	//	isMod: true//自动模块化。只有在配置中的才能模块化
	//});
	//工作目录
fis.media('server').match('**', {
		deploy: [
			fis.plugin('skip-packed'),
			fis.plugin('local-deliver', {
				to: releaseServer
			})
		]
	})
	//工作目录
fis.media('web').match('**', {
		deploy: [
			fis.plugin('skip-packed'),
			fis.plugin('local-deliver', {
				to: releaseUrl
			})
		]
	})
	//fis3-parser-typescript es6 typescript
fis.match('*.jsx', {
	parser: fis.plugin('typescript'),
	rExt: '.js',
});
// .es6 最终修改其后缀为 .js
fis.match('es6/js/*.*', {
		parser: fis.plugin('translate-es6'),
		rExt: '.js'
	})
	//less to css
fis.match('*.less', {
		parser: fis.plugin('less-2.x'),
		rExt: '.css'
	})
	//fis-parser-node-sass
fis.match('*.scss', {
		parser: fis.plugin('node-sass'),
		rExt: '.css',
		useSprite: true
	})
	/*合并*/
fis.match('::packager', {
	postpackager: fis.plugin('loader', {
		allInOne: false //是否合并成唯一文件 css js
	})
});
/*合并_公共文件*/
//fis.match(js, {
//	packTo: '/js/' + name + '.js',
//})
//fis.match(stylecss, {
//	packTo: '/css/' + name + '.css',
//})

/*合并图片*/
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
	spriter: fis.plugin('csssprites'),
	//release:'/images/icon.png'
})

/*压缩*/
/*
fis.match('*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
});*/
/*
fis.media('server').match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});
fis.media('server').match('*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});
*/

/*不发布*/
fis.match(releaseUrl, {
	loaderLang: false,
	release: false
})
fis.match("fis-conf.js", {
	loaderLang: false,
	release: false
})

fis.match('*.{less,md,ini,log}', {
	loaderLang: false,
	release: false
})
fis.match('./dist/*', {
		loaderLang: false,
		release: false
	})
	//发布的时候忽略以下目录或文件
fis.set('project.ignore', [
	'output/**',
	'node_modules/**',
	'.git/**',
	'.svn/**',
	'package.json',
	'./dist/**'
]);
/*生成插件库*/
fis.media('dist').match('*.{css,js,png,gif,jpg,html,htm}', {
	release: false
})
fis.media('dist').match('**', {
	deploy: [
		fis.plugin('skip-packed'),
		fis.plugin('local-deliver', {
			to: './dist/'
		})
	]
})

/*weixin测试*/
fis.media('wx').match('js/*', {
	useHash: true, //文件指纹
})
fis.media('wx').match('css/*', {
	useHash: true, //文件指纹
})