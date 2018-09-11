const randomNumber = (max) =>{
    return Math.floor(Math.random() * max);
            }
const getRandomColor = () => {
    const rgb = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
    return rgb;
            }

(function() {
    var htmlCanvas = document.getElementById('c'),
    context = htmlCanvas.getContext('2d');
    initialize();

    function initialize() {
        window.addEventListener('resize', resizeCanvas, false);
				resizeCanvas();
			}
									
    function redraw() {
        context.strokeStyle = 'white';
        context.lineWidth = '5';
        context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
			}
	
    function resizeCanvas() {
        htmlCanvas.width = window.innerWidth;
        htmlCanvas.height = window.innerHeight;
        redraw();
			}
		
		
    c.addEventListener('mousemove', (e)=>{
        const x = e.offsetX;
        const y = e.offsetY;
            
    context.beginPath();
        context.fillStyle = getRandomColor();
        context.arc(x,y,25,0, Math.PI*2);
        context.fill();
        context.closePath();
            
            });
    
    })();
