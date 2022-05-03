<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import TailwindButton from './tailwind_components/TailwindButton.vue'
  import TailwindHello from './tailwind_components/TailwindHello.vue'
</script>
<script>
export default {
  data(){
    return {
      blue: 'bg-blue-500 hover:bg-blue-800',
      red: 'bg-red-500 hover:bg-red-800',
      violet: 'bg-violet-500 hover:bg-violet-800',
      green: 'bg-green-500 hover:bg-green-800',
      amber: 'bg-amber-500 hover:bg-amber-800',
      emerald: 'bg-emerald-500 hover:bg-emerald-800',
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo h-[230px] w-[230px]" src="./assets/logo.svg" width="125" height="125"/>
  </header>

  <main>  
    <h1 class="font-hammer text-light text-xl">Test your brain with our quiz!</h1>
    <TailwindButton :class="violet">Start Game</TailwindButton>
  </main>

</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
main{
  display: flex;  
  flex-direction: column;
  align-items: center;
}

header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

</style>
