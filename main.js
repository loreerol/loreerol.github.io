const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            
            const randomNumber = (max) =>{
                return Math.floor(Math.random() * max);
            }
            const getRandomColor = () => {
                const rgb = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
                return rgb;
            }
            
            canvas.addEventListener('mousemove', (e)=>{
            const x = e.offsetX;
            const y = e.offsetY;
            
              
            ctx.beginPath();
                ctx.fillStyle = getRandomColor();
                ctx.arc(x,y,25,0, Math.PI*2);
                ctx.fill();
                ctx.closePath();
            
            });
            