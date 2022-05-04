<template>
    <button class="text-white font-bold py-2 px-4 rounded-full mt-5 py-3 px-6">  
        <slot />
    </button>
</template>

<script>
export default {
    props:{
        color:String
    }
};
</script>
