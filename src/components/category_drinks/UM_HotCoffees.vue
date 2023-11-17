<script setup>
import { ref } from "vue";
import { drinksList, foodList, HotCoffeesList } from "../../db/dummy_data.js";

import main_nav from "../../global_menu_components/main_nav.vue";
import sub_nav from "../../global_menu_components/sub_nav.vue";
import sidebar from "../../global_menu_components/sidebar.vue";

const home = ref({
    icon: 'pi pi-home',
    route: '/menu'
});
const items = ref([
    { label: 'Drinks'}, 
    { label: 'Hot Coffees'  }
]);

</script>

<template>
    <main>
        <div class="page">
            <main_nav class="main-nav"/>
            <sub_nav class="second-nav"/>
            <sidebar class="sidebar"/>

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
@import url('../../global_menu_components/grid_layout.css');

/* MAIN CONTENT CSS */
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: solid !important;
}

.p-divider-solid.p-divider-vertical:before {
  border-left-style: solid !important;
}
.main-content .categories ul{
    z-index: 1; 
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

.p-breadcrumb{
    background-color: #FFEDF3;
    color: rgba(0,0,0,.87);
    border: none;
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