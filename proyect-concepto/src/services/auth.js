import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

//Funcionalidad relativa a la autenticación en la app.
//Primero vamos a guardar en una variable interna los datos de la autenticacion
let userData = {
    id:null,
    email:null,

}
let observers =[];

onAuthStateChanged(auth,user =>{
    if(user){
    userData = {
        id:user.uid,
        email:user.email,
    }
    }else{
        userData = {
            id:null,
            email:null,
        }

    }
    notifyAll();
});

export function register({email,password}){
    return createUserWithEmailAndPassword(auth, email, password)
    .then(()=>{
        return{...userData};
    })
    .catch(error =>{
        return {
            code:error.code,
            message: error.message,
           }

    });

}

export function login ({email,password}){
    return signInWithEmailAndPassword(auth, email, password)
    //Trae las credenciales del usuario
    .then(() =>{

        // userData = {
        //     id:userCredentials.user.uid,
        //     email:userCredentials.user.email,

        // }
        // Como modificamos el contenido de userData, pedimos notificar a todos los observers.
        notifyAll();
        //console.log("[auth.js login] Autenticacion exitosa:", userData)
        return userData;
    })
    .catch(error =>{
        const output = {
            message: error.message,
            code:error.code,
        }
        console.error("[auth.js login] Error al autenticar :",output);
        return output;
    });


}

export function logout(){
    // userData ={
    //     id:null,
    //     email:null,

    // }
    // notifyAll();
    return  signOut(auth);
    
}


export function subscribeToAuth(callback){
    //Agregamos el nuevo observer/callback al stack del observers
    observers.push(callback);
    //Vamos a pasarle inmediatamente los datos actuales del objeto.
    notify(callback);
}

function notify(callback){
    callback({
        ...userData,
    })

}

function notifyAll(){
    observers.forEach(callback =>notify(callback))
}