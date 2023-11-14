<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import router from '../router';

const toast = useToast();
const id = ref('');
const password = ref('');
const hasValidationError = ref(false);
const loading = ref(false);

const users = [
  { id: '1234', password: 'password123' },
  { id: '5678', password: 'testpass' },
  // Add more users as needed
];


const validate = () => {
  if (id.value === '' || password.value === '') {
    hasValidationError.value = true;
    toast.add({ severity: 'error', summary: 'Error!', detail: 'Provide proper input!', group:'bc', life: 5000 });
  } else {
    const user = users.find((user) => user.id === id.value && user.password === password.value);
    if(user){
      hasValidationError.value = false;
      toast.add({ severity: 'success', summary: 'Success!', detail: 'Login successful!', group:'bc', life: 5000 });
      setTimeout(() => {
        router.push('/menu');
      }, 2000);
    }else{
    hasValidationError.value = false;
    toast.add({ severity: 'error', summary: 'Error!', detail: 'Invalid credentials!', group:'bc', life: 5000 });
    }
  } 
};

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    validate();
  }, 2000);
};

</script>

<template>
<main>
    <div class="container"> 
        <Toast position="bottom-center" group="bc"></Toast>
        <header>
          <h1>UIC Cafe</h1>
          <p>a pre-ordering service, convenience for UIC personnel </p>
        </header> 
      <div class="login-container">
        <div class="login-box">
          <h6 class="login-text">Log in with your UIC account</h6>
          <InputText id="username" v-model="id" placeholder=" ID e.g. '1234'" />
          <Password class="userpass" v-model="password" inputId="password" placeholder=" Password" toggleMask :feedback="false"/>
          <Button id="login-b" type="button" label="Log in" icon="pi pi-sign-in" :loading="loading" @click="load" /> 
        </div>
      </div>
      <div class="footer">
        <img src="../assets/logo.png" alt="logo" />
        <p>UIC Cafe</p>
        <p>© 2021 UIC Cafe. All rights reserved.</p>
      </div>
    </div>
</main>

</template>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    padding: 0;
    padding-top: 50px;
    margin: 0 auto;
  }

header{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

.login-text {
  font-size: 15px;
  font-weight: 700;
  color: rgba(0,0,0,.87);
  margin: 5px auto;
  text-align: center;
}
 

.login-container, .login-box{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  gap: 5px;
}

.login-box {
  height: 40vh;
  width: clamp(350px, 90vw , 450px);
  border-radius: 50px;
  background: #FFEDF3;
  box-shadow:  20px 20px 60px #d9c9cf,
             -20px -20px 60px #ffffff;
}

.footer{
  display: flex;
  align-items: center;
  flex-direction: column;
}

#username, #login-b, :deep(.p-password-input){
  width: clamp(200px, 80vw , 400px);
  height: 60px;
  border-radius: 15px;
  font-weight: 700 ;
}

#username::placeholder , :deep(.p-password-input::placeholder) {
  opacity: 0.8;
  color: rgba(0,0,0,.87);
}

  </style>
