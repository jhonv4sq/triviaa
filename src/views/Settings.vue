<template>
  <nav class="flex w-full">
    <div class="flex flex-row w-80 justify-between">
      <TailwindNavbar class="text-center" link="/">
        <div>
        <p>Return</p>
        <font-awesome-icon icon="arrow-left-long" class="text-secondary text-3xl"/>
        </div>
      </TailwindNavbar>
    </div>
  </nav>
  <div class="h-screen flex flex-col justify-center">
    <header>
      <Logo class="h-[170px] w-[170px]" />
      <TailwindTitle>trivia settings</TailwindTitle>
    </header>
    <main>
      <TailwindForm />
    </main>
  </div>
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
