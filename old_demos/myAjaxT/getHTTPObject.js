function getHTTPObject() {
    //首先在不同的浏览器中创建XMLHttpRequest对象的方式不一样,那么使用 try 来纠错
    if (typeof XMLHttpRequest == "undefined"){
        try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch (e){}
        try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch (e){}
        try {return new ActiveXObject("Msxml2.XMLHTTP");}
            catch (e){}
        return false;
    }
    return new XMLHttpRequest();
}
/**
 * Created by mylove on 2016/11/17.
 */
