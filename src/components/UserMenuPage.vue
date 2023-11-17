<script setup>
import { ref } from "vue";
import router from '../router';
import main_nav from "../global_menu_components/main_nav.vue";
import sub_nav from "../global_menu_components/sub_nav.vue";
import sidebar from "../global_menu_components/sidebar.vue";
import main_content from "../global_menu_components/main_content.vue";


</script>

<template>
    <main>
        <div class="page">
            <main_nav class="main-nav"/>
            <sub_nav class="second-nav"/>
            <sidebar class="sidebar"/>
            <main_content class="main-content"/>
        </div>
    </main>
</template>


<style scoped>
@import url('../global_menu_components/grid_layout.css');

</style>