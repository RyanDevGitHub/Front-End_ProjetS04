<script setup lang="ts">
import FormVol from '../components/FormVol.vue';
import CartVolAdmin from "@/components/CartVolAdmin.vue";
import { useFlightStore } from '@/stores/VolStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { onMounted } from 'vue';

export interface VolType {
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
const flightStore = useFlightStore();
const { flights } = storeToRefs(flightStore);
let vols = ref<VolType[]>([]);

onMounted(async function () {
    await CreateVol();
})


async function CreateVol() {
    const url = 'https://localhost:7232/api/Vols';
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log("Ok");
            if (response.status === 200) {
                console.log("GetVols successful");
                const result = await response.json();
                // for (let vol of result as VolType[]) {
                //     vols.value.push(vol);
                //     flights.value.push(vol);
                // }
                console.log(result);
                flights.value = result;
            } else if (response.status === 404) {
                console.log("Client not found");
            } else {
                console.log("Unexpected error occurred");

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
    <div class="grid-container">
        <div class="header">
            <h1>Bienvenue sur La Mode Admin Page</h1>
        </div>
        <div class="left-column">
            <div class="left-column-content">
                <h3>Latest Vol</h3>
                <div v-for="vol in flights">
                    <CartVolAdmin @CreateVol="CreateVol" v-bind:vol=vol></CartVolAdmin>
                </div>
            </div>
        </div>
        <div class="right-column">
            <FormVol @CreateVol="CreateVol"></FormVol>
        </div>
    </div>
</template>
  
  
<style>
.grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    grid-gap: 20px;
    text-align: center;
}

.header {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
}

.left-column {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: flex;
    justify-content: center;
}

.left-column-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.right-column {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.right-column FormVol {
    padding: 1rem;
}

@media screen and (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto 1fr;
    }

    .left-column {
        grid-column: 1 / -1;
        grid-row: 2 / 3;
    }

    .header {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
    }

    .right-column {
        grid-column: 1 / -1;
        grid-row: 3 / 4;
    }
}
</style>