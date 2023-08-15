<template>
    <div
        class="drop-zone"
        data-cy="dropzone"
        ondrop="dropHandler"
    >
      <span class="drop-zone-text">Drag & drop some files here, or click to select files</span>
    </div>
</template>

<script setup>
  function dropHandler(event) {
    alert(1);
  }

  function dragOverHandler(event) {

  }
</script>

<style scoped>
  .drop-zone {
    border-width: 2px;
    border-radius: 2px;
    border-color: #eeeeee;
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
  }

  .drop-zone-text {
    display: flex;
    justify-content: center;
    padding: 2rem;
  }
</style>
