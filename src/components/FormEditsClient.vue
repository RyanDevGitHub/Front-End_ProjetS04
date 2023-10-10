<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';
import type { client } from "../class/client"
import router from '@/router';
const props = defineProps<{ session: string }>();
let lastName = ref("");
let tel = ref("");
let email = ref("");
let passportNumber = ref("");
let firstName = ref("");
let address = ref("");
let birthday = ref("");

onMounted(async function () {
  const url = 'https://localhost:7232/api/Clients/' + props.session;
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      console.log("Ok");
      if (response.status === 200) {
        console.log("Get successful");
        const result: client = await response.json();
        console.log(result["firstName"]);
        console.log(result);
        lastName.value = result["lastName"];
        tel.value = result["tel"];
        email.value = result["email"];
        passportNumber.value = result["passportNumber"];
        firstName.value = result["firstName"];
        address.value = result["address"];
        const date = new Date(result['birthday']);
        const formattedDate = date.toISOString().slice(0, 10);
        birthday.value = formattedDate;
      } else if (response.status === 404) {
        console.log("error 404 not found")
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
})
async function ChangeProfil(firstName: string, lastName: string, address: string, email: string, tel: string, birthday: string, passportNumber: string) {
  const url = 'https://localhost:7232/api/Clients/' + props.session;
  const data = { lastName: lastName, firstName: firstName, tel: tel, address: address, email: email, birthday: birthday, passportNumber: passportNumber };
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
        console.log("UpdateUser successful");
        router.push("/MonProfil");
      } else if (response.status === 404) {
        console.log("Client not found");

      } else {
        console.log("Unexpected error occurred");
      }

    } else {
    }
  } catch (error) {
    // Gérer les erreurs de connexion ou de traitement de la réponse
    console.error(error);
  }
}
</script>

<template>
  <form @submit.prevent="ChangeProfil(firstName, lastName, address, email, tel, birthday, passportNumber)">
    <div class=" form-row">
      <div class="form-column">
        <label for="nom">lastName :</label>
        <input type="text" id="nom" name="nom" required v-model="lastName">
        <label for=" telephone">Téléphone :</label>
        <input type="tel" id="telephone" name="telephone" required v-model="tel">
        <label for="email">email :</label>
        <input type="email" id="email" name="email" required v-model="email">
        <label for="passport">Numéro de Passport :</label>
        <input type="text" id="passport" name="passport" required v-model="passportNumber">
      </div>
      <div class="form-column">
        <label for="prenom">firstName :</label>
        <input type="text" id="prenom" name="prenom" required v-model="firstName">
        <label for="adresse">address :</label>
        <input type="text" id="adresse" name="adresse" required v-model="address">
        <label for="date_naissance">Date de naissance :</label>
        <input type="date" id="date_naissance" name="date_naissance" required v-model="birthday">
      </div>
    </div>
    <button type="submit" class="enregistrer-button">Enregistrer</button>
  </form>
</template>


<style>
.form-row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

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

.enregistrer-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  float: right;
  margin-top: 10px;
}
</style>
