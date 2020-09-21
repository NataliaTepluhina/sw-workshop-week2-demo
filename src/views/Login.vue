<template>
  <div
    class="mx-auto w-1/3 bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center"
  >
    <h2 class="text-2xl text-center mb-3">
      Please log in to use the application
    </h2>
    <img
      class="rounded-full h-32 w-32"
      src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
      alt="user avatar"
    />
    <form class="mt-8 mb-4 w-full" @submit.prevent="login">
      <div class="mb-4">
        <label for="user-name" class="sr-only">User name</label>
        <input
          v-model.trim="username"
          class="w-full border-solid border border-gray-400 rounded px-2 py-3"
          type="text"
          id="user-name"
          placeholder="User Name"
        />
      </div>
      <button
        class="bg-gray-600 text-white font-bold w-full py-3"
        :class="{ 'opacity-50': !username.length }"
        type="submit"
        :disabled="!username.length"
      >
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    login() {
      Cookies.set('logged_in', true)
      this.$router.push({ name: this.$route.query.navigate })
    },
  },
}
</script>
