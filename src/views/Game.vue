<script setup>
import TailwindButton from '@/tailwind_components/TailwindButton.vue'
import { createDOMCompilerError } from '@vue/compiler-dom';
import axios from 'axios';
</script>

<template>
    <div class="text-white">
        <!-- TO DO BOTONES -->
    </div>
    <div class="text-white">
        <!-- TO DO PROGRESS -->
    </div>
    <div class="flex items-center justify-center p-10 font-bold text-4xl rounded-lg bg-primary text-center uppdercase mb-10">
        {{ question }}
    </div>
    <div class="flex flex-col">
        <TailwindButton :class="blueBg" class="text-lg">A la de one</TailwindButton>
        <TailwindButton :class="purpleBg" class="text-white">Dos</TailwindButton>
        <TailwindButton :class="pinkBg" class="text-white">Tres</TailwindButton>
        <TailwindButton :class="yellowBg">Cuatro</TailwindButton>
    </div>
    <div></div>
</template>

<script>
export default {
    inject: ['pinkBg', 'purpleBg', 'blueBg', 'yellowBg'],
    props: {
        amount: {
            type: String,
            default: "10"
        },
        type: {
            type: String,
            default: "multiple"
        },
        difficulty: {
            type: String,
            default: ""
        },
        category: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            'allQuestions': [],
            'question': '',
            'answers': [],
            'question_count': 0
        }
    },
    methods: {

    },
    async created() {
        const APIurl = `https://opentdb.com/api.php?amount=${this.amount}&difficulty=${this.difficulty}&category=${this.category}&type=${this.type}`;
        
        axios.get(APIurl).then(result => {
            let data = result.data.results;
            data.forEach(result => {
                this.allQuestions.push(result);
                this.question = result.question
            })
        })
    }
}
</script>