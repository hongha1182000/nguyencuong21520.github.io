 const controller = {
     signUp: async /*câu lệnh bất đồng bộ,kiểu tất cả các lệnh chạy cùng 1 lúc */ function (signUpInfo) {
         // console.log('sign up',signUpInfo)
         let email = signUpInfo.email
         let password = signUpInfo.password
         let firstname = signUpInfo.firstname
         let lastname = signUpInfo.lastname
         view.setText('#sign-up-success', '')
         view.setText('#sign-up-error', '')
         view.disable('#form-sign-up-btn')
         try {
             await firebase.auth().createUserWithEmailAndPassword(email, password) /*await là để câu lệnh chạy xong rồi với đến câu lệnh khác */
             await firebase.auth().currentUser.updateProfile({
                 displayName: firstname + " " + lastname
             })
             await firebase.auth().currentUser.sendEmailVerification()
             view.setText('#sign-up-success', 'An email verification has been sent to your email')
         } catch (error) {
             let message = error.message
             view.setText('#sign-up-error', message)
         }
         view.enable('#form-sign-up-btn')
     },
     signIn: async function (signInInfo) {
         view.setText('#sign-in-error', '')
         view.disable('#form-sign-in-btn')
         try {
             let email = signInInfo.email
             let password = signInInfo.password
             let result = await firebase.auth().signInWithEmailAndPassword(email, password)
             let user = result.user
             if (user.emailVerified) {
                 view.showScreen('chat')
             } else {
                 throw new Error('Must verify email!')
             }

         } catch (error) {
             // console.log('error', error)
             // console.log(error.message)
             let message = error.message
             view.setText('#sign-in-error', message)
             view.enable('#form-sign-in-btn')
         }

     },
     loadConversations: async function () {
         // console.log('model before load',model)

         // read if from DB

         let result = await firebase.firestore()
             .collection('conversations')
             .get()
         let conversations = utils.getDataFromDocs(result.docs)
         model.saveListConversations(conversations)
         if (conversations.length) {
             let currentConversation = conversations[0]
             model.saveCurrentConversations(currentConversation)
         }

         // console.log('model affter load ' , model)


     },
     updateNewMessage: async function (messageContent) {
         // console.log(messageContent)

         if (model.currentConversations) {
             let conversationId = model.currentConversations.id
             let currentEmail = firebase.auth().currentUser.email
             let message = {
                 content: messageContent,
                 owner: currentEmail,
                 sentAt: new Date().toISOString()
             }
             view.disable('#aaa')
             let btnSubmitFormAddMessage = document.querySelector('#aaa')
             let inputFormAddMessage = document.querySelector('.form-add-message-chat input[name="message"]') 
             //query theo đặc điểm-> nút input nằm trong div .form-add.. với name = messs
             
             await firebase.firestore()
                 .collection('conversations')
                 .doc(conversationId)
                 .update({
                     messages: firebase.firestore.FieldValue.arrayUnion(message)
                 })
             console.log('done')
             view.enable('#aaa')
             inputFormAddMessage.value = ''
         }
     }
 }