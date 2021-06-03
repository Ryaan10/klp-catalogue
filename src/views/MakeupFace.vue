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
            <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px" @click="() => router.push('/makeup')">MAKE UP</a> 
            <ion-icon name="chevron-forward" style="color: white; margin-left: 3px; font-size: 13px"></ion-icon>
            <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">FACE</a> 

            <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/makeup')" style="width: 25px; float: right; right: 0; position: absolute"/>
        </ion-list-header>
        
        <!-- Product -->
        <div style="text-align: center; margin-top: 10px; color: white">
            <ion-slides pager="false" :options="slideOpts">
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">Bronzer Mosaico</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/21.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A real mosaic of colors, this light bronzing powder is a unique combination of different shades warmed with subtly mixed golden particles for a sun-kissed, healthy-looking skin tone.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">ONE & ONLY PRIMER SUPER SOFT SKIN</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/22.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This transparent primer minimizes the appearance of pores and fine lines for a smooth finish.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">ONE & ONLY PRIMER EVEN BETTER</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/23.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This delicate pink color primer brightens the complexion, corrects uneven skin tone and dark spots appearance, helping your skin to stay flawless.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV COVER STICK</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/24.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A creamy formula that blends easily to conceal redness and small imperfections. The concealer reduces the appearance of the dark under-eye circles and provides medium to heavy coverage. Works best with FTV foundations. Use Cover Stick to illuminate, emphasize, contour, shade, define and shape features.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV PERFECT SELFIE LIQUID FOUNDATION MATTE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/25.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A skin complexion perfecting foundation, offers an optimal natural coverage with a beautiful finish for a trendy model – like look.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">HIGHLIGHTER RAINBOW MELANGE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/26.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">The luminous and bright texture gives a trendy pearly look for a beautiful aura. Wear over makeup or on bare, moisturized skin for a velvety smooth finish.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">LOOSE POWDER</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/27.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This lightweight powder is easy to apply. Can be applied on face as finishing and setting powder for a matte look and to balance the shine.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV FINISHING POWDER</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/28.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Velvety compact powder suitable for all skin types. Ideal for setting foundation and keeping the makeup in place. The light texture helps minimize imperfections, provides a matte but bright appearance, while balancing the shine.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">LIQUID CONCEALER</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/30.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This concealer covers unwanted imperfections and minimizes the appearance of small skin blemishes. The liquid concealer provides light to medium coverage and works best with FTV foundations. Use the concealer to illuminate, emphasize, contour, shade, define, and shape features.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">CREAM COMPACT FOUNDATION </p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/31.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Ideal for heavier coverage, can be applied directly after daily skin care procedures and primer. Delicate texture creates smooth and natural looking skin tone.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">BLUSH MULTICOLOR </p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/32.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Play between light and dark shades to achieve a glamorous blush look.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">MONO BLUSH </p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/33.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Just a touch of this soft and smooth powder gives cheeks a radiant glow.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">ONE & ONLY PRIMER REDUCE  </p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For face/34.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱9,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This green-colored primer is ideal for helping instantly reduce redness appearance, while mattifying shine.</p>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Makeup',
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

        const slideOpts = {
            initialSlide: 0,
            speed: 400,
          
        };

        return { router, slideOpts };

    },

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