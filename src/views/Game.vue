<template>
  <header>
    <TailwindProgress :point="8" :length="allQuestions.length" />
    <Question>{{ quiestion }}</Question>
  </header>
  <main>
    <div class="flex flex-col gap-6 mt-5">
      <Answers :class="anwer.class" v-for="(anwer, index) in anwers" v-bind:key="index">{{ anwer.title }}</Answers>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import Question from '@/tailwind_components/Question.vue';
import Answers from '@/tailwind_components/Answers.vue';
import TailwindProgress from '@/tailwind_components/TailwindProgress.vue';

export default {
  inject: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
  name: 'Game',
  components: {
    Question, Answers, TailwindProgress
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
      
    }, 

    addData(result) {
      let index = 0;
      this.quiestion = result.question;
      result.incorrect_answers.forEach((anwer) => {
        this.anwers.push({ class: this.color[index], title: anwer });
        index++;
      });
      this.anwers.push({
        class: this.color[index],
        title: result.correct_answer,
      });
    },

  },

  data() {
    return {
      color: [this.pinkBg, this.purpleBg, this.blueBg, this.yellowBg],
      allQuestions: [],
      quiestion: null,
      anwers: [],
      ramdonNumber: [],
      number: 0,
    };
  },

  async created() {
      const APIurl = `https://opentdb.com/api.php?amount=${this.amount}&difficulty=${this.difficulty}&category=${this.category}&type=${this.type}`;
      axios
        .get(APIurl)
        .then((result) => {
          let data = result.data.results;
          data.forEach((result) => {
            this.allQuestions.push(result);
          });
        })
        .then(() => {
          this.addData(this.allQuestions[this.number]);
        });
  }
}
</script>
