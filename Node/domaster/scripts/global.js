function addLoadEvent(a){var b=window.onload;window.onload="function"!==typeof window.onload?a:function(){b();a()}}function insertAfter(a,b){var c=b.parentNode;c.lastChild===b?c.appendChild(a):c.insertBefore(a,b.nextSibling)}function addClass(a,b){a.className?(newClassName=a.className,newClassName+=" ",newClassName+=b,a.className=newClassName):a.className=b}
function highlightPage(){if(!document.getElementById||!document.getElementsByTagName)return!1;var a=document.getElementsByTagName("header");if(0===a.length)return!1;a=a[0].getElementsByTagName("nav");if(0===a.length)return!1;for(var a=a[0].getElementsByTagName("a"),b,c=0;c<a.length;c++)b=a[c].getAttribute("href"),-1!==window.location.href.indexOf(b)&&(a[c].className="here",b=a[c].lastChild.nodeValue.toLowerCase(),document.body.setAttribute("id",b))}
function moveElement(a,b,c,e){if(!document.getElementById||!document.getElementById(a))return!1;var d=document.getElementById(a),f;d.moveMent&&clearTimeout(d.moveMent);d.style.left||(d.style.left="0px");d.style.top||(d.style.top="0px");var g=parseInt(d.style.left),h=parseInt(d.style.top);if(h===c&&g===b)return!0;g<b&&(f=Math.ceil((b-g)/10),g+=f);g>b&&(f=Math.ceil((g-b)/10),g-=f);h<c&&(f=Math.ceil((c-h)/10),h+=f);h>c&&(f=Math.ceil((h-c)/10),h-=f);d.style.left=g+"px";d.style.top=h+"px";d.moveMent=setTimeout("moveElement('"+
    a+"',"+b+","+c+","+e+")",e)}
function prepareSlideshow(){if(!document.getElementById||!document.getElementsByTagName||!document.getElementById("intro"))return!1;var a=document.getElementById("intro"),b=document.createElement("div");b.setAttribute("id","slideshow");var c=document.createElement("img");c.setAttribute("id","frame");c.setAttribute("alt","");c.setAttribute("src","images/frame.gif");b.appendChild(c);c=document.createElement("img");c.setAttribute("id","preview");c.setAttribute("alt","\u9365\u5267\u5896\u5a4a\u6c2c\u59e9\u9356\ufffd");c.setAttribute("src",
    "images/slideshow.gif");b.appendChild(c);insertAfter(b,a);for(var a=a.getElementsByTagName("a"),e,b=0;b<a.length;b++)a[b].onmouseover=function(){e=this.getAttribute("href");-1!=e.indexOf("index.html")&&moveElement("preview",0,0,5);-1!=e.indexOf("about.html")&&moveElement("preview",-150,0,5);-1!=e.indexOf("photos.html")&&moveElement("preview",-300,0,5);-1!=e.indexOf("live.html")&&moveElement("preview",-450,0,5);-1!=e.indexOf("contact.html")&&moveElement("preview",-600,0,5)}}
function showSection(a){for(var b=document.getElementsByTagName("section"),c=0;c<b.length;c++)b[c].getAttribute("id")!=a?b[c].style.display="none":b[c].style.display="block"}
function prepareInternalnav(){if(!document.getElementById||!document.getElementsByTagName)return!1;var a=document.getElementsByTagName("article");if(0===a.length)return!1;a=a[0].getElementsByTagName("nav");if(0===a.length)return!1;for(var a=a[0].getElementsByTagName("a"),b=0;b<a.length;b++){var c=a[b].getAttribute("href").split("#")[1];document.getElementById(c)&&(document.getElementById(c).style.display="none",a[b].destination=c,a[b].onclick=function(){showSection(this.destination);return!1})}}
function showPic(a){if(!document.getElementById)return!1;var b=a.getAttribute("href");document.getElementById("placeholder").setAttribute("src",b);if(!document.getElementById("description"))return!1;a=a.getAttribute("title")?a.getAttribute("title"):"";b=document.getElementById("description");3===b.firstChild.nodeType&&(b.firstChild.nodeValue=a);return!0}
function preparePlaceholder(){if(!(document.getElementById&&document.getElementById("imagegallery")&&document.createTextNode&&document.createElement))return!1;var a=document.createElement("img");a.setAttribute("id","placeholder");a.setAttribute("alt","imageView");a.setAttribute("src","images/placeholder.gif");var b=document.createElement("p"),c=document.createTextNode("The choose pictures!");b.setAttribute("id","description");b.appendChild(c);c=document.getElementById("imagegallery");insertAfter(b,
    c);insertAfter(a,b)}function prepareGallery(){if(!document.getElementById||!document.getElementsByTagName||!document.getElementById("imagegallery"))return!1;for(var a=document.getElementById("imagegallery").getElementsByTagName("a"),b=0;b<a.length;b++)a[b].onclick=function(){return showPic(this)?!1:!0}}
