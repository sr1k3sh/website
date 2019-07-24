<template>
  <div id="app">
    
    <!-- <div class="container-fluid back"  >   
    </div> -->
     <div class="back"/>
     <div class="container-fluid ">
        <div class="logo">
              <Logo/>
              <div class="breadcumb"><h3>|Vision</h3></div>
        </div>
         
            
                  <cards class="cards" v-bind:class="[isTrue?'beforeblock':'afterblock']" v-on:click.native="removeVision" />
            
             
              <block class="mobileblock" v-bind:class="[isTrue?'beforeblock':'afterblock']"></block>
              <DesktopVision class="vision" v-if="!visible" v-on:click.native="toogle" />
          <div class="slogan fadein" v-if="!visible">
              <h1 ><span>Let us Cre</span><span style="color:white;">ate the future</span></h1>
          </div>
          <xloader class="xloader" v-if="visible"/>
          <!-- <VisionIcons class="v-icon"/> -->
          
        
      </div> 
     <!-- <div class="hello">
        <hello-world/>
      </div> -->
      
  
  </div>
</template>


<script>                            

import Xloader from './components/Xloader.vue';
//import Logo from './components/Logo.vue'
import DesktopVision from './components/VisionComponent.vue';
import block from './components/block1.vue';

import cards from './components/Cards.vue';
import Logo from './components/Logo';

import {translate,visiblity, scaling, justScale} from './js/animate';
export default {
  
 
  name: 'app',
  data() {
    return {
     message:'rikesh',
     seen:false,
     visible:true,
     isTrue:true,
     window:{
       width:0,
       height:0
     }
    }
  },
  methods:{
     sible:function(){
       //console.log("rikesh clicking");
       this.seen=true
       //translate('.vision',-200,0,10,10);
      //  bounce('.vision');
       
       
     },
     removeVision:function(){
       this.visible=false;
       
       function  myFunction() {
                       
                     
                     if (x.matches) { // If media query matches
                     //desktop screen
                          
                          // translate('.slogan','132%',0,1000,500);
                          
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
     },
      handleResize() {
       if(window.innerHeight){
         var ratio = window.innerHeight/900;
        //  var rt=ratio*100
        

         scaling('.logo','0','0',10,10,ratio);
         scaling('.slogan','0','0',10,10,ratio*1.4);
         

       }
       if(window.innerWidth<1065&&window.innerWidth>768){
          var rt = -12+window.innerWidth/900;
          translate('.slogan',rt+'%','0',10,10);

       }
       
       if(window.innerHeight<=900&&window.innerHeight>=600){
        //  scaling('.container-fluid','0','0',10,10,1);
       }
       
    },
     toogle:function(){
              
                  if(this.isTrue)
                  {

                    this.isTrue=false;
                  }
                  else{
                    
                    this.isTrue=true;
                  }
                },
     mobile:function(){
       this.seen=!this.seen;
     }
  },
  created(){
    //   window.addEventListener('resize', this.handleResize)
    // this.handleResize();
  },
  destroyed(){
     window.removeEventListener('resize', this.handleResize)
  },
  mounted(){
  window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  components: {
   DesktopVision,cards,block,Logo,Xloader
  }
  
}
</script>

<style>
@media (max-width:768px){
  .breadcumb{display:none;}
}
@media (min-width: 768px) and (max-width: 1366px) {
      
}
/* .cards{
  position:absolute;
  width: 100%;
  height:100%;
  justify-content: center;
} */
.fill{
  float:right;
}
.back{
  background-image: url("assets/background.png");
  
  background-position: right;
  position: fixed;
    min-height: 100%;
    max-height:100%;
    height:100%;
    min-width: 100%;
    width:100%;

    filter:blur(21px) saturate(140%) brightness(1);
    background-repeat: no-repeat center fixed;
    background-size:cover;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}


.block {
    pointer-events: none;
    position: relative;
    width: 128px;
    height: 128px;
    margin: 1px;
    background-color: currentColor;
    font-size: 12px;
    color: #2c3e50;
}

.v-icon{
  display:block;
}

.xloader1{
  visibility: hidden;
}
.xloader2{
  visibility: visible;
}
  @media only screen and (max-width: 768px) {
.beforeblock{
  visibility: visible;
}
.afterblock{
  visibility:hidden;
}

}
@import './css/VisionIcons.css';
</style>
