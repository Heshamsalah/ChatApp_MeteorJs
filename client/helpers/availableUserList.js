Template.availableUserList.helpers({

  users(){
    return Meteor.users.find();
  }

});
