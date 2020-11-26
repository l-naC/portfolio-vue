<template>
    <div class="w-screen h-screen bg-black flex items-center justify-center flex-col text-white" id="view">
        <canvas class="text-center"  id="canvas"></canvas>
        <div class="text-center text-white absolute">
            <h1 class="uppercase text-5xl font-black">Lena Clavier</h1>
            <h2 class="text-3xl font-light">Développeur web et Chef de projet digital</h2>
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
        // let adjustX = 20
        // let adjustY = 0

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
                // this.baseX = this.x
                // this.baseY = this.y
                // this.density = (Math.random() * 40) + 5
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

                // let forceDirectionX = dx /distance
                // let forceDirectionY = dy /distance
                // let maxDistance = mouse.radius
                // let force = (maxDistance - distance) /maxDistance
                // let directionX = forceDirectionX * force * this.density
                // let directionY = forceDirectionY * force * this.density
                // if(distance < mouse.radius) {
                //     this.x -= directionX
                //     this.y -= directionY
                // }else{
                //     if (this.x != this.baseX) {
                //         let dx = this.x - this.baseX
                //         this.x -= dx/10

                //     }if (this.x != this.baseY) {
                //         let dy = this.y - this.baseY
                //         this.y -= dy/10
                //     }

                // }
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
                let color = "#8C5523"

                particleArray.push(new Particle(x, y, directionX, directionY, size, color))
            }
            // for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
            //     for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
            //         if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            //             let positionX = x + adjustX
            //             let positionY = y + adjustY
            //             particleArray.push(new Particle(positionX * 10, positionY * 10))
            //         }
            //     }
            // }
        }

        function animate() {
            requestAnimationFrame(animate)
            ctx.clearRect(0, 0, innerWidth, innerHeight)
            for (let i = 0; i < particleArray.length; i++) {
                // particleArray[i].draw()
                particleArray[i].update()
                
            }
            connect()
        }

        function connect() {
            let opacityValue= 1
            for(let a= 0; a < particleArray.length; a++) {
                for (let b = a; b < particleArray.length; b++) {
                    let distance = ((particleArray[a].x - particleArray[b].x) *
                    (particleArray[a].x - particleArray[b].x) +
                    (particleArray[a].y - particleArray[b].y) *
                    (particleArray[a].y - particleArray[b].y) )
                    if (distance < (canvas.width/7)*(canvas.height/7)) {
                        opacityValue = 1 - (distance/20000)
                        ctx.strokeStyle = 'rgba(255, 255, 255,' + opacityValue + ')'
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particleArray[a].x, particleArray[a].y)
                        ctx.lineTo(particleArray[b].x, particleArray[b].y)
                        ctx.stroke()
                    }
                    // let dx = particleArray[a].x - particleArray[b].x
                    // let dy = particleArray[a].y - particleArray[b].y
                    // let distance = Math.sqrt(dx * dx + dy * dy)
                    // opacityValue = 1 - (distance/50)
                    // ctx.strokeStyle = 'rgba(255, 255, 255,' + opacityValue + ')'
                    // if(distance < 15) {
                    //     ctx.lineWidth = 2
                    //     ctx.beginPath()
                    //     ctx.moveTo(particleArray[a].x, particleArray[a].y)
                    //     ctx.lineTo(particleArray[b].x, particleArray[b].y)
                    //     ctx.stroke()
                    // }
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
    },
}
</script>

<style scoped>

</style>