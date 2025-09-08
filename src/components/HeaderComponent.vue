<script setup>


</script>

<template>
    <header class="header">
        <h1>Notes Page</h1>
        <nav>
            <ul class="nav-list">
                <li>
                    <router-link class="link" to="/">Home</router-link>
                </li>
                <li>
                    <router-link class="link" to="/notes">Notes</router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<style>

    .header {
        background-color: #e74c3c;
        color: white;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-list {
        list-style: none;
        display: flex;
        gap: 15px;
        margin: 0;
        padding: 0;
    }
    .link {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>