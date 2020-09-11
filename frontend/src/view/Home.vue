<template>
  <div class="container">
    <div class="banner_topp">
        <div class="cover"></div>
        <div class="_3col">
            <div class="left">
                <a href=""><i class="fas fa-bars"></i></a>
            </div>
            <div class="mid">
                <a href=""><img src="http://belton.tommusdemos.wpengine.com/wp-content/themes/belton/style/images/bg-logo.png" alt=""></a>
            </div>
            <div class="right">
                <a href=""><i class="fab fa-behance"></i></a>
                <a href=""><i class="fab fa-dribbble"></i></a>
                <a href=""><i class="fab fa-xing"></i></a>  
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
<style>
  .banner_topp {
    background :url("01.jpg") top center ;
    height: 600px;
    background-size: cover;
    position: relative;
}
.banner_topp .cover {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: -webkit-linear-gradient(left,#00000033,#1f1f224d,#000000a1);
}
.banner_topp ._3col{
    display: flex ;
    position: absolute;
    width: 100%;
}
.banner_topp ._3col .left{
    width: 33%;
}
.banner_topp ._3col .left a{
    color: white;
    display: block;
    padding: 35px;
    font-size: 20px;
}
.banner_topp ._3col .mid{
    width: 33%;
    text-align: center;
}
.banner_topp ._3col .mid img {
    height: 30px;
    padding: 35px;
}
.banner_topp ._3col .right{
    text-align: right;
    width: 33%;
}
.banner_topp ._3col .right a{
    color: white;
    display:inline-block;
    padding: 35px 5px;
    font-size: 18px;
}
.banner_topp .textbanner {
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: absolute;
    top:50% ; 
    color: white;
    
}
.banner_topp .textbanner p {
    padding-left: 15%;
}
.banner_topp .textbanner h1 {
    padding-left: 15%;
}
/* end css top */
.content1 {
    padding-top: 100px;
    display: flex;
    width: 1170px;
    padding-left : 15%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.content1 .left {
    width: 35%;
}
.content1 .left div {
   
}
.content1 .left h1 {
    font-size: 22px;
    width: 60%;
    padding-top: 15px;
}
.content1 .right {
    width: 65%;
}
.content1 .right p {
   line-height: 20px;
   margin-top: 15px;
}

</style>