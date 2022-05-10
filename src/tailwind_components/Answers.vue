<template>
  <button class="flex justify-center items-center w-screen md:w-96 h-14 rounded-full uppercase">
    <span class="font-bold" v-html="answer" />
  </button>
</template>
<script>
export default {
  props: {
    answer: ''
  }
}
</script>
