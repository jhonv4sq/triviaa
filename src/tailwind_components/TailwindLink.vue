<template>
    <router-link :to="link" class="text-white font-bold py-2 px-4 rounded-full mt-5 py-3 px-6" id="startLink">  
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