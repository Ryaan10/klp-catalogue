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
                        <p style="font-family: MontserratR;">PREMIUM LUXURANT CRYSTALS CASE</p>
                        <ion-slides pager="false" :options="slideOpts" ref="mySlides">
                            <ion-slide>
                                <div>
                                    <ion-img :src="'/assets/SKIN CARE CATEGORY/SKINCARE PACKAGES/PREMIUM LUXURANT CRYSTALS CASE_160000.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px;"/>
                                </div>
                            </ion-slide>
                        </ion-slides>  
                        <p style="font-family: BodoniR;">₱160,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">The FTV Luxuriant Crystals Premium Case brings the full range of the Luxuriant Crystals products in a premium suitcase. <br /><br />
                        THE SET INCLUDES:<br /><br />
                        
                        Luxuriant Crystals Cream Facial Soap <br />
                        Luxuriant Crystals Facial Serum <br />
                        Luxuriant Crystals Non-stop Moisture Cream <br />
                        Luxuriant Crystals Hydra Fountain Capsules <br />
                        Luxuriant Crystals Hydration Mask <br /><br />
</p>
                        <!-- <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                        <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE:</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">

                            <b>Luxuriant Crystals Cream Facial Soap</b>
                            Massage onto wet skin in a circular motion, carefully avoiding the eye area. Rinse with lukewarm water and pat dry. Use daily, morning and evening. For best results, follow by using LUXURIANT CRYSTALS Facial Serum and the Non-Stop moisture Cream. You can use the Hydra Fountain Capsules as your night serum and use the serum itself in the mornings.
                            <br /><br />
                            <b>Luxuriant Crystals Facial Serum</b>
                            Apply evenly into a dry and clean face and neck. Massage in until fully absorbed. Use daily in the mornings. For best results, follow by using LUXURIANT CRYSTALS Non Stop Moisture Cream. * In the night use the LUXURIANT CRYSTALS Hydra Fountain Capsules as your nightly serum.
                            <br /><br />
                            <b>Luxuriant Crystals Non-stop Moisture Cream</b>
                            Apply an even layer onto dry and clean face and neck. Massage in until fully absorbed. Use daily.
                            <br /><br />
                            <b>Luxuriant Crystals Hydra Fountain Capsules</b>
                            Carefully cut the edge of the capsule and gently squeeze the content on your palm or directly on a clean and dry face and neck area. Allow the formula to be completely absorbed and leave it for the night. Use every night as your nightly serum and at least 30 minutes before going to bed so it will be fully absorbed and won’t get on the pillow. For best results, first wash your face and neck area with the LUXURIANT CRYSTALS Creamy Facial Soap and after applying the Capsules seal it with the LUXURIANT CRYSTALS Non-Stop Moisture Cream.
                            <br /><br />
                            <b>Luxuriant Crystals Hydration Mask</b>
                            Apply an even layer of the mask onto clean and dry facial skin while avoiding the eye area and allow the hydrating ingredients to work for 10 minutes. Remove thoroughly with lukewarm water, then refresh with cool water and pat dry. Use once a week preferably at night at least 60 minutes before going to bed. For best results, first wash your face with the LUXURIANT CRYSTALS Creamy Facial Soap, then after the Mask follow by using LUXURIANT CRYSTALS Hydra Fountain Capsules and then the LUXURIANT CRYSTALS Non-Stop Moisture Cream.
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
    name: 'skinpackagesItem4',
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