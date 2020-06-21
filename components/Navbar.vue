<template>
<nav>
  <ul class="nav-bar">
    <li>
      <nuxt-link no-prefetch :to="{path: '', name: 'index', params: {}}">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link no-prefetch :to="{path: 'nehome', name: 'second', params: {}}">Ne home</nuxt-link>
    </li>
    <li>
      <nuxt-link no-prefetch :to="{path: 'dalekonehome', name: 'third', params: {}}">Daleko ne home</nuxt-link>
    </li>
  </ul>
</nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style scoped>

</style>
