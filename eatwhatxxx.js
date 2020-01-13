function updateTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (h < 10){
    h = "0" + h;
  }
  document.getElementById("banner-clock").innerHTML = h + ":" + m + ":" + s;
}
updateTime();
setInterval(function () {
  updateTime();
}, 1000)
function getStar(score) {
  const star = "<span class='full'><i class='fas fa-star'></i></span>"
  let result = ""
  if (score - parseInt(score) == 0.5) {
    for (let i = 0; i < score-1; i++) {
      result += star;
    }

    result = result + "<span class='full'><i class='fas fa-star-half'></i></span>"
  }
  else
  {
      for (let i = 0; i < score ; i++) {
    result += star;
  }
  }

  return result;
};

let cuongalo =JSON.parse(localStorage.getItem("cart"));
console.log(cuongalo);
let m = Math.floor(Math.random() * cuongalo.length);
console.log(m);
let test = document.getElementById('xxx')
test.innerHTML = "<div class='left'>\
<img\
  src='" + cuongalo[m].img + "'>\
<blockquote>\
  <i>'Thân anh như ổ bánh mì<br>\
    Em mà đói bụng, nhâm nhi cầm chừng'</i>\
</blockquote>\
-Khuyết Danh-\
</div>\
<div class='right'>\
<div class='name-restaurant'>" + cuongalo[m].name + "</div>\
<div class='address-restaurant'><i class='fas fa-map-marker-alt'></i>" + " " + cuongalo[m].add + "</div>\
<div class='cost-restaurant'>" + cuongalo[m].price + "</div>\
<div class='rate'>\
  <div class='star'>" + getStar(cuongalo[m].star) +
  "</div>\
  Các Đánh Giá Từ Now\
</div>\
<a href='" + cuongalo[m].link + "' class='order-restaurant'>\
  <p>Đặt Hàng</p>\
  <img src='https://www.now.vn/app/assets/img/nowvn.png?aa6bbddbf923c9dfd35ca83a7d068e6d'>\
</a>\
<div class='video'>\
<iframe width='560' height='315' src='https://www.youtube.com/embed/-QTNFALG3U0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>\
</div>";