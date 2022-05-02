<template>
    <h1 class="text-3xl font-bold underline">
        
    </h1>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    result: null
  }),
  created() {
    axios.get("https://opentdb.com/api.php?amount=10").then((result) => {
      this.result = result.data;
      console.log(result);
    })
  }
};
</script>

<style>

</style>