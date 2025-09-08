<script setup>
import { ref, watch } from 'vue';
import { useNoteStore } from '../store/note';

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
});

const noteStore = useNoteStore();

const isEditing = ref(false);
const editedTitle = ref('');
const editedContent = ref('');

// Inicializa los valores cuando la prop esté disponible
watch(
  () => props.note,
  (newNote) => {
    if (newNote) {
      editedTitle.value = newNote.title;
      editedContent.value = newNote.content;
    }
  },
  { immediate: true }
);

const deleteNote = () => {
  noteStore.deleteNote(props.note);
};

const startEditing = () => {
  isEditing.value = true;
};

const confirmUpdate = () => {
  const updatedNote = {
    id: props.note.id,
    title: editedTitle.value,
    content: editedContent.value,
    marked: props.note.marked,
  };
  noteStore.updateNote(updatedNote);
  isEditing.value = false;
};
</script>


<template>
  <div class="note-card">
    <template v-if="isEditing">
      <input v-model="editedTitle" placeholder="Title" />
      <textarea v-model="editedContent" placeholder="Content"></textarea>
      <button @click="confirmUpdate">Confirm Update</button>
    </template>

    <template v-else>
      <h3>{{ editedTitle }}</h3>
      <p>{{ editedContent }}</p>
      <button @click="deleteNote">Delete Note</button>
      <button @click="startEditing">Update Note</button>
    </template>
  </div>
</template>

<style>
.note-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.note-card h3 {
  margin: 0 0 10px;
  font-size: 20px;
}

.note-card p {
  margin: 0 0 10px;
  font-size: 16px;
  color: #555;
}

.note-card input,
.note-card textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.note-card button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  width: auto;
  display: inline-block;
}

.note-card button:hover {
  background-color: #c0392b;
}
</style>

