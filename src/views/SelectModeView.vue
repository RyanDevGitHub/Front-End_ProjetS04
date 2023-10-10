<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Bienvenue sur La Select Mode Page</h1>
    <div class="button-container">
      <router-link to="/ConexionPageView"><button>MODE CLIENT</button></router-link>
      <router-link to="/ModeAdmin"><button>MODE ADMIN</button></router-link>
    </div>
  </div>
</template>

<style>
/* Centre le titre horizontalement */
h1 {
  text-align: center;
}

/* Centre les boutons horizontalement et ajoute un espacement entre eux */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  /* L'espace entre les boutons et le titre */
}

button {
  margin: 0 10px;
  /* Ajouter une marge horizontale entre les boutons */
}
</style>
          