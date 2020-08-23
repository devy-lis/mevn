<template>
  <div>
    <div class="w-full max-w-sm m-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @click.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username: {{ username}}</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="username" 
           type="text" 
           placeholder="Username"
           v-model="username">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password {{ password }}</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
           id="password"
           type="password"
           placeholder="******************"
           v-model="password">
          <p class="text-red-500 text-xs italic">Please login to continue.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          <router-link class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          to="/user/register">
            Create an account?
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
      username: '',
      password: ''
  }),
  methods: {
    ...mapActions(['login']),
    handleSubmit(){
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user).then(res => {
        if(res.data.success){
          this.$router.push('/profile');
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>