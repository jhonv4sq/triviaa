<script setup>
    import TailwindTitle from '../tailwind_components/TailwindTitle.vue';
    import TailwindButton from '../tailwind_components/TailwindButton.vue';
    import TailwindSelect from '../tailwind_components/TailwindSelect.vue';
    import TailwindNavbar from '../tailwind_components/TailwindNavbar.vue';
</script>

<script>
export default {
  inject: ['secondaryBg']
}
</script>

<template>
    <nav class="container flex justify-center absolute top-2 w-full">
        <div class="flex flex-row w-80 justify-between">
            <tailwind-navbar link="/" >home</tailwind-navbar>
            <tailwind-navbar link="/" >home</tailwind-navbar>
        </div>
    </nav>
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