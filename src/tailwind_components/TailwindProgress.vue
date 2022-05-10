<template>
  <div class="w-full bg-gray-400 rounded-full h-2.5  mb-5">
    <div
      class="h-2.5 rounded-full" :class="secondaryBg"
      :style="{width: this.width + '%'}"
    ></div>
  </div>
</template>

<script>
export default {
  inject: ['secondaryBg'],
  name: 'TailwindProgress',

  props: {
    point: {
      type: Number,
      defaul: 0,
    },
    length:{
        type:Number,
        defaul: 0,
    }
  },

  data() {
    return {
      width: this.calculate(),
    }
  },

  methods: {
    calculate() {
      let number = this.point * 100 / this.length; 
      return number
    }
  }
  
};

</script>

<style></style>
