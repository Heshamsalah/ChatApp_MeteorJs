Template.chatPage.helpers({

  messages(){
    var chat = Chats.findOne({_id: Session.get("chatId")});
    if(chat){
      return chat.messages;
    }
    else {
      return false;
    }
  },
  getUser(){
    var chat = Chats.findOne({_id: Session.get("chatId")});
    return Meteor.users.findOne({_id: Session.get("otherUserId")}).profile.username;
  },

});
