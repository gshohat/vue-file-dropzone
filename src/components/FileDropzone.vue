<script setup>
import {ref} from "vue";

const emit = defineEmits(['dropFile'])

const isDragZoneEntered = ref(false);

function handleDragEnter() {
  isDragZoneEntered.value = true;
}

function handleDrop(ev)  {
  const fileName = ev.dataTransfer.files[0].name;
  const items = ev.dataTransfer.items;
  const file = items[0].getAsFile();

  emit('dropFile', file);

  let li = createListItem(fileName);
  const list = document.getElementById('list');
  list.appendChild(li);

}

function createListItem(fileName) {
  let li = document.createElement('li');
  let liText = document.createTextNode(fileName);
  li.appendChild(liText);
  return li;
}

</script>

<template>
  <div
      class="drop-zone"
      :class="{'drag-enter':isDragZoneEntered}"
      @dragenter="handleDragEnter"
      @dragover.prevent
      @drop.prevent="handleDrop"
  >
    <span class="drop-zone-text">Drag & drop some files here</span>
  </div>

  <div class="files-list">
    <div>File:</div>
    <ul id="list"></ul>
  </div>

</template>

<style scoped>

.drop-zone {
  border-width: 2px;
  border-radius: 2px;
  border-color: #bdbdbd;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
}


.drag-enter {
  border-color: blue;
}

.drop-zone-text {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.files-list {
  padding: 1rem 0;
}
</style>
