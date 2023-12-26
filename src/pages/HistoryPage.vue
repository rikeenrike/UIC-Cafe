<script setup>
import { ref } from 'vue';
import { UserOrder, UserOngoingOrder, UserOrderHistory } from '../db/dummy_data.js';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const confirm = useConfirm();
const UserOngoing= ref(UserOngoingOrder);
const UserHistory = ref(UserOrderHistory);

const CancelOrder = (item) => {
    const index = UserOngoing.value.findIndex(order => order.id === item.id);
    if (index > -1) {
        UserOngoing.value[index].status = 'Cancelled';
        UserHistory.value.push(UserOngoing.value[index]);
        UserOngoing.value.splice(index, 1);
    }
    console.log(UserOngoing.value);
};

const confirmcancel = (item) => {
    confirm.require({
        message: 'Are you sure you want to cancel this order?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            CancelOrder(item);
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

</script>

<template>
    <div class="main-content">
        <div class="main-container">
            <ConfirmDialog></ConfirmDialog>
            <Toast position="bottom-center" group="bc"></Toast>
            <div class="ongoing-container">
                <h2><i class="pi pi-clock" style="font-size: 1.4 rem; color: rgb(0, 185, 0)"/> Ongoing</h2>
                <Card v-for="items in UserOngoing" :key="items.id" v-if="UserOngoing.length > 0">
                    <template #title> Status: {{ items.status }} </template>
                    <template #content>
                        <div class="main-card-container">
                        <div class="details-container">
                            <h3>Details: </h3>
                            <p>Time of Purchase: {{items.time}}</p>
                            
                            <p>Mode of Payment: {{items.payment}}</p>
                            <p>Status: {{items.status}}</p> 
                        </div>
                        <div class="itemsordered-container">
                            <h3>Items: </h3>
                            <div v-for="item in items.items" :key="item.id" class="items">
                                <p>{{item.name}}</p>
                                <p>| {{item.quantity}}x | ₱{{item.total}}</p>
                           </div>
                           <p class="items total">Total Payment: {{items.total}}</p>    
                        </div>
                        </div>
                    </template> 
                    <template #footer>
                        <div style="width: fit-content;" v-tooltip="items.status === 'Ongoing' ? 'This button is disabled because the order status is Ongoing.' : ''">
                            <Button @click="confirmcancel(items);" label="Cancel Order" icon="pi pi-exclamation-circle" 
                            iconPos="right" style="background-color: brown;" :disabled="items.status === 'Ongoing'"/>
                          </div>
                    </template>
                </Card>
                <h1 v-else style="text-align:center">No Ongoing orders</h1>
            <Divider /> 
            </div>
            

            <div class="recents">
                <h2><i class="pi pi-history" style="font-size: 1.4 rem; color: rgb(255, 73, 73)"/> Order History </h2>
                
                <Card v-for="items in UserHistory" :key="items.id">
                    <template #title> {{ items.date }} </template>
                    <template #content>
                        <div class="main-card-container">
                        <div class="details-container">
                            <h3>Details: </h3>
                            <p>Time of Purchase: {{items.time}}</p>
                            
                            <p>Mode of Payment: {{items.payment}}</p>
                            <p>Status: {{items.status}}</p> 
                        </div>
                        <div class="itemsordered-container">
                            <h3>Items: </h3>
                            <div v-for="item in items.items" :key="item.id" class="items">
                                <p>{{item.name}}</p>
                                <p>| {{item.quantity}}x | ₱{{item.total}}</p>
                           </div>
                           <p class="items total">Total Payment: {{items.total}}</p>    
                        </div>
                        </div>
                    </template> 
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped>
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid !important;

}
.main-container{
    margin-left: 500px;
    margin-right: 400px;
}
.ongoing-container{
    margin-bottom: 50px;
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
.items{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: 500;
    color: rgba(0,0,0,.87);
}
.items total{
    text-align: right;
}
.main-card-container{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-left: 2%;
    text-align: left;
}
</style>