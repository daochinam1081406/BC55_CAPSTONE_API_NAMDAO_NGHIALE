function kiemTraRong(value, idCanhBao, mess) {
    var dom = document.getElementById(idCanhBao);
    if (value === "") {
        dom.innerHTML = mess;
        dom.style.display = "block";
        return false
    } else {
        dom.innerHTML = "";
        return true
    }
}

function kiemTraDoDai(value, max, min, idCanhBao, mess) {
    var dom = document.getElementById(idCanhBao);
    if (value.length > max || value.length < min) {
        dom.innerHTML = mess;
        dom.style.display = "block";
        return false
    } else {
        dom.innerHTML = "";
        return true
    }
}

function kiemTraGia(value, idCanhBao, mess) {
    var dom = document.getElementById(idCanhBao);
    var regexNumber = /^(0|[1-9][0-9]*)$/;
    var isvalid = regexNumber.test(value);
    if (isvalid) {
        dom.innerHTML = "";
        return true
    } else {
        dom.innerHTML = mess;
        dom.style.display = "block";
        return false
    }
}
function kiemTraSelect(value, idCanhBao, mess) {
    var dom = document.getElementById(idCanhBao);
    var theSelect = document.getElementById(value).selectedIndex;
    if (theSelect === 0) {
        dom.innerHTML = mess;
        dom.style.display = "block";
        return false
    } else {
        dom.innerHTML = "";
        return true;

    }
}

