<template>
    <ion-page>
        <ion-content :fullscreen="true" class="background">
            <ion-header collapse="condense">
                <ion-toolbar>
                <ion-title size="large">Blank</ion-title>
                </ion-toolbar>
            </ion-header> 
        <div>
            <!-- Header -->
            <ion-img :src="'/assets/homepage/logo.png'" id="logo"/>
            <ion-list-header id="font">
                <ion-icon name="search-outline" style="color: white; font-size: 13px"></ion-icon>
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/home')">MAIN MENU</a> 
                <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 13px"></ion-icon>
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/makeup')">MAKE UP</a>
                <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 13px"></ion-icon>
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">LIPS</a> 

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/makeup')" style="width: 35px; float: right; right: 8px; position: absolute"/>
            </ion-list-header>
            <!-- Header -->

            <div style="text-align: center; margin-top: 10px; color: white">
            <ion-slides pager="false" :options="slideOpts">
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">CHUBBY LIPSTICK</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For lips/1.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,300</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This innovative Chubby Lip Pencil instantly takes any look to the next level, making your lips appear lush and plump with a charming velvety matte finish.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">LIP GLOSS</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For lips/2.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This lip gloss provides an unforgettable shimmer and radiance while adding depth and shine to the lips.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">LIP PENCIL</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For lips/3.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">The soft texture defines and outlines while preventing lipstick and gloss from smudging.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">LIP ESSENTIALS - MATTE LIPSTICK</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For lips/4.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Enriched with natural oil to keep lips soft, moist, and protected. Provides a flawless matte finish.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV PURE LIP COLOR</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For lips/5.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This delicate pink color primer brightens the complexion, corrects uneven skin tone and dark spots appearance, helping your skin to stay flawless.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">LIP BALM</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For lips/6.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱6,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This specially designed lip formula combines lip balm and lipstick. The balm moisturizes while relieving chapped, dry lips and protecting them from moisture loss.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
        
            </ion-slides>  
        </div>
        <!-- Product -->
            
        </div>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { useRouter } from 'vue-router'

    export default defineComponent({
        name: 'Makeup',
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