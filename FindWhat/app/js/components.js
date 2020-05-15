const components = {
    signIn: `<section class="form-sign-in-container">
    <form class="form-sign-in">
        <h1>Đăng Nhập</h1>
        <div class="txtb">
            <input type="email" name="email" placeholder="Email">
            <span></span>
            <div class="alert-error" id="email-error"></div>
        </div>
        <div class="txtb">
            <input type="password" name = "password" placeholder="Mật khẩu">
            <span></span>
            <div class="alert-error" id="passWord-error"></div>
        </div>
        <button id="btn-sign-in"  class="logbtn" type="submit">Đăng nhập</button>
        <div class="bottom-in">
            Bạn chưa có tài khoản?<a id= "aSignIn"href="#"> Đăng kí</a>
        </div>
        <div class="social-media">
            <ul>
                <li id="fbnek"><img src="img/FbIcon.png"></li>
                <li id="googlenek"><img src="img/googleIcon.png"></li>
                <li id="phonenek"><img src="img/phoneIcon.png"></li>
                <li id="githubnek"><img src="img/githubIcon.png"></li>
            </ul>
        </div>
    </form>
</section>`,
    signUp: `<section class="form-sign-up-container">
    <form class="form-sign-up">
        <h1>Đăng Kí</h1>
        <div id ="form-input-signup-wrapper">
        <div class="txtbup">
            <input type="text" name="fullName" placeholder="Họ tên">
            <span></span>
            <div class="alert-error" id="fullName-error"></div>
            
        </div>
        <div class="txtbup">
            <input type="email" name="email" placeholder="Email">
            <span></span>
            <div class="alert-error" id="email-error"></div>
        </div>
        <div class="txtbup">
            <input type="password" name="password" placeholder="Mật khẩu">
            <span></span>
            <div class="alert-error" id="passWord-error"></div>
        </div>
        <div class="txtbup">
            <input type="password" name="confirmPassword" placeholder="Xác nhận mật khẩu">
            <div class="alert-error" id="confirmPassWord-error"></div>
            <div class="alert-success" id="sign-up-success"></div>
            <span></span>
            
        </div>
        </div>
        <button id="btn-sign-up" class="logbtn" type="submit" ></button>
        <div class="bottom-up">
            Bạn đã có tài khoản?<a id="aSignUp" href="#"> Đăng Nhập</a>
        </div>
        <div class="social-media social-media-up">
            <ul>
            <li id="fbnek"><img src="img/FbIcon.png"></li>
            <li id="googlenek"><img src="img/googleIcon.png"></li>
            <li id="phonenek"><img src="img/phoneIcon.png"></li>
            <li id="githubnek"><img src="img/githubIcon.png"></li>
            </ul>
        </div>
    </form>
</section>`,
    home: `<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
<div class="container-fluid">
    <a class="navbar-branch mr-4" href="#">
        <img height="45px" src="./img/logo.JPG" style="border-radius: 50%;">
        Where to go</a>
    <form class="form-inline input-nav" action="/action_page.php">
        <input class="form-control mr-sm-2" type="text" placeholder="Tìm kiếm">
        <button class="btn btn-outline-light" type="submit"> <i class="fas fa-search"
                style="color:  rgb(133, 133, 231);"></i> </button>
    </form>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Chat</a>
            </li>
            <li class="nav-item mr-4">
                <a class="nav-link" href="#">Team</a>
            </li>
            <li  class="nav-item">
                <a id="dangNhapChange" class="nav-link pr-0" href="#">Đăng Nhập</a>
            </li>
            <li  class="nav-item">
                <a id="dangKyChange" class="nav-link" href="#">Đăng Ký</a>
            </li>

        </ul>
    </div>
</div>
</nav>
<!-- XXX  body  XXX -->
<!-- banner introduce -->
<div id="demo" class="carousel slide" data-ride="carousel">

<ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div class="carousel-inner">
    <div class="carousel-item active">
        <img style="width: 100%; " src="./img/banner11.JPG" alt="Sập Mẹ Web r">

    </div>
    <div class="carousel-item">
        <img style="width: 100%;height: auto;" src="./img/c2.jpg" alt="Sập Mẹ Web r">
        <div class="carousel-caption">
            <h2 class="display-2">Giới Thiệu Nè</h2>
            <h4>nói gì thì nói</h4>
            <h4>cac kieu cac kieu</h4>
            <h4>font chữ Huyền chọn đi nhé hihi</h4>

        </div>
    </div>
    <div class="carousel-item">
        <img style="width: 100%;height: auto;" src="./img/c1.jpg" alt="Sập Mẹ Web r">
    </div>
</div>


<a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
</a>
</div>
<!-- form input content -->
<div class="container">
<h2>Bạn có địa điểm gì mới</h2>
<p>Chia sẻ đi bạn êi</p>
<form id="form-input-user-wrapper" class="row">
    <div class="left-input-user-wrapper col-md-6 col-12">
        <div class="input-group input-group-sm bbbx">
            <div class="input-group-prepend">
                <p>Tên:</p>
            </div>
            <input type="text" class="form-control">
        </div>
        <span></span>
        <div class="input-group input-group-sm bbbx">
            <div class="input-group-prepend">
                <p>Đia Chỉ:</p>
            </div>
            <input type="text" class="form-control">
        </div>
        <span></span>
        <div class="input-group input-group-sm bbbx">
            <div class="input-group-prepend">
                <p>Thể Loại:</p>
            </div>
            <input type="text" class="form-control">
        </div>
        <span></span>
        <div class="input-group input-group-sm bbbx">
            <div class="input-group-prepend">
                <p>Hashtag:</p>
            </div>
            <input type="text" class="form-control">
        </div>
        <span></span>
        <div class="input-tag">
            <a>#club</a>
            <a>#nightlife</a>
            <a>#Buổitối</a>
            <a>#Buổitrưa</a>
            <a>#Nghĩđi</a>
        </div>
    </div>
    <div class="right-input-user-wrapper col-md-6 col-12">
        <label for="comment">Content:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
        <i class="far fa-paperclip">Thêm Ảnh</i>
    </div>


</form>
</div>
<!-- show infomation of HaNoi -->
<div class="container thong-tin-noi-bat">
<h2>Thông tin nổi bật</h2>
<h4>Những thông tin mới nhất về Hà Nội</h4>

<div class="container mt-4">
    <div id="demo1" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
            <li data-target="#demo1" data-slide-to="0" class="active"></li>
            <li data-target="#demo1" data-slide-to="1"></li>
        </ul>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb1.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb2.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb3.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb4.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>

                </div>
            </div>
            <div class="carousel-item">
                <div class="row">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb2.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb1.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb4.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-6">
                        <a href="#">
                            <img src="./img/bb3.PNG" alt="Image" style="max-width:100%;">
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#demo1" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo1" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</div>
</div>
<!-- select to show -->
<div id="demo2" class="carousel slide" data-ride="carousel">
<!-- Indicators -->
<ul class="carousel-indicators">
    <li data-target="#demo2" data-slide-to="0" class="active"></li>
    <li data-target="#demo2" data-slide-to="1"></li>
    <li data-target="#demo2" data-slide-to="2"></li>
</ul>

<!-- The slideshow -->
<div class="carousel-inner">
    <div class="carousel-item active">
        <img style="width: 100%;" src="./img/c3.jpg" alt="">
    </div>
    <div class="carousel-item">
        <img style="width: 100%;" src="./img/c2.jpg" alt="">
    </div>
    <div class="carousel-item">
        <img style="width: 100%;" src="./img/c1.jpg" alt="">
    </div>
</div>

<!-- Left and right controls -->
<a class="carousel-control-prev" href="#demo2" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo2" data-slide="next">
    <span class="carousel-control-next-icon"></span>
</a>
<div class="option-wrapper">
    <div class="left-option-wrapper">
        <div class="left-option-wrapper-content">
            <p class="title-nek">Danh sách các địa điểm</p>
            <p class="content-nek">ấn vào đây sẽ ra list danh sách các nơi người dùng đã chia sẻ + data của đức
                <br> ấn vào thử đi</p>
            <a href="./card.html"><button type="button" class="btn btn-primary btn-lg ">Khám Phá</button></a>
        </div>

    </div>
    <div class="right-option-wrapper">
        <div class="right-option-wrapper-content">
            <p class="title-nek">Các tour quanh Hà Nội</p>
            <p class="content-nek">ấn vào sẽ hiện ra 1 vài tour gần Hà Nội hoặc list đi chơi luôn <br> ví dụ: đi
                xp -> đi ăn -> đi uống nước</p>
            <button type="button" class="btn btn-primary btn-lg">Khám Phá</button>
        </div>
    </div>
</div>
</div>
<!--XXX footer XXX-->
<footer>
<div class="container-fluid padding">
    <div class="row text-center">
        <div class="col-md-5">
            <hr class="light">
            <h5>Team</h5>
            <hr class="light">
            <p>Nguyễn Văn Cường</p>
            <p>Nguyễn Hồng Hà</p>
            <p>Phùng Minh Huyền</p>
            <p>Nguyễn Hữu Đức</p>
        </div>
        <div class="col-md-2">
            <img height="200px" style="padding-top: 20px;" src="./img/logo.JPG">
        </div>
        <div class="col-md-5">
            <hr class="light">
            <h5>Liên Hệ</h5>
            <hr class="light">
            <p>wtgmindx@gmail.com</p>
            <p>Hanoi, Vietnam</p>
            <p>0374523912</p>
            <div class="social-media">
                <ul>
                    <a>
                        <li id="fbnek"><img src="img/FbIcon.png"></li>
                    </a>
                    <a>
                        <li id="googlenek"><img src="./img/instagram.png"></li>
                    </a>
                    <a>
                        <li id="phonenek"><img src="img/messenger.png"></li>
                    </a>
                    <a>
                        <li id="githubnek"><img src="img/zalo.png"></li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="col-12">
            <hr class="light-80">
            <h5>&copy; Where to go!</h5>
        </div>
    </div>
</div>
</footer>`
}