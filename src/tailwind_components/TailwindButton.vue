<template>
    <button class="text-white font-bold py-2 px-4 rounded-full mt-5 py-3 px-6">  
        <slot />
    </button>
</template>

<script>
export default {
  data(){
    return {
      data: 'bg-'+this.color+'-500 hover:bg-'+this.color+'-700 text-white font-bold py-2 px-4 rounded-full mt-5 py-3 px-6'
    }
  },
  props: {
    color: {
      type: String,
    }
  },
  created(){
    console.log(this.color);
  }
};
</script>
