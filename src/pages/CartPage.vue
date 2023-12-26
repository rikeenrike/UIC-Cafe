<script setup>
import { UserOrder, UserOngoingOrder } from "../db/dummy_data.js";
import router from '../router';
import { ref, computed } from "vue";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();
const toast = useToast();
const order = ref(UserOrder);
const orderOngoing = ref(UserOngoingOrder);
const Payment = ref(null);

const increaseQuantity = (item) => {
  item.quantity += 1;
  console.log(item.quantity);

  updateTotal();
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity -= 1;
    console.log(item.quantity);
    updateTotal();
  }
};

const updateTotal = () => {
  // Recalculate the total for each item
   order.value.forEach((item) => {
    item.total = item.quantity * item.price;
  });
};

const calculateTotal = computed(() => {
  // Sum up the total for all items
  return order.value.reduce((sum, item) => sum + item.total, 0);
});

const deleteitem = (item) => {
  const index = order.value.indexOf(item);
  order.value.splice(index, 1);
  console.log(order.value);
};

const checkBasket = () => {
  if (order.value.length > 0) {
    if(Payment.value !== null){
    confirm1();
  }else{
    toast.add({ severity: 'error', summary: 'Payment Method not selected!', detail: 'Please select a payment method.', group:'bc', life: 2000 });
  }
}else{
  toast.add({ severity: 'error', summary: 'Basket is empty!', detail: 'Please select a drink first.', group:'bc', life: 2000 });
}
};

const AddtoOngoingOrder = () => {
  const newId = orderOngoing.value.length > 0 ? Math.max(...orderOngoing.value.map((c) => c.id)) + 1 : 1;
  const newOrder = {
    id: newId,
    items: order.value,
    total: calculateTotal.value,
    payment: Payment.value,
    status: "Pending",
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
  };
  orderOngoing.value.push(newOrder);
  console.log(orderOngoing.value);

  // Clear the order array
  order.value = [];
  router.push('/cart/confirmed');
};

const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            AddtoOngoingOrder();
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};


</script>

<template>
  <div class="page">
    <Toast position="bottom-center" group="bc"></Toast>
    <ConfirmDialog></ConfirmDialog>
    <div class="nav">
      <Button @click="router.push('/menu');" label="Back to Menu" icon="pi pi-chevron-left" size="normal" style="font-size: 1.2rem" text/>
    </div>
    <div class="items-container">
      <div class="items">
      <Card v-for="card in UserOrder" :key="card.id" >
        <template #content>
          <img alt="user header" src="../assets/coffeeimg.webp" class="imgitem" />
          <div class="maintexts">
            <h3 class="itemname">{{ card.name }} </h3>
            <div class="itemprice">
              <p>₱ {{ card.price }} | 1x</p>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="plusminus">

            <Button icon="pi pi-plus" rounded outlined aria-label="Filter"
             @click="increaseQuantity(card)"/>

             <h3>{{ card.quantity }}</h3>

            <Button icon="pi pi-minus" rounded outlined aria-label="Filter"
            @click="decreaseQuantity(card)"/>
          </div>
          <div class="subtotal">            
            <Button @click="deleteitem(card)" class="removebtn" label="Remove" severity="danger" />
            <p>Subtotal: ₱ {{ card.total }}  </p>
          </div>
          
        </template>
    </Card>
    </div>
    </div>
    
    <div class="ordersummary">
      <div class="titleheader">
        <h1>Order Summary</h1>
      </div>
      <div class="list2-container">
        <div class="itemlist" v-for="card in UserOrder" :key="card.id">
          <span class="name">{{card.name}}</span>
          <span> {{card.quantity}}x | ₱{{card.total }} </span>
        </div>
      </div>

      <Divider />
      <div class="total">
        <p>Total: ₱{{calculateTotal}}</p>
      </div>

      <div class="textpayment">
        <p>Select Payment Method</p>
      </div>

      <div class="options">
        <Button @click="Payment = 'Tally'" label="Tally" icon="pi pi-id-card" size="normal" style="font-size: 1.2rem" class="selectbtn"/>
        <Button @click="Payment = 'Cash'" label="Cash" icon="pi pi-wallet" size="normal" style="font-size: 1.2rem"  class="selectbtn"/>
      </div>
      
      <div class="confirmbtn">
      <Button @click="checkBasket();" class="mainconfbtn" label="Confirm Order" size="large" style="font-size: 1.2rem"/>
      </div>

    </div>
    
  </div>
