<template>
  <nav-bar/>
  <div id="snap-scroll-container">
    <home-view class="section" />
    <about-view class="section" />
    <skills-view class="section" />
    <projects-view class="section" />
    <contact-view class="section" />
    <footer-view class="section" />
  </div>
</template>

<script>

import AboutView from '../components/AboutView.vue'
import ContactView from '../components/ContactView.vue'
import FooterView from '../components/FooterView.vue'
import HomeView from '../components/HomeView.vue'
import ProjectsView from '../components/ProjectsView.vue'
import SkillsView from '../components/SkillsView.vue'
import NavBar from '../components/nav/NavBar.vue'

export default {
  name: "portfolio-view",
  components: {
      HomeView,
      AboutView,
      SkillsView,
      ProjectsView,
      ContactView,
      FooterView,
      NavBar
  }
}
</script>

<style scoped>

#snap-scroll-container{
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-points-y: repeat(100%);
  scroll-snap-destination: 0 0;
  scroll-snap-type: y mandatory;
  scroll-snap-type: mandatory;
  scroll-behavior: smooth;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  min-width: 100%;
  min-height: 100%;
}

.section{
  scroll-snap-align: start;
}
</style>