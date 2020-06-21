<template>
  <div class="second">
    <btn @my-click="saveText"/>
    <input type="text" v-model.lazy="text">
    Output: {{ text }}
  </div>
</template>

<script>
  import btn from '@/components/Button';
  export default {
    components:{
      btn
    },
    asyncData ({store}){
      return {
        text: store.getters['TEXT']
      }
    },
    methods:{
      saveText(){
        this.$store.commit('setText', this.text);
      }
    },

  }
</script>

<style>

</style>
