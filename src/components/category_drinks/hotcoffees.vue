<script setup>
import { ref } from "vue";
import { drinksList, foodList, HotCoffeesList } from "../../db/dummy_data.js";

const home = ref({
    icon: 'pi pi-home',
    route: '/menu'
});
const items = ref([
    { label: 'Drinks' }, 
    { label: 'Hot Coffees'} // Make sure the route name matches
]);
</script>

<template>
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
                        <template #content><p>{{ 'P ' + card.price}}</p></template>
                    </Card>
                </div>
                <Divider />
            </div>
</template>

<style scoped>
@import url('../../main_css/grid_layout.css');
@import url('../../main_css/main_content.css');
</style>