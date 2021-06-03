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
            <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">BRUSHES</a> 

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/makeup')" style="width: 25px; float: right; right: 0; position: absolute"/>
            </ion-list-header>
            <!-- Header -->

            <div style="text-align: center; margin-top: 10px; color: white">
            <ion-slides pager="false" :options="slideOpts">
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BLENDING SPONGE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BLENDING SPONGE_53.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,300</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Blending Sponge For Flawless Application and Finish.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BLENDING SPONGE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 1_68.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱7,100</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">For Perfect Powder Application.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.2 - BLUSH</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BLUSH NO. 2_68.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A perfectly shaped brush, ideal for application of blush, bronzer, and highlighter powders.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.3 - FOUNDATION</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 3_53.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,100</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This brush allows perfectly smooth and even application of liquid and cream foundations.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.4 - CONCEALER</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 4 -CONCEALER_42.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,400</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This brush allows accurate and precise covering of imperfections and blemishes for an even skin tone.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.5 - EYE SHADOW</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 5 - EYE SHADOW_45.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">An ultra-soft brush collects just the right amount of pressed or loose eye shadows for amazing eye makeup.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                  <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.6 - EYE SHADOW BLENDING</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 6 - EYE SHADOW BLENDING_48.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,900</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A soft rounded brush for effortless blending of eye shadows.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.7 - EYE CONTOURING</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 7 EYE CONTOURING_43.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Ideal for detail work, contouring, and smudging shadow into lash line for smoky eye and other effects.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.8 - BROW</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 8 - BROW_40.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,200</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">An angled tip brush for exact application of brow shades.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.9 - LIP</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 9 - LIP_40.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,200</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A brush that perfectly applies color and defines contours of the lips. Can be used with lipstick, lip gloss and chubby lip pencil.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.10 - LASH & BROW COMB</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 10 - LASH & BROW COMB_68.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This comb defines lashes and shape brows for a professionally groomed look.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.11 - LIQUID FOUNDATION</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 11 - LIQUID FOUNDATION_88.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱7,100</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A professional brush for applying and blending liquid foundation for optimum coverage.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO.12 - POWDER COVER-MORE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 12 FOUNDER COVER MORE_97.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱7,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A very wide brush for application of powders, bronzers, and highlighters to neck, shoulders, and décolleté area.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV BRUSH NO. 14 - CORRECT & DEFINE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/FTV BRUSH NO. 14 CORRECT & DEFINE_48.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,900</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This soft brush is perfect for smoothing edges and for minor corrections.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FTV MAKEUP BRUSH CLEANSER</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/Brushes/MAKE UP BRUSH CLEANER_42.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A daily makeup brush cleaning spray, designed to quickly clean and refresh brushes after each makeup application. This professional formula helps brushes last longer and ensures proper hygiene.</p>
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