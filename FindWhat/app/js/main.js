window.onload = init 
function init(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified)
            view.showScreen('home')
        else
            view.showScreen('signIn')
    })
}