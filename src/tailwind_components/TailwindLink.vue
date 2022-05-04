<template>
    <router-link :to="href" class="text-white font-bold py-2 px-4 rounded-full mt-5 py-3 px-6" id="startLink">  
        <slot />
    </router-link>
</template>

<script>
export default {
    props: {
        href: String
    },
    created() {
        console.log(this.href); // Aqui es cuando se hace el componente en la app por primera vez, existe el mounted() y algunos más, te paso el link de información
    }
}

</script>