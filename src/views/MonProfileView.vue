<script setup lang="ts">
import { client } from "@/class/client";
import CartVol from "../components/CartVol.vue";
import FormClient from "@/components/FormEditsClient.vue";
import MenuClient from "@/components/MenuClient.vue";
import ProfileButton from "@/components/ProfileButton.vue";
import router from "@/router";
import { ref, onMounted } from "vue";

let my_reservations = ref(false);
let my_profil = true;
let session = "644fc976f63ac830c834a27f";
let listvols: any[] = [];
let profil = ref<client>(new client("", "", "", "", "", "", ""));


function ChangeOnglet(onglet: string) {
    if (onglet.length == 10) {

        my_profil = true;
        my_reservations.value = false;
    } else if (onglet.length == 16) {

        my_reservations.value = true;
        GetReservationUser();
        my_profil = false;
    }
}


async function DeleteAccount() {
    const url = 'https://localhost:7232/api/Clients/' + session;
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

            } else if (response.status === 404) {

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
    //Delete session

    //return to main page 
    router.push("/");
}

function GetReservationUser() {
    //get list of reservation

    //get all voll with numerosvol of reservation

}

</script>

<template>
    <div class="conteneur-MonProfil">
        <div class="Title-MonProfil">
            <h1>Titre de la section</h1>
        </div>

        <MenuClient id="menuclient" v-on:ChangeOnglet="ChangeOnglet" v-on:DeleteAccount="DeleteAccount"></MenuClient>
        <div class="ProfilButton">
            <ProfileButton id="profilbutton">
            </ProfileButton>
        </div>

        <div v-if="my_profil == true" class="FormClient">
            <FormClient v-bind:session="session" id="formclient"></FormClient>
        </div>
        <div v-if="my_reservations == true" v-for="vol in listvols" class="CartVol">
            <CartVol v-bind:vol="vol" id="cartvol">
            </CartVol>

        </div>

    </div>
</template>
<style>
.conteneur-MonProfil {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    height: 100%;
}

.ProfilButton {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
}

.Title-MonProfil {
    grid-column: 2;
    grid-row: 1;
}

#profilbutton {
    grid-column: 3;
    grid-row: 1;
}

#formclient {
    grid-column: 2;
    grid-row: 2;
}

.CartVol {
    grid-column: 2;
    grid-row: 2;
}

#menuclient {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 4;
}
</style>