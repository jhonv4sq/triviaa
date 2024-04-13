<script setup>
import Logo from '@/components/Logo.vue';
import TailwindNavbar from '@/tailwind_components/TailwindNavbar.vue';
</script>

<template>
<div class="flex flex-col gap-2 justify-center h-screen items-center">
<Logo class="h-[200px] w-[200px]"/>
<div class="text-secondary uppercase font-bold text-6xl">results</div>
<div class="flex flex-col text-center gap-2 mt-8">
    <p class="text-white uppercase text-lg">You aswered correctly</p>
    <p class="text-primary font-bold text-4xl">{{points}}</p>
    <p class="text-white uppercase font-bold text-lg">out of {{questions}} questions</p>
</div>
<p class="text-primary text-lg font-bold mt-10 uppercase font-hammer">what to do now?</p>
<div class="flex w-full lg:w-96 justify-between mt-10">
    <TailwindNavbar class="text-center" link="/triviaa/">
      <div>
        <p>Home</p>
        <font-awesome-icon icon="arrow-left-long" class="text-secondary text-3xl"/>
    </div>
    </TailwindNavbar>

    <TailwindNavbar class="text-center" link="/triviaa/settings">
      <div>
      <p>Play again</p>
      <font-awesome-icon icon="arrow-right-long" class="text-secondary text-3xl"/>
      </div>
    </TailwindNavbar>
  </div>
  </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
      Logo,
    },
    props: {
        points:{
            type: Number,
            default: 0,
        },
        questions:{
            type: Number,
            default: 10,
        },
    }
}
</script>