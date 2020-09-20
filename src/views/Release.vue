<template>
  <div class="release md:flex shadow-lg w-full">
    <img
      class="h-full max-h-full w-full md:w-1/3 rounded-lg rounded-r-none pb-5/6"
      :src="release.picture"
      alt="Anime picture"
    />
    <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
      <div class="flex items-center">
        <h2 class="text-4xl text-gray-800 font-medium mr-auto">
          {{ release.name }}
        </h2>
        <p class="text-gray-800 font-semibold tracking-tighter">
          {{ release.releaseDate }}
        </p>
      </div>
      <p class="text-xl text-gray-800 mt-4">
        {{ release.version }}
      </p>
      <a
        class="text-2xl text-green-900 mt-6"
        :href="release.link"
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
import releaseList from '../assets/db'
export default {
  releaseList,
  props: {
    id: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    release() {
      return this.$options.releaseList.find(r => r.id === this.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.release {
  max-height: 500px;
}

img {
  max-height: 500px;
  object-fit: cover;
}
</style>
