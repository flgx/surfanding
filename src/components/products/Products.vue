<template>
<div> 
  <nav class="col s8 offset-s2">
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" v-model="text" type="search" placeholder="Que estabas buscando?" required>
          <label for="search"><i class="material-icons ">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>  
  <app-product v-for="product in products" :product="product" :key="$route.params.category"></app-product>
  <div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large red">
      <i class="large material-icons">mode_edit</i>
    </a>
    <ul>
      <li>
            <router-link to="/surfshop/trajes-de-surf" activeClass="active" tag="li"><a class="btn-floating red"  data-target="modal1" href="#modal2"><i class="material-icons">insert_chart</i></a>
       Trajes</a></router-link></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
  </div>  <!-- Modal Trigger -->
 <!-- Modal Trigger -->

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
         
</div>      
</template>
<script>
  import Product from './Product.vue'; 
  import Search from '../Search.vue'; 
  export default{
    data(){
      return{
        text: ''
      }
    },
    components:{
    appProduct: Product,
    appSearch: Search
    },
    watch:{
      text(){        
        return this.$store.dispatch('setFilterText',this.text);
      }
    },
    computed:{
      products() {
        return this.$store.getters.products;
      }
    }
  }
</script>
<style scoped>
  nav{
      margin: 25px 0px;
      background-color:white ;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
  color:grey;
   opacity: 1 !important;
  }
	h4{
		font-size: 3em;
		text-align: center;
		font-family: 'Passion One', cursive;
	}
</style>