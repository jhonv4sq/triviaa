<script>
export default {
  provide: {
    'blueBg': 'bg-blue',
    'redBg': 'bg-wrong',
    'purpleBg': 'bg-purple',
    'greenBg': 'bg-correct',
    'pinkBg': 'bg-pink',
    'primaryBg': 'bg-primary',
    'secondaryBg': 'bg-secondary',
    'yellowBg': 'bg-yellow',
    'blackText': 'text-black'
  }
}
</script>

<template>

    <router-view />

</template>

<style>
  @import './assets/base.css';

  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    font-weight: normal;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main{
    display: flex;  
    flex-direction: column;
    align-items: center;
  }
  form{
    width: 100%;
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
    margin-bottom: 1rem;
  }

</style>
