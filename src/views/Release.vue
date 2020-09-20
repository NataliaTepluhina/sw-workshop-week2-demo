<template>
  <div class="release md:flex shadow-lg w-full">
    RELEASE
    <img
      class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
      src=""
      alt="Anime picture"
    />
    <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
        <h2 class="text-4xl text-gray-800 font-medium mr-auto">
          <!-- name -->
        </h2>
        <p class="text-gray-800 font-semibold tracking-tighter">
          <!-- release date -->
        </p>
      </div>
      <p class="text-xl text-gray-800 mt-4">
        <!-- version -->
      </p>
      <a
        class="text-2xl text-green-900 mt-6"
        href="#"
        target="_blank"
        noopener
        noreferrer
        >Release notes</a
      >
      <div class="flex items-center justify-end mt-4 top-auto"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.release {
  max-height: 300px;
}
</style>
