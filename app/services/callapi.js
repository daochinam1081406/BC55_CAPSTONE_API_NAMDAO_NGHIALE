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
}