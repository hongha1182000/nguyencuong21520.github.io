const model = {
    listConversations: null, //danh sách cuộc hội thoại người tham gia 
    currentConversations: null, // Cuộc hội thoại người dùng đang trỏ vào
    // { user : [], messages : [], title , createAt}
    saveListConversations(conversations) {
        model.listConversations = conversations
    },
    saveCurrentConversations(conversation) {
        model.currentConversations = conversation
    },
    updateConversationChange(newConversation){
        //newConversation = { id:1 }
        if(model.listConversations){
            //listConversation = [{id:1},{id:2},{id:3}]
            let foundIndex = model.listConversations.findIndex(function(conversation){
                return conversation.id = newConversation.id
            })

            if(foundIndex>=0){
                model.listConversations[foundIndex] =  newConversation
            } else{
                model.listConversations.push(newConversation)
            }

            //currentConversation = {id:1}
            if(model.currentConversations && newConversation.id == model.currentConversations.id){
                model.saveCurrentConversations(newConversation)
            }
        }
    }
}