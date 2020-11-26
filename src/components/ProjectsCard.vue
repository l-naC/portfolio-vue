<template>
    <div 
        class="sm:w-full md:w-1/2 lg:w-1/2 h-auto px-4 py-2 bg-cover bg-center text-white bg-gradient-to-tr"
        :style="backgroundStyle"
    >
        <div class="h-full flex flex-col justify-evenly">
          <h2 class="font-bold text-xl">{{ project.name }} {{ project.date }}</h2>
          <p>{{ project.role }}</p>
          <p>{{ project.client }}</p>
          <p>{{ project.description }}</p>

          <div class="text-center">
            <a v-bind:href="linkWebsite" class="bg-gray-300 rounded-full py-3 px-6 text-gray-600">Visit website</a>
          </div>
        </div>
        
          
    </div>
  
</template>

<script>
export default {
  name: "projects-card",
  props: ['project-data'],
  data(){
    return {
      project: this.projectData,
    }
  },
  computed: {
        backgroundStyle() {
            return 'background-image: url("' + this.project.photo +'")'
        },
        linkWebsite() {
            return this.project.url
        }
  },
  methods: {
  }
 
}
</script>

<style scoped>
</style>