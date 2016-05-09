window.fbAsyncInit = function() {
	FB.init({
		//Prod
		appId : '1189090434464524',
		//Localhost
		//appId : '1189784154395152',
		
		xfbml : true,
		version : 'v2.6'
	});
	
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			
			var uid = response.authResponse.userID;
			$("#uid").val(uid);
			console.log(uid);
			console.log('Logged in.');
			FB.api('/me/friends', function(response) {
				 console.log(uid);
			    if (response && !response.error) {
			        console.log("success");
			        console.log(response);
			    }
			    else{
			    	console.log(response.error);
			    }
			});     
			
		} else {
			FB.login();
		}
	});
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

