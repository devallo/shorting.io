<template>
  <div id="app">
    <div class="center examplex">
      <vs-navbar
        color="rgba"
        text-white
        square
        center-collapsed
        v-model="active"
        ref="navbar"
      >
        <vs-navbar-item :active="active == 'guide'" id="guide" to="/">
          Home
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs" to="about">
          About
        </vs-navbar-item>
        <template #right>
          <vs-button color="#fff" flat>Login</vs-button>
        </template>
      </vs-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'guide'
  })
}
</script>
