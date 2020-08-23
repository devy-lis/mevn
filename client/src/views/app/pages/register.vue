<template>
  <div>
    <div class="w-full max-w-sm m-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @click.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username: {{ username }}</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="username" 
           type="text" 
           placeholder="Username"
           v-model="username">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name: {{ name }}</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="name" 
           type="text" 
           placeholder="Name"
           v-model="name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email: {{ email }}</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="email" 
           type="text" 
           placeholder="email"
           v-model="email">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password: {{ password }}</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="password"
           type="password"
           placeholder="Enter password"
           v-model="password">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">Confirm Password: {{ confirmPassword }}</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="confirmPassword"
           type="password"
           placeholder="Re-enter password"
           v-model="confirmPassword">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign Up
          </button>
          <router-link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          to="/user/login">
            Already have an account?
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      username: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
  methods: {
    handleSubmit(){
      console.log(this.email);
    }
  }
}
</script>
