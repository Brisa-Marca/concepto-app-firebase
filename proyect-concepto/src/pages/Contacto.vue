<script>
//import { getUserProfileById } from '../services/user';
import { sendPrivateChatMessage, subscribeToPrivateChat, } from '../services/private-chat';
import { subscribeToAuth } from '../services/auth';
import { formatDate } from '../helpers/date.js';


export default{
    name:'PrivateChat',

    data() {
        return {
            // loadingMessages: true,
            messages: [],
            // loadingProfile: true,
            idUserAdmin:'Q9DQIiTc2scDo10DKvmsUrsZY6a2',
            newMessage: {
                message: '',
            },
            userAuth: {
                id: null,
                email: null,
            },
            authUnsubscribe: () => {},
            chatUnsubscribe: () => {},
        };
    },
    methods: {
        handleMessage() {
            sendPrivateChatMessage({
                sender: this.userAuth.id,
                receiver: this.idUserAdmin,
                message: this.newMessage.message,
            });
            this.newMessage.message = '';
        },

        dateToString(date) {
            return formatDate(date);
        }
    },
    async mounted(){
        //this.idAdmin;
        //this.userProfile = await getUserProfileById(this.$route.params.id);
        this.authUnsubscribe = subscribeToAuth(user => this.userAuth = user);

        this.chatUnsubscribe = await subscribeToPrivateChat(
            {user1: this.userAuth.id, user2:this.idUserAdmin}, 
            newMessages => this.messages = newMessages
        );
    },
    unmounted(){
      this.authUnsubscribe();
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
            <div id="chat" class="chat" v-for="message in messages">
                <p>{{ message.message }}</p>
                <div class="fecha-hora">{{ dateToString(message.created_at) || 'Enviando...' }}</div>
            </div>
            <div class="form-chat "  id="chat-form">
                <form action="#"
                @submit.prevent="handleMessage" class="content-form-chat">
                    <div class="content-textarea">
                        <label for="mensaje"></label>
                        <textarea  class="textarea" type="text" id="mensaje" v-model="newMessage.message" placeholder="Hola,tengo una duda..."></textarea>
                    </div>
                    <div>
                        <button type="submit" class="main-cta enviar">Enviar</button>
                    </div>
                    
                   
                </form>
            </div>
            <template >
              
            </template>
            <!-- <template>
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
                    
                   
                </form> -->
                

            <!-- </div> -->
           
           </section>

</template>