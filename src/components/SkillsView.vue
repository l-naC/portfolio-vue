<template>
    <div class="w-screen lg:h-screen md:h-auto sm:h-auto bg-bluenight flex items-center justify-center text-center">
        <div class="w-full">
            <h2 class="font-bold text-xl text-white m-3 cursor-pointer" v-on:click="all()">All skills</h2>
            
            <div class="w-full flex flex-col lg:flex-row md:flex-row content-center justify-evenly flex-wrap my-5">
                <div v-for="(skill, index) in skillsData" :key="index">
                    <div class="card-default cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 m-3" v-on:click="show(index)">
                        <p class="card-text-default">{{ skill.name }}</p>
                    </div>
                </div>
            </div>
            <div class="w-4/5 flex flex-wrap justify-center m-auto" v-if="isDisplay">
                <p class="text-white font-thin text-xs m-5">{{array.description}}</p>
                <span v-for="item in array.outils" :key="item" class="transition duration-500 ease-in-out p-3" :style="textStyle">
                    {{ item }}
                </span>
            </div>
            <div class="w-4/5 flex-wrap justify-center m-auto hidden lg:flex md:flex" v-else>
                <template v-for="(skill, index) in skillsData" :key="index">
                    <span v-for="item in skillsData[index].outils" :key="item" class="transition duration-500 ease-in-out p-3" :style="textStyle">
                        {{ item }}
                    </span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import portfolioData from '../data/portfolio.json'
import _ from 'lodash'

export default {
    name: "skills-view",
    components: {
    },
    data() {
        return {
            skillsData: portfolioData.skills,
            array: '',
            color: 'color: white',
            isDisplay: false
        }
    },
    computed:{
        textStyle: function() {
            return this.color
        },
    },
    methods: {
        show: function (e) {
            this.isDisplay = true
            this.array = this.skillsData[e]
            this.array.outils = _.shuffle(this.array.outils)
            this.color = 'color: #e5c04f'
        },
        all: function () {
            this.isDisplay = false
            this.color = 'color: white'
        }
    }
}
</script>

<style scoped>
    .card-default {
        @apply w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center hover:bg-yellowstars hover:text-white 
    }

    .card-text-default {
        @apply text-sm
    }

    span{
        @apply lg:font-bold md:font-bold sm:font-semibold
    }
    


    span:nth-child(2n) {
        @apply lg:text-3xl md:text-3xl sm:text-2xl
    }
</style>