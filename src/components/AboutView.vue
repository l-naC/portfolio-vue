<template>
    <div class="w-screen sm:h-auto md:h-screen lg:h-screen flex items-center justify-evenly p-5 flex-col" id="section-about">
        <div class="flex items-center justify-evenly p-5 flex-col sm:flex-col md:flex-row lg:flex-row">
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2" id="text-about">
                <h2 class="font-mineBold text-2xl my-3 font-bold">Développeuse web passionnée et à l’écoute !</h2>
                <p>
                    Ma spécialité est de construire des sites web de A à Z, en commençant par la définition du produit, 
                    la réalisation des maquettes, l'intégration des pages et le développement des différentes fonctionnalités.
                    Sans oublier l’optimisation du référencement naturel du site et sa mise en ligne.
                    <br/><br/>
                    Ayant découvert le développement web lors de mon cursus à l’université. J’ai tout mis en œuvre pour percer 
                    dans cette voie tout en prenant du plaisir sur tous mes projets.
                    <br/><br/>
                    Je peux vous accompagner sur toutes les étapes de votre projet web.
                    <br/><br/>
                    Et comme vous pourrez le voir, je suis aussi une personne passionnée par le Japon et sa culture.
                </p>
                <div class="text-center my-5">
                    <button class="bg-black text-white p-1 rounded-lg">Download my CV</button>
                </div>
            </div>
            <div id="image-about">
                <img src="../assets/images/torii.png" alt="torii">
            </div>
            <!-- <div class="flex justify-evenly flex-wrap">
                <div class="sm:w-full md:w-5/12 lg:w-5/12 m-3">
                    <h2 class="font-bold text-xl text-gray-600">Formations</h2>
                    <div class="bg-gray-50 divide-y divide-gray-400 shadow-2xl my-3 rounded-lg">
                        <about-card 
                            v-for="(formation, index) in formations"
                            :key="index"
                            :portfolio-data="formation"
                        />
                    </div>
                </div>
                <div class="sm:w-full md:w-5/12 lg:w-5/12 m-3">
                    <h2 class="font-bold text-xl text-gray-600">Experiences</h2>
                    <div class="bg-gray-50 divide-y divide-gray-400 shadow-2xl my-3 rounded-lg">
                        <about-card 
                            v-for="(experience, index) in experiences"
                            :key="index"
                            :portfolio-data="experience"
                        />
                    </div>
                </div>
            </div> -->
        </div>
        <div class="w-full text-center">
            <p 
            class="text-2xl italic" 
            v-on:mouseover="mouseover"
            v-on:mouseleave="mouseleave">
            " {{message}} "
        </p>
            <p class="text-xs">(proverbe japonais)</p>
        </div>
    </div>
    
</template>

<script>
// import portfolioData from '../data/portfolio.json'
// import AboutCard from './AboutCard.vue'

export default {
    name: "about-view",
    //components: { AboutCard },
    data() {
        return {
            message: '弘法筆を択ばず'
            //formationsData: portfolioData.formations,
            //experiencesData: portfolioData.experiences,
        }
    },
    methods: {
        mouseover: function(){
        this.message = 'La compassion porté aux autres est un bienfait pour soi'
        },    
        mouseleave: function(){
        this.message = '弘法筆を択ばず'
        }
    }
    // computed: {
    //     experiences() {
    //     return portfolioData.experiences
    //     },
    //     formations() {
    //     return portfolioData.formations
    //     }
    // }
}
</script>

<style scoped>
    #text-about p{
        @apply text-base my-4
    }
</style>>