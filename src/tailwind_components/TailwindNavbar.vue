<template>
    <router-link :to="link" class="text-white font-hammer uppercase" id="startLink">  
        <slot />
    </router-link>
</template>

<script>
export default {
    name: 'TailwindNavbar',
    props: {
        link: String,
    },
    created() {
    }
}

</script>