
function setHeaderSibling() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i = 0;i<headers.length;i++){
        elem = getElementNode(headers[i].nextSibling);
        elem.style.fontSize = "1.2em";
        elem.style.backgroundColor = "red";
        elem.style.fontWeight = "bold";
    }

}





function getElementNode(node) {
    if (node.nodeType == 1){
        return node;
    }
    if (node.nextSibling){
        return getElementNode(node.nextSibling);
    }
    return null;
}

addOnLoad(setHeaderSibling);
/**
 * Created by u._.u on 2016/11/23.
 */
