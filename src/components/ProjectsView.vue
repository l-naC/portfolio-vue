<template>
    <div class="w-screen h-screen flex items-center justify-center flex-col py-5" id="projects">
        <h1 class="font-bold text-xl text-black m-3">Projets récents</h1>
        <nav-pagination
            :data="projectsData"
            :total-pages="Math.ceil(projectsData.length / 4)"
            :total="projectsData.length"
            :per-page="4"
            :current-page="currentPage"
            @pagechanged="onPageChange"
        />
    </div>
</template>

<script>
import portfolioData from '../data/portfolio.json'
import NavPagination from './nav/NavPagination'

export default {
    name: "projects-view",
    components: {
        NavPagination
    },
    data() {
        return {
            projectsData: portfolioData.projects,
            currentPage: 1,
        }
    },
    computed: {
        projects() {
            return this.projectsData
        }
    },
    methods: {
        onPageChange(page) {
            this.currentPage = page;
        },
    }
}
</script>

<style scoped>
</style>