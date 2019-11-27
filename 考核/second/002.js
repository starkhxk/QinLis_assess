/*function validateForm() {
    var x = document.forms["myform"]["StudentID"].value;
    if (x == "") {
        alert("必须填写学号！");
        return false;
    }
    var y = document.forms["myform"]["IDnumber"].value;

    if (y == "") {
        alert("必须填写身份证号！");
        return false;
    }
    var z = document.forms["myform"]["name"].value;
    if (z == "") {
        alert("必须填写姓名！");
        return false;
    }
}*/
//检查填写是否为空
function validateForm() {
    var x = document.forms["myform"]["StudentID"].value;
    var y = document.forms["myform"]["IDnumber"].value;
    var z = document.forms["myform"]["name"].value;
    if (x == "") {
        alert("必须填写学号！");
        return false;
    } else {
        if (y == "") {
            alert("必须填写身份证号！");
            return false;
        } else {
            if (z == "") {
                alert("必须填写姓名！");
                return false;
            }
        }
    }
}

function Esempty() {

    if (document.getElementById("sex").checked) {
        return true;
    } else {
        alert("请选择您的性别！");

        return false;
    }

}
var arr = [


    { "StudentID1": "1903160122", "IDnumber1": "210682200205110012", "name1": "王恩泽" },
    { "StudentID2": "1903160125", "IDnumber2": "412824200201133910", "name2": "郭伟凡" }

]

function checked() {
    if (StudentID.value == arr[0].StudentID1 && IDnumber1 && name1) {
        alert("注册成功！");
        return true;
    } else {
        if (StudentID.value == arr[1].StudentID2 && IDnumber2 && name2) {
            alert("注册成功！");
            return true;


        } else {
            alert("您输入的是无效信息！");
            return false;

        }
    }
}