<script setup>
import { drinksList, foodList } from "../db/dummy_data.js";

</script>

<template>
<div class="main-content">
        <ul>Menu</ul>   
    <Divider />
    <div class="categories">
        <ul>Drinks</ul>
    </div>
    <div class="category-items">
        <Card v-for="card in drinksList" :key="card.id">
            <template #header>
                <img alt="user header" src="" />
            </template>
            <template #title>{{ card.name }}</template>
            <template #content>
                <p class="m-0">{{ card.content }}</p>
            </template>
        </Card>
    </div>
    <div class="categories">
        <ul>Foods</ul>
    </div>
    <div class="category-items">
        <Card v-for="card in foodList" :key="card.id">
            <template #header>
                <img alt="image here" src=""/>
            </template>
            <template #title>{{ card.name}}</template>
            <template #content>
                <p>{{ card.content }}</p>
            </template>
        </Card>
    </div>
    <div class="footer">
        <img src="../assets/logo.png" alt="logo" />
        <p>UIC Cafe</p>
        <p>© 2021 UIC Cafe. All rights reserved.</p>
    </div>
</div>
</template>

<style scoped>
@import url('../main_css/main_content.css');
</style>
