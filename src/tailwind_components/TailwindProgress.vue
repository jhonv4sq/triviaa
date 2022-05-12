<template>
<div class="flex flex-col">
  <label for="Progresslabel" class="text-white font-hammer text-center mb-1">Progress</label>
  <div class="w-full bg-gray-400 rounded-full h-2.5 mb-1">
    <div
      class="h-2.5 rounded-full" :class="secondaryBg"
      :style="{width: this.progress + '%'}"
    ></div>
  </div>
  <p class="text-white font-hammer text-center">{{ this.progress }}%</p>
</div>

</template>

<script>
export default {
  inject: ['secondaryBg'],
  name: 'TailwindProgress',

  props: {
    progress: {
      type: Number,
      defaul: 0,
    }
  },
};

</script>

