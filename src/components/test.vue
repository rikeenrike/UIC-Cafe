<script setup>
import { ref } from "vue";
import { drinksList, foodList, HotCoffeesList } from "../db/dummy_data.js";
import router from '../router';
import main_nav from "../global_menu_components/main_nav.vue";
import sub_nav from "../global_menu_components/sub_nav.vue";


const MainNavTab = ref('MENU');
const SecNavTab = ref('Menu');


const OnClickDrinks = (clicked) => {
    const route = router.options.routes.find((route) => route.name === clicked);
    if (route) {
        router.push(route.path);
    } else {
        console.error(`Route not found for ${clicked}`);
    }
}


</script>

<template>
    <main>
        <div class="page">
            <main_nav class="main-nav"/>
            <sub_nav class="second-nav"/>
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
                <div class="footer">
                    <img src="../assets/logo.png" alt="logo" />
                    <p>UIC Cafe</p>
                    <p>© 2021 UIC Cafe. All rights reserved.</p>
                </div>
            </div>
            <div class="main-content">
                <Breadcrumb :home="home" :model="items">
                    <template #item="{ item, props }">
                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                            <a :href="href" v-bind="props.action" @click="navigate">
                                <span :class="[item.icon, 'text-color']" />
                                <span class="text-primary font-semibold">{{ item.label }}</span>
                            </a>
                        </router-link>
                            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                                <span class="text-color">{{ item.label }}</span>
                            </a>
                    </template>
                </Breadcrumb>
            <Divider />
            <div class="categories">
                <ul>Hot Coffees</ul>
            </div>
            <div class="category-items">
                <Card v-for="card in HotCoffeesList" :key="card.id">
                    <template #header>
                        <img alt="user header" src="" />
                    </template>
                    <template #title>{{ card.name }}</template>
                    <template #content>
                        <p class="m-0">{{ 'P ' + card.price}}</p>
                    </template>
                </Card>
            </div>
            <Divider />
            </div>
        </div>
    </main>
</template>


<style scoped>
@import url('../global_menu_components/grid_layout.css');

/* SIDEBAR CSS */
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
    margin-bottom: 10px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.1s;
}

.category-list ul:hover{
    transform: scale(1.1);
}

.footer{
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

/* MAIN CONTENT CSS */
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: solid !important;
}

.p-divider-solid.p-divider-vertical:before {
  border-left-style: solid !important;
}

.main-content ul{
    font-size: 30px;
    font-weight: 800;
    margin: 0;
    padding: 0;
}

.main-content .categories ul{
    font-size: 25px;
    font-weight: 800;
}

.category-items{
    margin-top: 20px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}

.p-card{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 15vw;
    height : 25vh;
    border-radius: 15px;
    background: #FFEDF3;
    box-shadow:  20px 20px 60px #d9c9cf,
             -20px -20px 60px #ffffff;
    transition: 0.1s;
    color: rgba(0,0,0,.87);
}

.p-card:hover{
    transform: scale(1.1);

}

/* RESPONSIVENESS */
@media screen and (max-width: 768px) {
    .page{
        grid-template-columns: 1fr;
        grid-template-rows: 0.20fr 0.10fr 1fr 1fr;
        grid-template-areas: 
        "main-nav"
        "second-nav"
        "sidebar"
        "main-content";
    }
    .main-nav{
        padding-left: 0px;
    }
    .second-nav{
        padding-left: 0px;
    }
    .sidebar{
        padding-left: 0px;
    }
    .main-content{
        padding-left: 0px;
    }
}
</style>