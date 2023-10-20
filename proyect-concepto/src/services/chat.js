import { db } from "./firebase.js";
import {addDoc, collection, onSnapshot, orderBy, query, serverTimestamp} from "firebase/firestore";

//const divChat = document.getElementById("chat");
const refChat = collection(db, "chat");

export function chatSaveMessage(data){
         return addDoc(refChat,{
                ...data,
                created_at:serverTimestamp(),
            })
}



export function chatSubscribeToMessage(callback){
   const q = query(refChat,orderBy('created_at'));
   return onSnapshot(q,snapshot=>{
        const messages = snapshot.docs.map(doc =>{
            return{
                userId: doc.data().userId,
               user: doc.data().user,
            message:doc.data().message,
            created_at:doc.data().created_at?.toDate(),

            }
        });
        //console.log(messages)
        callback(messages);
       })
      
      
}