<template>
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              <img src="https://placeimg.com/640/480/nature">
              <span class="card-title">{{product.title}}</span>
            </div>
            <div class="card-content">
              <small>Descripcion: </small>
              <p>{{product.description}}</p>
            </div>
            <div class="card-action">
                <router-link :to="sluggable" activeClass="active" tag="li"><a>CONTACTO</a></router-link>
            </div>
          </div>
        </div> 
</template>
<style>
  .card-action li{
    list-style: none;  
  }
</style>
<script>
	export default {
		props:['product','status'],
    data(){
      return {
        slug: '',
        link:''
      }
    },
    computed:{
      sluggable() {
          return  'surfshop'+'/'+ this.product.category + '/' + this.product.title
          .toLowerCase()
          .replace(/ /g,'-')
          .replace(',','-')
          .replace(/[^\w-]+/g,'')
      }
    }
	}
</script>