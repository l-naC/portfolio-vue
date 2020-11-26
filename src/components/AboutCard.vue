<template>
    <div class="px-4 py-2">
        <h3 class="font-semibold text-base text-gray-600">{{ portfolio.name }} </h3>
        <p class="text-xs font-thin text-gray-500">{{ portfolio.date }}</p>
        <p class="text-base font-light text-gray-600">{{ portfolio.place }}</p>
    </div>
</template>

<script>
export default {
  name: "about-card",
  props: ['portfolio-data'],
  data(){
    return {
      portfolio: this.portfolioData,
    }
  },
  computed: {
  },
  methods: {
  }
 
}
</script>

<style scoped>
</style>