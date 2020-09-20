<template>
  <div
    class="mx-auto w-1/3 bg-gray-200 rounded py-16 px-12 m-16 flex flex-col items-center justify-center"
  >
    <h2>Please log in to see the list</h2>
    <img
      class="rounded-full h-32 w-32"
      src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
      alt="user avatar"
    />
    <form class="mt-8 mb-4 w-full">
      <div class="mb-4">
        <label for="userName" class="sr-only">User name</label>
        <input
          class="w-full border-solid border border-gray-400 rounded px-2 py-3"
          type="text"
          id="userName"
          placeholder="User Name"
          required
        />
      </div>
      <button
        class="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3"
        type="submit"
      >
        Sign in
      </button>
    </form>
  </div>
</template>
