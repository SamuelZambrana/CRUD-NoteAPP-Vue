import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: ref([
      { id: 1, title: 'First Note', content: 'This is the content of the first note.', marked: false },
      { id: 2, title: 'Second Note', content: 'This is the content of the second note.', marked: false },
      { id: 3, title: 'Third Note', content: 'This is the content of the third note.', marked: false },
    ]),
  }),
  actions: {
    addNote(note) {
      const newId = this.notes.length ? Math.max(...this.notes.map(n => n.id)) + 1 : 1;
      this.notes.push({ ...note, id: newId });
    },
    deleteNote(note) {
      const index = this.notes.findIndex(n => n.id === note.id);
      if (index !== -1) {
        this.notes.splice(index, 1);
      }
    },
    updateNote(updatedNote) {
      const index = this.notes.findIndex(n => n.id === updatedNote.id);
      if (index !== -1) {
        this.notes[index] = updatedNote;
      }
    },
  },
  getters: {
    activeNotes(state) {
      return state.notes.filter(n => n.marked);
    },
  },
  persist: true,
});
