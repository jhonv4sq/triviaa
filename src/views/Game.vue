<script setup>
import axios from 'axios';
import Answers from '@/tailwind_components/Answers.vue'
import Question from '@/tailwind_components/Question.vue';
import TailwindNavbar from '@/tailwind_components/TailwindNavbar.vue';
</script>

<template>
  <TailwindNavbar link="settings">
    <p>Return</p>
    <i></i>
  </TailwindNavbar>
  <div v-if="ready" class="flex flex-col gap-10">
    <Question :question="this.question">
      {{ this.question }}
    </Question>
    <div class="flex flex-col gap-6">
      <Answers :class="answer.class" v-for="answer in this.answers">
        {{ answer.answer }}
      </Answers>
    </div>
  </div>
</template>

<script>

export default {
  inject: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
  name: 'Game',
  
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
      
      let randomAnswers = [];

      while(randomAnswers.length < 4) {
        let randomNumber = this.random(0, answers.length);
        if (!randomAnswers.includes(answers[randomNumber])) {

          answers[randomNumber].class = this.classes[randomNumber];
          randomAnswers.push(answers[randomNumber]);

        }
      }
      console.log(randomAnswers);
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
            isCorrect: true
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