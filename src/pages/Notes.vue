<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useNoteStore } from '../store/note'
import NoteCard from '../components/NoteCard.vue';
import CreateNote from '../components/CreateNote.vue';

const noteStore = useNoteStore()

</script>

<template>
    <HeaderComponent />

    <section id="notes-page">
    <h2>Notes Page</h2>
    <ul class="notes-list">
        <li><CreateNote /></li>
        <li v-for="(note, index) in noteStore.notes" :key="index">
            <NoteCard :note="note" />
        </li>
        <li v-if="noteStore.notes.length === 0">No notes available. Please add a note.</li>
    </ul>
    </section>
</template>

<style >

    #notes-page {
        background-image: url('../../public/assets/tablero-de-madera-de-fondo.jpg');
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
            text-align: center;
        }
    }
    .notes-list {
        list-style: none;
        padding: 0;
        width: 100%;
        max-width: 600px;
        li {
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            h3 {
                margin: 0 0 10px;
                font-size: 20px;
            }
            p {
                margin: 0 0 10px;
                font-size: 16px;
                color: #555;
            }
            button {
                background-color: #e74c3c;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
                &:hover {
                    background-color: #c0392b;
                }
            }
        }
    }

</style>