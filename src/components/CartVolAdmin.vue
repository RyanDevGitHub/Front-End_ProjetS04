<script setup lang="ts">
import { ref, defineProps } from 'vue';
import router from '../router/index';
type voltype = {
    numeroVol: string;
    villeDepart: string;
    villeArrivee: string;
    DateDepart: string;
    DateArriver: string;
    heureDepart: string;
    heureArrivee: string;
    idAvion: string;
    nombrePlaces: string;
}
const props = defineProps<{ vol: voltype }>();
const emit = defineEmits(['CreateVol']);
async function deleteVol(numeroVol: string) {
    const url = 'https://localhost:7232/api/Vols/' + numeroVol;
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log("Ok");
            if (response.status === 200) {
                console.log("Delete successful");
                emit("CreateVol")
            } else if (response.status === 404) {

            } else {

            }

        } else {
            // Gérer les erreurs HTTP
        }
    } catch (error) {
        // Gérer les erreurs de connexion ou de traitement de la réponse
        console.error(error);
    }
}

const updateVol = () => {
    //router.push('/EditVol');
    router.push({ name: 'EditVolView', params: { username: 'eduardo' } })
}
</script>

<template>
    <div class="card">
        <div class="data-vol">
            <div class="flight-number">Vol #{{ props.vol.numeroVol }}</div>
            <div class="seats-available">Places disponibles : {{ props.vol.nombrePlaces }}</div>
        </div>
        <div class="flight-time">

            <div class="arrival-time">Départ : {{ props.vol.villeDepart }} {{ props.vol.DateArriver }} {{
                props.vol.heureDepart }}</div>
            <div class="departure-time">Arrivé : {{ props.vol.villeArrivee }} {{ props.vol.DateArriver }} {{
                props.vol.heureArrivee }}</div>
        </div>
        <div>
            <button class="update-button" @click="updateVol">Mettre à jour</button>
            <button class="delete-button" @click="deleteVol(props.vol.numeroVol)">Supprimer</button>
        </div>
    </div>
</template>

<style>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    margin: 20px;
}

.flight-number {
    font-size: 24px;
    font-weight: bold;
    margin-right: 20px;
}

.seats-available {
    font-size: 18px;
}

.flight-time {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 10px;
}

.departure-time,
.arrival-time {
    font-size: 10px;
    font-weight: bold;
    padding: 1rem;
}

.flight-duration {
    font-size: 10px;
}

.update-button,
.delete-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

.delete-button {
    background-color: #dc3545;
    margin-left: 10px;
    margin: 1rem;
}
</style>
