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
/* MAIN CONTENT CSS */
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid !important;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid !important;
}

.main-content ul {
    font-size: 30px;
    font-weight: 800;
}

.main-content .categories ul {
    font-size: 25px;
    font-weight: 800;
}

.category-items {
    margin-top: 20px;
    display: flex;
    align-items: left;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    width: 100%; /* Set width to 100% */
}

.p-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: calc(33.33% - 20px); /* Set card width to 1/3 of the container, adjust as needed */
    min-width: 150px; /* Set a reasonable minimum width for the cards */
    max-width: 400px; /* Set a maximum width if desired */
    height: 25vh;
    border-radius: 15px;
    background: #FFEDF3;
    box-shadow: 20px 20px 60px #d9c9cf, -20px -20px 60px #ffffff;
    transition: 0.1s;
    color: rgba(0, 0, 0, .87);
}

.p-card:hover {
    transform: scale(1.1);
}

.footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: auto;
    text-align: center;
}

.footer p {
    margin: 0;
    font-size: small;
}
</style>
