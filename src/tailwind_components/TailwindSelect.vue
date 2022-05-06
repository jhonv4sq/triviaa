<template>
<div class="flex flex-col mt-5 justify-center w-full">
  <p class="text-white uppercase font-hammer mb-1">
    <slot />
  </p>
  <select v-model="model" :name="name" class="form-select uppercase text-center w-80 md:w-96
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
    focus:text-gray-700 focus:bg-white focus:outline-none" aria-label="Default select example">
      <option value="">Any</option>
      <option v-for="(list, index) in lists" v-bind:key="index" :value="list.id">{{ list.name }}</option>
  </select>
</div>
</template>

<script>
export default {
    props: {
      list: {
        type:Array,
        default: () => ([]),
      },
      model: {
        type:String,
        default: () => (""),
      },
      tailwindname: {
        type:String,
        default: () => (""),
      }
    },
    data(){
      return{
        lists: this.list,
        model: this.model,
        name: this.tailwindname,
      }
    }
}
</script>

<style>

</style>