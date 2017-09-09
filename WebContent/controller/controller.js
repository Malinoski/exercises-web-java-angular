/**
 * 
 */

angular.module("MyApp", [])
	.value('urlBase','http://localhost:8080/exercises-web-java-angular/')
	.controller("MainController", function($http,urlBase){
		var self = this
		
		self.user = {};
		
		self.users = [];
				
		self.aa = 'aa';
		self.users[0] = {};
		self.users[0].name = "Iuri";
		self.users[0].phone = 555;
		
		self.users[1] = {};
		self.users[1].name = "Jose";
		self.users[1].phone = 666;
		
		self.users[2] = {};
		self.users[2].name = "Jose";
		self.users[2].phone = 666;
		
		self.save = function(){
			var method = "POST";
			if(self.user.id){
				method = "PUT"
			}
			
			$http({
				method: send,
				url: urlBase+'users/',
				data: self.user 
			}).then(function successCallback(response){
				console.log("ok");
			}, function errorCallback(response){
				console.log("error");
			});
		}
	});