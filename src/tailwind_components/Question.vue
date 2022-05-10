<template>
  <div
    class="flex items-center justify-center text-center px-2 font-hammer h-48 bg-primary w-screen md:w-96 rounded-lg  ">
    <label for="Question" v-html="question"></label>
  </div>
</template>

<script>
export default {
  props:{
    question:'',
  }
}
</script>
