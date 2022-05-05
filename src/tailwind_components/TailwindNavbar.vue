<template>
    <router-link :to="link" class="text-white font-hammer uppercase" id="startLink">  
        <slot />
    </router-link>
</template>

<script>
export default {
    props: {
        link: String,
    },
    created() {
        console.log(this.link); // Aqui es cuando se hace el componente en la app por primera vez, existe el mounted() y algunos más, te paso el link de información
        // console.log(this.color);
    }
}

</script>