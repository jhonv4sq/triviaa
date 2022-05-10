<script setup>
import axios from 'axios';
import ComponentGame from '@/tailwind_components/ComponentGame.vue';
import Answers from '@/tailwind_components/Answers.vue'
import Question from '../tailwind_components/Question.vue';
</script>

<template>
  <!-- <ComponentGame :lists="allQuestions" /> -->
  <div v-if="ready">
    <Question>
      {{ this.question }}
    </Question>
    <Answers v-for="answer in this.answers">
      {{ answer }}
    </Answers>
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
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    unorderAnswers(answers) {
      
      console.log(answers);
      let randomAnswers = [];
      
      while(randomAnswers.length < 4) {
        let randomNumber = this.random(0, answers.length);
        if (!randomAnswers.includes(answers[randomNumber].answer) && !randomAnswers.includes(this.classes[randomNumber])) {
          randomAnswers.push(
            {
              answer: answers[randomNumber].answer,
              isCorrect: answers[randomNumber].isCorrect,
              class: this.classes[randomNumber]
            });
        }
      }



      return randomAnswers
      
    },
    startGame() {

      let unorderedAnswers = [];

      let questionObject = this.allQuestions[this.number];
    
      try {

        this.question = questionObject.question;

        unorderedAnswers.push(
          {
            answer: questionObject.correct_answer,
            isCorrect: true,
          }
        );

        questionObject.incorrect_answers.forEach(answer => {
          unorderedAnswers.push(
            {
              answer: answer,
              isCorrect: false
            });
        })

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
      classes: [this.pinkBg, this.yellowBg, this.blueBg, this.purpleBg]
    };
  },
  async beforeCreate() {

    this.ready = false;
    const APIurl = `https://opentdb.com/api.php?amount=${this.amount}&difficulty=${this.difficulty}&category=${this.category}&type=${this.type}`;

    axios.get(APIurl).then((results) => {

      results.data.results.forEach(results => {
        this.allQuestions.push(results);
      })

    }).then(() => {
      this.startGame();
    }).catch(e => console.error(e));
  },

};
</script>
