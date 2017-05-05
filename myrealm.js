var Realm = require('realm');
import {
  ToastAndroid
} from 'react-native';


const MessagesSchema = {
  name: 'Messages',
  primaryKey: 'uuid',
  properties: {
    uuid:{type:'string'},
    body:{type:'string',optional:true}, //String	The body of the Message.
    channel:{type:'string',optional:true}, //The Channel the Message belongs to.
    sid:  {type:'string',optional:true}, //The server-assigned unique identifier for the Message.
    timestamp: {type:'date',default: new Date()}, //timestamp	Date	When the Message was sent.
    channel:{type:'string',optional:true},
    type:{type:'string'},
    dateUpdated: {
      type: 'date',
      default:new Date()
    }, //When the Message was updated.
    index: {
      type: 'int',
      default: 0
    }, //Index of Message in the Channels messages stream.
    lastUpdatedBy: {
      type: 'date',
      default:new Date()
    } //The name of the last user updated this Message.
  }
}

// Initialize a Realm with Messages and Conversations models
const ConversationsRealm = new Realm({
  schema: [MessagesSchema],
  schemaVersion:1,
  migration: function(oldRealm, newRealm) {
  }
});

//TODO Optimise perfomance two Db calls.
export async function createAMessage(message){
  //return new Promise((resolve,reject) => {
    ConversationsRealm.write(() => {
      let msg = ConversationsRealm.create('Messages',message,true);
      //resolve(msg);
    });
  //})
}


export default createAMessage;
