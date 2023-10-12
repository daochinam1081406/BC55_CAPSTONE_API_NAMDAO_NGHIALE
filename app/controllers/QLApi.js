function getEle(id) {
    return document.getElementById(id);
}
var api = new CallApi();

function getListProduct() {
    var promise = api.fectData();
    promise
        .then(function (result) {
            renderApi(result.data)
        })
        .catch(function name(error) {
            console.log(error);
        })
}
getListProduct();

function renderApi(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var product = data[i];
        content += `
        <tr>
        <td>${product.id}</td>
        <td>${product.Name}</td>
        <td>${product.Price}</td>
        <td>
        <img width="100px" src="./../images/${product.Images}" alt="">
        </td>
        <td>${product.Type}</td>
        <td>
        <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="repairProduct(${product.id})">Repair</button>
        <button class="btn btn-danger" onclick="deleteProduct(${product.id})">DELETE</button>
        </td>
        </tr>
        `
    }
    getEle("tableDanhSach").innerHTML = content;
}
function deleteProduct(id) {
    var promise = api.deleteProduct(id);
    promise
        .then(function () {
            getListProduct()
        })
        .catch(function (error) {
            console.log(error);
        })
}

function layThongTinProduct() {
    var tenSP = getEle("product").value;
    var giaSP = getEle("price").value;
    var hinhAnhSP = getEle("image").value;
    var loaiSP = getEle("typeProduct").value;

    var isvalid = true;
    isvalid &= kiemTraRong(tenSP, "tbProduct", "Yêu cầu không để trống") && kiemTraDoDai(tenSP, 15, 5, "tbProduct", "Yêu cầu nhập từ 5-10 ký tự")
    isvalid &= kiemTraRong(giaSP, "tbGia", "Yêu cầu không để trống") && kiemTraGia(giaSP, "tbGia", "Yêu cầu chỉ nhập số");
    isvalid &= kiemTraRong(hinhAnhSP, "tbImage", "Yêu cầu không để trống");
    isvalid &= kiemTraSelect("typeProduct", "tbType", "yêu cầu chọn loại sản phẩm")

    if (!isvalid) {
        return null
    }
    var product = new Product("id", tenSP, giaSP, hinhAnhSP, loaiSP)
    return product;
}
function themChoiXe() {
    var product = layThongTinProduct();
    if (product) {
        var promise = api.themSP(product)
        promise
            .then(function () {
                getListProduct()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}
function repairProduct(id) {
    document.getElementById("header-title").innerHTML = "Repair Product";
    var btnCN = `<button class="btn btn-success" onclick="capNhatProduct(${id})">Cập Nhật</button>
    `
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnCN;
    var promise = api.repairProduct(id);
    promise
        .then(function (result) {
            var product = result.data;
            getEle("product").value = product.Name;
            getEle("price").value = product.Price
            getEle("image").value = product.Images
            getEle("typeProduct").value = product.Type
        })
        .catch(function (error) {
            console.log(error);
        })
}
function capNhatProduct(id) {
    var tenSP = getEle("product").value;
    var giaSP = getEle("price").value;
    var hinhAnhSP = getEle("image").value;
    var loaiSP = getEle("typeProduct").value;

    var isvalid = true;
    isvalid &= kiemTraRong(tenSP, "tbProduct", "Yêu cầu không để trống") && kiemTraDoDai(tenSP, 15, 5, "tbProduct", "Yêu cầu nhập từ 5-10 ký tự")
    isvalid &= kiemTraRong(giaSP, "tbGia", "Yêu cầu không để trống") && kiemTraGia(giaSP, "tbGia", "Yêu cầu chỉ nhập số");
    isvalid &= kiemTraRong(hinhAnhSP, "tbImage", "Yêu cầu không để trống");
    isvalid &= kiemTraSelect("typeProduct", "tbType", "yêu cầu chọn loại sản phẩm")

    if (!isvalid) {
        return null
    }

    var product = new Product(id, tenSP, giaSP, hinhAnhSP, loaiSP);
    var promise = api.updateProduct(product);
    promise
        .then(function () {
            document.getElementsByClassName("close")[0].click();
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        })

}
// tim kiem sp
getEle("searchName").addEventListener("keyup", function () {
    var keyWord = getEle("searchName").value;
    var mangTimKiem = timKiemSanPham(keyWord);
    renderApi(mangTimKiem);
}
)
function timKiemSanPham(keyWord) {
    var promise = api.fectData();
    var arrayTimKiem = [];
    var keyword = keyWord;
    promise
        .then(function (result) {
            var array = result.data;

            for (let i = 0; i < array.length; i++) {
                var product = array[i];
                var keyWordLowerCase = keyword.toLowerCase()
                var nameProductLowerCase = product.Name.toLowerCase();
                if (nameProductLowerCase.indexOf(keyWordLowerCase) !== -1) {
                    arrayTimKiem.push(product);
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    return arrayTimKiem;
}























