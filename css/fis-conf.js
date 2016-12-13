//fis-parser-node-sass
fis.match('*.scss', {
	parser: fis.plugin('node-sass'),
	rExt: '.css',
	useSprite: true
})