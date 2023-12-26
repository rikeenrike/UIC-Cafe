<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import { users } from "../db/dummy_data.js";
import router from '../router';


const toast = useToast();
const id = ref('');
const password = ref('');


const validate = () => {
  if (id.value === '' || password.value === '') {
    toast.add({ severity: 'error', summary: 'Error!', detail: 'Provide proper input!', group:'bc', life: 5000 });
  } else {
    const user = users.find((user) => user.id === id.value && user.password === password.value);
    if(user){
      toast.add({ severity: 'success', summary: 'Success!', detail: 'Login successful!', group:'bc', life: 5000 });
        router.push('/menu');
    }else{
    toast.add({ severity: 'error', summary: 'Error!', detail: 'Invalid credentials!', group:'bc', life: 5000 });
    }
  } 
};

</script>

<template>
<main>
    <div class="container"> 
        <Toast position="bottom-center" group="bc"></Toast>
        <div class="header">
          <header>
            <h1>UIC Cafe</h1>
            <p>order online & pick-up when ready!</p>
            <p>(DEVELOPMENT - PROTOTYPE)</p>
          </header> 
        </div>
      <div class="login-container">
        <div class="login-box">
          <InputText id="username" v-model="id" placeholder="ID e.g. '1234'" />
          <Password class="userpass" v-model="password" inputId="password" placeholder="Password" toggleMask :feedback="false" @keyup.enter="validate"/>
          <Button id="login-b" type="button" label="Log in" icon="pi pi-sign-in" @click="validate" /> 
        </div>
      </div>
      <div class="footer">
        <p>UIC Cafe</p>
        <p>© 2023 UIC Cafe. All rights reserved.</p>
      </div>
    </div>
</main>

</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
  grid-template-areas: 
    "header header header"
    "login-container login-container login-container"
    "footer footer footer";
  height: 100vh;
}

.header{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  grid-area: header;
}

.login-container{
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: login-container;
}

.footer{
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: footer;
}


h1 {
  font-size: clamp(50px, 18vw, 90px);
  font-weight: 900;
  color: rgba(0,0,0,.87);
  margin: 0 auto;
  text-align: center;
}

p{
  font-size: clamp(5px, 3vw, 15px);
  font-weight: 600;
  color: rgba(0,0,0,.87);
  margin: 3px auto;
  text-align: center;
}

.login-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 320px;
  width: clamp(350px, 80vw , 450px);

}

#username, #login-b, :deep(.p-password-input), :deep(.p-password-input::placeholder), #username::placeholder{
  width: clamp(200px, 80vw , 400px);
  height: clamp(45px, 10vw , 60px);
  font-weight: 700 ;
  opacity: 0.8;
  color: rgba(0,0,0,.87);
}
  </style>
