<template>
  <div class="site gradient">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.content {
  padding-top: 50px;
}

.site {
  height: 100vh;
}

.gradient {
  background-image: linear-gradient(
    to left bottom,
    #439cef,
    #5791ea,
    #6986e2,
    #797ad9,
    #876dcd,
    #9063c3,
    #9859b8,
    #9f4eac,
    #a444a0,
    #a83994,
    #ab2c87,
    #ad1e7a
  );
}
</style>
