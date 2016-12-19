<template>
  <div id="app" class="">
  <app-header></app-header>
  <div class="row">  	
  	<app-products v-for="product in products" :product="product"></app-products>
  </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Products from './components/products/Products.vue';
export default {
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
		appHeader: Header,
		appProducts: Products
	}
}
</script>

<style>
</style>
