<script setup>
import { ref } from 'vue';
const SecNavTab = ref('Menu');
</script>


<template>
    <nav class="second-nav">
        <div class="tab-container sec" @click="SecNavTab = 'Menu'" :class="{ active: SecNavTab === 'Menu'}">
            <ul>Menu</ul>
        </div>                
        <div class="tab-container sec" @click="SecNavTab = 'Best Seller'" :class="{ active: SecNavTab === 'Best Seller'}">
            <ul>Best Seller</ul>
        </div>                
        <div class="tab-container sec" @click="SecNavTab = 'History'" :class="{ active: SecNavTab === 'History'}">
            <ul>History</ul>
        </div>
    </nav>
</template>

<style scoped>
.sec{
    font-size: small;
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