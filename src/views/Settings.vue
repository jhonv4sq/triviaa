<script setup>
    import axios from 'axios';
    import TailwindTitle from '@/tailwind_components/TailwindTitle.vue';
    import Logo from '@/tailwind_components/Logo.vue'
    import TailwindButton from '@/tailwind_components/TailwindButton.vue';
    import TailwindSelect from '@/tailwind_components/TailwindSelect.vue';
</script>

<script>
export default {
  inject: ['secondaryBg'],
  data() {
      return {
        formRawData: {
              'amount': 10,
              'difficulty': '',
              'category': '',
              'type': 'multiple'
          },
          categories: [],
          difficulties: ['easy', 'medium', 'hard']
      }
  }, // Síncrono
  async beforeCreate() {
      await axios.get('https://opentdb.com/api_category.php')
        .then(result => {
            result.data.trivia_categories.forEach(category => {
                this.categories.push(category)
                }); 
        })
  },
  methods: {
      handleSubmit() {
          console.log(this.formRawData.amount, this.formRawData.category, this.formRawData.difficulty);
          this.$router.push({
              name: 'Game',
              params: {
                  'amount': this.formRawData.amount,
                  'category': this.formRawData.category,
                  'difficulty': this.formRawData.difficulty,
                  'type': this.formRawData.type
              }
          })
      }
  }
}
</script>

<template>
    <header>
        <Logo class="h-[170px] w-[170px]" />
        <tailwind-title>trivia settings</tailwind-title>
    </header>
    <main>
        <form class="flex flex-col gap-6 w-full lg:w-1/2 mt-2 lg:mt-24 text-white text-bold font-hammer" @submit.prevent="handleSubmit">
            <label for="amount" class="self-start text-2xl">Number of Question</label>
            <input v-model="formRawData.amount" class="uppercase text-center block w-full px-3 py-1.5 text-base font-fira text-dark bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:outline-none" id="amount" name="amount" type="number" min="1" max="50" placeholder="Number of Questions">
            <label for="category" class="self-start text-2xl">Category</label>
            <select @change="handleChange" v-model="formRawData.category" class="form-select uppercase text-center block w-full px-3 py-1.5 text-base font-hammer text-dark bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:outline-none" name="category">
                <option value="">Any</option>
                <option v-for="category in this.categories" :value="category.id">{{ category.name }}</option>
            </select>
            <label for="difficulty" class="self-start text-2xl">Difficulty</label>
            <select v-model="formRawData.difficulty" class="form-select uppercase text-center block w-full px-3 py-1.5 text-base font-hammer text-dark bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded focus:text-gray-700 focus:bg-white focus:outline-none" name="difficulty">
                <option value="">Any</option>
                <option v-for="difficulty in this.difficulties" :value="difficulty">{{ difficulty }}</option>
            </select>
            
            <!-- <tailwind-select :data="categories">Select Category</tailwind-select> -->
            <!-- <tailwind-select>Select Difficulty</tailwind-select> -->
            <!-- <tailwind-select>Select Type</tailwind-select> -->
            <button type="submit" class="text-white py-2 px-4 rounded-full mt-5 py-3 px-10 font-hammer uppercase" :class="secondaryBg">Play</button>
            <!-- <tailwind-button :class="secondaryBg">play</tailwind-button> -->
        </form>
    </main>
</template>