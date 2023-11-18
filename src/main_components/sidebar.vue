<script setup>
import { drinksList, foodList } from "../db/dummy_data.js";
import router from '../router';
const OnClickDrinks = (clicked) => {
    const routeName = clicked.toLowerCase().replace(/\s/g, ''); 
    const mainPageRoute = router.options.routes.find(route => route.name === 'MainContent');
    const childRoute = mainPageRoute.children.find(route => route.name === routeName);

    if (childRoute) {
        router.push(childRoute.path);
    } else {
        console.error(`Route not found for ${clicked}`);
    }
}
</script>

<template>
    <div class="sidebar">
        <div class="category-container">
            <ul>Drinks</ul>
        </div>
        <div class="category-list">
            <ul v-for="drink in drinksList" :key="drink.id" @click="OnClickDrinks(drink.name)">{{ drink.name }}</ul>
        </div>
        <div class="category-container">
            <ul>Foods</ul>
        </div>
        <div class="category-list">
            <ul v-for="food in foodList" :key="food.id">{{ food.name }}</ul>
        </div>
    </div>
</template>

<style scoped>
.category-container{
    font-size: 20px;
    font-weight: 800;
    display: flex;
    cursor: pointer;
    height: 50px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: left;
}

.category-list ul{
    margin: 10px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.1s;
}

.category-list ul:hover{
    transform: scale(1.1);
}

</style>