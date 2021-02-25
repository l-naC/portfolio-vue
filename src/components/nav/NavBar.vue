<template>
  <div class="float-right z-50 fixed text-red-800 right-0 m-3">
    <select v-model="$i18n.locale">
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  </div>
 
  <nav class="h-screen float-right z-40 fixed text-red-800 right-0">
    <ul class="h-full flex flex-col justify-center align-center">
      <li 
      v-on:mouseover="mouseover('H')"
      v-on:mouseleave="mouseleave('H')"
      >
        <p :class="styleOpacityH">{{ $t("menu.accueil") }}</p><a href="#home"><div class="nav-round"></div></a></li>
      <li 
      v-on:mouseover="mouseover('A')"
      v-on:mouseleave="mouseleave('A')">
        <p :class="styleOpacityA">{{ $t("menu.propos") }}</p><a href="#about"><div class="nav-round" ></div></a></li>
      <li 
      v-on:mouseover="mouseover('S')"
      v-on:mouseleave="mouseleave('S')">
        <p :class="styleOpacityS">{{ $t("menu.competences") }}</p><a href="#skills"><div class="nav-round" ></div></a></li>
      <li 
      v-on:mouseover="mouseover('P')"
      v-on:mouseleave="mouseleave('P')">
       <p :class="styleOpacityP">{{ $t("menu.projets") }}</p> <a href="#projects"><div class="nav-round"></div></a></li>
      <li 
      v-on:mouseover="mouseover('C')"
      v-on:mouseleave="mouseleave('C')">
        <p :class="styleOpacityC">{{ $t("menu.contact") }}</p><a href="#contact"><div class="nav-round"></div></a></li>
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
      opcacityH: 'opacity-0 hidden',
      opcacityA: 'opacity-0 hidden',
      opcacityS: 'opacity-0 hidden',
      opcacityP: 'opacity-0 hidden',
      opcacityC: 'opacity-0 hidden',
    }
  },
  methods: {
      mouseover: function(event){
        if (event === 'H'){
          this.opcacityH = 'opacity-100 font-bold block'
        }
        else if (event === 'A') {
          this.opcacityA = 'opacity-100 font-bold block'
        }
        else if (event === 'S') {
          this.opcacityS = 'opacity-100 font-bold block'
        }
        else if (event === 'P') {
          this.opcacityP = 'opacity-100 font-bold block'
        }
        else {
          this.opcacityC = 'opacity-100 font-bold block'
        }
      },    
      mouseleave: function(event){
        if (event === 'H'){
          this.opcacityH = 'opacity-0 hidden'
        }
        else if (event === 'A') {
          this.opcacityA = 'opacity-0 hidden'
        }
        else if (event === 'S') {
          this.opcacityS = 'opacity-0 hidden'
        }
        else if (event === 'P') {
          this.opcacityP = 'opacity-0 hidden'
        }
        else {
          this.opcacityC = 'opacity-0 hidden'
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
nav ul li p{
  @apply transition ease-out duration-700
}

li{
  @apply flex justify-end items-center
}
.nav-round{
  @apply rounded-full bg-redjapan mx-3 my-2 transition ease-out duration-700 h-3 w-3
}

.active {
  @apply h-5 w-5 
}
</style>