function stripeTable(){if(!document.getElementsByTagName)return!1;for(var a=document.getElementsByTagName("table"),b=0;b<a.length;b++)for(var c=!1,e=a[b].getElementsByTagName("tr"),d=0;d<e.length;d++)!0===c?(addClass(e[d],"odd"),c=!1):c=!0}
function highlightRows(){if(!document.getElementsByTagName)return!1;for(var a=document.getElementsByTagName("tr"),b=0;b<a.length;b++)a[b].oldClassName=a[b].className,a[b].onmouseover=function(){addClass(this,"highlight")},a[b].onmouseout=function(){this.className=this.oldClassName}}
function displayAbbreviations(){if(!document.createElement||!document.getElementsByTagName||!document.createTextNode)return!1;var a=document.getElementsByTagName("abbr");if(1>a.length)return!1;for(var b=[],c=0;c<a.length;c++){var e=a[c],d=e.getAttribute("title");b[e.lastChild.nodeValue]=d}var a=document.createElement("dl"),f;for(f in b)e=b[f],c=document.createElement("dt"),d=document.createTextNode(f),c.appendChild(d),d=document.createElement("dd"),e=document.createTextNode(e),d.appendChild(e),a.appendChild(c),
    a.appendChild(d);if(1>a.childNodes.length)return!1;b=document.createElement("h3");f=document.createTextNode("Abbreviations");b.appendChild(f);f=document.getElementsByTagName("article");if(0===f.length)return!1;f[0].appendChild(b);f[0].appendChild(a)}
function focusLabels(){if(!document.getElementsByTagName||!document.getElementById)return!1;for(var a=document.getElementsByTagName("label"),b=0;b<a.length;b++)a[b].getAttribute("for")&&(a[b].onclick=function(){var a=this.getAttribute("for");if(!document.getElementById(a))return!1;document.getElementById(a).focus()})}
function resetField(a){if(!Modernizr.input.placeholder)for(var b=0;b<a.elements.length;b++){var c=a.elements[b];if(c.placeholder||c.getAttribute("placeholder"))c.onfocus=function(){var a=this.placeholder||this.getAttribute("placeholder");this.value===a&&(this.value=this.className="")},c.onblur=function(){""===this.value&&(this.className="placeholder",this.value=this.placeholder||this.getAttribute("placeholder"))},c.onblur()}}
function prepareForms(){for(var a=0;a<document.forms.length;a++){var b=document.forms[a];resetField(b);b.onsubmit=function(){if(!validateForm(this))return!1;var a=document.getElementsByTagName("article")[0];return submitFormWithAjax(this,a)?!1:!0}}}function isFilled(a){if(0===a.value.replace(" ","").length)return!1;var b=a.placeholder||a.getAttribute("placeholder");return a.value!==b}function isEmail(a){return-1!==a.value.indexOf("@")&&-1!==a.value.indexOf(".")}
function validateForm(a){for(var b=0;b<a.elements.length;b++){var c=a.elements[b];if("required"===c.required&&!isFilled(c))return alert(c.name+"\u8e47\u5474\u300f\u6fc9\ue0a2\u5553"),!1;if("email"===c.type&&!isEmail(c))return alert(c.name+"\u8e47\u5474\u300f\u6d93\u70d8\ue11c\u7ead\ue1be\u6b91Email\u9366\u677f\u6f43"),!1}return!0}
function getHTTPObject(){"undefined"===typeof XMLHttpRequest&&(XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(a){}return!1});return new XMLHttpRequest}
function displayAjexLoading(a){for(;a.hasChildNodes();)a.removeChild(a.lastChild);var b=document.createElement("img");b.setAttribute("src","/images/loading.gif");b.setAttribute("alt","Loading...");a.appendChild(b)}
function submitFormWithAjax(a,b){var c=getHTTPObject();if(!c)return!1;displayAjexLoading(b);for(var e=[],d,f=0;f<a.elements.length;f++)d=a.elements[f],e[f]=d.name+"="+encodeURIComponent(d.value);e=e.join("&");c.open("POST",a.getAttribute("action"),!0);c.setRequestHeader("Content-type","application/x-www-form-urlencoded");c.onreadystatechange=function(){if(4===c.readyState)if(200===c.status||0===c.status){var a=c.responseText.match(/<article>([\s\S]+)<\/article>/);b.innerHTML=0<a.length?a[1]:"<p>Oops, there was an error. Sorry.</p>"}else b.innerHTML=
    "<p>"+c.statusText+"</p>"};c.send(e);return!0}addLoadEvent(prepareForms);addLoadEvent(focusLabels);addLoadEvent(stripeTable);addLoadEvent(highlightRows);addLoadEvent(displayAbbreviations);addLoadEvent(prepareGallery);addLoadEvent(preparePlaceholder);addLoadEvent(prepareInternalnav);addLoadEvent(prepareSlideshow);addLoadEvent(highlightPage);
/**
 * Created by u._.u on 2016/12/7.
 */