<template>
  <main>
    <nav
      class="bg-green-800 py-2 px-5 shadow-md flex text-white items-center justify-between"
    >
      <span class="text-xl font-bold">Vue + Anime = 💖</span>
      <ul class="flex">
        <li class="px-3">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="px-3">
          <router-link :to="{ name: 'release-list' }">Releases</router-link>
        </li>
      </ul>
    </nav>
    <section class="container mx-auto">
      <router-view></router-view>
    </section>
  </main>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
body {
  font-family: 'Lato', sans-serif;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
