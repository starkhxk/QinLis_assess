var json = [{
    "StudentID": "1903160122",
    "IDnumber": "210682200205110012",
    "name": "王恩泽",
    "sex": "1"
}, {
    "StudentID": "1903160125",
    "IDnumber": "412824200201133910",
    "name": "郭伟凡",
    "sex": "1"
}]


function checked() {
    var StudentID = document.getElementById("StudentID").value;
    var IDnumber = document.getElementById("IDnumber").value;
    var name = document.getElementById("name").value;
    var nan = document.getElementById("nan");
    var nv = document.getElementById("nv");

    for (var i = 0; i < json.length; i++) {
        if (StudentID == json[i].StudentID && IDnumber == json[i].IDnumber && name == json[i].name) {
            if ((nan.checked)) {
                alert("注册成功！");
                return true;
            }
        } else {
            alert("您提交的信息不正确，请核对您的信息!");
            return false;
        }

    }
}