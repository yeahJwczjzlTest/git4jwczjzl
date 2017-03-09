function showPic(whichpic){
	var placeholder = document.getElementById("placeholder");
	var source = whichpic.getAttribute("href");
	placeholder.setAttribute("src",source);
}

function countChildNodes(){
	var body_elem = documnet.getElementsByTagName("body")[0];
	alert(body_elem.childNodes.length);
}

window.onload = countChildNodes;