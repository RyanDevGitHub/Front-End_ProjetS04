<script setup lang="ts">
import { ref, defineEmits } from 'vue';

let emit = defineEmits(['DisplayVol']);
let villeDepart = ref("");
let villeArriver = ref("");
let dateDepart = ref("");
let dateArriver = ref("");
let heure_arrivee = ref("");
let heure_depart = ref("");

async function SearchVol(villeDepart: string, villeArriver: string, dateDepart: string, dateArriver: string, heure_arrivee: string, heure_depart: string) {
  const url = 'https://localhost:7232/api/Vols/SearchVol';
  const data = { villeDepart: villeDepart, villeArrivee: villeArriver, DateDepart: dateDepart, DateArriver: dateArriver, heureDepart: heure_arrivee, heureArrivee: heure_depart, idAvion: "", nombrePlaces: "" };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log("Ok");
      if (response.status === 200) {
        console.log("Search successful");
        const result = await response.text();
        emit("DisplayVol", result)
      } else if (response.status === 404) {
        console.log("Vol not found");
      } else {
        console.log("Unexpected error occurred");
        const result = await response.json();
      }

    } else {
      // Gérer les erreurs HTTP

    }
  } catch (error) {
    // Gérer les erreurs de connexion ou de traitement de la réponse
    console.error(error);
  }
}
</script>

<template>
  <div class="search-box">
    <form class="SearchVol"
      @submit.prevent="SearchVol(villeDepart, villeArriver, dateDepart, dateArriver, heure_depart, heure_arrivee)">
      <div class="form-rowSearchVol">
        <label for="depart">Ville de départ :</label>
        <input type="text" id="depart" name="depart" required v-model="villeDepart">
      </div>
      <div class="form-rowSearchVol">
        <label for="arrivee">Ville d'arrivée :</label>
        <input type="text" id="arrivee" name="arrivee" required v-model="villeArriver">
      </div>
      <div class="form-rowSearchVol">
        <label for="heure_depart">Date et heure de départ :</label>
        <input type="date" id="date_depart" name="heure_depart" required v-model="dateDepart">
        <input type="time" id="heure_depart" name="heure_depart" required v-model="heure_depart">
      </div>
      <div class="form-rowSearchVol">
        <label for="heure_arrivee">Date et heure d'arrivée :</label>
        <input type="date" id="date_arrivee" name="heure_depart" required v-model="dateArriver">
        <input type="time" id="heure_arrivee" name="heure_arrivee" required v-model="heure_arrivee">
      </div>
      <button type="submit" class="rechercher-button">Rechercher</button>
    </form>
  </div>
</template>

<style>
.search-box {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.SearchVol {
  display: flex;
  align-items: center;
}

.form-rowSearchVol {
  padding: 1 rem;
}

.rechercher-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  justify-self: center;
  align-self: flex-end;
  margin-top: 20px;
}
</style>