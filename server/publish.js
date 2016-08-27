Meteor.publish("chats", function(){
  return Chats.find();
});

Meteor.publish("users", function(){
  return Meteor.users.find();
});

Meteor.publish('emojis', function() {
  // Here you can choose to publish a subset of all emojis
  // if you'd like to.
  return Emojis.find();
});
