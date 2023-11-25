<script setup>
import main_nav from "../main_components/main_nav.vue";
import sub_nav from "../main_components/sub_nav.vue";
import sidebar from "../main_components/sidebar.vue";
</script>

<template>
    <main>
        <div class="page">
            <main_nav class="main-nav"/>
            <sub_nav class="second-nav"/>
            <sidebar class="sidebar"/>
            <router-view class="main-content" />
        </div>
    </main>
</template>


<style scoped>
@import url('../main_css/grid_layout.css');
</style>