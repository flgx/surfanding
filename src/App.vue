<template>
  <div id="app" class="">
      <router-view name="header-top"></router-view>
      <div class="row">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
      </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  data(){
    return{       
      products:[
        {id:1,category:'surfboards',price:2000,title:'All Merick 5,8',status:'new',user:'fraan.mp@gmail.com'},
        {id:2,category:'surfboards',price:2000,title:'Angel 5,2',status:'new',user:'fraan.mp@gmail.com'},
        {id:3,category:'surfboards',price:2000,title:'Birband 5,10',status:'used',user:'fraan.mp@gmail.com'},
        {id:4,category:'surfboards',price:2000,title:'Birband 5,10',status:'used',user:'fraan.mp@gmail.com'},
      ]
    }
  },
	components:{
		appHeader: Header
	}
}
</script>

<style scoped>
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
