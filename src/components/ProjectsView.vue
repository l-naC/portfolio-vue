<template>
    <div class="w-screen h-screen flex items-center justify-center flex-col py-5" id="section-projects">
        <h2 class="font-bold text-xl text-black m-3">Projets récents</h2>
        <div class="w-full md:w-4/5 lg:w-4/5 h-full flex flex-wrap justify-center flex-row sm:flex-col md:flex-row lg:flex-row m-0 md:m-5 lg:m-5">
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