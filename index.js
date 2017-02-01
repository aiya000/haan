function say () {
	var token         = daijobu.token.value;
	var randomChannel = "C2JBXJEP2";
	var text          = "Googleハングアウトの用意はできています。";

	var apiUrl  = "https://slack.com/api/chat.postMessage" +
		"?token="   + token   +
		"&channel=" + randomChannel +
		"&text="    + text;
	var request = new XMLHttpRequest();
	request.open("POST", apiUrl, false);
	request.onload = function() {
		alert("OK: " + this.responseText);
	};
	request.onerror = function() {
		alert("なんかエラー: " + this.responseText);
	};
	request.send();
}
