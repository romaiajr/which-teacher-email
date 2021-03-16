<template>
  <div id="app">
    <b-container>
      <Home/>
    </b-container>
  </div>
</template>

<script>
import Home from './pages/Home'
export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>
<style>
* {
  padding:0;
  margin:0;
}
</style>
