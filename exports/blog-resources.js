(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = angular.module("blog-resources", [])
	.service("Blogs", require("./resources/Blogs"));	

},{"./resources/Blogs":2}],2:[function(require,module,exports){
module.exports = function () {
	return {
		query: function (params) {
			return [{
				title: "Blog Entry 1",
				summary: "some text about a summary",
				author: "Andrew Silluron",
				date: new Date(),
				content: "This is the content of blog entry 1, it really is"
			},{
				title: "Blog Entry 2",
				summary: "second summary",
				author: "Marcus Tractor",
				date: new Date(),
				content: "This is the content of blog entry 1, it really is"
			},
			{
				title: "Blog Entry 3",
				summary: "some text about a summary",
				author: "Darrel Yutes",
				date: new Date(),
				content: "This is the content of blog entry 1, it really is"
			},{
				title: "Blog Entry 4",
				summary: "some text about a summary",
				author: "Major Jamon",
				date: new Date(),
				content: "This is the content of blog entry 1, it really is"
			}];
		}
	};
};
},{}]},{},[1])