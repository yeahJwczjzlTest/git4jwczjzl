//这个在 targetElement 元素后面插入元素的函数:有两个参数,
//第一个 newElement 意思是将要插入的元素.
//第二个 targetElement 意思是 插入到 此元素的后面.
function insertAfter(newElement, targetElement) {
    //首先获取 targetElement 的父元素节点.赋值给 变量 parent.
    var parent = targetElement.parentNode;
    //判断:父节点的最后一个元素节点是不是 targetElement
    if (parent.lastChild === targetElement){
        //如果是:那么进行子节点拼接:默认拼接到最后一个
        parent.appendChild(newElement);
    }else {
        //如果不是,那么使用 insertBrfore 讲新元素节点拼接到 targetElement 元素节点的下一个节点之前.
        parent.insertBefore(newElement,targetElement.nextSibling);
    }

}
/**
 * Created by u._.u on 2016/11/25.
 */
