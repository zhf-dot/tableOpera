var data = [
    { "学号": "1013", "姓名": "杜兰特", "性别": "男", "联系电话": 100, "籍贯": "湖北武汉", "简介": "...", "出生时间": "20000101" },
    { "学号": "1000", "姓名": "詹姆斯", "性别": "男", "联系电话": 101, "籍贯": "湖北孝感", "简介": "...", "出生时间": "20010101" },
    { "学号": "1007", "姓名": "库里", "性别": "男", "联系电话": 103, "籍贯": "湖北武汉", "简介": "...", "出生时间": "20020101" },
    { "学号": "1003", "姓名": "汤普森", "性别": "女", "联系电话": 103, "籍贯": "湖北宜昌", "简介": "...", "出生时间": "20030101" },
    { "学号": "1004", "姓名": "欧文", "性别": "女", "联系电话": 104, "籍贯": "湖北武汉", "简介": "...", "出生时间": "20040101" },
    { "学号": "1001", "姓名": "戴维斯", "性别": "女", "联系电话": 105, "籍贯": "湖北武汉", "简介": "...", "出生时间": "20050101" },
    { "学号": "1012", "姓名": "霍华德", "性别": "男", "联系电话": 100, "籍贯": "湖北武汉", "简介": "...", "出生时间": "20000101" },
    { "学号": "1008", "姓名": "字母哥", "性别": "女", "联系电话": 101, "籍贯": "湖北孝感", "简介": "...", "出生时间": "20010101" },
    { "学号": "1002", "姓名": "伦纳德", "性别": "男", "联系电话": 102, "籍贯": "湖北武汉", "简介": "...", "出生时间": "20020101" },
    { "学号": "1010", "姓名": "哈登", "性别": "男", "联系电话": 103, "籍贯": "湖北宜昌", "简介": "...", "出生时间": "20030101" },
]


function fun(data) {
    var div = document.getElementById("Data");
    div.innerHTML = "";
    var ul = document.createElement("ul");
    div.appendChild(ul);
    for (var key in data[0]) {
        var li = document.createElement("li");
        li.innerHTML = key;
        // console.log(key)
        ul.appendChild(li);

    }
    var li = document.createElement("li");
    li.innerHTML = "操作";
    ul.appendChild(li)

    var li = document.createElement("li");
    li.innerHTML = "操作";
    ul.appendChild(li)

    var li = document.createElement("li");
    li.innerHTML = '<input type = "checkbox">' + '全选';
    ul.appendChild(li)


    for (var i = 0; i < data.length; i++) {
        var ul = document.createElement("ul");
        if (i % 2 == 0) {
            ul.style.backgroundColor = "white";
        } else {
            ul.style.backgroundColor = "#EEEEEE";
        }
        for (var j in data[i]) {
            var li = document.createElement("li");

            li.innerHTML = data[i][j];
            // console.log()
            // console.log(data[i][j])
            ul.appendChild(li);
            div.appendChild(ul)
                // console.log(ul)
        }




        var li = document.createElement("li");
        var button = document.createElement("button");
        button.onclick = del;
        button.innerHTML = "删除";
        li.appendChild(button);
        ul.appendChild(li);

        var li = document.createElement("li");
        var button2 = document.createElement("button");
        button2.innerHTML = "修改";
        button2.onclick = function() {
            cha(this);
        };
        li.appendChild(button2);
        ul.appendChild(li);



        var li = document.createElement("li");
        li.innerHTML = '<input type = "checkbox">';

        ul.appendChild(li)


        div.appendChild(ul);
    }



}

fun(data);






function cha(elem) {
    // console.log(elem);
    // console.log(elem.parentElement.parentElement.children[0].innerHTML);
    var changes = document.getElementsByClassName("change")[0];
    var cancel = document.getElementById("cancel");
    var inp = document.querySelectorAll(".change input");
    var lis = elem.parentElement.parentElement.children;
    // console.log(inp)
    // console.log(btn)
    changes.style.display = "block";

    var keyList = [];
    for (let key in data[0]) {
        keyList.push(key);
        // console.log(keyList)
    }
    for (var i = 0; i < lis.length - 3; i++) {
        inp[i].value = lis[i].innerHTML;

    }
    document.getElementById("btn").onclick = function() {
        var obj = {};
        for (let j = 0; j < inp.length - 2; j++) {
            obj[keyList[j]] = inp[j].value;
        }
        console.log(obj);

        for (let j = 0; j < data.length; j++) {
            if (elem.parentElement.parentElement.children[0].innerHTML == data[j]["学号"]) {
                data.splice(j, 1, obj);
                break;
            }
        }

        // console.log(data);
        changes.style.display = "none";
        fun(data);

    }
    cancel.onclick = function() {
        changes.style.display = "none";
    }

}














