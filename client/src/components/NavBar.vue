<template>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <router-link to="/">
                <svg class="fill-current h-8 w-8 mr-2" width="65" height="65" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
            </router-link> 
        </div>
        
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
            <ul class="flex flex-wrap">        
                <li class="mr-3">
                    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/">Home</router-link>
                </li>
                <li class="mr-3">
                    <router-link class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/about">About</router-link>
                </li>
                <li class="mr-3">
                    <router-link v-if="!isLoggedIn" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/login">Login</router-link>
                </li>
                <li class="mr-3">
                    <router-link v-if="!isLoggedIn" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/register">Register</router-link>
                </li>
                <li>
                    <router-link v-if="isLoggedIn" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/profile">Profile</router-link>
                </li>
                <li>
                    <router-link v-if="isLoggedIn" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/login">Log Out</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: () => ({
            isLoggedIn: null,
    }),
    computed: {
        ...mapGetters['isLoggedIn']
    }
}
</script>



