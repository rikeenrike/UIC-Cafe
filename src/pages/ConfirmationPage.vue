<script setup>
import router from '../router';
</script>

<template>
    <div class="page">
        <div class="header">
            <img src="../assets/logo2.png" alt="logo" />
            <Button @click="router.push('/menu');" label="Back to Menu" icon="pi pi-chevron-left" size="normal" style="font-size: 1.2rem" text/>
        </div>
        <div class="message">
            <h1>You have Successfully Placed an Order!</h1>
            <h2>We will notify you when your order is ready.</h2>
        </div>
    </div>
</template>

<style scoped>

.page{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: .12fr 1fr;
    grid-template-areas: 
        "header header"
        "message message";
    height: 100vh;
}

.header{
    grid-area: header;
    background-color: #FFEDF3;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
}

.message{
    grid-area: message;
    background-color: #FFEDF3;
    padding-left: 130px;
    padding-right: 130px;
    padding-top: 220px;
    padding-bottom: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

h1{
    color: #BC0000;
    font-weight: 800;
    font-size: 50px;
}

h2{
    color: #151515;
    font-weight: 400;
    font-size: 20px;
}

img{
    width: 110px;
    padding: 10px;
    margin-right: 2%;
  
  }
  
</style>
