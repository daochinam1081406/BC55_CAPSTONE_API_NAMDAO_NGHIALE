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
        <td>${product.Type}</td>
        <td>${product.Images}</td>
        </tr>
        `
    }
    getEle("tableDanhSach").innerHTML = content;
}
function themChoiXe() {
    var tenSP = getEle("tknv").value;
    var giaSP = getEle("name").value;
    var hinhAnhSP = getEle("email").value;
    var loaiSP = getEle("chucvu").value;

    var product = new Product(tenSP, giaSP, hinhAnhSP, loaiSP)
    var promise = api.themSP(product)
    promise
        .then(function () {
            getListProduct()
        })
        .catch(function (error) {
            console.log(error);
        })
}
























