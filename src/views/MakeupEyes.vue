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
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">EYES</a> 

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/makeup')" style="width: 25px; float: right; right: 0; position: absolute"/>
            </ion-list-header>
            <!-- Header -->

            <div style="text-align: center; margin-top: 10px; color: white">
            <ion-slides pager="false" :options="slideOpts">
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SOLO SATIN EYE SHADOW</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/SOLO SATIN EYE SHADOW_4800.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Ultra soft and silky texture. These eye shadows emphasize your eyes with fashionable light and hot shades.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">MULTICOLOR EYE SHADOW</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/MULTICOLOR EYE SHADOW_5500.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Pigment rich powder with ultra-soft and silky texture comes in many colors for your selection. This product creates fabulous glossy eye makeup.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">MULTICOLOR EYE SHADOW</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/MULTICOLOR EYE SHADOW (other available).png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Pigment rich powder with ultra-soft and silky texture comes in many colors for your selection. This product creates fabulous glossy eye makeup.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FLOWER PALETTE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/FLOWER PALETTE_8800.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱8,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Soft and silky texture ensures long-lasting results. A perfectly matching combination of elegant, playful colors, which can be easily mixed to create the unique look to match your every mood.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">TRIANGLE PALLETTE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/TRIANGLE PALLETTE_8800.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱8,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Soft and silky texture. A perfectly matching combination of sophisticated, harmonious colors, which can be mixed together for a natural-looking makeup.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">BUBBLE PALLETTE</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/BUBBLE PALLETTE_8800.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱8,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Soft and silky texture. These palettes offer more intense colors, high in pigments, for added glamour and longer-lasting makeup. The various shades can be mixed together to reinvent a different trendy look for any occasion.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SHINING LOOSE EYE SHADOW</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/SHINING LOOSE EYE SHADOW_6000.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱6,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This lightweight, silky textured loose powder can be applied on face, eyes, and body to create a shimmering effect.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">EYE PENCIL</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/EYE PENCIL_3500.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">High in pigments, the pencil offers optimal coverage as well as exceptional comfort and easy application.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">EYE LINER</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/EYE LINER_5500.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱5,500</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Thanks to its brush, it is extremely easy to outline the eye contour, guaranteeing an accurate and lasting makeup appearance.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">VOLUME MASCARA</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/VOLUME MASCARA_6000.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱6,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Luxurious volume mascara that separates and defines each and every lash, providing full-body and high-volume effect for thicker, beautiful lashes.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">LONG LASH MASCARA SILICONE BLACK</p>
                        <ion-img :src="'/assets/MAKEUP CATEGORY/For eyes/LONG LASH MASCARA SILICONE BLACK_6000.png'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱6,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">These professional formula and applicator are specially designed to give eye lashes dramatic length and lift while gently forming the look of perfectly curled lashes.</p>
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