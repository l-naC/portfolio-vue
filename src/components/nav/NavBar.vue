<template>
  <nav class="h-screen float-right z-50 fixed text-red-800 right-0">
    <ul class="h-full flex flex-col justify-center align-center">
      <li 
      v-on:mouseover="mouseover('H')"
      v-on:mouseleave="mouseleave('H')">
          <a href="#view"><p :class="styleOpacityH">Home</p><div class="nav-round"></div></a></li>
      <li 
      v-on:mouseover="mouseover('A')"
      v-on:mouseleave="mouseleave('A')">
        <a href="#section-about"><p :class="styleOpacityA">About</p><div class="nav-round" ></div></a></li>
      <li 
      v-on:mouseover="mouseover('S')"
      v-on:mouseleave="mouseleave('S')">
        <a href="#section-skills"><p :class="styleOpacityS">Skills</p><div class="nav-round" ></div></a></li>
      <li 
      v-on:mouseover="mouseover('P')"
      v-on:mouseleave="mouseleave('P')">
        <a href="#section-projects"><p :class="styleOpacityP">Projects</p><div class="nav-round"></div></a></li>
      <li 
      v-on:mouseover="mouseover('C')"
      v-on:mouseleave="mouseleave('C')">
        <a href="#section-contact"><p :class="styleOpacityC">Contact</p><div class="nav-round"></div></a></li>
    </ul>
  </nav>
</template>

<script>
import $ from 'jquery'

$(document).ready(function() {
  $('#snap-scroll-container').scroll(function() {
      $('.section').each(function(i) {
        var scrollDistance = $(window).scrollTop();
          if ($(this).position().top <= scrollDistance) {
            $('.nav-round').removeClass('active');
            $('.nav-round').eq(i).addClass('active');
          }
      });
  }).scroll();
});

export default {
  name: "nav-bar",
  data() {
    return {
      opcacityH: 'opacity-0',
      opcacityA: 'opacity-0',
      opcacityS: 'opacity-0',
      opcacityP: 'opacity-0',
      opcacityC: 'opacity-0',
    }
  },
  methods: {
      mouseover: function(event){
        if (event === 'H'){
          this.opcacityH = 'opacity-100 font-bold'
        }
        else if (event === 'A') {
          this.opcacityA = 'opacity-100 font-bold'
        }
        else if (event === 'S') {
          this.opcacityS = 'opacity-100 font-bold'
        }
        else if (event === 'P') {
          this.opcacityP = 'opacity-100 font-bold'
        }
        else {
          this.opcacityC = 'opacity-100 font-bold'
        }
      },    
      mouseleave: function(event){
        if (event === 'H'){
          this.opcacityH = 'opacity-0'
        }
        else if (event === 'A') {
          this.opcacityA = 'opacity-0'
        }
        else if (event === 'S') {
          this.opcacityS = 'opacity-0'
        }
        else if (event === 'P') {
          this.opcacityP = 'opacity-0'
        }
        else {
          this.opcacityC = 'opacity-0'
        }
      }
  },
  computed: {
    styleOpacityH() {
      return this.opcacityH
    },
    styleOpacityA() {
      return this.opcacityA
    },
    styleOpacityS() {
      return this.opcacityS
    },
    styleOpacityP() {
      return this.opcacityP
    },
    styleOpacityC() {
      return this.opcacityC
    }
  }
}
</script>

<style scoped>
nav ul li a p {
  @apply transition ease-out duration-700 hidden md:block lg:block
}

nav ul li a{
  @apply flex justify-end items-center
}
.nav-round{
  @apply rounded-full bg-redjapan mx-3 my-2 transition ease-out duration-700 h-2 w-2
}

.active {
  @apply h-4 w-4 
}

</style>