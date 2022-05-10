<template>
  <header>
    <Question :object="allQuestions[number]" />
  </header>
  <main>
    <h1>{{ anwers }}</h1>
  </main>
</template>

<script>
import axios from 'axios';
import Question from '@/tailwind_components/Question.vue';

export default {
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
      allQuestions: [],
      quiestion: null,
      anwers: null,
      ramdonNumber:[],
      number: 0,
    };
  },

  methods: {
    addData(result) {
      this.quiestion = result.question;
      this.anwers = result.incorrect_answers;
      this.anwers.push(result.correct_answer);
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
