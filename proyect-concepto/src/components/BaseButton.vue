<script>
import BaseLoader from './BaseLoader.vue';
export default{
    name:'BaseButton',
    props:{
        loading:{
            type:Boolean,
            default:false,
        }
    },
   components:{ BaseLoader }
}
</script>
<template>
<button type="submit"  class="main-cta login">
     <slot v-if="!loading" >Cargar</slot> 
     <BaseLoader v-else />
    
    </button>
</template> 