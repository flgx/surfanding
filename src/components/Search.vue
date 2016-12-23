<template>
</template>
<script>
	export default{
    data(){
      return{
        filterText: ''
      }
    },
    created(){
      this.$store.dispatch('startSearch',this.filterText);
    }
	}
</script>