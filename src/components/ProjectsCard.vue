<template>
    <div 
        class="w-1/2 md:w-1/2 lg:w-1/2 h-auto p-5 bg-cover bg-center bg-gradient-to-tr text-white transition duration-500 ease-in-out transform hover:scale-90 "
        :style="backgroundStyle"
    >
        <div class="h-full flex flex-col">
          <div class="h-full flex flex-col justify-center">
            <h2 class="font-bold text-base md:text-xl lg:text-xl">{{ projectData.name }} {{ projectData.date }}</h2>
            <p class="text-xs md:text-base lg:text-base">{{ projectData.description }}</p>
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
  props: {
    projectData: {
      type: Object,
      required: true
    },
  },
  data(){
    return {
    }
  },
  computed: {
    backgroundStyle() {
        return 'background-image: url("'+ this.projectData.photo +'")'
    },
    linkWebsite() {
      return this.projectData.url
    }
  }
}
</script>

<style scoped>
</style>