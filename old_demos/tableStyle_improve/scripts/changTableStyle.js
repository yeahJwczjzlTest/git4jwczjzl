function stripeTable() {
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var rows,odd;
    for (var i = 0;i < tables.length;i++){
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0;j < rows.length;j++){
            if (odd == true){
                //优化处理后的表达式
                //使用 css calssName 类名的方式搞的话修改比较方便
                addClassName(rows[j],"odd");
                odd = false;
            }else {
                odd = true;
            }
        }

    }
}
// 鼠标移入移出改变字体的粗细
function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for (var i = 0;i < rows.length;i++){
        rows[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}

addOnLoad(stripeTable);
addOnLoad(highlightRows);
/**
 * Created by u._.u on 2016/11/23.
 */
