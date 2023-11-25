<script setup>
import { ref, onMounted, onBeforeUnmount  } from 'vue';
const MainNavTab = ref('1');
const visibleRight = ref(false);
const isScreenWide = ref(false);

const checkScreenWidth = () => {
  isScreenWide.value = window.innerWidth < 680; // Adjust the threshold as needed
};

onMounted(() => {
  // Add an event listener to check the screen width when the component is mounted
  window.addEventListener('resize', checkScreenWidth);

  // Initial check
  checkScreenWidth();
});

onBeforeUnmount(() => {
  // Remove the event listener when the component is destroyed
  window.removeEventListener('resize', checkScreenWidth);
});

</script>

<template>
    <nav>
        <img src="../assets/logo2.png" alt="logo" />
        <div class="sidenav" v-if="isScreenWide">
          <Button id="sidenav" icon="pi pi-bars" @click="visibleRight = true" />
            <Sidebar v-model:visible="visibleRight" header="Right Sidebar" position="right">
              <p>Content</p>
            </Sidebar>
        </div>
          <div class="maincontainer" v-else>
            <div class="tab-container" @click="MainNavTab = '1'"  :class="{ active: MainNavTab === '1' }">
            <ul>MENU</ul>
            </div>
            <div div class="tab-container" @click="MainNavTab = '2'" :class="{ active: MainNavTab === '2' }">
            <ul>BEST SELLERS</ul>
            </div>
            <div class="tab-container" @click="MainNavTab = '3'" :class="{ active: MainNavTab === '3' }">
              <ul>ABOUT</ul>
            </div>
            <div class="tab-container" @click="MainNavTab = '4'" :class="{ active: MainNavTab === '4' }">
              <ul>NOTIFICATION</ul>
            </div>
            <div class="logout">
              <Button icon="pi pi-sign-out" severity="danger" text rounded aria-label="Cancel" />
            </div>
          </div>
    </nav>
</template>

<style scoped>
ul{
  padding: 0;
  margin: 0;
}
.maincontainer{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 20px;
  gap: 20px;
}

.tab-container{
   font-size: larger;
   font-weight: 700;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   text-align: center;
   height: 100%;
   border-bottom: 4px solid transparent;
}

.tab-container.active{
    border-bottom-color: #FF4384;
  }

.sidenav{
  margin-left: auto;
}

img{
    width: 90px;
    padding: 10px;
}

@media screen and (max-width: 650px) {
  img{
    width: 75px;
  }
  .sidenav{
    margin-left: auto;
  }
}
</style>