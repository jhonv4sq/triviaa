<script setup>
import axios from 'axios';
import ComponentGame from '@/tailwind_components/ComponentGame.vue';
import Answers from '@/tailwind_components/Answers.vue'
import Question from '../tailwind_components/Question.vue';
</script>

<template>
  <div>
    <Question>{{this.allQuestions[this.number].question}}</Question>
  </div>
  <div class="flex flex-col gap-6 mt-20">
  <Answers :class="pinkBg" class="text-white">answer 1</Answers>
  <Answers :class="purpleBg" class="text-white">answer 2</Answers>
  <Answers :class="blueBg">answer 3</Answers>
  <Answers :class="yellowBg">asnwer 4</Answers>
  </div>
</template>

<script>

export default {
  inject: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
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
      number: 0,
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
