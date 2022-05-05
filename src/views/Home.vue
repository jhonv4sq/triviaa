<script setup>
  import Logo from '@/tailwind_components/Logo.vue';
  import TailwindLink from '@/tailwind_components/TailwindLink.vue';
</script>

<script>
export default {
  inject: ['secondaryBg']
}
</script>

<template>
  <header>
    <Logo class="h-[230px] w-[230px]"/>
  </header>
  <main>
    <h1 class="font-hammer text-light text-xl">Test your brain with our quiz!</h1>

    <TailwindLink link="settings" :class="secondaryBg">Start Game</TailwindLink>

  </main>
</template>

