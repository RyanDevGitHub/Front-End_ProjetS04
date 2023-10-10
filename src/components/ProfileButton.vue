<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

</script>

<template>
  <div class="dropdown">
    <div class="dropdown-btn">Menu</div>
    <div class="dropdown-content">
      <router-link to="/MonProfil"><a href="#">Mon profil</a></router-link>
      <router-link to="/MonProfil"><a href="#">Mes réservations</a></router-link>
      <router-link to="/"><a href="#">Se déconnecter</a></router-link>
    </div>
  </div>
</template>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  right: 0;
  padding: 2rem;
  background-color: gray;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  top: 100%;
  right: 0;
  min-width: 120px;
  padding: 8px 0;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  display: block;
  color: black;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}

.dropdown-content a:hover {
  background-color: #ddd;
}
</style>
