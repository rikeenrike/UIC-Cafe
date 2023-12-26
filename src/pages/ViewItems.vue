<script setup>
import { ref, computed } from "vue";
import { useToast } from "primevue/usetoast";
import { useRoute } from "vue-router";
import { drinksLibrary, UserOrder } from "../db/dummy_data.js";
import router from '../router';

const route = useRoute();
const destinationId = computed(() => { return route.params.id;});
const destination = computed(() => { return drinksLibrary.find(drink => drink.name === destinationId.value);});
const home = ref({ icon: 'pi pi-home', route: '/menu'});
const value3 = ref(1);
const items = computed(() => {
    return [ { label: 'Drinks' }, { label: destination.value.header } ];
});

const visible = ref(false);
const selectedDrink = ref(null);
const toast = useToast();

const order = ref(UserOrder);


const addItem = (drink) => {
  if (!order.value.find((item) => item.name === drink.name)) {
    const newId = order.value.length > 0 ? Math.max(...order.value.map((c) => c.id)) + 1 : 1;
    const newItem = {
      id: newId,
      name: drink.name,
      price: drink.price,
      quantity: 1,
      total: drink.price,
    };
    order.value.push(newItem);
    toast.add({ severity: 'success', summary: 'Drink selected!', detail: drink.name, group:'bc', life: 1000 });
  }else{
    toast.add({ severity: 'error', summary: 'Drink already selected!', detail: drink.name, group:'bc', life: 1000 });
  }
};





</script>

<template>
    <div class="main-content">
        <Toast position="bottom-center" group="bc"></Toast>
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
        <Card v-for="card in destination.items" @click="addItem(card)" :key="card.idw" >
            <template #header>
                <img alt="user header" src="../assets/coffeeimg.webp" class="imgitem" />
            </template>
            <template #title>{{ card.name }}</template>
            <template #content><p>{{ '₱ ' + card.price}}</p></template>
        </Card>
    </div>
    <div class="bag-container">
        <Button @click="router.push('/cart')" icon="pi pi-shopping-bag" text raised rounded aria-label="Filter" />
    </div>
</div>
</template>

<style scoped>

@import url('../main_css/grid_layout.css');
@import url('../main_css/main_content.css');

.input-number {
    width: 4rem;
}

</style>