const model = {
    listConversations: null, //danh sách cuộc hội thoại người tham gia 
    currentConversations: null, // Cuộc hội thoại người dùng đang trỏ vào
    // { user : [], messages : [], title , createAt}
    saveListConversations(conversations) {
        model.listConversations = conversations
    },
    saveCurrentConversations(conversation) {
        model.currentConversations = conversation
    }
}