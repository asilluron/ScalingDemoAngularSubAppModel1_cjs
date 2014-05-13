var Blogs = require("./resources/Blogs");

var blogResourcesApp = angular.module("blog-resources", [])
	.service("Blogs", Blogs);	
