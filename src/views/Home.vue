<template>
  <div class="home">
    <FullPage>
      <h1>Hello World</h1>
    </FullPage>
  </div>
</template>

<script>
// @ is an alias to /src
import FullPage from '@/components/FullPage.vue'

export default {
  name: 'Home',
  components: {
    FullPage
  }
}
</script>

<style>
* {
  margin: 0;
}

html,
body {
  height: 100%;
}
</style>
