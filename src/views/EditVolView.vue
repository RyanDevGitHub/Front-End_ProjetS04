<script setup lang="ts">
import FormEditVol from '@/components/FormeditVol.vue';

function UpdateVol(): void {
    
}
</script>
<template>
    <div class="grid-container">

        <h1>Modifier le Vol</h1>

        <div>
            <FormEditVol v-on:UpdateVol="UpdateVol"></FormEditVol>
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