<template>
    <div class="w-screen sm:h-auto md:h-screen lg:h-screen bg-gray-50 flex items-center justify-evenly p-5">
        <div class="flex justify-evenly flex-wrap">
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
        </div>
            
    </div>
</template>

<script>
import portfolioData from '../data/portfolio.json'
import AboutCard from './AboutCard.vue'

export default {
    name: "about-view",
    components: { AboutCard },
    data() {
        return {
            formationsData: portfolioData.formations,
            experiencesData: portfolioData.experiences,
        }
    },
    computed: {
        experiences() {
        return portfolioData.experiences
        },
        formations() {
        return portfolioData.formations
        }
    }
}
</script>

<style>

</style>