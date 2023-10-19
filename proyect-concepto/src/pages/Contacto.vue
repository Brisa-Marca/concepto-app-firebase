<script>
import {chatSubscribeToMessage, chatSaveMessage} from './../services/chat.js';
import { subscribeToAuth } from '../services/auth.js';
import { formatDate } from '../helpers/date.js';
import  BaseLoader  from '../components/BaseLoader.vue';

export default{
    name:'Contacto',
    components:{ BaseLoader },
    data(){
        return{
            LoadingMessages: true,
            messages:[],
            newMessage:{
             user:'',
             message:''
           },
           user:{
            id:null,
            email:null,
           },
           authUnsubsribe:()=>{},
           chatUnsubscribe: () => {},

        }
    },
    
    methods:{
        sendMessage(){
            chatSaveMessage({
                userId:this.user.id,
                user: this.user.email,
                message: this.newMessage.message,
            })
            .then(()=>{
                this.newMessage.message = '';
            });
        },
        dateToString(date){
            return formatDate(date);
        }
    },
    mounted() {
        this.LoadingMessages = true;
        this.chatUnsubscribe = chatSubscribeToMessage(messages =>{
            this.messages = messages;
            this.LoadingMessages = false;
        });
        this.authUnsubsribe = subscribeToAuth(newUser =>{
            this.user = {...newUser};
        })
    },
    unmounted(){
         // Muy importante no olvidarse de limpiar las suscripciones. De lo contrario, vamos a tener un "memory leak".
        this.authUnsubsribe();
        this.chatUnsubscribe();
    }
}
</script>

<template>
     <section class="pricing-content">
            <p class="subtitle subtitle-center-lines text-center">¿Alguna duda?</p>
            <h2 class="h1 h1-bigger text-center mt-8 mb-56 title-pricing">Ponte en contacto con nosotros</h2>
            <p class="paragraph mb-8 p-pricing">
                Escribinos por chat ante cualquier duda que tengas, alguien de nuestro equipo se pondrá en contacto a la brevedad
            </p>
    
           </section>
           <section class="content-chat">
            <template  v-if="LoadingMessages">
              <BaseLoader/>
            </template>
            <template v-else>
            <div id="chat" v-for="mensaje in messages">
                <h2 class="title-plans "> <router-link :to="`/usuario/${mensaje.userId}`">Usuario:{{mensaje.user}}</router-link></h2>
                         <p>Mensaje:{{mensaje.message}}</p>
                         <div>{{ dateToString(mensaje.created_at)}}</div>
                
            </div>
        </template>
            <div class="form-chat checkout-form form-login"  id="chat-form">
                <form action="#"
                @submit.prevent="sendMessage">
                    <div class="form-input">
                        <label for="user">Usuario</label>
                        <p>{{ user.email }}</p>
                        <!-- <input type="text" id="user" v-model="newMessage.user"> -->
                    </div>
                    <div class="form-input">
                        <label for="mensaje">Mensaje</label>
                        <textarea type="text" id="mensaje" v-model="newMessage.message"></textarea>
                    </div>
                    <button type="submit" class="main-cta login">Enviar</button>
                   
                </form>
                

            </div>
           
           </section>
</template>