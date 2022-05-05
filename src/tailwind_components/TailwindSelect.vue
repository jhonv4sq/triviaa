<template>
<div class="flex justify-center w-full">
  <div class="mt-5 w-80 md:w-96">
    <select class="form-select uppercase text-center
      block
      w-full
      px-3
      py-1.5
      text-base
      font-hammer
      text-dark
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected><slot /></option>
        <option value="1">One</option>
    </select>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>