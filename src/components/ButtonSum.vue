<template>
  <div class="d-flex flex-column">
    <label for="">num: {{ num }}</label>
    <button v-on:click="sumNum()">Aumentar numero</button>
  </div>
</template>

<script>
export default {
    name: 'ButtonSum',
    mounted() {
        console.log('Boton suma montado en el dom')
    },
    data() {
        return {
            num: 0
        }
    },
    methods: {
        sumNum() {
            this.num++
        }
    }
}
</script>