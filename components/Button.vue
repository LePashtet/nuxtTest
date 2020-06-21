<template>
    <button @click="$emit('my-click', $event)">Save</button>
</template>

<script>
  export default {
    name: 'Button'
  }
</script>

<style scoped>

</style>
