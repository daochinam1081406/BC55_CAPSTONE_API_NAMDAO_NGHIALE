// back to top
let mybutton = document.getElementById("btnBackToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  smoothScrollToTop(); // Gọi hàm lên đầu trang mềm mượt
}

function smoothScrollToTop() {
  const startingY = window.scrollY;
  const targetY = 0;
  const duration = 1000; // Thời gian di chuyển (miliseconds)
  const startTime = performance.now();

  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Giới hạn tiến trình từ 0 đến 1
    const ease = easeOutCubic(progress); // Hàm "easing" để tạo cảm giác mềm mượt

    window.scrollTo(0, startingY + ease * (targetY - startingY));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// Hàm "easing" để tạo hiệu ứng mềm mượt
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
// lua chon nhom san pham
function toggleContainers() {
  const selectElement = document.getElementById("exampleSelect");
  const selectedValue = selectElement.value;
  const toysContainer = document.getElementById("toys-container");
  const carCareContainer = document.getElementById("car-care-container");

  if (selectedValue === "all") {
    toysContainer.style.display = "block";
    carCareContainer.style.display = "block";
  } else if (selectedValue === "toys") {
    toysContainer.style.display = "block";
    carCareContainer.style.display = "none";
  } else if (selectedValue === "car-care") {
    toysContainer.style.display = "none";
    carCareContainer.style.display = "block";
  }
}
$("#cartModal").on("show.bs.modal", function () {
  var productQuantity = parseInt(
    document.querySelector(".quantity-value").textContent
  );

  if (productQuantity === 0) {
    // Nếu số lượng sản phẩm là 0, ngăn modal xuất hiện
    $(this).modal("hide");
  }
});
