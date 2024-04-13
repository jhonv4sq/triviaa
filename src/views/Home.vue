<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <Logo class="h-[230px] w-[230px]" />

    <h1 class="font-hammer text-light text-xl">
      Test your brain with our quiz!
    </h1>

    <TailwindLink link="/triviaa/settings" :class="secondaryBg">Start Game</TailwindLink>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import TailwindLink from '@/tailwind_components/TailwindLink.vue';

export default {
  name: 'Home',
  components: {
    Logo,
    TailwindLink,
  },
  inject: ['secondaryBg'],
};
</script>
