let app = new Vue({
    el: '#c191116',
    data: {
        particles: [],
        maxP: 10,
        active: true,
        canvas: null,
        context: null,
        timer: null,
        size: 30
    },
    created: function() {
        this.canvas =document.getElementById("MyCanvas");
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = 'cyan';
        this.context.fillRect(0,0,30,30);
        for (let i = 0; i < this.maxP; i++) {
            for (let j = 0; j < this.maxP; j++) {
                particle = {
                    x:    i,
                    y:    j,
                    vx:   0,
                    vy:   0,
                    colR: Math.random() * 256,
                    colG: Math.random() * 256,
                    colB: Math.random() * 256,
                    size: this.size
                }
                console.log(particle);
                this.particles.push(particle); 
            }
         }
    },
    methods: {
        pause: function() {
            this.active = false;
            clearTimeout(this.timer);
        },
        render: function() {
            A = this.size/2;
            B = this.size*Math.sqrt(3)/2;
            W = this.size*2;
            H = B*2;
            this.canvas =document.getElementById("MyCanvas");
            this.context = this.canvas.getContext('2d');
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (let i = 0; i < this.maxP*this.maxP; i++) {
                
                pt = this.particles[i];
                this.context.fillStyle = 'rgb('+pt.colR+','+pt.colG+','+pt.colB+')'
                ptX = pt.y*3*A + 2*A;
                let ptY = 0;
                if (pt.y % 2 == 0) {
                    ptY = 2*B + pt.x*2*B;
                } else {
                    ptY = B + pt.x*2*B;
                }
                pt.colR = Math.random() *256;
                pt.colG = Math.random() *256;
                pt.colB = Math.random() *256;
                fillHex(this.context, ptX, ptY, pt.size); 
                //console.warn(pt.x, pt.y, pt.size);
                pt.x = pt.x + pt.vx;
                pt.y = pt.y + pt.vy;
                if (pt.x < pt.size/2 || pt.x > this.canvas.width  - pt.size/2) { pt.vx = -pt.vx }
                if (pt.y < pt.size/2 || pt.y > this.canvas.height - pt.size/2) { pt.vy = -pt.vy }
            }
            this.timer = setTimeout(this.render, 150);
        }
    }            
})
