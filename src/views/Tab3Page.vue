<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ferfil</ion-title>
        </ion-toolbar>
      </ion-header>

      <h2>Perfil</h2>
      <!-- Componentes -->

    </ion-content>
  </ion-page>
</template>

<script >
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
export default {
  name:'Tab3Page',
  components:{
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent 
  }
}
</script>