// 删除
function del() {
    var lis = this.parentNode.parentNode.childNodes[0].innerHTML;

    for (let i = 0; i < data.length; i++) {
        // if (lis == data[i]["学号"]) {
        //     data.splice(i, 1);
        //     alert("确定删除？")
        // }
        if (lis == data[i]["学号"]) {
            data.splice(i, 1);
            alert("是否删除")
            break;
        }
    }

    fun(data)
    checkAll();
    // alert("是否删除")
    // lis.remove();
}


// 修改
function change() {
    var biaoshi;
    var tr = this.parentNode.parentNode;
    tr.setAttribute("data-change", "0")
    var trs = document.querySelectorAll("#Data ul");
    for (var i = 1; i < trs.length; i++) {
        if (trs[i].getAttribute("data-change") == 0) {
            biaoshi = i - 1;
        }
    }
    console.log(biaoshi);


    var lis = this.parentNode.parentNode.childNodes;



    var changes = document.getElementsByClassName("change")[0];
    var cancel = document.getElementById("cancel");
    var inp = document.querySelectorAll(".change input");
    console.log(inp)
    var btn = document.getElementById("btn");
    console.log(btn)
    changes.style.display = "block";
    for (var i = 0; i < lis.length - 3; i++) {
        inp[i].value = lis[i].innerHTML;
    }
    // tr.getAttribute("data-change") = '';
    btn.onclick = function() {
        //     var ziduan = { "学号": "", "姓名": "", "性别": "", "联系电话": "", "籍贯": "", "简介": "", "出生时间": "" };
        //     var ziduan1 = [];
        //     var a =0;
        //     for(var i = 0 ; i < inp.length-2;i++){
        //         ziduan1.push(inp[i].value)
        //     }
        //     for(var key in ziduan){
        //         ziduan[key] = ziduan1[a];
        //         // console.log(ziduan[key])
        //         a++;
        //     }
        //     for(var key in data[biaoshi]){
        //         data[biaoshi][key]= ziduan[key];
        //         console.log(ziduan[key])
        //     }
        // inp框的值push到新数组    在 原来的数组里循环   新数组的值给到原来数组的key值

        // var obj = {};
        var arr = [];
        var arr2 = [];
        var a = 0;
        for (var key in data[0]) {
            arr.push(key);
            // console.log(arr)
        }
        for (var i = 0; i < inp.length - 2; i++) {
            arr2.push(inp[i].value);
        }
        for (var j in arr) {
            arr[j] = arr2[a];
            console.log(arr[j])

            // data[biaoshi][j] = arr[j]
            a++;
        }
        for (var key in data[biaoshi]) {
            // data[biaoshi][key] = arr[a][key]
            // console.log(key)
            // console.log(arr[key])
            // a++;
        }
        fun(data)
        changes.style.display = "none";

    }

    // tr.getAttribute("data-change") = '';
    changes.style.display = "block"
    cancel.onclick = function() {
        changes.style.display = "none";
    }

}


// 全选
function checkAll() {
    var chkAll = document.querySelector("#Data ul").lastChild.firstChild;
    // console.log(chkAll)
    var chk = document.querySelectorAll("#Data ul input")
    chkAll.onclick = function() {
        // console.log(chk)
        for (var i = 1; i < chk.length; i++) {
            chk[i].checked = this.checked;
        }
    }


    for (var j = 1; j < chk.length; j++) {
        chk[j].onclick = function() {
            for (var j = 1; j < chk.length; j++) {
                if (chk[j].checked == false) {
                    chkAll.checked = false;
                    break
                } else {
                    chkAll.checked = true;
                }
            }
        }
    }

}
checkAll()


