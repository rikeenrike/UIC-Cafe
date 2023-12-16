<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Notifications from '../pages/Notifications.vue';
import router from '../router';

const MainNavTab = ref('');
const visibleRight = ref(false);
const isScreenWide = ref(false);
const op = ref();

const tabstyle = (selectedTab) => {
  if (selectedTab.includes('/menu')) {
    MainNavTab.value = '1';
  } else if (selectedTab.includes('/bestsellers')) {
    MainNavTab.value = '2';
  } else if (selectedTab.includes('/about')) {
    MainNavTab.value = '3';
  }
};

const toggle = (event) => {
  op.value.toggle(event);
};

const checkScreenWidth = () => {
  isScreenWide.value = window.innerWidth < 680; 
};

onMounted(() => {
  window.addEventListener('resize', checkScreenWidth);
  checkScreenWidth();

  // Run tabstyle when the component is mounted
  tabstyle(router.currentRoute.value.path);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenWidth);
});
</script>


  <template>
      <nav>
          <img src="../assets/logo2.png" alt="logo" />
          <div class="sidenav" v-if="isScreenWide">
            <Button id="sidenav" icon="pi pi-bars" @click="visibleRight = true" />
              <Sidebar v-model:visible="visibleRight" header="Right Sidebar" position="right">
                <p>Content</p>
              </Sidebar>
          </div>
            <div class="maincontainer" v-else>
              <div class="tab-container" @click="tabstyle('/menu'); router.push('/menu');"  :class="{ active: MainNavTab === '1' }">
                <ul>MENU</ul>
              </div>

              <div class="tab-container" @click="tabstyle('/bestsellers'); router.push('/bestsellers');" :class="{ active: MainNavTab === '2' }">
                <ul>BEST SELLERS</ul>
              </div>

              <div class="tab-container" @click="tabstyle('/about');" :class="{ active: MainNavTab === '3' }">
                <ul>ABOUT</ul>
              </div>


              <div class="tab-container" @click="toggle">
                <ul>NOTIFICATION</ul>
              </div>
              <div class="logout">
                <Button icon="pi pi-sign-out" severity="danger" text rounded aria-label="Cancel"  @click = "router.push('/');"/>
              </div>
            </div>
            <div class="notif">
              <OverlayPanel ref="op" appendTo="body">
                <Notifications />
              </OverlayPanel>
            </div>
      </nav>
  </template>

  <style scoped>
  ul{
    padding: 0;
    margin: 0;
  }
  .maincontainer{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-left: 20px;
    gap: 20px;
  }

  .tab-container{
    font-size: larger;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    height: 100%;
    border-bottom: 4px solid transparent;
  }

  .tab-container.active{
      border-bottom-color: #FF4384;
    }

  .sidenav{
    margin-left: auto;
  }

  img{
      width: 90px;
      padding: 10px;
  }

  @media screen and (max-width: 650px) {
    img{
      width: 75px;
    }
    .sidenav{
      margin-left: auto;
    }
  }
  </style>