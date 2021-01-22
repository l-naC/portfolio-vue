<template>
    <div 
        class="w-1/2 h-auto p-5 bg-cover bg-center bg-gradient-to-tr text-white transition duration-500 ease-in-out transform hover:scale-90 "
        :style="backgroundStyle"
    >
        <div class="h-full flex flex-col">
          <div class="h-full flex flex-col justify-center">
            <h2 class="font-bold text-base md:text-xl lg:text-xl">{{ project.name }} {{ project.date }}</h2>
            <!-- <p>{{ project.role }}</p> -->
            <!-- <p>{{ project.client }}</p> -->
            <p class="text-xs md:text-base lg:text-base">{{ project.description }}</p>
          </div>
          

          <div class="text-center my-5">
            <a v-bind:href="linkWebsite" class="bg-black hover:bg-gray-500 rounded-full py-3 px-3 md:px-6 lg:px-6 text-xs md:text-sm lg:text-sm text-white">Visitez le site</a>
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
        return 'background-image: url("'+ this.project.photo +'")'
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