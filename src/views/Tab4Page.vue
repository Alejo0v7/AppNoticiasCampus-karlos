<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Panel Administrativo</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Panel Administrativo</ion-title>
          </ion-toolbar>
        </ion-header>
  
        <ion-accordion-group expand="inset">

            <ion-accordion value="first">
            <ion-item slot="header" color="light">
                <ion-label>Usuarios y roles</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
                <ion-button>Gestionar Usuarios</ion-button>
                <ion-button>Gestionar Roles</ion-button>
            </div>
            </ion-accordion>
            <ion-accordion value="second">
            <ion-item slot="header" color="light">
                <ion-label>Noticias y eventos</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
                <ion-button>Gestionar Categorias</ion-button>
                <ion-button>Gestionar Tipos de Publicación</ion-button>
                <ion-button>Gestionar Publicaciones</ion-button>
            </div>
            </ion-accordion>

        </ion-accordion-group>

      </ion-content>
    </ion-page>
  </template>
  
<script >
import { 
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent ,
    IonAccordion, IonAccordionGroup, IonItem, IonLabel,
    IonButton 
} from '@ionic/vue';
export default {
name:'Tab4Page',
components:{
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonAccordion, IonAccordionGroup, IonItem, IonLabel,
    IonButton 
}
}
</script>
  