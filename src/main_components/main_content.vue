<script setup>
import { drinksList, foodList } from "../db/dummy_data.js";
import router from '../router';

const OnClickDrinks = (clicked,dynamicParam) => {

const params = dynamicParam.toLowerCase().replace(/\s/g, ''); 
const mainPageRoute = router.options.routes.find(route => route.name === 'MainContent');
const childRoute = mainPageRoute.children.find(route => route.name === clicked);

if (childRoute) {
    if (childRoute.path.includes(':')) {
        const dynamicPath = childRoute.path.replace(/:id/, params);
        router.push(dynamicPath);
    } else {
        router.push(childRoute.path);
    }
} else {
    console.error(`Route not found for ${clicked}`);
}
}
</script>

<template>
<div class="main-content">
    <!-- Menu Title -->
    <ul>Menu</ul> 
        <Divider />
    <!-- Title Drinks -->
        <div class="categories">
            <ul>Drinks</ul>
        </div>
    <!-- Drink Cards Below  -->
        <div class="category-items" >

            <Card v-for="card in drinksList" :key="card.id" @click="OnClickDrinks('drinks',card.name)">
                <template #header>
                    <img alt="user header" src="../assets/coffeeimg.webp" class="imgitem" />
                </template>
                <template #title>{{ card.name }}</template>
            </Card>
            
        </div>

    <Divider />

    <!-- Title "Foods" -->
    <div class="categories">
        <ul>Foods</ul>
    </div>

    <!-- Food Cards Below (no content yet) -->
    <div class="category-items" >

        <Card v-for="card in foodList" :key="card.id">
            <template #header>
                <img alt="user header" src="../assets/coffeeimg.webp" class="imgitem" />
            </template>
            <template #title>{{ card.name}}</template>
        </Card>

    </div>

    <!-- Cart Button Below -->
    <div class="bag-container">
        <Button @click="router.push('/cart');" icon="pi pi-shopping-bag" text raised rounded aria-label="Filter"/>
    </div>
    
</div>
</template>

<style scoped>
@import url('../main_css/main_content.css');
</style>
