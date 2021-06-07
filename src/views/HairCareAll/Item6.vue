<template>
 <ion-page>
    <!-- <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Category 1</ion-title>
      </ion-toolbar>
    </ion-header> -->

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
            <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/Haircare')">HAIR CARE</a> 
            <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 13px"></ion-icon>
            <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/HairCareAllList')">ALL PRODUCTS</a> 

            <ion-img :src="'/assets/homepage/backbutton.svg'" @click="backToList()"  style="width: 35px; float: right; right: 8px; position: absolute"/>
        </ion-list-header>
        <ion-grid>
            <ion-row style="color: white">
                <ion-col>
                    <!-- <ion-icon name="chevron-back" style="color: white; margin-left: 3px; font-size: 28px; margin-top: 180px; position: absolute; left: 0; z-index: 100" @click="prevSlide"></ion-icon>
                    <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 28px; margin-top: 180px; position: absolute; right: 0; z-index: 100" @click="nextSlide"></ion-icon> -->
                    <div style="text-align: center; margin-top: 10px; color: white; z-index: -1">
                        <p style="font-family: MontserratR;">CELEB STYLE VOLUMETRIC SPRA</p>
                        <ion-slides pager="false" :options="slideOpts" ref="mySlides">
                            <ion-slide>
                                <div>
                                    <ion-img :src="'/assets/HAIR CARE CATEGORY/All Products/VOLUMETRIC SPRAY_70.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px;"/>
                                </div>
                            </ion-slide>
                        </ion-slides>  
                        <p style="font-family: BodoniR;">₱6,900</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This volumizing formula, based on a combination of special polymers and keratin, is coating your hair to create an amazing volume. It increases the hair suppleness, gives it increased body and provides it with antioxidant protection.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">To give height: <br>• Pull your hair up strand by strand and apply the spray to the roots. <br>• Apply FTV Volumetric Spray to slightly damp hair. Hold the spray nozzle at least 30 centimeters away from your hair and keep the spray in constant motion while spraying. <br>• Allow a few seconds for the spray to dry and then move on to the next strand. Style as usual.

 To create volume with heat styling tools: <br>• Apply FTV Volumetric Spray liberally to slightly damp hair. Hold the spray nozzle at least 30 cm away from your hair and keep the spray in constant motion while spraying. <br>• Style as usual with a heat styling tool of your choice. 

For a natural volume: <br>• Set your blow dryer on the lowest heat and speed settings and start drying your hair as you work through it with your fingers. <br>• When the hair is slightly damp, lift a hair strand, mist it with FTV Volumetric Spray (hold the nozzle at least 30 cm away from your hair), twist the strand tightly, and dry it again with the blow dryer. Gently release the strand, without undoing the twist. <br>• Proceed to the next strand, until all of your hair is in “twisted and dried” strands. <br>• Wait until your hair cools down after the blow drying. And then carefully pull the twists apart with your fingers and gently tousle your hair.
</p><!-- <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
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
    name: 'MakeupFaceItem1',
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
            this.$router.push({name: "HairCareAllList"})
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