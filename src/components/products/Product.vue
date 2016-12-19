<template>	
        <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              <img src="https://placeimg.com/640/480/nature">
              <span class="card-title">{{product.title}}</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div> 
</template>

<script>
	export default {
		props:['product']
	}
</script>