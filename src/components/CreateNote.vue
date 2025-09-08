<script setup>

import { ref } from 'vue';
import { useNoteStore } from '../store/note';   

const noteStore = useNoteStore();

const title = ref('');

const content = ref('');

const handleSubmit = () => {
    if (title.value && content.value) {
        noteStore.addNote({
            title: title.value,
            content: content.value
        });
        title.value = '';
        content.value = '';
    }
};


</script>

<template>

    <form class="note-form" @submit.prevent="handleSubmit">
        <h2>Create Note</h2>
        <div>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" class="note-title" v-model="title" required />
        </div>
        <div>
            <label for="content">Content:</label>
            <textarea id="content" name="content" class="note-content" v-model="content" required></textarea>
        </div>
        <button type="submit" class="create-btn" @click="handleSubmit">Add Note</button>
    </form>
    
</template>

<style >

    .note-form {
        background: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        max-width: 400px;
        margin: 20px auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .note-form h2 {
        margin: 0 0 10px;
        font-size: 24px;
        text-align: center;
    }
    .note-form div {
        display: flex;
        flex-direction: column;
        gap: 5px; 
    } 
    .note-form label {
        font-weight: bold;
    }
    .note-form input,
    .note-form textarea {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        width: 100%;
        box-sizing: border-box;
    }
    .note-form textarea {
        resize: vertical;
        min-height: 100px;
    }
    .create-btn {
        background-color: #e74c3c;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        align-self: center;
    }
    .create-btn:hover {
        background-color: #c0392b;
    }       

</style>