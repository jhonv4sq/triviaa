<template>
  <ul class="list-inside text-black bg-gray-200 ...">
    <li>{{ category }}</li>
    <li>{{ type }}</li>
    <li>{{ difficulty }}</li>
    <li>{{ question }}</li>
  </ul>
  <h1>{{ number }}</h1>
  <button
    v-on:click="sumNumber()"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  >
    siguiente
  </button>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      result: null,
      category: null,
      type: null,
      difficulty: null,
      question: null,
      number: 0,
    };
  },

  methods: {
    sumNumber() {
      if (this.number < this.result.length) {
        this.number++;
      }
      this.showData(this.result[this.number]);
    },

    showData(result) {
      this.category = result.category;
      this.type = result.type;
      this.difficulty = result.difficulty;
      this.question = result.question;
    },
  },

  async created() {
    axios.get('https://opentdb.com/api.php?amount=10').then((result) => {
      this.result = result.data.results;
    });
  },
};
</script>

<style></style>
