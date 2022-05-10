<template>
  <nav class="container flex justify-center absolute top-2 w-full">
    <div class="flex flex-row w-80 justify-between">
      <TailwindNavbar link="/">return</TailwindNavbar>
    </div>
  </nav>
  <header>
    <Logo class="h-[170px] w-[170px]" />
    <TailwindTitle>trivia settings</TailwindTitle>
  </header>
  <main>
    <TailwindForm />
  </main>
</template>

<script>
import TailwindTitle from '@/tailwind_components/TailwindTitle.vue';
import Logo from '@/components/Logo.vue';
import TailwindNavbar from '@/tailwind_components/TailwindNavbar.vue';
import TailwindForm from '@/tailwind_components/TailwindForm.vue';

export default {
  name: 'Settings',
  components: {
    TailwindTitle,
    Logo,
    TailwindNavbar,
    TailwindForm,
  },
};
</script>
