function displayQuoteCite() {
    //获取所有的 blockquote
    var block_quotes = document.getElementsByTagName("blockquote");
    //对其进行遍历,出所有的子节点
    for (var i = 0;i<block_quotes.length;i++){
        //检查一下没有 cite 属性节点的就跳过当前循环进行下一次循环
        if (!block_quotes[i].getAttribute("cite")) continue;
        //获取 cite 属性节点,赋值给 urlX
        var urlX = block_quotes[i].getAttribute("cite");
        //获取 blockquote 子 元素 节点,注意区分节点类别
        var quoteChildNodes = block_quotes[i].getElementsByTagName("*");
        //获得最后一个元素节点
        var elem = quoteChildNodes[quoteChildNodes.length-1];
        //创建 a 标签
        var link = document.createElement("a");
        var link_txt = document.createTextNode("source");
        link.appendChild(link_txt);
        //设置 a 标签的 href 属性为 urlX
        link.setAttribute("href",urlX);
        //创建 sup 标签
        var supX = document.createElement("sup");
        supX.appendChild(link);
        //插入到 elem 后面
        elem.appendChild(supX);
    }
}
addOnLoad(displayQuoteCite);
/**
 * Created by mylove on 2016/11/21.
 */
