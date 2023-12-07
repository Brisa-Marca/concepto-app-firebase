<script>
import { getUserProfileById } from '../services/user';
import { sendPrivateChatMessage, subscribeToPrivateChat } from '../services/private-chat';
import { subscribeToAuth } from '../services/auth';
import { formatDate } from '../helpers/date.js';

export default {
    name: 'PrivateChatAdmin',
    data() {
        return {
            messages: [],
            userProfile: {
                id: null,
                email: null,
            },
            newMessage: {
                message: '',
            },
            userAuth: {
                id: null,
                email: null,

            },
            authUnsubscribe: () => { },
            chatUnsubscribe: () =>{},
        }
    },
    methods: {
        handleMessage() {
            sendPrivateChatMessage({
                sender: this.userAuth.id,
                receiver: this.userProfile.id,
                message: this.newMessage.message,
            });
             this.newMessage.message = '';
        },
        dateToString(date) {
            return formatDate(date);
        }

    },
    async mounted() {
        this.userProfile = await getUserProfileById(this.$route.params.id);
        this.authUnsubscribe = subscribeToAuth(user => this.userAuth = user);
        this.chatUnsubscribe = await subscribeToPrivateChat({
            user1:this.userProfile.id,
            user2:this.userAuth.id, 

        }, newMessages => this.messages = newMessages);
    
    },
    unmounted() {
        this.authUnsubscribe();
    }
}
</script>
<template>
    <div class="content-login">
        <h1 class="hero-section-title mb-24"> Chat Privado con {{ userProfile.email }} </h1>
    </div>


    <section class="content-chat">
            <div id="chat" class="chat-admin" v-for="message in messages">
            <p> {{ message.message }} </p>
            <div class="fecha-hora ">{{ dateToString(message.created_at) || 'Enviando...' }}</div>
        </div>
        
        <div class="form-chat " id="chat-form">
            <form action="#" class="content-form-chat" @submit.prevent="handleMessage">
                <div class="content-textarea">
                    <label for="mensaje"></label>
                    <textarea class="textarea" type="text" id="mensaje" placeholder="hola,admin..."
                        v-model="newMessage.message"></textarea>
                </div>
                <div>
                    <button type="submit" class="main-cta enviar">Enviar</button>
                </div>


            </form>
        </div>
    </section>
</template>