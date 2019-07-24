<template>  
  <div class="VisionAssist" v-bind:class="[isActive?'beforeAssist':'afterAssist']">
    <!-- <transition name="bounce" v-if="seen"> -->
    <!-- <transition name="bounce" > -->
      <div class="assistant"  >
        <div class="welcome-bar" >
           <!-- <h5 id="welcome-text1" style="font-size:13px;color:white;margin-right:30px;width:245px;" v-if="seen" >{{message}}</h5> -->

        </div>
            <h5 v-show="title_show==true" class="welcome-text got" :style="styling" >{{message1}}</h5>
            <h5 v-show="title_show==false" class="welcome-text" :style="styling" >{{message}}</h5>
        
        <div class="circle"  @click="show=!show" v-on:click="changeTitle()+toogle()">
          <svg id="xloader" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
             <line  id="cross1" stroke="white" stroke-width="8px" stroke-linecap="round" x1="13.75" y1="83.88" x2="82.22" y2="17.78"/>
              <line  id="cross2" stroke="white" stroke-width="8px" stroke-linecap="round" x1="15.53" y1="16" x2="84" y2="82.11"/>
          </svg>
        </div>
      </div>
       <transition name="bounce" >
      <div class="assistan2" v-if="show">
          <div class="input">
           <input id="in" type="text" placeholder="...or lookings for something in particular?"  v-on:keyup.enter="inputEvent">
          </div>
          
          <div class="help" v-if="seen">
            <p>visionID enables you to access all vision enabled financial institutions. It's time to reduce the KYC
              hurdles as well as the burden of carrying identity documents for transactions..
            </p>
          </div>
          <div class="suggestion" >
                 <img src="../assets/compass.svg" width="30px"/><span style="margin-left:10px;color:white;">Take me on website tour</span>
          </div> 
      </div>
     
   </transition>
 
     <!-- </transition> -->
   <!-- -->
    
  </div>
</template>

<script>
 import anime from 'animejs';
 import {cross} from '../js/animate';
 

export default {
 name: 'DesktopVision',     
  props:['in'],
  data() {
    
    return {
      title_show:true,
      seen:false,
      show:false,
     
      message1:'Hey there',
      message:'Let me know if you need help',
      text:'...or looking for something in particular?',
      isActive:true,   
    };
  },
  computed:{
    // styling:function(){
    //    return{ 
    //      width:100+'px',
    //      transform:this.transform
    //    }
    //   },
    fixedwidth:function(){
       
       return this.width;
    }
    // direction:function(){
    //   return this.transform;
    // } 
  },
  methods:{
                inputEvent:function(){
                   this.seen=true;
                   
                    this.message = 'Aha! Good question..'
                    return this.message;
                   
                    
                },
                method2:function(){
                  this.seen=true
                },
                changeTitle:function(){
                   //console.log('ok');
                  this.message='Thinking of your next steps?'
                },
                hey:function(){
                   //console.log('ok');
                 this.message='Hey There'
                      var delay = this     
                      setTimeout(function(){
                      delay.message='Let me know if you need help'
                                          }, 1000)
                },
                toogle:function(){
                  if(this.isActive)
                  {
                    this.isActive=false;
                  }
                  else{
                    this.isActive=true;
                  }
                }
   
  },
  mounted() {
    
      
      

      //  visiblity('.welcome-text',1);
      
      //  ease('.welcome-bar');
                      //  this.message='Hey There'
                      var delay = this     
                      setTimeout(function(){
                        // this.message     
                        delay.title_show=false;
                         }, 4000) 
   var val1=[anime.setDashoffset, -90];
   var val2=[-90,anime.setDashoffset];
       cross('#cross1',val1,1200);
       cross('#cross2',val2,1100);
       
  }
}

 
</script>
<style>
@import '../css/mobile.css';

@media (min-width: 1367px) {
@keyframes fadein {
  from { opacity: 0;}
  to   { opacity: 1;}
}
@keyframes slide {
  from{width: 0}
  to{width:278px;}
}
.assistant{
  display: inline-flex;
  height:32px;
  width:278px;
  animation:slide 2s;
}
/* .welcome-bar{
  width:120px;
  display:block;
   animation:slide 2s;
} */
.welcome-text{
  font-size:13px;
  color:white;
  width:100%;
  position: relative;
  left:6%;
  float:left;
  text-align:left;
  /* display:none; */
 animation:fadein 6s ;
}
.bounce-enter-active {
  animation: bounce-in .3s !important;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
.input{
  margin:10px 10px 0px 10px;
}
.help{
  width:300px;
  padding:5px;
}
.help p{
  text-align: justify;
  color:white;
  padding: 0px 10px 0px 10px;
  position:relative;
  justify-content: center;
  word-spacing: -1px;
  font-size: 11px;
}
}
@media (min-width: 768px) and (max-width: 1366px) {
  @keyframes fadein {
  from { opacity: 0}
  to   { opacity: 1;}
}
@keyframes slide {
  from{width: 0}
  to{width:235px;}
}
.assistant{
  display: inline-flex;
  height:30px;
  width:235px;
  animation: slide 2s;
}
/* .welcome-bar{
  width:90px;
  display:block;
   animation:slide 2s;
} */
.welcome-text{
  font-size:11px;
  color:white;
  width:100%;
  position: relative;
  left:4%;
  top:-3px;
  text-align: left;
  /* display:none; */
 animation:fadein 6s ;
}
.bounce-enter-active {
  animation: bounce-in .3s !important;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
.input{
  margin:10px 10px 0px 10px;
}
.help{
  width:300px;
  padding:5px;
}
.help p{
  text-align: justify;
  color:white;
  padding: 0px 10px 0px 10px;
  position:relative;
  justify-content: center;
  word-spacing: -1px;
  font-size: 11px;
}
.VisionAssist{
  
  display: inline;
  
  
  /* float:right; */
  background-color: rgba(255,255,255,0.22);
  border: 3px solid rgba(255, 255, 255, 0);
  /* transition: all .3s ease; */
     border-radius: 16px;

}
.circle{
   position:absolute;
   right:1%;
   border-radius: 25px;
   border: 2px solid rgba(154, 190, 217, 0.445);
   background-color:  #9ABED9;
   top:1px;
   width: 28px;
   height:28px;
   transition: transform .3s;
  
}
.circle:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
  transform: scale(1.2) 1; /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.suggestion img{
 width:14%;
}
.suggestion span{
  font-size: 12px;
}
}
@import '../css/VisionComponent.css';



@media only screen and (max-width: 768px) {
  @keyframes fadein {
  from { opacity: 0;
  }
  to   { opacity:1;
  }
}
@keyframes sliding {
  from{width:0px}
  to{width:285px}
}
/* .assistant{
  display: inline-flex;
  height:32px;
} */


.welcome-text{
 font-size:13px;
  color:white;
  width:100%;
  /* position: fixed; */
  left:-1%;
  display:block;
  animation: fadein 5s;
}
.bounce-enter-active {
  animation: bounce-in .3s !important;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}

.assistant{
  display: inline-flex;
  width:285px;
  height:35px;
  animation:slide 2s;
}
.beforeAssist{
  width:285px;
 

 
  /* transition: all 0.3s ease; */
}
.afterAssist{
  width:100%;
  position:absolute;
  left:14%;
  height:100vh;
  transform:translateY(100px) translateX(58px);
  transition: all 0.3s ease;
}
.vision{
      position: relative;
      top:6vh;
      left:-14%;
      opacity:1;
  }
}
</style>

