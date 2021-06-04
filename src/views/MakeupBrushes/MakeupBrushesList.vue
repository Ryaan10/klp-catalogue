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
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">BRUSHES</a>

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/makeup')" style="width: 35px; float: right; right: 8px; position: absolute"/>
            </ion-list-header>

            <ion-grid>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BLENDING SPONGE_53.jpg'" @click="() => router.push('/MakeupBrushesItem1')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BLENDING SPONGE<br>₱4,300</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 1_68.jpg'" @click="() => router.push('/MakeupBrushesItem2')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.1 - POWDER <br>₱7,100</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BLUSH NO. 2_68.jpg'" @click="() => router.push('/MakeupBrushesItem3')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.2 - BLUSH<br>₱5,500</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 3_53.jpg'" @click="() => router.push('/MakeupBrushesItem4')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.3 - FOUNDATION<br>₱5,100</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 4 -CONCEALER_42.jpg'" @click="() => router.push('/MakeupBrushesItem5')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.4 - CONCEALER<br>₱3,400</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 5 - EYE SHADOW_45.jpg'" @click="() => router.push('/MakeupBrushesItem6')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.5 - EYE SHADOW<br>₱3,600</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 6 - EYE SHADOW BLENDING_48.jpg'" @click="() => router.push('/MakeupBrushesItem7')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.6 - EYE SHADOW BLENDING<br>₱3,900</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 7 EYE CONTOURING_43.jpg'" @click="() => router.push('/MakeupBrushesItem8')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.7 - EYE CONTOURING<br>₱3,500</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 8 - BROW_40.jpg'" @click="() => router.push('/MakeupBrushesItem9')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.8 - BROW<br>₱3,200</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 9 - LIP_40.jpg'" @click="() => router.push('/MakeupBrushesItem10')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.9 - LIP<br>₱3,200</ion-card-content>
                    </ion-col>
                </ion-row>
                 <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 10 - LASH & BROW COMB_68.jpg'" @click="() => router.push('/MakeupBrushesItem11')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.10 - LASH & BROW COMB<br>₱5,500</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 11 - LIQUID FOUNDATION_88.jpg'" @click="() => router.push('/MakeupBrushesItem12')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.11 - LIQUID FOUNDATION<br>₱7,100</ion-card-content>
                    </ion-col>
                </ion-row>
                 <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 12 FOUNDER COVER MORE_97.jpg'" @click="() => router.push('/MakeupBrushesItem13')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO.12 - POWDER COVER-MORE<br>₱7,800</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 14 CORRECT & DEFINE_48.jpg'" @click="() => router.push('/MakeupBrushesItem14')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV BRUSH NO. 14 - CORRECT & DEFINE<br>₱3,900</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/MAKE UP BRUSH CLEANER_42.jpg'" @click="() => router.push('/MakeupBrushesItem15')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV MAKEUP BRUSH CLEANSER<br>₱3,500</ion-card-content>
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