function CallApi() {
    this.fectData = function () {
        return axios({
            url: "https://6513a2258e505cebc2ea0105.mockapi.io/ProductMotor",
            method: "GET"
        })
    }
    this.themSP = function (product) {
        return axios({
            url: "https://6513a2258e505cebc2ea0105.mockapi.io/ProductMotor",
            method: "POST",
            data: product
        })
    }
    this.deleteProduct = function (id) {
        return axios({
            url: "https://6513a2258e505cebc2ea0105.mockapi.io/ProductMotor/" + id,
            method: "DELETE"
        })
    }
    this.repairProduct = function (id) {
        return axios({
            url: "https://6513a2258e505cebc2ea0105.mockapi.io/ProductMotor/" + id,
            method: "GET"
        })
    }
    this.updateProduct = function (product) {
        return axios({
            url: "https://6513a2258e505cebc2ea0105.mockapi.io/ProductMotor/" + product.id,
            method: "PUT",
            data: product
        })
    }
    this.fectData = function () {
        var promise = axios({
            url: "https://6513a2258e505cebc2ea0105.mockapi.io/ProductMotor",
            method: "GET"
        })
        return promise
    }
}