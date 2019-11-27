var myreg = /^[1][3,4,5,7,8][0-9]{9}$/; //定义电话号码
//检查输入框是否为空以及勾选是否为空
function blank() {
    var x = document.forms["forma"]["tel"].value; //定义获取表单传的值
    if (x == "") { //检查输入框是否为空
        alert("必须填写手机号！");
        return false;

        /* else {
                if (!myreg.test($tel.val())) { //检查输入的手机号是否合法
                    alert("请输入正确的手机号码！")
                    return false;
                } */


    } else {
        if (document.getElementById("d").checked) { //检查勾选是否为空
            return true;
        } else {
            alert("勾选不能为空！");
            return false;
        }
    }
}

function phoneCheck($poneInput)
if (input != "") {

    if (!myreg.test($poneInput.val())) {
        return false;
    } else {
        return true;
    }
}