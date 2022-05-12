<template>
  <div class="flex w-full lg:w-96 justify-between">
    <TailwindNavbar class="text-center" link="settings">
      <div>
        <p>Return</p>
        <font-awesome-icon icon="arrow-left-long" class="text-secondary text-3xl" />
      </div>
    </TailwindNavbar>

  </div>

  <div v-if="ready" class="flex flex-col gap-4">

    <!-- componente de la barra de progreso  -->
    <TailwindProgress :progress="this.number * 100 / this.allQuestions.length" />
    
    <Question :question="this.question" />

    <div v-if="answered" class="flex flex-col gap-6">
      <div v-for="answer in this.answers">
        <Answers
          v-if="answer.isCorrect"
          :answer="answer.answer"
          class="bg-correct"
        />
        <Answers v-else class="bg-wrong" :answer="answer.answer" />
      </div>
    </div>

    <div v-else class="flex flex-col gap-6">
      <Answers @click="(event) => handleClickAnswer(event)"
        :answer="answer.answer"
        :class="answer.class"
        v-for="answer in this.answers"
      >
        {{ answer.answer }}
      </Answers>
    </div>

    <button @click="startGame" v-if="answered && !finished">
      <p class="text-white text-xl font-bold">Siguiente pregunta</p>
      <font-awesome-icon
        icon="arrow-right-long"
        class="text-secondary text-4xl"
      />
    </button>
    <button @click="results" v-if="answered && finished">
      <p class="text-white text-xl font-bold">Finalizar juego</p>
      <font-awesome-icon
        icon="arrow-right-long"
        class="text-secondary text-4xl"
      />
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import Answers from '@/tailwind_components/Answers.vue';
import Question from '@/tailwind_components/Question.vue';
import TailwindNavbar from '@/tailwind_components/TailwindNavbar.vue';
import TailwindProgress from '@/tailwind_components/TailwindProgress.vue';

export default {
  inject: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
  name: 'Game',
  components: {
    Answers,
    Question,
    TailwindNavbar,
    TailwindProgress,
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
      answered: false,
      ready: false,
      finished: false,
      allQuestions: [],
      number: 0,
      points: 0,
      question: '',
      answers: null,
      classes: [this.pinkBg, this.yellowBg, this.blueBg, this.purpleBg],
    };
  },
  methods: {
    results() {
      this.$router.push({
        name: 'Results',
        params: {
          points: this.points,
          questions: this.amount,
        },
      });
    },

    // método para generar un numero aleatorio enviando un numero minimo y un numero máximo
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    // método para generar una lista de números aleatorio enviando un numero mínimo y un numero máximo
    createRandomList(min, max) {
      let list = [];
      while (list.length < max) {
        let number = this.randomNumber(min, max);

        if (!list.includes(number)) {
          list.push(number);
        }
      }
      return list;
    },

    // Método para obtener la pregunta y todas las respuestas, este guardara la pregunta en this.question y hará un return de una lista de respuestas obtenidas por this.allQuestions[this.number]
    getAnswersAndQuestion() {
      let questionsList = [];

      let questionObject = this.allQuestions[this.number];

      try {
        this.question = questionObject.question;

        for (let answer of questionObject.incorrect_answers) {
          questionsList.push({
            answer: answer,
            isCorrect: false,
          });
        }
        questionsList.push({
          answer: questionObject.correct_answer,
          isCorrect: true,
        });
        return questionsList;
      } catch (error) {
        console.log(error);
        return [0];
      }
    },

    // Aquí utilizaremos el metodo this.getAnswersAndQuestion() para guardar las respuestas en gatAnswer y el método this.createRandomList para guardar una lista de numero aleatorio en randomNumber, luego iteramos randomNumber para poder asignarle una clase a cada respuesta y guardarla en orden aleatorio
    unorderAnswers() {
      let getAnswer = this.getAnswersAndQuestion();
      let randomNumber = this.createRandomList(0, getAnswer.length);
      let unorderAnswers = [];

      for (let number of randomNumber) {
        getAnswer[number].class = this.classes[number];
        unorderAnswers.push(getAnswer[number]);
      }
      return unorderAnswers;
    },

    // Iniciamos el juego y refrescamos con this.startGame()
    startGame() {
      this.answered = false;

      this.answers = this.unorderAnswers();

      this.ready = true;
    },

    // Este método no lo toque por que no lo entendía bien xD lo deje como estaba 
    handleClickAnswer(event) {
      this.answered = true;

      if (this.number == this.allQuestions.length - 1) {
        this.finished = true;
      }

      const userAnswer = event.target.innerText;
      let answerObject = {};

      for (let index = 0; index < this.answers.length; index++) {
        if (
          this.answers[index].answer.toLowerCase() == userAnswer.toLowerCase()
        ) {
          answerObject = this.answers[index];
        }
      }

      if (answerObject.isCorrect) {
        this.points++;
      }
      this.number++;
    },

  },

  async created() {
    this.ready = false;
    const APIurl = `https://opentdb.com/api.php?amount=${this.amount}&difficulty=${this.difficulty}&category=${this.category}&type=${this.type}`;

    await axios
      .get(APIurl)
      .then((results) => {
        results.data.results.forEach((results) => {
          this.allQuestions.push(results);
        });
      })
      .then(() => {
        this.startGame();
      });
  },
};
</script>
