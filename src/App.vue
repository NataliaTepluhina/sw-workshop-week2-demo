<template>
  <main>
    <nav
      class="bg-green-800 py-2 px-5 shadow-md flex text-white items-center justify-between"
    >
      <span class="text-xl font-bold">Vue + Anime = 💖</span>
      <ul class="flex">
        <li class="px-3">
          <!-- Here be dragons -->
        </li>
      </ul>
    </nav>
    <section class="container mx-auto">
      <div class="flex flex-wrap">
        <ReleaseCard
          v-for="release in $options.releasesList"
          :key="release.version"
          v-bind="release"
        />
      </div>
    </section>
  </main>
</template>

<script>
import ReleaseCard from './components/ReleaseCard'
import releasesList from './assets/db'
export default {
  name: 'App',
  releasesList,
  components: {
    ReleaseCard,
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Lato', sans-serif;
}
</style>
