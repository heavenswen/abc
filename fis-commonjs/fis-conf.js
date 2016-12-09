/*
 * web基本配置 2016-05-17
 */
var
	name = 'style', //js合并名称
	stylecss = '/css/_*.css', //公共css
	js = '/js/_*.js', //公共js
	releaseUrl = '../FHZJ/qiu-tp'; //产出路径

/*相对路径*/
fis.hook('relative');
fis.match('**', {
	relative: true
})

//发布工作目录
fis.media('web').match('**', {
		deploy: [
			fis.plugin('skip-packed'),
			fis.plugin('local-deliver', {
				to: releaseUrl
			})
		]
	})
//模块化
fis.hook('commonjs', {
  // 配置项
});

//编译
//fis-parser-node-sass
fis.match('*.scss', {
		parser: fis.plugin('node-sass'),
		rExt: '.css',
		useSprite: true
	})
	//less to css
fis.match('*.less', {
		parser: fis.plugin('less-2.x'),
		rExt: '.css'
	})
	//fis3-parser-typescript es6 typescript
fis.match('*.jsx', {
	parser: fis.plugin('typescript'),
	rExt: '.js',
})

/*合并*/
fis.match('::packager', {
	postpackager: fis.plugin('loader', {
		allInOne: false
	})
});
/*合并_公共文件*/
fis.match(js, {
	packTo: '/js/' + name + '.js',
})
fis.match(stylecss, {
	packTo: '/css/' + name + '.css',
})

/*合并图片*/
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
	spriter: fis.plugin('csssprites')
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

/*不发布*/
fis.match(releaseUrl, {
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
fis.media('wx').match('./{js,css}/*', {
	useHash: true, //文件指纹
})