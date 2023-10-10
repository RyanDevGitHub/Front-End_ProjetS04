<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
const props = defineProps<{ vol: object }>();
let emit = defineEmits(['ReservationVol']);
function ReservVol() {
    emit('ReservationVol',);
}
</script>

<template>
    <div class="card">
        <div class="data-vol">
            <div class="flight-number">Vol #123</div>
            <div class="seats-available">Places disponibles : 25</div>
        </div>
        <div class="flight-time">
            <div class="departure-time">Départ : 10h00</div>
            <div class="arrival-time">Arrivée : 14h30</div>
            <div class="flight-duration">Durée du vol : 4h30</div>
        </div>
        <button class="book-button" @click="() => ReservVol()"> Réserver </button>
    </div>
</template >

<style>
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space - between;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.departure-time,
.arrival-time {
    font-size: 20px;
    font-weight: bold;
}

.flight-duration {
    font-size: 16px;
}

.book-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}
</style>
                        