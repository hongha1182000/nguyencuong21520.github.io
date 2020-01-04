var hoursContainer = document.querySelector('.hours');
var minutesContainer = document.querySelector('.minutes');
var secondsContainer = document.querySelector('.seconds');
var tickElements = Array.from(document.querySelectorAll('.tick'));
var last = new Date(0);
last.setUTCHours(-1);
var tickState = true;
function updateTime() {
  var now = new Date();
  var lastHours = last.getHours().toString();
  var nowHours = now.getHours().toString();
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours);
  }
  var lastMinutes = last.getMinutes().toString();
  var nowMinutes = now.getMinutes().toString();
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes);
  }
  var lastSeconds = last.getSeconds().toString();
  var nowSeconds = now.getSeconds().toString();
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds);
  }
  last = now;
}
function tick() {
  tickElements.forEach(function (t) {return t.classList.toggle('tick-hidden');});
}
function updateContainer(container, newTime) {
  var time = newTime.split('');
  if (time.length === 1) {
    time.unshift('0');
  }
  var first = container.firstElementChild;
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0]);
  }
  var last = container.lastElementChild;
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1]);
  }
}
function updateNumber(element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true);
  second.textContent = number;
  element.appendChild(second);
  element.classList.add('move');
  setTimeout(function () {
    element.classList.remove('move');
  }, 990);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 990);
}
setInterval(updateTime, 100);
let breakfast = [{
  "img": "https://images.foody.vn/res/g9/82828/prof/s280x175/foody-mobile-bun1-jpg-482-635919939199928431.jpg",
  "name": "Bún Dọc Mùng",
  "add": "số 18 Bát Đàn, Quận Hoàn Kiếm",
  "type": "món ăn",
  "price": "30.000Đ - 50.000Đ",
  "link": "https://www.now.vn/ha-noi/bun-doc-mung-bat-dan",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g8/70304/prof/s280x175/foody-mobile-chao-suon-dong-xuan--865-635851239130539281.jpg",
  "name": "cháo sườn",
  "add": "số 14 Đồng Xuân, Quận Hoàn Kiếm, Hà Nội",
  "type": "món ăn",
  "price": "20,000đ - 50,000đ",
  "link": "https://www.now.vn/ha-noi/chao-suon-dong-xuan",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g89/880763/prof/s280x175/foody-upload-api-foody-mobile-mien-tron-1-190114103637.jpg",
  "name": "Bánh đa trộn",
  "add": "số 6 Ngõ 118 Nguyễn Khánh Toàn, Quận Cầu Giấy, Hà Nội",
  "type": "món ăn",
  "price": "món ăn",
  "link": "https://www.now.vn/ha-noi/banh-da-tron-mien-tron-nguyen-khanh-toan",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g79/789326/prof/s280x175/foody-upload-api-foody-mobile-gongcha-190624155937.jpg",
  "name": "Trà sữa gong cha",
  "add": "Tầng 1, D2 Giảng Võ, Quận Ba Đình, Hà Nội",
  "type": "đồ uống",
  "price": "40,000đ - 80.000đ",
  "link": "https://www.now.vn/ha-noi/tra-sua-gong-cha-giang-vo",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g65/648105/prof/s280x175/foody-upload-api-foody-mobile-2-190726091345.jpg",
  "name": "Highlands Coffee",
  "add": "số 9 Thanh Niên, P. Quán Thánh, Quận Ba Đình, Hà Nội",
  "type": "đồ uống",
  "price": "30.000đ - 80.000đ",
  "link": "https://www.now.vn/ha-noi/highlands-coffee-du-thuyen-thanh-nien",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g32/312232/prof/s280x175/foody-mobile-foody-ngoc-anh-cafe-.jpg",
  "name": "bún miến ngan",
  "add": "số 1 Ngách 26 Ngõ 63 Trần Quốc Vượng, Quận Cầu Giấy, Hà Nội",
  "type": "món ăn",
  "price": "30.000đ - 50.000đ",
  "link": "https://www.now.vn/ha-noi/anh-beo-bun-mien-ngan-tran-quoc-vuong",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g20/195323/prof/s280x175/foody-upload-api-foody-mobile-ava-fika-jpg-180530111030.jpg",
  "name": "Charme Cafe",
  "add": "số 50 Lò Đúc, Quận Hai Bà Trưng, Hà Nội",
  "type": "đồ uống",
  "price": "15.000đ - 40.000đ",
  "link": "https://www.now.vn/ha-noi/charme-cafe",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g2/10551/prof/s280x175/foody-mobile-chao-trai-ho-tay-ha-noi.jpg",
  "name": "Cháo Trai Hồ Tây",
  "add": "số 194 Quán Thánh, Quận Ba Đình, Hà Nội",
  "type": ">món ăn",
  "price": "30.000đ - 60.000đ",
  "link": "https://www.now.vn/ha-noi/chao-trai-ho-tay",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g5/48769/prof/s280x175/foody-mobile-bmnga-jpg.jpg",
  "name": "Bún Miến Ngan",
  "add": "số 101 Cầu Giấy, Quận Cầu Giấy, Hà Nội",
  "type": "món ăn",
  "price": "30.000đ - 40.000đ",
  "link": "https://www.now.vn/ha-noi/bun-mien-ngan-cau-giay",
  "star": "4"
},
{
  "img": "https://images.foody.vn/res/g71/702036/prof/s280x175/foody-mobile-23622253_14744539934.jpg",
  "name": "Trà sữa heytea",
  "add": "số 183 Giảng Võ, Quận Đống Đa, Hà Nội",
  "type": "đồ uống",
  "price": "30.000đ - 60.000đ",
  "link": "https://www.now.vn/ha-noi/tra-sua-heytea-giang-vo",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g78/777241/prof/s280x175/foody-upload-api-foody-mobile-bun-cha-2-jpg-180911143002.jpg",
  "name": "Bún chả",
  "add": "Số 15 Ngõ Tràng Tiền, Quận Hoàn Kiếm, Hà Nội",
  "type": "món ăn",
  "price": "30.000đ - 50.000đ",
  "link": "https://www.now.vn/ha-noi/co-huong-bun-cha-com-ga",
  "star": "4"
},
{
  "img": "https://images.foody.vn/res/g27/266838/prof/s280x175/foody-mobile-eden-jpg-747-636071091901817814.jpg",
  "name": "Eden Coffee",
  "add": "Số 2 Nhà Thờ, Quận Hoàn Kiếm, Hà Nội",
  "type": "đồ uống",
  "price": "30.000đ - 65.000đ",
  "link": "https://www.now.vn/ha-noi/eden-coffee",
  "star": ""
},
{
  "img": "https://images.foody.vn/res/g7/68352/prof/s280x175/foody-mobile-pho-bat-dan-dao-tan-ha-noi-140331043024.jpg",
  "name": "phở bát đàn",
  "add": "Số 49 Bát Đàn, Cửa Đông, Hoàn Kiếm, Hà Nội",
  "type": "món ăn",
  "price": "30.000đ - 55.000đ",
  "link": "",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g2/13139/prof/s280x175/foody-mobile-bun-ca-sam-cay-si-ha-noi.jpg",
  "name": "Bún cá sâm sân si",
  "add": "Số 5 Ngõ Trung Yên, Đinh Liệt, Quận Hoàn Kiếm, Hà Nội",
  "type": "món ăn",
  "price": "15.000đ - 33.000đ",
  "link": " ",
  "star": "4.5",
},
{
  "img": "https://images.foody.vn/res/g22/213117/prof/s280x175/foody-mobile-685-jpg-390-635930314753487695.jpg",
  "name": "Bún riêu cua",
  "add": "168 Ven Hồ Đắc Di, Quận Đống Đa, Hà Nội",
  "type": "món ăn",
  "price": "30.000đ - 50.000đ",
  "link": "https://www.now.vn/ha-noi/quan-168-bun-mien-banh-da-tron",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g1/6734/prof/s280x175/foody-upload-api-foody-mobile-xoi-yen-jpg-180627174024.jpg",
  "name": "xôi yến",
  "add": "Số 35B Nguyễn Hữu Huân, Quận Hoàn Kiếm, Hà Nội",
  "type": "món ăn",
  "price": "35.000đ - 44.000đ",
  "link": "https://www.now.vn/ha-noi/xoi-yen-nguyen-huu-huan",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g65/648116/prof/s280x175/foody-mobile-17554261_40000919368-479-636265550408928135.jpg",
  "name": "Bánh Bao Nóng & Sữa Xay",
  "add": "Số 1B Nguyên Hồng, Quận Ba Đình, Hà Nội",
  "type": "món ăn",
  "price": "10.000đ - 15.000đ",
  "link": "https://www.now.vn/ha-noi/banh-bao-nong-sua-xay-nguyen-hong",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g3/24377/prof/s280x175/foody-mobile-duong-tau-jpg-241-635817164843747493.jpg",
  "name": "Phở bò",
  "add": "Số 9 Ngõ 48 Nguyễn Chánh, Quận Cầu Giấy, Hà Nội",
  "type": "món ăn",
  "price": "25.000đ - 30.000đ",
  "link": "https://www.now.vn/ha-noi/a-hien-pho-bo-com-rang-mi-xao-ngon",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g1/9247/prof/s280x175/foody-mobile-45564654-jpg-313-636127521466786573.jpg",
  "name": "cafe giảng",
  "add": "Ngõ 39 Nguyễn Hữu Huân, Quận Hoàn Kiếm, Hà Nội",
  "type": "món ăn",
  "price": "15.000đ - 33.000đ",
  "link": "https://www.now.vn/ha-noi/giang-cafe",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g23/226896/prof/s280x175/foody-mobile-banh-cuon1-jpg-408-636269840326833704.jpg",
  "name": "bánh cuốn",
  "add": "Số 66 Tô Hiến Thành, Quận Hai Bà Trưng, Hà Nội",
  "type": "món ăn",
  "price": "30.000đ - 60.000đ",
  "link": "https://www.now.vn/ha-noi/banh-cuon-ba-hoanh",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g11/106165/prof/s280x175/foody-mobile-bun-jpg-332-635757634554675505.jpg",
  "name": "bún hải sản",
  "add": "Số 3 Cao Đạt, Quận Hai Bà Trưng, Hà Nội",
  "type": "món ăn",
  "price": "40.000đ - 50.000đ",
  "link": "https://www.now.vn/ha-noi/bun-hai-san-cao-dat",
  "star": "4.5"
},
{
  "img": "https://images.foody.vn/res/g30/299438/prof/s280x175/foody-mobile-swe-jpg-657-636240514741625789.jpg",
  "name": "Drew coffe ",
  "add": "Số 41A Trần Quang Diệu, Quận Đống Đa, Hà Nội",
  "type": " đồ uống",
  "price": "25.000đ - 35.000đ",
  "link": "https://www.now.vn/ha-noi/drew-coffee ",
  "star": "4.5 "
},
{
  "img": "https://images.foody.vn/res/g3/22834/prof/s280x175/foody-mobile-pho-suong-jpg-631-635774762051123570.jpg ",
  "name": " phở sướng",
  "add": "Số 24 Ngõ Trung Yên, Đinh Liệt, Quận Hoàn Kiếm, Hà Nội",
  "type": "món ăn",
  "price": "15.000đ - 40.000đ",
  "link": " https://www.now.vn/ha-noi/pho-suong",
  "star": " 4.5"
},
{
  "img": "https://images.foody.vn/res/g14/132856/prof/s280x175/foody-mobile-w96p5mb6-jpg-471-636274344338513658.jpg ",
  "name": "Bún bò huế",
  "add": "Số 65 Đường Láng, Quận Đống Đa, Hà Nội",
  "type": "món ăn",
  "price": "20.000đ - 50.000đ ",
  "link": " https://www.now.vn/ha-noi/bun-bo-hue-65",
  "star": " 4.5"
},
]

