<template>
  <div class="w-full bg-gray-400 rounded-full h-2.5  mb-5">
    <div
      class="h-2.5 rounded-full" :class="secondaryBg"
      :style="{width: this.progress + '%'}"
    ></div>
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