function adds() {
    var add = document.getElementsByClassName("btn")[0];
    var changes = document.getElementsByClassName("change")[0];
    var cancel = document.getElementById("cancel");
    var inp = document.querySelectorAll(".change input");
    var div = document.getElementById("Data");
    var btn = document.getElementById("btn")
        // console.log(inp)
        // console.log(add);/
    add.onclick = function() {


        changes.style.display = "block";


        btn.onclick = function() {
            changes.style.display = "none";
            var ul = document.createElement("ul");
            // for (var j = 2; j < data.length; j++) {
            //     if (j % 2 == 0) {
            //         ul.style.backgroundColor = "white";
            //     } else {
            //         ul.style.backgroundColor = "#EEEEEE";
            //     }
            // }
            var obj = {};
            // { "学号": "1010", "姓名": "哈登", "性别": "男", "联系电话": 103, "籍贯": "湖北宜昌", "简介": "...", "出生时间": "20030101" },
            var keyList = [];
            for (let key in data[0]) {
                keyList.push(key);
                // console.log(keyList)
            }

            for (let i = 0; i < inp.length - 2; i++) {
                // var li = document.createElement("li");
                // li.innerHTML = inp[i].value;
                // ul.appendChild(li)
                // div.appendChild(ul)

                obj[keyList[i]] = inp[i].value;

            }
            data.push(obj);
            fun(data);
            // del()
            checkAll()
                // var li = document.createElement("li");
                // var button = document.createElement("button");
                // button.onclick = del;
                // button.innerHTML = "删除";
                // li.appendChild(button);
                // ul.appendChild(li);

            // var li = document.createElement("li");
            // var button2 = document.createElement("button");
            // button2.innerHTML = "修改";
            // button2.onclick = change;
            // li.appendChild(button2);
            // ul.appendChild(li);

            // var li = document.createElement("li");
            // li.innerHTML = '<input type = "checkbox">';
            // ul.appendChild(li)
            // changes.style.display = "none";
        }
        cancel.onclick = function() {
            changes.style.display = "none";
        }
    }
}
adds()

// 查询
var btn2 = document.getElementsByClassName("btn2")[0];
var txt1 = document.getElementsByClassName("txt1")[0];
var txt2 = document.getElementsByClassName("txt2")[0]
var names = document.querySelectorAll("#Data ul li:nth-child(2)");
var tel = document.querySelectorAll("#Data ul li:nth-child(4)");
// console.log(tel)
// console.log(txt2.value)
// console.log(btn2)
btn2.onclick = function() {

    // for (var i = 1, arr = []; i < names.length; i++) {
    //     if (names[i].innerHTML.indexOf(txt1.value) != -1) {
    //         arr.push(data[i - 1]);
    //     }
    //     if (tel[i].innerHTML.indexOf(txt2.value) != -1) {
    //         arr.push(data[i - 1]);
    //     }
    // }
    var Strreg = "^[\u4e00-\u9fa5]*" + txt1.value + "[\u4e00-\u9fa5]*$";
    var Numreg = "[\d]*" + txt2.value + "\d*";
    var reg = new RegExp(Strreg);
    var reg1 = new RegExp(Numreg)
    for (var i = 0, arr = []; i < data.length; i++) {
        if (txt1.value != "") {
            // arr.push(data[i])
            if (reg.test(data[i]["姓名"])) {
                arr.push(data[i])
            }

        }
        if (txt2.value != "") {
            if (reg1.test(data[i]["联系电话"])) {
                arr.push(data[i])
            } else {
                // document.write(123)
            }

        }
    }
    fun(arr)
    checkAll()
}




// 按性别查询
var male = document.getElementById("male");
console.log(male.value)
male.onclick = function() {
    for (var i = 0, arr = []; i < data.length; i++) {
        if (male.value == data[i]["性别"]) {
            arr.push(data[i])
        }
    }
    fun(arr);
    checkAll()


}
var female = document.getElementById("female");
console.log(female)
female.onclick = function() {
    for (var i = 0, arr = []; i < data.length; i++) {
        if (female.value == data[i]["性别"]) {
            arr.push(data[i])
        }
    }
    fun(arr);
    checkAll()
}