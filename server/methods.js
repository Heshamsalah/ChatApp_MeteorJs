Meteor.methods({
  updateMessage(chat){
    if(Meteor.userId()){//user logged in
      Chats.update(chat._id, chat);
    }
  },
  createChat(otherUserId){
    if(Meteor.userId()){
      return Chats.insert({
        users: [
          {user1: Meteor.userId()},
          {user2: otherUserId}
        ]
      });
    }
  },
  getChat(otherUserId){
    var filter = {
                  $or:[
                        {
                          users: [
                            {user1: Meteor.userId()},
                            {user2: otherUserId}
                          ]
                        },
                        {
                          users: [
                            {user1: otherUserId},
                            {user2: Meteor.userId()}
                          ]
                        }
                      ]
                 };
    var chat = Chats.findOne(filter);
    if(!chat){
      throw new Meteor.Error("No Chats", "Can't find Chats");
    }
    else{
      return chat;
    }
  }
});
