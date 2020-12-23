<template>
    <div class="w-screen h-screen flex items-center justify-evenly p-5 flex-col sm:flex-col md:flex-row lg:flex-row">
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2">
            <h2 class="font-mineBold text-2xl my-3 font-bold">Développeuse web passionnée et à l’écoute !</h2>
            <p>Ayant découvert le développement web lors de mon cursus à l’université.</p>
            <p>J’ai tout mis en œuvre pour percer dans cette voie tout en prenant du plaisir sur tous mes projets.</p>
            <p>En mai 2021, j’ai décidé de devenir développeur web freelance après un poste en tant que développeur full-stack dans une startup puis 2 ans à Prisma Media en tant que Product owner junior. </p>
            <div class="text-center my-5">
                <button class="bg-black text-white p-1 rounded-lg">Download my CV</button>
            </div>
        </div>
        <div>
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
</template>

<script>
// import portfolioData from '../data/portfolio.json'
// import AboutCard from './AboutCard.vue'

export default {
    name: "about-view",
    // components: { AboutCard },
    // data() {
    //     return {
    //         formationsData: portfolioData.formations,
    //         experiencesData: portfolioData.experiences,
    //     }
    // },
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
    p{
        @apply text-base my-4
    }
</style>>