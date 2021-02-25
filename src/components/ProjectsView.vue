<template>
    <div class="w-screen h-screen flex items-center justify-center flex-col" id="projects">
        <h1 class="font-bold text-xl text-black m-3">{{ $t("project.titre") }}</h1>
        <nav-pagination
            :data="projectsData"
            :total-pages="Math.ceil(projectsData.length / 2)"
            :total="projectsData.length"
            :per-page="2"
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