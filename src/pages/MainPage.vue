<script setup>
import main_nav from "../main_components/main_nav.vue";
import sub_nav from "../main_components/sub_nav.vue";
import sidebar from "../main_components/sidebar.vue";
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const pageClass = computed(() => {
  return (route.path === '/bestsellers' || route.path === '/about' || route.path === '/myorders') ? 'page-full' : 'page';
});
const showSidebar = computed(() => {
  return pageClass.value !== 'page-full';
});
</script>

<template>
    <main>
        <div :class="pageClass">
            <main_nav class="main-nav"/>
            <sub_nav class="second-nav"/>
            <sidebar class="sidebar" v-if="showSidebar"/>
            <router-view/>
        </div>
    </main>
</template>


<style scoped>
@import url('../main_css/grid_layout.css');
</style>