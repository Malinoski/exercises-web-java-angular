angular.module("MyApp", ['ngSanitize'])
	.value('urlBase','http://localhost:8080/exercises-web-java-angular/')
	.controller("MainController", function($http,urlBase){
		
		var self = this;
		self.user = [];
//		self.users = [];
				
//		self.aa = 'aa';
//		self.users[0] = {};
//		self.users[0].name = "Iuri";
//		self.users[0].phone = 555;
//		
//		self.users[1] = {};
//		self.users[1].name = "Jose";
//		self.users[1].phone = 666;
//		
//		self.users[2] = {};
//		self.users[2].name = "Jose";
//		self.users[2].phone = 666;
		
		self.save = function(){
			$http({
				method: "GET",
				url: urlBase+'rest/notifications/123' 
			}).then(function successCallback(response){
				console.log("ok");
				console.log(response);
			}, function errorCallback(response){
				console.log("error");
				console.log(response);
				
				self.showError(response.data);				 
			});
		};
		
		self.showError = function($htmlError){
			self.errorContent = $htmlError;
			//self.errorContent = "<b>oi</b>";
			$("#errorModal").modal("show");
		}
		
		
		
	});