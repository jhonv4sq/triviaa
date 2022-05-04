<script>
export default {
  provide:{
    'blueBg' : 'bg-blue',
    'redBg' : 'bg-wrong',
    'purpleBg' : 'bg-purple',
    'greenBg' : 'bg-correct',
    'pinkBg' : 'bg-pink-500 ',
    'primaryBg' : 'bg-primary',
    'secondaryBg' : 'bg-secondary',
    'yellowBg' : 'bg-yellow'
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

</style>
