<template>
   <div class="Preloader">
        <div class="loader">
         <svg id="xloader1" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
            <line  id="cross1" stroke="#3CC2FD" stroke-width="10px" stroke-linecap="round" x1="13.75" y1="83.88" x2="82.22" y2="17.78"/>
            <line  id="cross2" stroke="white" stroke-width="10px" stroke-linecap="round" x1="15.53" y1="16" x2="84" y2="82.11"/>
          </svg>
        </div>
      
        <div class="Welcome">
              <span id="welcome-text">{{greetings}}</span>
           <!-- <textra id="welcome-text" :data='words' :timer="2" filter="simple" :infinite="true"/> -->
        </div>       
    </div>
    
</template>
 


<script>
 
 import anime from 'animejs';
 import {cross} from '../js/animate';
 
import { setTimeout } from 'timers';
var greet="Hello, I'm Vision Assist";

export default {
  
 
  data() {
    return {
    
     
      greetings:greet,
      filter:["opacity:0","opacity:1"]
     
    };
  },
  methods:{
              
  },
  mounted:function() {
   var delay = this     
   ///console.log(delay);
      setTimeout(function(){
        
        delay.greetings='Which one would be you?'
        
      }, 4000)
   var val1=[anime.setDashoffset, -90];
   var val2=[-90,anime.setDashoffset];
       cross('#cross1',val1,1200);
       cross('#cross2',val2,1100);
      
    
       
      
  },
  components:{
    
  }
}
 
</script>
<style>
.box1 h4{
  font-weight: 100;
}
#welcome-text{
  font-weight: 300;
}
.Xloader{
    position: relative;
}
@keyframes fadein {
  from { opacity: 0;
  }
  to   { opacity:1;
  }
}
#welcome-text{
  animation:fadein 2s;
}
@import '../css/mobile.css';
@import '../css/VisionIcons.css';

</style>




