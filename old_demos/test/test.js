window.onload=function () {
    // var para = document.createElement("p");
    // var text = document.createTextNode("我们都有一个家,名字叫中国!");
    // para.appendChild(text);
    // var mydiv = document.getElementById("myDiv");
    // mydiv.appendChild(para);

    // var para = document.createElement("p");
    // var text_1 = document.createTextNode("This is ");
    // para.appendChild(text_1);
    //
    // var emmm = document.createElement("em");
    // var text_2 = document.createTextNode("my ");
    // emmm.appendChild(text_2);
    // para.appendChild(emmm);
    // var text_3 = document.createTextNode("HTML");
    // para.appendChild(text_3);
    // var testD = document.getElementById("myDiv");
    // testD.appendChild(para);

    var para = document.createElement("p");
    var textOne = document.createTextNode("This is ");
    var myEm = document.createElement("em");
    var textTwo = document.createTextNode("my ");
    var textThree = document.createTextNode("html!");
    var myDiv = document.getElementById("myDiv");
    para.appendChild(textOne);
    myEm.appendChild(textTwo);
    para.appendChild(myEm);
    para.appendChild(textThree);
    myDiv.appendChild(para);



}



/**
 * Created by mylove on 2016/11/15.
 */
