<template>
    <router-link :to="link" class="text-white rounded-full mt-5 py-3 px-6 font-hammer uppercase w-1/2 text-center" id="startLink">  
        <slot />
    </router-link>
</template>

<script>
export default {
    name: 'TailwindLink',
    props: {
        link: String,
    }
}
</script>