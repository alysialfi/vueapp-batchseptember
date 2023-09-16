<template>
  <div id="app" class="bg-gray-100">
    <NotificationPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import NotificationPage from './components/NotificationPage.vue'

export default {
  name: 'App',
  components: {
    NotificationPage
  }
}
</script>

