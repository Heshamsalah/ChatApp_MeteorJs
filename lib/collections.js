Chats = new Mongo.Collection("chats");

/* Chats Schema
*
* id: automatically added
* users: [
*         user1: String,
*         user2: String
*       ] 
* messages: [
*              {
*               text: String,
*               owner: String
*              }
*          ]
*/
