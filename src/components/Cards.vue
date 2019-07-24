<template>
   <div class="cards">    
        <div id="box-transition">
          
              <div class="box-card box1 transform" v-if="saw"  @click="Response">
                  <img id="image1" v-if="seen" src="@/assets/path12.svg">
                  <h4 id="text1" v-if="seen">Individual</h4>
              </div>
          
              <div class="box-card box2"  v-if="saw" @click="Response" >
                  <h4 id="text2" v-if="seen">Banks and Financial Institutiona</h4>
                  <img id="image2" v-if="seen" src="@/assets/museum.svg">
              </div>
        </div>
        
    </div>
    
</template>
 


<script>
 
//  import anime from 'animejs';
//  import Logo from '../components/Logo';
 import {translate,scaling} from '../js/animate';
//  import {cross} from '../js/animate';
 //import { setInterval } from 'timers';

import { setTimeout } from 'timers';
// var greet="Hello, I'm Vision Assist";

export default {
  
 
  data() {
    return {
      seen:true,
      saw:false,
     
    
     
     
    };
  },
  methods:{
             
                Response:function(){
                         
                     function  myFunction() {
                       
                     
                     if (x.matches) { // If media query matches
                     //desktop screen
                          translate('.box1',('50%'),('55%'),0,100);
                          translate('.box2',('-25%'),('-74%'),0,100);
                       
                      } 
                      else {
                        ///scaling(target, translatex, translatey, delay, duration,scale){
                           scaling('.box1','14%','150%',1,1,1.4);
                           scaling('.box2','-13%','45%',100,100,1.4);
                         
                        }
                        
                      }
                      var x=window.matchMedia("(min-width: 768px)")
                      myFunction(x) // Call listener function at run time
                      x.addListener(myFunction)
                   this.seen=false;
              
                }
              
  },
  mounted:function() {
   var delay = this     
      setTimeout(function(){
        delay.saw = true
      
      }, 4000)
      
    
       
      
  },
  components:{
  
  }
}
 
</script>
<style>
.box1 h4{
  font-weight: 100;
}
@media (max-width:768px){
  .boxcard{
      width: 50%;
      height:50%;
  }
}
@media (min-width: 768px) and (max-width: 1366px) {
      .boxcard{
        width:100%;
        height:100%;
      }
}
@import '../css/mobile.css';
@import '../css/VisionIcons.css';

</style>




