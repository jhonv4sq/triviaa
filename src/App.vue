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
    margin: 0 auto;
    padding: 1rem;
    position: relative;
    font-weight: normal;

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
