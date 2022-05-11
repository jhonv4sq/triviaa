<script setup>
import axios from 'axios';
import Answers from '@/tailwind_components/Answers.vue'
import Question from '@/tailwind_components/Question.vue';
import TailwindNavbar from '@/tailwind_components/TailwindNavbar.vue';
</script>

<template>
  <div class="flex w-full lg:w-96 justify-between">
    <TailwindNavbar class="text-center" link="settings">
      <p>Return</p>
      <font-awesome-icon icon="arrow-left-long" class="text-secondary text-3xl"/>
    </TailwindNavbar>
    <TailwindNavbar class="text-center" link="results">
      <p>End Game</p>
      <font-awesome-icon icon="arrow-right-long" class="text-secondary text-3xl"/>
    </TailwindNavbar>
  </div>
  <div v-if="ready" class="flex flex-col gap-10">
    <Question :question="this.question">
      {{ this.question }}
    </Question>
    <div v-if="answered" class="flex flex-col gap-6">
      <div v-for="answer in this.answers">
      <Answers v-if="answer.isCorrect" :answer="answer.answer" class="bg-correct" />
      <Answers v-else class="bg-wrong" :answer="answer.answer" />
      </div>
    </div>
    <div v-else class="flex flex-col gap-6">
      <Answers @click="(event) => handleClickAnswer(event)" :answer="answer.answer" :class="answer.class" v-for="answer in this.answers">
        {{ answer.answer }}
      </Answers>
    </div>
    <button @click="startGame" v-if="answered && !finished">
      <p class="text-white text-xl font-bold">Siguiente pregunta</p>
      <font-awesome-icon icon="arrow-right-long" class="text-secondary text-4xl" />
    </button>
    <button @click="results" v-if="answered && finished">
      <p class="text-white text-xl font-bold">Finalizar juego</p>
      <font-awesome-icon icon="arrow-right-long" class="text-secondary text-4xl" />
    </button>
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
    results() {
      this.$router.push({
        name: 'Results',
        params: {
          points: this.points,
          questions: this.amount,
        },})
    },
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
      this.answered = false;

      console.log('Numero de pregunta ' + this.number);
      console.log('Puntos totales ' + this.points);

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
    },
    handleClickAnswer (event) {

      this.answered = true;

      if (this.number == (this.allQuestions.length - 1)) {
        this.finished = true;
        return
      }

      const userAnswer = event.target.innerText;
      let answerObject = {};

      for (let index = 0; index < this.answers.length; index++) {
        if (this.answers[index].answer.toLowerCase() == userAnswer.toLowerCase()) {
          answerObject = this.answers[index];
        }
      }

      if (answerObject.isCorrect) {
        this.points++;
      }
      this.number++;
    }
  },

  data() {
    return {
      answered: false,
      ready: false,
      finished: false,
      allQuestions: [],
      number: 0,
      points: 0,
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
    })
  },

};
</script>