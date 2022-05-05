<script setup>
    import TailwindTitle from '../tailwind_components/TailwindTitle.vue';
    import TailwindButton from '../tailwind_components/TailwindButton.vue';
    import TailwindSelect from '../tailwind_components/TailwindSelect.vue';
</script>

<script>
export default {
  inject: ['secondaryBg']
}
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo h-[170px] w-[170px]" src="../assets/logo.svg" />
        <tailwind-title>trivia settings</tailwind-title>
    </header>
    <main>
        <form action="">
            <tailwind-select>Number of Questions</tailwind-select>
            <tailwind-select>Select Category</tailwind-select>
            <tailwind-select>Select Difficulty</tailwind-select>
            <tailwind-select>Select Type</tailwind-select>
            <tailwind-button :class="secondaryBg">play</tailwind-button>
        </form>
    </main>
</template>