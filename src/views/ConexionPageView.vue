<script setup lang="ts">
import FormLogin from "../components/FormLogin.vue";
import FormSignUp from "@/components/FormSign-Up.vue";
import router from "@/router";
import { ref, onMounted, onUnmounted } from 'vue';




function ChangeValue(want: string) {

    if (want == "wantlogin") {
        wantLogin = true;
    } else if (want == "wantsign") {
        wantLogin = false;
    }
}
function IsLogin(userId: string) {
    router.push({ name: 'ModeClient', params: { userId: "test" } })
}
function Sign(userId: string) {
    router.push({ name: 'ModeClient', params: { userId: "test" } })
}
let wantLogin = true;
</script>

<template>
    <div class="container">
        <h1>Bienvenue sur la page de connexion</h1>
        <div v-if="wantLogin == true">
            <FormLogin v-on:ChangeValue="ChangeValue" v-on:login="IsLogin"></FormLogin>
        </div>
        <div v-if="wantLogin == false">
            <FormSignUp v-on:ChangeValue="ChangeValue" v-on:sign="Sign"></FormSignUp>
        </div>
    </div>
</template>

<style>
html {
    width: 100%;
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
</style>
