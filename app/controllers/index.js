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
// Lắng nghe sự kiện khi người dùng chọn tệp ảnh
document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    var file = event.target.files[0];
    if (file) {
      // Đọc tệp ảnh thành chuỗi dạng Base64
      var reader = new FileReader();
      reader.onload = function (e) {
        var imageSrc = e.target.result;

        // Hiển thị ảnh trên thẻ <img>
        var previewImage = document.getElementById("previewImage");
        previewImage.src = imageSrc;
      };
      reader.readAsDataURL(file);
    }
  });
