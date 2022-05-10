<script setup>
// import { createDOMCompilerError } from '@vue/compiler-dom';
</script>

<template>
  <!-- <ComponentGame :lists="allQuestions" /> -->
  <div v-if="ready">
    <div>
      {{ this.question }}
    </div>
    <div v-for="answer in this.answers">
      {{ answer }}
    </div>
  </div>
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
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    unorderAnswers(answers) {
      
      console.log(answers);
      let randomAnswers = [];

      while(randomAnswers.length < 4) {
        let randomNumber = this.random(0, answers.length);
        if (!randomAnswers.includes(answers[randomNumber])) {
          randomAnswers.push(answers[randomNumber]);
        }
        console.log(randomAnswers);
      }

      return randomAnswers
      
    },
    startGame() {
      let unorderedAnswers = [];

      let questionObject = this.allQuestions[this.number];

      console.log(questionObject);      
      try {
        this.question = questionObject.question;

        unorderedAnswers.push(questionObject.correct_answer);

        questionObject.incorrect_answers.forEach(answer => {
          unorderedAnswers.push(answer);
        })
        console.log(unorderedAnswers);

        this.answers = this.unorderAnswers(unorderedAnswers);

        this.ready = true;
      } catch (error) {
        console.log(error)
      }

      return
      
    }
  },

  data() {
    return {
      ready: false,
      allQuestions: [],
      number: 0,
      question: '',
      answers: [],
    };
  },
  async beforeCreate() {
    this.ready = false;
    const APIurl = `https://opentdb.com/api.php?amount=${this.amount}&difficulty=${this.difficulty}&category=${this.category}&type=${this.type}`;

    axios.get(APIurl).then((results) => {

      results.data.results.forEach(results => {
        this.allQuestions.push(results);
      })
      console.log('in axios get');
    }).then(() => {
      console.log('after axios get before startgame');
      this.startGame();
    }).catch(e => console.error(e));
  },

};
</script>
