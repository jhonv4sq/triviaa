<template>
  <div class="flex flex-col mt-5 justify-center w-full">
    <p class="text-white uppercase font-hammer mb-1">
        <slot />
    </p>
    <input :type="type" v-model="model" :name="name" min="1" max="50" class="form-select uppercase text-center w-80 md:w-96
    block
    px-3
    py-1.5
    text-base
    font-hammer
    text-dark
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    m-0
    focus:text-gray-700 focus:bg-white focus:outline-none">
  </div>
</template>

<script>
export default {
    props:{
        model: {
            type: String,
            default: () => (""),
        },
        tailwindname: {
            type:String,
            default: () => (""),
        },
        tailwindtype: {
            type:String,
            default: () => (""),
        }
    },
    data(){
      return{
        model: this.model,
        name: this.tailwindname,
        type: this.tailwindtype,
      }
    }
}
</script>

<style>

</style>