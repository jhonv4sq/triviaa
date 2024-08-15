<script setup></script>

<template>
  <div>
    <RouterLink to="/">Home, </RouterLink>
    <RouterLink to="/game">Game, </RouterLink>
    <RouterLink to="/settings">Settings, </RouterLink>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
