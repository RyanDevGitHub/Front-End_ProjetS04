<script setup lang="ts">
import FormSearchVol from "@/components/FormSearchVol.vue";
import ProfileButton from "@/components/ProfileButton.vue";
import CartVol from "@/components/CartVol.vue";
import type { voltype } from "@/class/voltype";
import { ref, onMounted, defineProps } from "vue";
import { useRoute } from 'vue-router'
import { computed } from 'vue'


let display = ref(false);
let listvols: voltype[] = [];
function DisplayVol(vol: voltype): void {
  console.log("display vol");
  listvols.push(vol);
  console.log(listvols);
  display.value = true;
}
function ReservationVol(numerosvol: string) {
  //fetch pour crée une reservation avec le numerosdevol et l'id du client 

  //message pour  informer de la reservation
}

</script>

<template>
  <div class="container-ClientPage">
    <h1>Bienvenue sur La Mode Client Page</h1>
    <div class="ProfileButton">
      <ProfileButton></ProfileButton>
    </div>
    <div class="FormSearchVol">
      <FormSearchVol v-on:DisplayVol="DisplayVol"></FormSearchVol>
    </div>
    <div v-if="display" v-for="vol in  listvols " class="resut-search">
      <CartVol v-bind:vol="vol" v-on:ReservationVol="ReservationVol"></CartVol>
    </div>
  </div>
</template>
<style>
.container-ClientPage {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto 1fr;
  gap: 20px;
  margin: 20px;
}

h1 {
  grid-column: 2 / 3;
  text-align: center;
}

.ProfileButton {
  grid-column: 3;
  grid-row: 1;
  justify-self: end;
}

.FormSearchVol {
  grid-column: 2;
}

.SearchBox {
  grid-column: 2;

}

.resut-search {
  grid-column: 2;
  grid-row: 4;
}
</style>