<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';


</script>

<template>
    <HeaderComponent />
    <h2>Welcome to the Notes App</h2>
    <p>This is the home page. Use the navigation links above to view your notes.</p>
    <router-link to="/notes">View Notes</router-link> 

</template>

<style >
    h2 {
        color: #2c3e50;
    }
    p {
        font-size: 18px;
    }
    a {
        color: #3498db;
        text-decoration: none;
        font-weight: bold;
    }
    a:hover {
        text-decoration: underline;
    }
</style>