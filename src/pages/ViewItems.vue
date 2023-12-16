<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { drinksLibrary } from "../db/dummy_data.js";

const route = useRoute();
const destinationId = computed(() => { return route.params.id;});
const destination = computed(() => { return drinksLibrary.find(drink => drink.name === destinationId.value);});
const home = ref({ icon: 'pi pi-home', route: '/menu'});
const value = ref(0);
const items = computed(() => {
    return [ { label: 'Drinks' }, { label: destination.value.header } ];
});

const visible = ref(false);
const selectedDrink = ref(null);

const openDialog = (drink) => {
  selectedDrink.value = drink;
  visible.value = true;
};
</script>

<template>
    <div class="main-content">
        <div class="imghead">
            <img src="../assets/logo2.png" alt="logo"/>
        </div>
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
        <ul>{{ destination.header }}</ul>
    </div>
    <div class="category-items">
        <Card v-for="card in destination.items" @click="openDialog(card)" :key="card.id" >
            <template #header>
                <img alt="user header" src="../assets/coffeeimg.webp" class="imgitem" />
            </template>
            <template #title>{{ card.name }}</template>
            <template #content><p>{{ 'P ' + card.price}}</p></template>
        </Card>
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <p>
                You selected: {{ selectedDrink.name }}
            </p>
            <div class="card flex justify-content-center">
                <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem"
                decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
            </div>
            <template #footer>
                <Button label="Confirm" icon="pi pi-check" @click="visible = false" />
            </template>
        </Dialog>
    </div>
    <div class="bag-container">
        <Button icon="pi pi-shopping-bag" text raised rounded aria-label="Filter"/>
    </div>
    </div>
</template>

<style scoped>

@import url('../main_css/grid_layout.css');
@import url('../main_css/main_content.css');
</style>