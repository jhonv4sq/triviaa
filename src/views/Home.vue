<script setup>
  import TailwindLink from '@/tailwind_components/TailwindLink.vue';
</script>

<script>
export default {
  inject: ['secondaryBg', 'greenBg']
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo h-[230px] w-[230px]" src="../assets/logo.svg" width="125" height="125"/>
  </header>
  <main>
    <h1 class="font-hammer text-light text-xl">Test your brain with our quiz!</h1>

    <TailwindLink link="settings" :class="secondaryBg">Start Game</TailwindLink>

    <!-- <tailwind-link href="/settings" :class="secondaryBg">Start Game</tailwind-link> -->
  </main>
</template>

