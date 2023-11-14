<script setup>
import { ref } from "vue";
import { drinksList, foodList, HotCoffeesList} from "../db/dummy_data.js";

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
            <nav class="main-nav">
                <img src="../assets/logo.png" alt="logo" />
                <div class="tab-container">
                    <ul>MENU</ul>
                    
                </div>                
                <div class="tab-container">
                    <ul>CART</ul>
                </div>                
                <div class="tab-container">
                    <ul>NOTIFICATIONS</ul>
                </div>
            </nav>
            <nav class="second-nav">
                <div class="tab-container sec">
                    <ul>Menu</ul>
                </div>                
                <div class="tab-container sec">
                    <ul>Best Seller</ul>
                </div>                
                <div class="tab-container sec">
                    <ul>History</ul>
                </div>
            </nav>
            <div class="sidebar">
                <div class="category-container">
                    <ul>Drinks</ul>
                </div>
                <div class="category-list">
                    <ul v-for="drink in drinksList" :key="drink.id">{{ drink.name }}</ul>
                </div>
                <div class="category-container">
                    <ul>Foods</ul>
                </div>
                <div class="category-list">
                    <ul v-for="food in foodList" :key="food.id">{{ food.name }}</ul>
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
/* GRID LAYOUT CSS */
.page{
    display: grid;
    grid-template-columns: 0.4fr 1fr 1fr 1fr;
    grid-template-rows: 0.13fr 0.11fr 1fr 1fr;
    grid-template-areas: 
    "main-nav main-nav main-nav main-nav"
    "second-nav second-nav second-nav second-nav"
    "sidebar main-content main-content main-content"
    "sidebar main-content main-content main-content";
    min-height: 100vh;
    
}
 /* GRID CSS */

.main-nav{
    grid-area: main-nav;
    display: flex;
    align-items: center;
    padding-left: 50px;
    background-color: #FFEDF3;
    
}

 .second-nav{
    grid-area: second-nav;
    display: flex;
    align-items: center;
    padding-left: 140px;
    background-color: #FFBED3;
    box-shadow: inset 0px 5px 20px rgba(0, 0, 0, 0.2);
 }

 .sidebar{
    grid-area: sidebar;
    background-color: #FFEDF3;
    padding-top: 30px;
    padding-left: 50px;
 }

 .main-content{
    grid-area: main-content;
    background-color: #FFEDF3;
    height: fit-content;
    margin: 30px 90px 30px 30px;
 }


 /* MAIN-NAV CSS */

 ul{
    padding: 0;
    margin: 0;
    
 }
 .tab-container{
    font-size: larger;
    font-weight: 700;
    padding-left: 20px;
    display: flex;
    cursor: pointer;
    height: 100%;
    align-items: center;
    justify-content: center;
}

img{
    width: 90px;
}



/* SECONDARY NAV CSS */

.sec{
    font-size: small;
    font-weight: 400;
}

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
    transition: 0.1s;
}

.category-list ul:hover{
    transform: scale(1.1);
}

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

.category-items{
    z-index: 2;
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