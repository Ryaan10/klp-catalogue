<template>
    <ion-page>
        <ion-content :fullscreen="true" class="background">
            <ion-header collapse="condense">
                <ion-toolbar>
                <ion-title size="large">Blank</ion-title>
                </ion-toolbar>
            </ion-header>
        <div>
            <ion-img :src="'/assets/homepage/logo.png'" id="logo"/>
            <ion-list-header id="font">
                <ion-icon name="search-outline" style="color: white; font-size: 13px"></ion-icon>
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/home')">MAIN MENU</a> 
                <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 13px"></ion-icon>
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/makeup')">MAKE UP</a>
                <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 13px"></ion-icon>
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">EYES</a>

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/makeup')" style="width: 35px; float: right; right: 8px; position: absolute"/>
            </ion-list-header>

            <ion-grid>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/SOLO SATIN EYE SHADOW_4800.jpg'" @click="() => router.push('/MakeupEyesItem1')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">SOLO SATIN EYE SHADOW<br>₱4,800</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/MULTICOLOR EYE SHADOW_5500.jpg'" @click="() => router.push('/MakeupEyesItem2')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">MULTICOLOR EYE SHADOW<br>₱5,500</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/MULTICOLOR EYE SHADOW (other available).jpg'" @click="() => router.push('/MakeupEyesItem3')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">MULTICOLOR EYE SHADOW<br>₱5,500</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/FLOWER PALETTE_8800.jpg'" @click="() => router.push('/MakeupEyesItem4')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">FLOWER PALETTE<br>₱8,800</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/TRIANGLE PALLETTE_8800.jpg'" @click="() => router.push('/MakeupEyesItem5')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">TRIANGLE PALLETTE<br>₱8,800</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/BUBBLE PALLETTE_8800.jpg'" @click="() => router.push('/MakeupEyesItem6')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">BUBBLE PALLETTE<br>₱8,800</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/SHINING LOOSE EYE SHADOW_6000.jpg'" @click="() => router.push('/MakeupEyesItem7')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">SHINING LOOSE EYE SHADOW<br>₱6,000</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/EYE PENCIL_3500.jpg'" @click="() => router.push('/MakeupEyesItem8')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">EYE PENCIL<br>₱3,500</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/EYE LINER_5500.jpg'" @click="() => router.push('/MakeupEyesItem9')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">EYE LINER<br>₱5,500</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/VOLUME MASCARA_6000.jpg'" @click="() => router.push('/MakeupEyesItem10')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">VOLUME MASCARA<br>₱6,000</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/LONG LASH MASCARA SILICONE BLACK_6000.jpg'" @click="() => router.push('/MakeupEyesItem11')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px; display: flex; align-items: center; justify-content: center; height: 80px;">LONG LASH MASCARA SILICONE BLACK<br>₱6,000</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                    </ion-col>
                </ion-row>
            </ion-grid>
        </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { useRouter } from 'vue-router'

    export default defineComponent({
        name: 'MakeupList',
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar
        },
        setup() {
            const router = useRouter();
            return { router };
        },
        methods:{
            goToPage(id: number) {
                this.$router.push({name: "MakeupFace", params: {id: id}})
            }
        }
       
    });
       
</script>
<style scoped>
    ion-content.background{
        --background: url('/assets/background.jpg') 0 0/100% 100% no-repeat;
    }
    #grid{
        color: white;
    }
    #logo{
        height: 150px;
    }
    #font{
        font-size: 12px;
    }
    #label{
        color: white;
        font-size: 20px;
        padding-left: 15px;
        padding-bottom: 5px;
    }
    #category{
        color: white;
        text-align: center;
        font-size: 19px;
        font-family: 'Times New Roman', Times, serif;
    }
</style>