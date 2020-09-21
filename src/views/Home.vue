<template>
  <div
    class="h-screen flex bg-gray-100 py-24 items-center justify-center w-full"
  >
    <div class="p-12 text-center max-w-2xl">
      <div class="md:text-3xl text-3xl font-bold">
        Welcome!
      </div>
      <div class="text-xl font-normal mt-4">
        Do you know that every Vue.js minor release has an anime name? By today,
        there are thirteen named releases
      </div>
      <div class="mt-6 flex justify-center h-12 relative">
        <router-link
          :to="{ name: 'release-list' }"
          tag="button"
          class="flex shadow-md font-medium absolute py-2 px-4 text-green-100
        cursor-pointer bg-green-600 rounded text-lg tr-mt"
        >
          Explore
        </router-link>
      </div>
    </div>
  </div>
</template>
