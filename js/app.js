var app = function($scope){
	$scope.crm = {
		"custid":"875432541",
		"accid":"123",
		"MDN":"987654321",
		"ESN":"55665",
		"IMSI":"546464",
		"packagename":"telecom1",
		"actdate":"15/07/14",
		"contactno":"9839875874",
		"email":"contact@domain.co.za"
	};

	$scope.user = {
		"username":"kunal",
		"screenname":"screenname",
		"role":"Customer Care Executive",
		"lastlogin":"Jul 11, 2014 5:30:57 PM IST",
		"timelogged":"2hrs"
	};

	$scope.network = {
		"VariableVoice":true,
		"HighRate":true,
		"EnhancedVariable":true,
		"VoiceService":true,
		"Status":true,
		"Status1":true
	};

	if($scope.network.Status===$scope.network.Status1){
		$scope.disable=false;
	}
	else{
		$scope.disable=true;
	}

};
	