const controller = {
    signUp: async function(signUpInfo){
        let fullName = signUpInfo.fullName
        let email = signUpInfo.email
        let password = signUpInfo.password
        
        utils.setText('#sign-up-success', '')
        utils.setText('#confirmPassWord-error','')
        utils.setLoadingContent('#btn-sign-up',`<div class="lds-facebook"><div></div><div></div><div></div></div>`)

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password) 
            await firebase.auth().currentUser.updateProfile({
                displayName: fullName
            })
            await firebase.auth().currentUser.sendEmailVerification()
            utils.setText('#sign-up-success', 'An email verification has been sent to your email')
        } catch (error) {
            let message = error.message
            utils.setText('#confirmPassWord-error', message)
        }
        utils.setLoadingContent('#btn-sign-up',`Đăng Kí`)
    },
    signIn: async function(signInInfo){
        let email = signInInfo.email
        let password = signInInfo.password

        utils.setText('#passWord-error','')
        utils.setLoadingContent('#btn-sign-in',`<div class="lds-facebook"><div></div><div></div><div></div></div>`)

        try{
            let result = await firebase.auth().signInWithEmailAndPassword(email,password)
            let user = result.user
            if(user.emailVerified){
                window.open("./home.html","_self")
            } else{
                throw new Error('Must verify email')
            }
        }
        catch (error){
            let message = error.message
            utils.setText('#passWord-error',message)
        }
        utils.setLoadingContent('#btn-sign-in',`Đăng Nhập`)
    },
    googleSignUp: function(){
        console.log('alo')
        let provider = new firebase.auth.GoogleAuthProvider()
        console.log('hihi',provider)

        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log('success')
          }).catch(function(error) {
              console.log('error nek', error)
          });
    }
    
}