<template>
  <div id="app" class="bg-blue-500">
    <NavBar/>
    <div class="container mx-auto">
      <router-view/>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
export default {
  components: {
    NavBar
  }
}
</script>