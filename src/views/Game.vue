<script setup>
// import { createDOMCompilerError } from '@vue/compiler-dom';
</script>

<template>
  <ComponentGame :lists="allQuestions" />
</template>

<script>
import axios from 'axios';
import ComponentGame from '@/tailwind_components/ComponentGame.vue';

export default {
  name: 'Game',

  components: {
    ComponentGame
  },
  
  props: {
    amount: {
      type: String,
      default: '10',
    },
    category: {
      type: String,
      default: '',
    },
    difficulty: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'multiple',
    },
  },

  data() {
    return {
      allQuestions: [],
      url:'https://opentdb.com/api.php?amount=' + this.amount +
        '&difficulty=' + this.difficulty +
        '&category=' + this.category +
        '&type=' + this.type,
    };
  },

  async created() {
    axios.get(this.url).then((results) => {
      results.data.results.forEach(results => {
        this.allQuestions.push(results);
      })
    });
  },
};
</script>
