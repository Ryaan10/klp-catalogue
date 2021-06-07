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
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/skincare')">SKIN CARE</a>
                <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 13px"></ion-icon>
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">LUXURIANT CRYSTALS SERIES</a>

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/skincare')" style="width: 35px; float: right; right: 8px; position: absolute"/>
            </ion-list-header>

            <ion-grid>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/SKIN CARE CATEGORY/LUXURIANT CRYSTALS SERIES/LUXURIANT CRYSTALS CREAMY FACIAL SOAP_7000.jpg'" @click="() => router.push('/skinluxuriantItem1')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">LUXURIANT CRYSTALS CREAMY FACIAL SOAP<br>₱7,000</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/SKIN CARE CATEGORY/LUXURIANT CRYSTALS SERIES/LUXURIANT CRYSTALS FACIAL SERUM_20000.jpg'" @click="() => router.push('/skinluxuriantItem2')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">LUXURIANT CRYSTALS FACIAL SERUM<br>₱20,000</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/SKIN CARE CATEGORY/LUXURIANT CRYSTALS SERIES/LUXURIANT CRYSTALS HYDRA FOUNTAIN CAPSULES_50000.jpg'" @click="() => router.push('/skinluxuriantItem3')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">LUXURIANT CRYSTALS HYDRA FOUNTAIN CAPSULES<br>₱50,000</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/SKIN CARE CATEGORY/LUXURIANT CRYSTALS SERIES/LUXURIANT CRYSTALS HYDRATION MASK_50000.jpg'" @click="() => router.push('/skinluxuriantItem4')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">LUXURIANT CRYSTALS HYDRATION MASK<br>₱50,000</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/SKIN CARE CATEGORY/LUXURIANT CRYSTALS SERIES/LUXURIANT CRYSTALS NON-STOP MOISTURE CREAM_15000.jpg'" @click="() => router.push('/skinluxuriantItem5')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">LUXURIANT CRYSTALS NON-STOP MOISTURE CREAM<br>₱15,000</ion-card-content>
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
        name: 'skincare',
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
                this.$router.push({name: "skinluxuriant", params: {id: id}})
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