<template>
    <div class="w-screen sm:h-auto md:h-screen lg:h-screen bg-gray-50 flex items-center justify-center flex-col py-5">
        <h2 class="font-bold text-xl text-gray-600 m-3">Projects</h2>
        <div class="w-full h-full flex flex-wrap justify-center flex-col sm:flex-col md:flex-row lg:flex-row">
            <projects-card
                v-for="(project, index) in projects"
                :key="index"
                :project-data="project"
            />
        </div>
    </div>
</template>

<script>
import portfolioData from '../data/portfolio.json'
import ProjectsCard from './ProjectsCard'
export default {
    name: "projects-view",
    components: {
        ProjectsCard
    },
    data() {
        return {
            projectsData: portfolioData.projects
        }
    },
    computed: {
        projects() {
            return portfolioData.projects
        },
    }
}
</script>

<style scoped>
</style>