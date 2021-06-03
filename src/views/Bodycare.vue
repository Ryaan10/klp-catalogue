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
                <a style="color: white; margin-left: 3px; font-size: 13px; font-family: MontserratR; letter-spacing: 1px">BODYCARE</a>

                <ion-img :src="'/assets/homepage/backbutton.svg'" @click="() => router.push('/home')" style="width: 25px; float: right; right: 0; position: absolute"/>
            </ion-list-header>
            <!-- Header -->

            <div style="text-align: center; margin-top: 10px; color: white">
            <ion-slides pager="false" :options="slideOpts">
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL FASHION SHOW SHOWER OIL</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/FASHION SHOW SHOWER OIL_50.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This lavish cleansing shower oil will moisturize and soften your skin while you’re in the shower. The gentle formula cleans, refreshes, and rejuvenates your skin, leaving it smooth and pampered.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Indulge while showering or bathing. Pump the shower oil into your palm and apply in a circular motion onto your wet skin until the foam is created. Rinse thoroughly.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL YUMMY JAM BODY SCRUB</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/YUMMY JAM BODY SCRUB_75.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,800</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This royal treatment will heavenly rejuvenate, nourish, repair, and soothe your skin. Innovative soft textured formula gently exfoliates without leaving any scratches or damaging the skin. It is tough on dry and dead skin cells, but extremely kind to your skin, leaving it soft and smooth.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Massage the scrub in a circular motion into damp skin, from your toes to your shoulders. Give a special attention to flaky and dry skin areas, especially to elbows and knees. Rinse thoroughly. Indulge twice a week.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">BODY BUTTER SET - ELBOWS BUTTER BAR/ FOOT & HEEL BUTTER BAR</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/BODY BUTTER SET - ELBOWS, FOOT & HEEL BUTTER BARS_80.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱7,900</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">These beautifully scented solid butter bars melt at body temperature to eliminate any dryness. A real treat for an addictive pleasure.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">ELBOWS BUTTER BAR For best results and to seal in the moisture, apply after the shower to towel-dried skin. Glide the bar over dry elbows and gently massage the skin with your hands until the butter is fully absorbed. Indulge daily. FOOT & HEEL BUTTER BAR For best results and to improve skin elasticity, apply after the shower to towel-dried skin. Glide the bar over dry feet and heels and gently massage the skin with your hands until the butter is fully absorbed. The more you massage the better is the result. Indulge daily.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL FASHION SHOW HAND BUTTER</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/FASHION SHOW HAND BUTTER_40.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱2,700</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Give your hands a buttery treat for a satin-soft skin.Deeply moisturizing and rejuvenating ingredients in this super rich creamy hand charm help prevent early signs of aging and will leave your hands soft and youthful looking.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Massage a small dollop of the butter into clean hands, giving extra attention to nails and cuticles. Let the cream be completely absorbed. Enjoy as often as desired.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL NIGHT OUT BODY LOTION SPRAY ON</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/NIGHT OUT BODY LOTION SPRAY ON_80.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱7,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This light-textured body lotion mist, which will give you an aura of glamour and mystery with its alluring scent. This lotion will revive your skin, bringing it back to life and you are good and ready to go out and enjoy your night.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Indulge after a bath or shower. Spray onto dry skin and massage in the lotion.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                 <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL FASHION SHOW BODY LOTION SPRAY ON</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/FASHION SHOW BODY LOTION SPRAY ON_80.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱7,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This light-textured body lotion mist, which pampers your skin with a soft, smooth feel and a wonderful scent. It is absorbed instantly, releasing powerful antioxidant protection of vitamin E, which defends your skin from environmental hazards.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Indulge after a bath or shower. Spray onto dry skin and massage in the lotion.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL RED CARPET BODY LOTION SPRAY ON</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/RED CARPET BODY LOTION SPRAY ON_60.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱7,600</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This light-textured body lotion mist, which pampers your skin with a soft, smooth feel and a charming scent. The lotion is absorbed instantly and infused chamomile extract will soothe and refresh your skin.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Indulge after a bath or shower. Spray onto dry skin and massage in the lotion.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL FASHION SHOW SHEA BODY LOTION</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/FASHION SHOW SHEA BODY LOTION_90.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱6,900</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">A unique combination of hydrating and rejuvenating ingredients in this lotion will not only deeply moisturize your skin but will also fight signs of aging for visibly youthful-looking and even-toned skin.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Warm the lotion between your palms and massage it into your skin. For best results and to seal in the moisture, apply the lotion onto dry skin after bathing or showering. Enjoy daily.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL RED CARPET SHEA BODY LOTION</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/RED CARPET SHEA BODY LOTION_90.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱6,900</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Perfect blend of light texture, nourishing and hydrating ingredients, and delightful scent, the lotion will pamper your skin daily with deep moisturizing, a smooth finish, and a soothing feeling of sheer pleasure.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Warm the lotion between your palms and massage it into your skin. For best results and to seal in the moisture, apply the lotion onto dry skin after bathing or showering. Enjoy daily.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL RED CARPET SHOWER OIL</p><!-- change -->
                        <ion-img :src="'/assets/BODY CARE CATEGORY/RED CARPET BODY LOTION SPRAY ON_60.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱4,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This lavish cleansing shower oil will moisturize and soften your skin while you’re in the shower. The gentle formula cleans, refreshes, and rejuvenates your skin, leaving it smooth and pampered.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Indulge while showering or bathing. Pump the shower oil into your palm and apply in a circular motion onto your wet skin until the foam is created. Rinse thoroughly.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">SUPER MODEL DAILY STAR FOOT BUTTER</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/DAILY STAR FOOT BUTTER_35.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱3,200</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This rich creamy foot delight is designed to moisturize your feet and keep them feeling re-energized and refreshed.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Massage a small dollop onto dry and clean feet and allow the buttery cream to be completely absorbed. Use as often as desired.</p>
                        <iframe style="margin-top: 50px" width="400" height="400" src="https://www.youtube.com/embed/dPCUT80VFm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div>
                        <p style="font-family: MontserratR;">FASHION ELIXIR 3IN1 AFTERSHAVE CREAM: FOR MEN</p>
                        <ion-img :src="'/assets/BODY CARE CATEGORY/FASHION ELIXIR 3IN1 AFTERSHAVE CREAM FOR MEN.jpg'" id="product" style="margin-top: 15px; margin-bottom: 15px; height: 300px"/>
                        <p style="font-family: BodoniR;">₱17,000</p>
                        <p style="font-size: 15px; font-family: MontserratR;">DETAILS</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">This triple-action Aftershave Cream is designed to nourish, polish, moisturize, smooth, and firm your skin without clogging the pores while fighting visible signs of aging and leaving an elegant fragrance.</p>

                         <p style="font-size: 15px; font-family: MontserratR;">HOW TO USE</p>
                        <p style="padding-left: 10px; padding-right: 10px; font-size: 15px; font-family: MontserratR;">Can be used as an aftershave cream or as a day/night moisturizing cream. Apply as much as needed onto a clean and dry face and neck.</p>
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