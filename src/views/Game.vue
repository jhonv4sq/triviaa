<template>
  <header>
    <Question :object="allQuestions[number]" />
  </header>
  <main>
    <p v-for="(anwer, index) in anwers" v-bind:key="index">{{ anwer }}</p>
  </main>
</template>

<script>
import axios from 'axios';
import Question from '@/tailwind_components/Question.vue';
export default {
  inject: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
  name: 'Game',

  components: {
    Question,
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
      color: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
      allQuestions: [],
      quiestion: null,
      anwers: [],
      ramdonNumber: [],
      number: 0,
    };
  },

  methods: {
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
  },

  // created() {
  //   this.allQuestions[this.number].forEach(() => {});
  // },
};
</script>