</template>

<style scoped>
.p-divider-solid.p-divider-horizontal:before {
  border-top-style: solid !important;
  border-color: rgba(0,0,0,.87) !important; /* Replace #ff0000 with the color you want */
  border-width: 2px !important;
}
.page{
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  grid-template-rows: 0.12fr 1fr;
  grid-template-areas: 
    "nav ordersummary"
    "items ordersummary";
  height: 100vh;
}

.nav{
  grid-area: nav;
  background-color: #FFEDF3;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  
}

.items{
  grid-area: items;
  background-color: #FFEDF3;
  margin-left: 250px;
  margin-right: 250px;
  margin-top: 100px;
}

.ordersummary{
  grid-area: ordersummary;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 220px;
  padding-bottom: 110px;
  background-color: #FFBED3;
  display: flex;
  flex-direction: column;
  
}

.titleheader{
  font-size: 30px;
  color: #BC0000;
}

.titleheader h1{
  margin-right: 150px;
  margin-bottom: 50px;
}

.itemlist{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(0,0,0,.87);
}


.total{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: rgba(0,0,0,.87);
}

.textpayment{
  margin-bottom: 20px;
  margin-top: 25px;
  font-size: 20px;
  font-weight: 700;

}


.maintexts{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 2%;
}

.itemname{
  font-size: 25px;
  color: #BC0000;
  text-align: left;
  margin-bottom: 10px;
}

.itemprice{
  font-size: 15px;
  margin-right: auto;
  font-weight: 700;
}

.p-card {
  text-align: center;
  width: calc(33.33% - 20px); 
  min-width: 100%; 
  max-width: 400px; 
  height: auto;
  border-radius: 15px;
  background: #FFEDF3;
  box-shadow: 20px 20px 60px #d9c9cf;
  color: rgba(0, 0, 0, .87);
  margin: 10px;
}

:deep(.p-card-content, .p-card-title) {
  padding: 0px;
  margin: 0px;
}

:deep(.p-card-content) {
  padding-left: 20px;
  padding-right: 20px;  
  display: flex;
  align-items: center;
}

:deep(.p-card-footer) {
  padding-left: 20px;
  padding-right: 20px;  
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
}

.plusminus{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: auto;
}
.plusminus button {
  width: 30px;  /* Set the width of the button */
  height: 30px !important; /* Set the height of the button */
}

.subtotal{
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  margin-left: auto;
  display: flex;
  align-items: center;
}

.subtotal button {
  margin-right: 10px;
}

.imgitem{
  width: 50%;
  height: 150px;
  object-fit: cover;
  border-radius: 25px;
  margin-top: 10px ;
}

.options{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  gap: 10px;
}

.selectbtn{
  width: 50%;
  border-color: #ffb4cb;
  color: rgba(0,0,0,.87);
}

.confirmbtn{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  
}
.mainconfbtn{
  width: 100%;
  border-color: #ffb4cb;
  background-color: #F55E8C;
  color: #ffffff;
  margin-top: 20px;
}



.list2-container{
  overflow-y: auto;
}

.items-container,
.list2-container {
  overflow-y: auto;
}

/* Customize the scrollbar to match the theme of your website */
.items-container::-webkit-scrollbar,
.list2-container::-webkit-scrollbar {
  width: 10px;
}

.items-container::-webkit-scrollbar-track,
.list2-container::-webkit-scrollbar-track {
  background: #FFEDF3; /* Dark color for the track */
}

.items-container::-webkit-scrollbar-thumb,
.list2-container::-webkit-scrollbar-thumb {
  background: #F55E8C; /* Lighter color for the thumb */
}

.items-container::-webkit-scrollbar-thumb:hover,
.list2-container::-webkit-scrollbar-thumb:hover {
  background: #FFBED3; /* Even lighter color for the hover effect */
}



</style>