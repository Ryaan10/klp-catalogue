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
            <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="backToList()">LUXURIANT CRYSTALS SERIES</a> 

            <ion-img :src="'/assets/homepage/backbutton.svg'" @click="backToList()"  style="width: 35px; float: right; right: 8px; position: absolute"/>
        </ion-list-header>
        <ion-grid>
            <ion-row style="color: white">
                <ion-col>
                    <div style="text-align: center; margin-top: 10px; color: white; z-index: -1">
                        <p style="font-family: MontserratR;">FLASH WHITE PEARL PREMIUM CASE</p>
                        <ion-slides pager="false" :options="slideOpts" ref="mySlides">
                            <ion-slide>
                                <div>
                                    <ion-img :src="'/assets/SKIN CARE CATEGORY/SKINCARE PACKAGES/FLASH WHITE PEARL PREMIUM CASE_100000.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px;"/>
                                </div>
                            </ion-slide>
                        </ion-slides>  
                        <p style="font-family: BodoniR;">₱100,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">The FTV Flash White Pearl Premium Case brings the full range of the Flash White Pearl collections in an elegant suitcase. <br /><br />
                        THE SET INCLUDES:<br /><br />
                        
                        FTV Flash White Pearl Facial Serum <br />
                        FTV Flash White Pearl  Hydra Cream <br />
                        FTV Flash White Pearl  Facial Mask <br />
                        Peptide Eye Blessing Firmarvel Cream <br /><br />
</p>
                        <!-- <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                        <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE:</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">

                            <b>FTV Flash White Pearl Facial Serum:</b>
                            Gently massage the serum on a clean and dry face and neck until fully absorbed. Use daily. For best results, first clean your face with Freshwater Pearls Facial Cleaning Soap and after the serum follow by using Flash White Pearls Hydra Cream.
                            <br /><br />
                            <b>FTV Flash White Pearl  Hydra Cream:</b>
                            Apply an even layer onto dry and clean face and neck. Massage in until fully absorbed. Use daily.
                            <br /><br />
                            <b>FTV Flash White Pearl  Facial Mask:</b>
                            Apply an even layer onto dry and clean skin, carefully avoiding the eye area. Allow the purifying ingredients to work for 8-10 minutes. Remove thoroughly with lukewarm water, then rinse skin with cool water and pat dry. Use twice a week. For best results, follow by using Flash White Pearl Facial Serum.
                            <br /><br />
                            <b>Peptide Eye Blessing Firmarvel Cream:</b>
                            Prior to application, thoroughly cleanse your skin, making sure there are no traces of moisturizer, makeup or any other oily residues. Gently tap the product with your ring finger. Application should be performed directly to the under-eye area where puffiness and eye bags are located. Avoid any contact with the eyes. Do not rub and do not massage the cream. Allow the active ingredients to work for 5-8 minutes, during the wait keep your face expressionless. Do not rinse off. Avoid the use of any liquid skin care or makeup products, use only powder-based products
                            <br /><br />
                            
                        </p>
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
    name: 'skinpackagesItem3',
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
            this.$router.push({name: "skinpackages"})
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