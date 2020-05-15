const components ={
    signIn : `<section class="form-sign-in-container">
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
    signUp:`<section class="form-sign-up-container">
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
</section>`
}