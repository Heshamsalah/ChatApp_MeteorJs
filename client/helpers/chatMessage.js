Template.chatMessage.helpers({
  getOwner(ownerId){
    var owner = Meteor.users.findOne({_id: ownerId}).profile.username;
    if(owner) {
      return owner;
    }
    return false;
  },
  getAvatar(ownerId){
    var avatar = Meteor.users.findOne({_id: ownerId}).profile.avatar;
    if(avatar){
      return avatar;
    }
    return false;
  }
});
