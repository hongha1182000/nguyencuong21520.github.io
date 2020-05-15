const view ={
    async showScreen(screenName){
        let app = document.querySelector('#app')
        switch(screenName){
            case 'signIn':{
                app.innerHTML = components.signIn
                utils.setLoadingContent('#btn-sign-in',`Đăng Nhập`)
                let linka = document.querySelector('#aSignIn')
                linka.onclick = function (){
                    view.showScreen('signUp')
                }

                let form = document.querySelector('.form-sign-in')
                form.onsubmit = function(event){
                    event.preventDefault()

                    let signInInfo ={
                        email: form.email.value.trim().toLowerCase(),
                        password: form.password.value
                    }

                    let checkPassword = null
                    if(!signInInfo.password){
                        checkPassword = 'Vui lòng điền mật khẩu'
                    }
                    else if(signInInfo.password.length < 6 ){
                        checkPassword = 'Mật khẩu quá ngắn'
                    }

                    let validateResult = [
                        utils.Validate(signInInfo.email,'#email-error','Vui lòng nhập email'),
                        utils.Validate(signInInfo.password && signInInfo.password.length >= 6,'#passWord-error', checkPassword)
                    ]

                    if(utils.allPassed(validateResult)){
                        controller.signIn(signInInfo)
                    }
                }
                
                break
            }
            case 'signUp':{
                app.innerHTML = components.signUp
                utils.setLoadingContent('#btn-sign-up',`Đăng Kí`)
                let linka = document.querySelector('#aSignUp')
                linka.onclick = function (){
                    view.showScreen('signIn')
                }

                let form = document.querySelector('.form-sign-up')
                form.onsubmit = function(event){
                    event.preventDefault()
                    
                    let signUpInfo ={
                        fullName: form.fullName.value.trim(),
                        email: form.email.value.trim().toLowerCase(),
                        password: form.password.value,
                        confirmPassword: form.confirmPassword.value
                    }
                    
                    let checkPassword = null
                    if(!signUpInfo.password){
                        checkPassword = 'Vui lòng điền mật khẩu'
                    }
                    else if(signUpInfo.password.length < 6 ){
                        checkPassword = 'Mật khẩu quá ngắn'
                    }

                    let validateResult = [
                        utils.Validate(signUpInfo.fullName, '#fullName-error', 'Vui lòng điền tên'),
                        utils.Validate(signUpInfo.email, '#email-error', 'Vui lòng điền email'),
                        utils.Validate(signUpInfo.password && signUpInfo.password.length >= 6, '#passWord-error', checkPassword),
                        utils.Validate(signUpInfo.password == signUpInfo.confirmPassword, '#confirmPassWord-error', 'Mật khẩu không chính xác')
                    ]

                    if(utils.allPassed(validateResult)){
                        controller.signUp(signUpInfo)
                    }

                }

                let googleSignUp = document.querySelector('#googlenek')
                googleSignUp.onclick = function(){
                    controller.googleSignUp()
                }
                break
            }
            case 'home':{
                app.innerHTML = components.home
                controller.showNameUser()

                let checkSignined = firebase.auth().onAuthStateChanged(function (user) {
                    if (user && user.emailVerified)
                        return true;
                    else
                        return false;
                })
                console.log('aa',checkSignined)

                let out = document.querySelector('#dangKyChange')
                out.onclick = function () {
                    if(checkSignined){
                    firebase.auth().signOut()}
                    else{
                        view.showScreen('signUp')
                    }
                }
            }
        }
    }
}