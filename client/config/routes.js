// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// specify the top level route, the page users see when they arrive at the site
Router.route('/', function () {
  this.render("navbar", {to:"header"});
  this.render("lobbyPage", {to:"main"});
});

// specify a route that allows the current user to chat to another users
Router.route('/chat/:_id', function (){
  // the user they want to chat to has id equal to
  // the id sent in after /chat/...
  Session.set("otherUserId", this.params._id);
  var otherUserId = this.params._id;
  if(otherUserId && Meteor.userId()){
    console.log("otherUserId ===>> "+otherUserId);
    console.log("This user   ===>> "+Meteor.userId());
    Meteor.call("getChat", otherUserId,function(err,res){
      if(!err){
        console.log(res);
        console.log("_____Chat Found_____");
        Session.set("chatId", res._id);
        console.log("chatid "+res._id);
      }else{
        console.log("!!____No Chat Found____!!");
          if(Meteor.userId()){
            Meteor.call("createChat", otherUserId, function(err, res){
              if(!err){
                if(res){// looking good, save the id to the session
                  Session.set("chatId", res);
                }
                console.log("Chat Created > [ "+res+" ]");
              }
              else{
                console.log(err);
              }
            });
          }
      }
    });
  }
  this.render("navbar", {to:"header"});
  this.render("chatPage", {to:"main"});
});
