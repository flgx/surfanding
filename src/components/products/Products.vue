<template>
<div>
  <div class="col s12" v-if="status">
    <h1>No se encontro nada...</h1>
  </div>
  <nav class="col s8 offset-s2">
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" v-model="filterText" type="search" placeholder="Que estabas buscando?" required>
          <label for="search"><i class="material-icons ">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>   
  <app-product v-for="product in filteredProducts" :status="status" :product="product" :key="$route.params.category"></app-product> 
</div>      
</template>
<style scoped>
  nav{
      margin: 25px 0px;
      background-color:white ;
      color: black;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
  color:black;
   opacity: 1 !important;
  }
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
          {id:1,category:'surfboards',price:2000,title:'All Merick 5,8',status:'new',description:'5,8: tabla',user:'fraan.mp@gmail.com'},
          {id:2,category:'surfboards',price:2000,title:'Angel 5,2',status:'new',description:'Angel 5,2 tabla',user:'fraan.mp@gmail.com'},
          {id:3,category:'surfboards',price:2000,title:'Birband 5,10',status:'used',description:'Birband 5,10 tabla',user:'fraan.mp@gmail.com'},
          {id:4,category:'surfboards',price:2000,title:'Birband 5,10',status:'used',description:'Birband 5,10',user:'fraan.mp@gmail.com'},
          ],
        filterText: '',
        status:false
      }
    },
  computed:{
    filteredProducts() {
        const counter = 0;
        return this.products.filter((element) => {
            let search = element.description.toLowerCase().match(this.filterText.toLowerCase()) || element.title.toLowerCase().match(this.filterText.toLowerCase())|| element.category.toLowerCase().match(this.filterText.toLowerCase());
            console.log(search);
            if(search === null){
              this.status = true;
              return 0;
            }
            this.status = false;
            return search;
        });
    }
  },
    components:{
      appProduct: Product
    }
  }
</script>