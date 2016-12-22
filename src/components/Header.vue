<template>	
  <div class="navbar-fixed">  
	  <nav class="my-blue">
	    <div class="nav-wrapper ">
	      <a href="#" class="brand-logo">>>Surfando  
</a>
	      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
	      <ul class="right hide-on-med-and-down">
            <router-link to="/" activeClass="active" tag="li"><a> <i class="fa fa-home" aria-hidden="true"></i> Todos los productos</a></router-link>
            <router-link to="/surfshop/shortboards" activeClass="active" tag="li"><a> <i class="fa fa-star" aria-hidden="true"></i> Shortboards</a></router-link>
            <router-link to="/surfshop/funboards" activeClass="active" tag="li"><a> <i class="fa fa-star" aria-hidden="true"></i> Funboards</a></router-link>
            <router-link to="/surfshop/longboards" activeClass="active" tag="li"><a> <i class="fa fa-star" aria-hidden="true"></i> Longboards</a></router-link>
            <router-link to="/surfshop/bodyboards" activeClass="active" tag="li"><a> <i class="fa fa-star" aria-hidden="true"></i> Bodyboards</a></router-link>
            <router-link to="/surfshop/trajes-de-surf" activeClass="active" tag="li"><a> <i class="fa fa-snowflake-o" aria-hidden="true"></i>
			 Trajes</a></router-link>
            <router-link to="/surfshop/accesorios" activeClass="active" tag="li"><a> <i class="fa fa-gear" aria-hidden="true"></i> Accesorios</a></router-link>
            <router-link to="/perfil" activeClass="active" tag="li"><a> <i class="fa fa-user" aria-hidden="true"></i> Perfil</a></router-link>
	      </ul>
	      <ul class="side-nav" id="mobile-demo">
	        <li><a href="sass.html">Shortboards</a></li>
	        <li><a href="badges.html">Fundboards</a></li>
	        <li><a href="collapsible.html">Longboards</a></li>
	        <li><a href="mobile.html">Bodyboards</a></li>
	        <li><a href="mobile.html">Accesorios</a></li>
	      </ul>
	    </div>
	  </nav>
  </div>
</template>
<style scoped>
	.my-blue{
		background-color:#212121 ;
	}
	.brand-logo{
		font-family: 'Passion One', cursive;
		font-size: 4em;
		margin: 0px 20px;
	}

</style>
<script>	
export default {

}
</script>