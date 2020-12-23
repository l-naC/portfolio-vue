<template>
  <home-view />
  <about-view />
  <skills-view />
  <projects-view />
  <contact-view />
  <footer-view />
</template>

<script>
import AboutView from '../components/AboutView.vue'
import ContactView from '../components/ContactView.vue'
import FooterView from '../components/FooterView.vue'
import HomeView from '../components/HomeView.vue'
import ProjectsView from '../components/ProjectsView.vue'
import SkillsView from '../components/SkillsView.vue'
import { gsap } from "gsap"

export default {
    name: "portfolio-view",
    components: {
        HomeView,
        AboutView,
        SkillsView,
        ProjectsView,
        ContactView,
        FooterView
    },
    mounted: function () {
      this.startAnimations()
    },
    methods: {
      startAnimations: function () {
        gsap.to('#title1', {duration: 1, color: "red"})
      }
    }
}
</script>

<style>

</style>