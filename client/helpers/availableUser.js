Template.availableUser.helpers({

   getUsername(userId){
     user = Meteor.users.findOne({_id: userId});
     return user.profile.username;
   },
   isMyUser(userId){
     if (userId == Meteor.userId()){
       return true;
     }
     else {
       return false;
     }
   }

 });
