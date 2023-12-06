<script>
import { getUserProfileById } from '../services/user';
export default {
    name: 'PrivateChatAdmin',
    data() {
        return {
            userProfile: {
                id: null,
                email: null,
            }
        }
    },
    async mounted() {
        this.userProfile = await getUserProfileById(this.$route.params.id);

    }
}
</script>
<template>
    <div class="content-login">
        <h1 class="hero-section-title mb-24">Chat Privado con {{ userProfile.email }}</h1>
    </div>


    <section class="content-chat">
        <div id="chat" class="chat-admin">
            <p>hola</p>
            <div class="fecha-hora ">111</div>
        </div>
        <div class="form-chat " id="chat-form">
            <form action="#" class="content-form-chat">
                <div class="content-textarea">
                    <label for="mensaje"></label>
                    <textarea class="textarea" type="text" id="mensaje" placeholder="Hola,tengo una duda..."></textarea>
                </div>
                <div>
                    <button type="submit" class="main-cta enviar">Enviar</button>
                </div>


            </form>
        </div>
    </section>
</template>