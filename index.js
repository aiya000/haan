function say () {
	var ghPagesUrl    = "https://aiya000.github.io/haan";
	var token         = daijobu.token.value;
	var randomChannel = "C2JBXJEP2";
	var text          = daijobu.senderName.value + "「Googleハングアウトの用意はできています」\n" + ghPagesUrl;

	var apiUrl  = "https://slack.com/api/chat.postMessage" +
		"?token="   + token   +
		"&channel=" + randomChannel +
		"&text="    + text;
	var request = new XMLHttpRequest();
	request.open("POST", apiUrl, false);
	request.onload = function() {
		alert(text);
	};
	request.onerror = function() {
		alert("なんかエラー: " + this.responseText);
	};
	request.send();
}
