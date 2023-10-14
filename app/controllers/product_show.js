var apiIndex = new CallApi();

function getEleIndex(id) {
  return document.getElementById(id);
}

function getListProductIndex() {
  //show loader => display: block
  //getEleIndex("loader").style.display = "block";

  var promise = apiIndex.fectData();

  promise
    .then(function (result) {
      //hide loader => display: none
      //    getEleIndex("loader").style.display = "none";

      //gọi hàm renderUI
      renderUIIndex(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListProductIndex();

function renderUIIndex(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    var product = data[i];
    content += `
      <div class="content_product">
        <div class="image_product">
          <a href="#">
            <img src="../images/${product.Images}" alt="">
          </a>
        </div>
        <div class="text_product">
          <p>${product.Name}</p>
          <span>${product.Price}₫</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-success buy_product">Mua</button>
          <div class="quantity">
            <button class="decrement">-</button>
            <span class="quantity-value">0</span>
            <button class="increment">+</button>
          </div>
        </div>
      </div>
    `;
  }

  getEleIndex("listProduct").innerHTML = content;

  // Bắt sự kiện cho nút cộng và trừ
  var quantityElements = document.querySelectorAll(".quantity");
  quantityElements.forEach(function (quantityElement) {
    var decrementButton = quantityElement.querySelector(".decrement");
    var incrementButton = quantityElement.querySelector(".increment");
    var quantityValue = quantityElement.querySelector(".quantity-value");

    decrementButton.addEventListener("click", function () {
      var currentValue = parseInt(quantityValue.textContent, 10);
      if (currentValue > 0) {
        quantityValue.textContent = (currentValue - 1).toString();
      }
    });

    incrementButton.addEventListener("click", function () {
      var currentValue = parseInt(quantityValue.textContent, 10);
      quantityValue.textContent = (currentValue + 1).toString();
    });
  });
}
