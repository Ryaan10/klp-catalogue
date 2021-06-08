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
            <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; width: 35%" @click="backToList()">24 KARAT GOLDEN HERO SERIES</a> 

            <ion-img :src="'/assets/homepage/backbutton.svg'" @click="backToList()"  style="width: 35px; float: right; right: 8px; position: absolute"/>
        </ion-list-header>
        <ion-grid>
            <ion-row style="color: white">
                <ion-col>
                    <div style="text-align: center; margin-top: 10px; color: white; z-index: -1">
                        <p style="font-family: MontserratR;">24 KARAT GOLDEN HERO MEGA MASK</p>
                        <ion-slides pager="false" :options="slideOpts" ref="mySlides">
                            <ion-slide>
                                <div>
                                    <ion-img :src="'/assets/SKIN CARE CATEGORY/24 KARAT GOLDEN HERO SERIES/24 KARAT GOLDEN HERO MEGA MASK_150000.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px;"/>
                                </div>
                            </ion-slide>
                        </ion-slides>  
                        <p style="font-family: BodoniR;">₱150,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This 24K gold Mega Mask, provides a deep cleansing and extensive nourishment to increase the elasticity, firmness, radiance and vitality of the facial skin.</p>
                        <!-- <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                        <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE:</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">On a dry skin, apply an even layer all over the face with the spatula while carefully avoiding the eye area and wait for 20 seconds. Wrap the magnet with a tissue and glide it gently over the facial skin (barely touching it) to completely remove the mask while leaving only the golden veil (the serum). Massage your skin for 2-3 minutes and rinse with warm water. Recommended usage: Once a week at least 30 min before bed time.</p>
                    </div>
                </ion-col>
            </ion-row>
        </ion-grid>
    
       </div>
      </ion-content>
 </ion-page>
</template>
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'Skin24GoldItem4',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
        IonSlides,
        IonSlide
    },
    setup() {
        const router = useRouter(); 

        const mySlides = ref<any>(null)

        const slideOpts = {
            initialSlide: 0,
            speed: 400,
        };        

        onMounted(() => {
            console.log(mySlides)
        })

        const nextSlide = async () =>{
            const s = await mySlides?.value?.$el.getSwiper()
            await s.slideNext();
        }

        const prevSlide = async () =>{
            const s = await mySlides?.value?.$el.getSwiper()
            await s.slidePrev();
        }


        return { router, slideOpts, mySlides, prevSlide, nextSlide };
    },

    methods:{
        backToList() {
            this.$router.push({name: "skin24gold"})
        },
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
        font-size: 18px;
        font-family: 'Times New Roman', Times, serif;
    }
    .a{
        font-family: 'Times New Roman', Times, serif;
    }
    #product {
        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
    }    
</style>