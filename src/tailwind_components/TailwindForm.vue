<template>
  <form action="" @submit.prevent="submit()" class="flex flex-col w-full mt-5">
    
    <div class="flex flex-col mb-3">
      <label for="amount" class="text-white uppercase font-hammer mb-1"
        >Number of Question</label
      >
      <input
        type="number"
        min="10"
        max="50"
        v-model="formData.amount"
        class="uppercase text-center w-80 md:w-96 block px-3 py-1.5 text-base font-hammer text-dark bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:outline-none"
      />
    </div>

    <div class="flex flex-col mb-3">
      <label for="category" class="text-white uppercase font-hammer mb-1"
        >Select Category</label
      >
      <select
        v-model="formData.category"
        name="category"
        class="form-select uppercase text-center w-80 md:w-96 block px-3 py-1.5 text-base font-hammer text-dark bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
      >
        <option value="">any</option>
        <option
          v-for="(list, index) in categories"
          v-bind:key="index"
          :value="list.id"
        >
          {{ list.name }}
        </option>
      </select>
    </div>

    <div class="flex flex-col mb-3">
      <label for="difficulty" class="text-white uppercase font-hammer mb-1"
        >Select Difficulty</label
      >
      <select
        v-model="formData.difficulty"
        name="difficulty"
        class="form-select uppercase text-center w-80 md:w-96 block px-3 py-1.5 text-base font-hammer text-dark bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
      >
        <option value="">any</option>
        <option
          v-for="(list, index) in difficulties"
          v-bind:key="index"
          :value="list.id"
        >
          {{ list.name }}
        </option>
      </select>
    </div>

    <TailwindButton :class="secondaryBg">play</TailwindButton>
  </form>
</template>

<script>
import axios from 'axios';
import TailwindButton from '@/tailwind_components/TailwindButton.vue';

export default {
  name: 'TailwindForm',
  components: {
    TailwindButton,
  },
  inject: ['secondaryBg'],

  data() {
    return {
      formData: {
        amount: 10,
        category: '',
        difficulty: '',
        type: 'multiple',
      },
      categories: null,
      difficulties: [
        { id: 'easy', name: 'easy' },
        { id: 'medium', name: 'medium' },
        { id: 'hard', name: 'hard' },
      ],
    };
  },

  async beforeCreate() {
    await axios.get('https://opentdb.com/api_category.php').then((result) => {
      this.categories = result.data.trivia_categories;
    });
  },
  methods: {
    submit() {
      this.$router.push({
        name: 'Game',
        params: {
          amount: this.formData.amount,
          category: this.formData.category,
          difficulty: this.formData.difficulty,
          type: this.formData.type,
        },
      });
    },
  }

};
</script>

<style>
select::-webkit-scrollbar {
  width: 9px;
  background-color: #fff;
}
select::-webkit-scrollbar-thumb {
  width: 9px;
  background-color: #8c13fb;
  border-radius: 5px;
}
</style>
