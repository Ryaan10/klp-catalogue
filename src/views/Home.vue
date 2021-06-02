<template>
    <ion-page>
        <!-- <ion-header :translucent="true">
        <ion-toolbar>
            <ion-title>Blank</ion-title>
        </ion-toolbar>
        </ion-header> -->
        
        <ion-content :fullscreen="true" class="background">
            <div>
                <ion-img :src="'/assets/homepage/logo.png'" id="logo"/>
                <ion-img :src="'/assets/homepage/banner.jpg'" />

                <ion-img :src="'/assets/homepage/menu text.jpg'" id="category"/>
                <ion-img :src="'/assets/main category/category1.jpg'" id="category" router-link="/makeup"/>
                <ion-img :src="'/assets/main category/category2.jpg'" id="category"/>
                <ion-img :src="'/assets/main category/category3.jpg'" id="category"/>
                <ion-img :src="'/assets/main category/category4.jpg'" id="category"/>
                <ion-img :src="'/assets/main category/category5.jpg'" id="category"/>
                <ion-img :src="'/assets/main category/category6.jpg'" id="category" style="margin-bottom: 10px"/>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonContent, IonPage, IonImg } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Home',
        components: {
            IonContent,
            IonPage,
            IonImg
        }
    });
</script>
<style scoped>
    ion-content.background{
        --background: url('/assets/background.jpg') 0 0/100% 100% no-repeat;
    }
    #category{
        padding: 5px;
    }
    #logo{
        height: 150px;
    }
    #container {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    #container strong {
        font-size: 20px;
        line-height: 26px;
    }
    #container p {
        font-size: 16px;
        line-height: 22px;
        color: #8c8c8c;
        margin: 0;
    }
    #container a {
        text-decoration: none;
    }
</style>