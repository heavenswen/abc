import Vue from "vue" 
import jsx from "./jsx.html"

const app = new Vue({
	el:"#app",
	render(h){
		return jsx
	}
})
