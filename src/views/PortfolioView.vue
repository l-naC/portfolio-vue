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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from '../components/nav/NavBar.vue'

gsap.registerPlugin(ScrollTrigger);

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
  },
  mounted: function () {
    this.startAnimations()
  },
  methods: {
    startAnimations: function () {
      
      ScrollTrigger.matchMedia({
	
        //desktop
        "(min-width: 800px)": function() {
          // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
          // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

          // let tl_about = gsap.timeline({
          //   // yes, we can add it to an entire timeline!
          //   scrollTrigger: {
          //     trigger: "#section-about",
          //     toggleActions: "restart pause resume pause",
          //     start: "center bottom",
          //     end: "center top",
          //     markers: true
          //   }
          // })

          // // add animations and labels to the timeline
          // tl_about.from('#image-about', {x: 50, opacity: 0, duration: 1.5})
          //   .from('#text-about', {x: -50, opacity: 0, duration: 1}, "-=1")

          // let tl_skills = gsap.timeline({
          //   // yes, we can add it to an entire timeline!
          //   scrollTrigger: {
          //     trigger: "#section-skills",
          //     toggleActions: "restart pause resume pause",
          //     start: "center bottom",
          //     end: "center top",
          //     markers: true
          //   }
          // });

          // //add animations and labels to the timeline
          // tl_skills.from('.title-skills', {x: -300, y: -200, opacity: 0, duration: 1})
          //   .from('.card-skills', {x: -300, rotation: 360, duration: 1}, "-=1")
          //   .from('#infos-skills', {x: 300, y: 300, opacity: 0, duration: 1}, "-=1")

          // let tl_contact = gsap.timeline({
          //   // yes, we can add it to an entire timeline!
          //   scrollTrigger: {
          //     trigger: "#section-contact",
          //     toggleActions: "restart pause resume pause",
          //     start: "center bottom",
          //     end: "center top"
          //   }
          // })

          // // add animations and labels to the timeline
          // tl_contact.from('#image-contact', {x: -200, y: 500, opacity: 0, duration: 1.5})
          //   .from('#form-contact', {x:200, y: 500, opacity: 0, duration: 1}, "-=1")
        },

        // mobile
        // "(max-width: 799px)": function() {
        //   let tl_about = gsap.timeline({
        //     // yes, we can add it to an entire timeline!
        //     scrollTrigger: {
        //       trigger: "#section-about",
        //       toggleActions: "restart pause resume pause",
        //       start: "center bottom",
        //       end: "center top"
        //     }
        //   })

        //   // add animations and labels to the timeline
        //   tl_about.from('#text-about', {x: -300, opacity: 0, duration: 1}, "-=1")
        //   .from('#image-about', {x: -400, opacity: 0, duration: 1.5})
            
        //   // The ScrollTriggers created inside these functions are segregated and get
        //   // reverted/killed when the media query doesn't match anymore.
        //   let tl_skills = gsap.timeline({
        //     // yes, we can add it to an entire timeline!
        //     scrollTrigger: {
        //       trigger: "#section-skills",
        //       toggleActions: "restart pause resume pause",
        //       start: "center bottom",
        //       end: "center top"
        //     }
        //   });

        //   // add animations and labels to the timeline
        //   tl_skills.from('.title-skills', {x: -300, y: -200, opacity: 0, duration: 1})
        //     .from('.card-skills', {x: -300, rotation: 360, duration: 1}, "-=1")

        //   let tl_contact = gsap.timeline({
        //     // yes, we can add it to an entire timeline!
        //     scrollTrigger: {
        //       trigger: "#section-contact",
        //       toggleActions: "restart pause resume pause",
        //       start: "center bottom",
        //       end: "center top"
        //     }
        //   })

        //   // add animations and labels to the timeline
        //   tl_contact.from('#image-contact', {x: -200, y: 500, opacity: 0, duration: 1.5})
        //     .from('#form-contact', {x: -200, y: 500, opacity: 0, duration: 1}, "-=1")
        // },
        
        // // all 
        // "all": function() {
        //   // ScrollTriggers created here aren't associated with a particular media query,
        //   // so they persist.
        // }

      }); 
    }
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