function say () {
	var userName      = daijobu.senderName.value;
	var token         = daijobu.token.value;
	var randomChannel = "C2JBXJEP2";
	var text          = "Googleハングアウトの用意はできています。";
	var ghPagesUrl    = "https://github.com/aiya000/haan";
	var hangoutUrl    = "https://hangouts.google.com";

	var attachmentsText = [ghPagesUrl, hangoutUrl]
		.map(function (x) { return "- " + x; })
		.join("\n");
	var apiUrl = encodeURI(
		"https://slack.com/api/chat.postMessage" +
		"?token=" + token +
		"&channel=" + randomChannel +
		"&username=" + userName +
		"&text=" + text +
		"&attachments=" + '[{"text": "' + attachmentsText + '"}]'
		);

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
