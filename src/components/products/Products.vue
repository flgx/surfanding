<template>
<div>
  
  <app-product v-for="product in products" :product="product"></app-product>  
</div>      
</template>
<style scoped>
	h4{
		font-size: 3em;
		text-align: center;
		font-family: 'Passion One', cursive;
	}
</style>
<script>
  import Product from './Product.vue';
  export default{
    data(){
      return{       
        products:[
          {id:1,category:'surfboards',price:2000,title:'All Merick 5,8',status:'new',user:'fraan.mp@gmail.com'},
          {id:2,category:'surfboards',price:2000,title:'Angel 5,2',status:'new',user:'fraan.mp@gmail.com'},
          {id:3,category:'surfboards',price:2000,title:'Birband 5,10',status:'used',user:'fraan.mp@gmail.com'},
          ]
      }
    },
    components:{
      appProduct: Product
    }
  }
</script>