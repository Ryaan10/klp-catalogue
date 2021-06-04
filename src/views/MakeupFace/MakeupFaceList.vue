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
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">FACE</a>

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/makeup')" style="width: 35px; float: right; right: 8px; position: absolute"/>
            </ion-list-header>

            <ion-grid>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/21.jpg'" @click="() => router.push('/MakeupFaceItem1')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">Bronzer Mosaico<br><br>₱9,600</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/22.jpg'" @click="() => router.push('/MakeupFaceItem2')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">One & Only Primer Super Soft Skin<br>₱9,600</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/23.jpg'" @click="() => router.push('/MakeupFaceItem3')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">One & Only Primer SuperEven Better<br>₱9,600</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/24.jpg'" @click="() => router.push('/MakeupFaceItem4')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV Cover Stick<br>₱5,500</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/25.jpg'" @click="() => router.push('/MakeupFaceItem5')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV Perfect Selfie Liquid Foundation matte<br>₱9,600</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/26.jpg'" @click="() => router.push('/MakeupFaceItem6')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">Higilighter Rainbow Melange<br>₱9,000</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/27.jpg'" @click="() => router.push('/MakeupFaceItem7')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">Loose Powder<br>₱4,000</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/28.jpg'" @click="() => router.push('/MakeupFaceItem8')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">FTV Finishing Powder<br>₱9,600</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/30.jpg'" @click="() => router.push('/MakeupFaceItem9')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">Liquid Concealer<br>₱5,000</ion-card-content>
                    </ion-col>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/31.jpg'" @click="() => router.push('/MakeupFaceItem10')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">Cream Compact Foundation<br>₱9,500</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/32.jpg'" @click="() => router.push('/MakeupFaceItem11')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">Blush Multicolor<br>₱9,000</ion-card-content>
                    </ion-col> 
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/33.jpg'" @click="() => router.push('/MakeupFaceItem12')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">Mono Blush<br>₱9,000</ion-card-content>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col style="text-align: center;">
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/34.jpg'" @click="() => router.push('/MakeupFaceItem13')"/>
                        <ion-card-content style="padding: 9px; background-color: black; color: white; font-size: 13px; border-style: solid; border-color: grey!important; border-width: 2px;">One & Only Primer Reduce<br>₱9,600</ion-card-content>
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