<template>
  <div
    class="flex items-center justify-center text-center px-2 font-hammer h-32 bg-primary w-80 md:w-96 rounded">
    <label for="Question" v-html="question"></label>
  </div>
</template>

<script>
export default{
 props:{
   question:'',
  }
}
</script>
