<script setup lang="ts">
import { defineEmits } from 'vue';
let emit = defineEmits(["ChangeOnglet", 'DeleteAccount']);
function ChangeOnglet(onglet: string) {

  emit('ChangeOnglet', onglet);
}

function DeleteAccount() {

  emit('DeleteAccount');
}
</script>

<template>
  <nav class="menu">
    <div class="menu-item">
      <a href="#" @click="() => ChangeOnglet(' MonProfil')">Mon profil</a>
    </div>
    <div class="menu-item">
      <a href="#" @click="() => ChangeOnglet(' MesReservations')">Mes Réservation</a>
    </div>
    <div class="menu-item">
      <router-link to="/"><a href="#">Se déconnecter</a></router-link>
    </div>
    <div class="menu-item">
      <a href="#" @click="() => DeleteAccount()">Suprimer Mon Compte</a>
    </div>
  </nav>
</template>


<style>
.menu {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
}

.menu-item {
  margin: 20px 0;
}

.menu a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
}

.menu a:hover {
  background-color: #333;
  color: #fff;
}
</style>