let m=Math.floor(Math.random() * breakfast.length); 
console.log(m);
let test = document.getElementById('xxx')
test.innerHTML =  "  <div class='left'>\
<img\
  src='"+breakfast[m].img+"'>\
<blockquote>\
  <i>'Thân anh như ổ bánh mì<br>\
    Em mà đói bụng, nhâm nhi cầm chừng'</i>\
</blockquote>\
-Khuyết Danh-\
</div>\
<div class='right'>\
<div class='name-restaurant'>"+breakfast[m].name+"</div>\
<div class='address-restaurant'><i class='fas fa-map-marker-alt'></i>"+breakfast[m].add+"</div>\
<div class='cost-restaurant'>"+breakfast[m].price+"</div>\
<div class='rate'>\
  <div class='star'>\
    <span class='full'><i class='fas fa-star'></i></span>\
    <span class='full'><i class='fas fa-star'></i></span>\
    <span class='full'><i class='fas fa-star'></i></span>\
    <span class='full'><i class='fas fa-star'></i></span>\
    <span class='full'><i class='fas fa-star'></i></span>\
  </div>\
  Các Đánh Giá Từ Now\
</div>\
<a href='"+breakfast[m].link+"' class='order-restaurant'>\
  <p>Đặt Hàng</p>\
  <img src='https://www.now.vn/app/assets/img/nowvn.png?aa6bbddbf923c9dfd35ca83a7d068e6d'>\
</a>\
<div class='video'>\
  <iframe src='https://www.youtube.com/watch?v=FOu8MCbU1iA&t=880s'>\
  </iframe>\
</div>";

