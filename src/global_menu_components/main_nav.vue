<script setup>
import { ref } from 'vue';
const MainNavTab = ref('MENU');
</script>

<template>
    <nav>
        <img src="../assets/logo.png" alt="logo" />
        <div class="tab-container" @click="MainNavTab = 'MENU'"  :class="{ active: MainNavTab === 'MENU' }">
            <ul>MENU</ul>
          </div>
        
          <div class="tab-container" @click="MainNavTab = 'CART'" :class="{ active: MainNavTab === 'CART' }">
            <ul>CART</ul>
          </div>
        
          <div class="tab-container" @click="MainNavTab = 'NOTIFICATIONS'" :class="{ active: MainNavTab === 'NOTIFICATIONS' }">
            <ul>NOTIFICATIONS</ul>
          </div>

          <div class="logout">
            <Button icon="pi pi-sign-out" severity="danger" text rounded aria-label="Cancel" />
          </div>
    </nav>
</template>

<style scoped>

ul{
    padding: 0;
    margin: 0;
    
 }
 .tab-container{
    font-size: larger;
    font-weight: 700;
    display: flex;
    cursor: pointer;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid transparent;
}
.tab-container.active{
    border-bottom-color: #FF4384;
  }

.logout{
    margin-left: auto;
}

img{
    width: 90px;
}

</style>