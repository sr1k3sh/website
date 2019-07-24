<template>
   <div class="Preloader">
        <div class="loader">
         <svg id="xloader1" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
            <line  id="cross1" stroke="white" stroke-width="10px" stroke-linecap="round" x1="13.75" y1="83.88" x2="82.22" y2="17.78"/>
            <line  id="cross2" stroke="white" stroke-width="10px" stroke-linecap="round" x1="15.53" y1="16" x2="84" y2="82.11"/>
          </svg>
        </div>
      
        <div class="Welcome">
              <span id="welcome-text" >{{greetings}}</span>
           <!-- <textra id="welcome-text" :data='words' :timer="2" filter="simple" :infinite="true"/> -->
        </div>    
        
        <!-- <div id="box-transition">
          
              <div class="box-card box1 transform" v-if="saw"  @click="Response">
                  <img id="image1" v-if="seen" src="@/assets/image1.png">
                  <h4 id="text1" v-if="seen">Individual</h4>
              </div>
          
              <div class="box-card box2"  v-if="saw" @click="Response" >
                  <h4 id="text2" v-if="seen">Banks and Financial Institutiona</h4>
                  <img id="image2" v-if="seen" src="@/assets/image2.png">
              </div>
         
           
        </div> -->
       
       
        
       
        
       
        
    </div>
    
</template>
 


<script>
 
 import anime from 'animejs';

 import {translate, visiblity} from '../js/animate';
 import {cross} from '../js/animate';
 //import { setInterval } from 'timers';


import { setTimeout } from 'timers';
var greet="Hello, I'm Vision Assist";

export default {
  
 
  data() {
    return {
    
     
      greetings:greet
     
     
    };
  },
  methods:{
             
                Response:function(){
                         
                     function  myFunction() {
                       
                     
                     if (x.matches) { // If media query matches
                     //desktop screen
                      
                          translate('.slogan',850,0,1000,500);
                        //// large screen query
                      } 
                      else {
                        ///scaling(target, translatex, translatey, delay, duration,scale){
                     
                            visiblity('.mobileblock',1);
                          // scale('.box1',2);
                           //translate('.slogan',750,0,1000,500);
                        }
                        
                      }
                      var x=window.matchMedia("(min-width: 768px)")
                      myFunction(x) // Call listener function at run time
                      x.addListener(myFunction)
                      // function screen(y) {
                      // if (y.matches){
                      //      translate('.box1',222,130,0,100);
                      //      translate('.box2',-310,-119,0,100);
                      //      translate('.slogan',750,0,1000,500);
                      //   }
                        
                      // }
                      // var y=window.matchMedia("(min-width: 1366px)");
                      // screen(y) // Call listener function at run time
                      // y.addListener(screen)
           
                  ////translate('id/class',translatex,translatey,delay,duration)
                   
                   
                   translate('#xloader1',1000,-400,0,500);
                 
                  
                    // this.greetings = arg
                    // return this.greetings;
                }
              
  },
  mounted:function() {
   var delay = this     
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

</style>




