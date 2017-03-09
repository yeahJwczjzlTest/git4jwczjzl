function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs_abbr = new Array();
    for (var i = 0;i<abbreviations.length;i++){
        var current_abbr = abbreviations[i];
        if (current_abbr.length<1) continue;
        var title_abbr = current_abbr.getAttribute("title");
        var key_abbr = current_abbr.lastChild.nodeValue;
        defs_abbr[key_abbr] = title_abbr;
    }
    var dlist = document.createElement("dl");
    for (key in defs_abbr){
        var title_abbr = defs_abbr[key];
        var dtitle = document.createElement("dt");
        var dtitle_txt = document.createTextNode(key);
        dtitle.appendChild(dtitle_txt);
        var ddesc = document.createElement("dd");
        var ddesc_txt = document.createTextNode(title_abbr);
        ddesc.appendChild(ddesc_txt);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.length < 1) return false;
    var head = document.createElement("h2");
    var head_txt = document.createTextNode("Abbreviations");
    head.appendChild(head_txt);

    document.body.appendChild(head);
    document.body.appendChild(dlist);
}

addOnLoad(displayAbbreviations);
/**
 * Created by mylove on 2016/11/21.
 */
