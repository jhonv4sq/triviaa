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
    }
}

</script>