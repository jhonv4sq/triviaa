<template>

  <header>
    <Question :object="list[number]" />
  </header>

  <main>
      <h1>{{  }}</h1>
  </main>

</template>

<script>
import Question from './Question.vue';
import TailwindButton from './TailwindButton.vue';

export default {
  components: { Question, TailwindButton },
  name: 'ComponentGame',
  inject: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
  props: {
    lists: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      list: this.lists,
      number: 0,
      answers: '',
    };
  },

  methods: {
    sumNumber() {
      if (this.number < this.list.length) {
        this.number++;
      }
      this.showData(this.result[this.number]);
    }
  }
};
</script>
