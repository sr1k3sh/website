<template>
   <div class="Preloader">
        <div class="loader">
         <svg id="xloader1" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
            <line  id="cross1" stroke="#3CC2FD" stroke-width="10px" stroke-linecap="round" x1="13.75" y1="83.88" x2="82.22" y2="17.78"/>
            <line  id="cross2" stroke="white" stroke-width="10px" stroke-linecap="round" x1="15.53" y1="16" x2="84" y2="82.11"/>
          </svg>
        </div>
      
        <div class="Welcome">
              <span v-show="show===true" id="welcome-text" :style="styling">{{greetings}}</span>
              <span v-show="show===false" id="welcome-text" :style="styling">{{greetings2}}</span>
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
    
      show:true,
      greetings:greet,
      greetings2:'Which one would be you?',
      
      animation:'fadein 2s'
     
    };
  },
  methods:{    
  },
  mounted:function() {
   var delay = this     
   ///console.log(delay);
      setTimeout(function(){
        delay.show=false
        // styling1();
        // delay.greetings='Which one would be you?'
        
      }, 4000)
      // var test= anime({
      //   target:'#welcome-text',
      //   // opacity:[0,1],
      //   // duration:5000,
      //   // delay:4000,
      // })
      
   var val1=[anime.setDashoffset, -90];
   var val2=[-90,anime.setDashoffset];
       cross('#cross1',val1,1200);
       cross('#cross2',val2,1100);
      
    
       
      
  },
  // created(){
  //   var theInterval = setInterval(() => {
        
  //   },4000)
  // },
  computed:{
    styling(){
      return{
        // display:'block',
        animation:this.animation
      }
    }
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

@import '../css/mobile.css';
@import '../css/VisionIcons.css';
/* always present */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>




