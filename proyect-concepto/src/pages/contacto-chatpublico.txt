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
            <div id="chat" class="chat" v-for="mensaje in messages">
                <h3 class="usuario-chat "> <router-link :to="`/usuario/${mensaje.userId}`">{{mensaje.user}}</router-link></h3>
                         <p>{{mensaje.message}}</p>
                         <div class="fecha-hora">{{ dateToString(mensaje.created_at)}}</div>
                
            </div>
        </template>
            <div class="form-chat "  id="chat-form">
                <form action="#"
                @submit.prevent="sendMessage" class="content-form-chat">
                    <div class="content-textarea">
                        <label for="mensaje"></label>
                        <textarea  class="textarea" type="text" id="mensaje" v-model="newMessage.message" placeholder="Hola,tengo una duda..."></textarea>
                    </div>
                    <div>
                        <button type="submit" class="main-cta enviar">Enviar</button>
                    </div>
                    
                   
                </form>
                

            </div>
           
           </section>
</template>