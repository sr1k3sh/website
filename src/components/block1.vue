<template>
    <div class="Mobileblock">
        <div class="heading">
            <span>{{head}}</span>
        </div>
        <div class="body">
            <p>{{body}}</p>
        </div>
    </div>    
</template>
<script>
export default {
   
    data(){
        return{
            head:'Experience the future',
            body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'

        };
    }
}
</script>
<style>
@media (min-width: 768px) {
    .Mobileblock{
        display:none;
    }
}
@media (min-width: 1281px) {
    .Mobileblock{
        display: none;
    }
}
@media only screen and (max-width: 768px) {
.Mobileblock{
     padding: 5px;
     display: block;
     opacity: 0;
     position: absolute;
     font-weight: 100;
     top:30%;
  }
  .heading span{
      color:#fff;
      font-size:26px;
      font-weight:lighter;
  }
  .body p{
      text-align:justify;
      padding:2em;
      font-weight:lighter;
      color:#fff;
  }
}
</style>
