const view ={
    async showScreen(screenName){
        let app = document.querySelector('#app')
        switch(screenName){
            case 'signIn':{
                app.innerHTML = components.signIn
                let linka = document.querySelector('#aSignIn')
                linka.onclick = function (){
                    view.showScreen('signUp')
                }

                
                break
            }
            case 'signUp':{
                app.innerHTML = components.signUp
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
                    
                    let validateResult = [
                        utils.Validate(signUpInfo.fullName, '#fullName-error', 'Vui lòng điền tên'),
                        utils.Validate(signUpInfo.email, '#email-error', 'Vui lòng điền email'),
                        utils.Validate(signUpInfo.password && signUpInfo.password.length >= 6, '#passWord-error', 'Vui lòng điền mật khẩu'),
                        utils.Validate(signUpInfo.password == signUpInfo.confirmPassword, '#confirmPassWord-error', 'Mật khẩu không chính xác')
                    ]

                    if(utils.allPassed(validateResult)){
                        controller.SignUp(signUpInfo)
                    }

                }
                break
            }
        }
    }
}