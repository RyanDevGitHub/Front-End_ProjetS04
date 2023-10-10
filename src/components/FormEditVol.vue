<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
let vol = router.currentRoute.value.params.vol;
console.log(vol);
let numerosvol = ref("");
let villeDepart = ref("");
let villeArriv = ref("");
let heure_depart = ref("");
let heure_arrivee = ref("");
let date_depart = ref("");
let date_arrivee = ref("");
let idAvion = ref("");
let nbPlace = ref("");

let UpdateSucces = ref(false);
async function UpdateVol(numerosdevol: string, villeDepart: string, villeArriv: string, date_depart: string, date_arrivee: string, heure_depart: string, heure_arrivee: string, idAvion: string, nbPlace: string) {
    const url = 'https://localhost:7232/api/Vols/' + numerosdevol;
    const data = { numeroVol: numerosdevol, villeDepart: villeDepart, villeArrivee: villeArriv, DateDepart: date_depart, DateArriver: date_arrivee, heureDepart: heure_depart, heureArrivee: heure_arrivee, idAvion: idAvion, nombrePlaces: nbPlace };
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log("Ok");
            if (response.status === 200) {
                console.log(" Vol Update");
                UpdateSucces = ref(true);
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

function BackToModeAdmin() {
    router.push("/ModeAdmin");
}
</script>

<template>
    <div v-if="UpdateSucces">
        <H1>Update Succes</H1>
    </div>
    <form @submit.prevent="UpdateVol(numerosvol, villeDepart, villeArriv, date_depart, date_arrivee, heure_depart,
            heure_arrivee, idAvion, nbPlace)">
        <div class=" form-row">
            <div class="form-column">
                <label for="nbvol">Numero de vol :</label>
                <input type="text" id="nbvol" name="nbvol" required v-model="numerosvol">
                <label for="villeDepart">ville de Depart :</label>
                <input type="text" id="villeDepart" name="villeDepart" required v-model="villeDepart">
                <label for="villeArriv">ville d'Arrivée :</label>
                <input type="text" id="villeArriv" name="villeArriv" required v-model="villeArriv">
                <label for="DateDepart">Date de Depart :</label>
                <input type="date" id="DateDepart" name="HeureDepart" required v-model="date_depart">
                <label for="DateArriv">Date d'Arrivée :</label>
                <input type="date" id="DateArriv" name="DateArriv" required v-model="date_arrivee">

            </div>
            <div class="form-column">
                <label for="HeureDepart">Heure de Depart :</label>
                <input type="time" id="HeureDepart" name="HeureDepart" required v-model="heure_depart">
                <label for="HeureArriv">Heure d'Arrivée :</label>
                <input type="time" id="HeureArriv" name="HeureArriv" required v-model="heure_arrivee">
                <label for="idAvion">Identifient de l'avion :</label>
                <input type="text" id="idAvion" name="idAvion" required v-model="idAvion">
                <label for="nbPlace">Nombre de Place :</label>
                <input type="text" id="nbPlace" name="nbPlace" required v-model="nbPlace">
            </div>
        </div>
        <button type="submit" class="ajouterVol-button"
            @click="() => UpdateVol(numerosvol, villeDepart, villeArriv, date_depart, date_arrivee, heure_depart, heure_arrivee, idAvion, nbPlace)">Modifier
            le vol</button>
    </form>
    <button @click="() => BackToModeAdmin()">BACK
    </button>
</template>

<style>
.form-row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 - 10px;
    padding: 5rem;

}

.form-column {
    flex-basis: 50%;
    box-sizing: border-box;
    padding: 1rem;
}

.form-column label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-column input[type="text"],
.form-column input[type="tel"],
.form-column input[type="email"],
.form-column input[type="date"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;

}

.ajouterVol-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    float: right;
    margin-top: -50px;
    margin-right: 70px;
}
</style>
