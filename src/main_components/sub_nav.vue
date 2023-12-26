<script setup>
import { ref, onMounted, onBeforeUnmount  } from 'vue';
import router from '../router';

const SecNavTab = ref('');


const tabstyle = (selectedTab) => {
  if (selectedTab.includes('/menu')) {
    SecNavTab.value = 'Menu';
  } else if (selectedTab.includes('/myorders')) {
    SecNavTab.value = 'History';
  } 
};

onMounted(() => {
  tabstyle(router.currentRoute.value.path);
});


</script>


<template>
    <nav class="second-nav">
        <div class="tab-container sec" @click="tabstyle('/menu'); router.push('/menu');" :class="{ active: SecNavTab === 'Menu'}">
            <ul>Menu</ul>
        </div>                              
        <div class="tab-container sec" @click="tabstyle('/myorders'); router.push('/myorders');" :class="{ active: SecNavTab === 'History'}">
            <ul>My Orders</ul>
        </div>
    </nav>
</template>

<style scoped>
.sec{
    font-weight: 400;
    display: flex;
    cursor: pointer;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid transparent;
}

ul{
    padding: 0;
    margin: 0;
}

.sec.active{
    border-bottom-color: #FF4384;
}

</style>