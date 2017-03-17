/*
 * web基本配置 2017-03-01
 * fis3 release web //生产的项目
 * fis3 release wx //添加文件指纹解决微信缓存
 */
var release = './dist/'; //产出路径

/*相对路径*/
//fis.hook('relative');
//fis.match('**', {
//		relative: true
//	})
//// 开启模块化开发

// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
  //baseUrl: './module',
 extList: ['.js', '.jsx', '.es', '.ts', '.tsx']
});

//components下面的所有js资源都是组件化资源
fis.match('/components/**.js', {
	isMod: true
});
//关闭 fis3-componets
fis.unhook('components')
fis.hook('node_modules')

// 改用 npm 方案，而不是用 fis-components
fis.match('/node_modules/**.js', {
    isMod: true,
    useSameNameRequire: true
});
// 编译所有es6,typescript,jsx 的文件为 js
fis.match('/module/*.{js,vue,jsx}', {
	parser: fis.plugin('typescript', {
		sourceMaps: true
	}),
	rExt: '.js',
	isMod: true,
});

//支持 typescript、es6 或者 jsx 编译成 js。速度相比 babel 略快，但是 es7 跟进较慢。
fis.match('*.jsx', {
		parser: fis.plugin('typescript')
	})
	//编译es6 to es5
	//fis.match('./module/*.js', {
	//		parser: fis.plugin('translate-es6'),
	//		rExt: '.js'
	//	})
	//编译less文件
fis.match('*.less', {
		parser: fis.plugin('less-2.x'),
		rExt: '.css'
	})
	//编译scss文件
fis.match('*.scss', {
		parser: fis.plugin('node-sass'),
		rExt: '.css',
		useSprite: true
	})
	//允许你在 js 中直接 require css 文件。
fis.match('module/*.{js,es,es6,jsx,ts,tsx}', {
		preprocessor: fis.plugin('js-require-css')
	})
	//合并成单个资源
fis.match('::packager', {
	postpackager: fis.plugin('loader')
});

/*合并_公共文件*/
//fis.match(js, {
//	packTo: '/js/' + name + '.js',
//})
//fis.match(stylecss, {
//	packTo: '/css/' + name + '.css',
//})

//合并精灵图
fis.match('::package', {
	spriter: fis.plugin('csssprites'),
	//release:'/images/icon.png'
})

/*压缩*/

fis.match('*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
	optimizer: fis.plugin('png-compressor')
});

/*不发布*/
fis.match(release, {
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
	//_为嵌入模块，将不被发布
fis.match('_*.*', {
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
//将产出的文件过滤掉已被打包的。
fis.media('web').match('**', {
	deploy: [
		fis.plugin('skip-packed', {
			// 配置项
		}),

		fis.plugin('local-deliver', {
			to: release
		})
	]
})

//工作目录
fis.media('web').match('**', {
	deploy: [
		fis.plugin('skip-packed'),
		fis.plugin('local-deliver', {
			to: release
		})
	]
})
//除module的全部压缩
fis.media('web').match(/[^module\/]\/(.*)\.js/, {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});
//fis.media('web').match('*.js', {
//	// fis-optimizer-uglify-js 插件进行压缩，已内置
//	optimizer: fis.plugin('uglify-js')
//});
fis.media('web').match('*.css', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
	optimizer: fis.plugin('clean-css')
});
//weixin测试
fis.media('wx').match('js/*', {
	useHash: true, //文件指纹
})
fis.media('wx').match('css/*', {
	useHash: true, //文件指纹
})