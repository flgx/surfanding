<template>	
        <div class="col s6 offset-s3 center ">  
        <h1>Detail</h1>
            <div class="carousel carousel-slider center" data-indicators="true">
                <div class="carousel-fixed-item center">
                  <a class="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
                <div class="carousel-item red white-text" href="#one!">
                  <h2>First Panel</h2>
                  <p class="white-text">This is your first panel</p>
                </div>
                <div class="carousel-item amber white-text" href="#two!">
                  <h2>Second Panel</h2>
                  <p class="white-text">This is your second panel</p>
                </div>
                <div class="carousel-item green white-text" href="#three!">
                  <h2>Third Panel</h2>
                  <p class="white-text">This is your third panel</p>
                </div>
                <div class="carousel-item blue white-text" href="#four!">
                  <h2>Fourth Panel</h2>
                  <p class="white-text" id="test">This is your fourth panel</p>
                </div>
              </div>
          </div> 
</template>
<script>
// Load this when the DOM is ready
$(function(){
  // You used .myCarousel here. 
  // That's the class selector not the id selector,
  // which is #myCarousel
  
      var test = $('#test').val();

      console.log('HOLA' + test);
});
</script>
<script>
export default {  
    created(){
        $('.carousel.carousel-slider').carousel({full_width: true});
    }
}
</script>