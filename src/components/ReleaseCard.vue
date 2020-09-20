<template>
  <div class="w-1/4 p-2">
    <div
      class="max-w-md rounded overflow-hidden shadow-lg flex flex-col justify-between"
    >
      <div>
        <img class="w-full" :src="picture" :alt="`${name}`" />
        <div class="px-6 py-4">
          <h3 class="font-bold text-xl mb-2">{{ name }}</h3>
          <div class="flex text-secondary-darker text-lg mb-2">
            <span class="pr-3">
              {{ version }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  id: {
    type: Number,
    required: true,
  },
  props: {
    version: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 150px;
}
</style>
