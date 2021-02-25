<template>
    <div class="fond w-screen h-screen flex items-center justify-center flex-col text-white" id="home">
        <canvas class="text-center"  id="canvas"></canvas>
        <div class="text-left text-white absolute m-4">
            <h1 class="uppercase text-4xl sm:text-4xl md:text-6xl lg:text-6xl">{{ $t("home.name") }}</h1>
            <h2 class="text-2xl sm:text-2xl md:text-4xl lg:text-4xl">{{ $t("home.titre") }}</h2>
        </div>
    </div> 
</template>

<script>

export default {
    name: "home-view",
    data() {
        return {
        }
    },
    mounted() {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        let particleArray

        let mouse = {
            x: null,
            y: null,
            radius: (canvas.height/80) * (canvas.width/80)
        }

        window.addEventListener('mousemove', function(event){
            mouse.x = event.x
            mouse.y = event.y
        })

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x
                this.y = y
                this.directionX = directionX
                this.directionY = directionY
                this.size = size
                this.color = color
            }

            draw(){
                ctx.beginPath()
                ctx.fillStyle = 'white'
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
                ctx.fill()
            }
            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY
                }
                let dx = mouse.x - this.x
                let dy = mouse.y - this.y
                let distance = Math.sqrt(dx * dx + dy * dy)

                if(distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 10
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 10
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 10
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 10
                    }
                }
                this.x += this.directionX
                this.y += this.directionY
                
                this.draw()
            }
        }

        function init() {
            particleArray = []
            let numberOfParticle = (canvas.height * canvas.width) /9000
            for (let i = 0; i < numberOfParticle*2; i++) {
                let size = (Math.random() * 5) + 1
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2)
                let directionX = (Math.random() * 5) - 2.5
                let directionY = (Math.random() * 5) - 2.5
                let color = "#e5c04f"

                particleArray.push(new Particle(x, y, directionX, directionY, size, color))
            }
        }

        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, innerWidth, innerHeight)
            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].update()
                
            }
            connect()
        }

        function connect() {
            //let opacityValue= 1
            for(let a= 0; a < particleArray.length; a++) {
                for (let b = a; b < particleArray.length; b++) {
                    let distance = ((particleArray[a].x - particleArray[b].x) *
                    (particleArray[a].x - particleArray[b].x) +
                    (particleArray[a].y - particleArray[b].y) *
                    (particleArray[a].y - particleArray[b].y) )
                    if (distance < (canvas.width/7)*(canvas.height/7)) {
                        //opacityValue = 1 - (distance/20000)
                        ctx.strokeStyle = 'rgba(255, 255, 255,0.2)'// + opacityValue + ')'
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particleArray[a].x, particleArray[a].y)
                        ctx.lineTo(particleArray[b].x, particleArray[b].y)
                        ctx.stroke()
                    }
                }
            }
        }

        window.addEventListener('resize', 
            function(){
                canvas.width = innerWidth
                canvas.height = innerHeight
                mouse.radius = ((canvas.height/80) * (canvas.width/80))
                init()
            }
        )

        window.addEventListener('mouseout', 
            function() {
                mouse.x = undefined
                mouse.y = undefined
            }
        )
        init()
        animate()
    }
}
</script>

<style scoped>
    .fond  {
        background-image: url('../assets/images/fond.webp');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>