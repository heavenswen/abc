//require('./modules/let');//变量

require('./modules/string');
require('../js/jq_demo.js');
require("../css/index.css");
require("../css/common.scss");
let promise = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});

promise.then(function() {
	console.log('Resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// Resolved