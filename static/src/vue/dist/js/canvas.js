// var canvasLeft = document.getElementById('canvas-left');
var canvasRight = document.getElementById('canvas-right');

window.addEventListener('resize', resizeCanvas, false);


function resizeCanvas(canvas, num_cross, num_rows, width, height) {
    canvas.width = (window.innerWidth * width) / 100;
    canvas.height = (window.innerHeight * height) / 100;
    draw(canvas, num_cross, num_rows, width, height)
    console.log((window.innerWidth * width) / 100)
    console.log((window.innerHeight * height) / 100)
}

function draw(canvas, num_cross, num_rows, width, height){
    var ctx = canvas.getContext('2d');
    // ctx.strokeStyle = "#34ebc6";
    ctx.strokeStyle = "#00000";

    let mouseX;
    let mouseY;

    let crosses = [];
    let cross_size = 0;
    let max_cross_size = 8;
    let cross_rows = num_rows; 
    let cross_num = num_cross;
    let linewidth = 0;
    let cross_spacing_ver = (canvas.height - (cross_size * 4)) / cross_rows
    let cross_spacing = (canvas.width - (cross_size * 4)) / cross_num;

    function drawplus(x, y, size, text, textX, textY) {
        ctx.beginPath();
        ctx.lineWidth = linewidth;
        ctx.moveTo(x , y - size);
        ctx.lineTo(x , y + size);

        ctx.moveTo(x + size, y );
        ctx.lineTo(x - size, y );
        ctx.stroke();
    }

    for(var x = 0; x<cross_rows; x++) {
        let crosses_row = []
        let vertical_space = cross_spacing_ver * x
        for(var i = 0; i<cross_num; i++) {
                if(crosses_row.length > 0) {
                        prev_cross = crosses_row[i-1]
                        crosses_row.push({
                            x: prev_cross.x + (cross_size + cross_spacing), 
                            y: vertical_space,
                            size: cross_size,
                            original_x: prev_cross.original_x + (cross_size + cross_spacing), 
                            original_y: vertical_space,
                            speed: 0.25,
                            vx: 0.01,
                            vy: 0.01
                        })
                } else {
                    // first cross
                    crosses_row.push({ 
                        x:cross_size, 
                        y:vertical_space,
                        size: cross_size,
                        original_x: cross_size, 
                        original_y: vertical_space,
                    })
                }	
            }
        crosses.push(crosses_row)
    }

    for(var x = 0; x<cross_rows; x++) {
        for(var i = 0; i<crosses[x].length; i++) {
            let text = " " + crosses[x][i].x + " / " + crosses[x][i].y
            drawplus(crosses[x][i].x, crosses[x][i].y, crosses[x][i].size, text, crosses[x][i].x, crosses[x][i].y);
        }
    }

    function increaseCross(cross, max_cross_size, max_line_width){
        if(cross.size >= max_cross_size){
            cross.size = max_cross_size
        } else {
            cross.size++
        }
        
        if(cross.line_with >= max_line_width){
            cross.line_with = max_line_width
        } else {
            cross.line_with++				
        }
    }

    function updateCrosses() {
        for(var x = 0; x<cross_rows; x++) {
            let vertical_space = cross_spacing_ver * x
        for(var i = 0; i<crosses[x].length; i++) {
            
            let cross = crosses[x][i]
            var dis = Math.sqrt(Math.pow(cross.x - mouseX, 2) + Math.pow(cross.y - mouseY, 2));
            let range = 100
            if (dis < range) {
                increaseCross(cross, max_cross_size, linewidth);
                cross.y = vertical_space;
                
            } else if (dis > range && dis < range*2) {
                increaseCross(cross, max_cross_size/1.25, linewidth/1.25);
                cross.y = vertical_space;
            } else if (dis > range*2 && dis < range*2.5) {
                increaseCross(cross, max_cross_size/2, linewidth/2);
                if(cross.x > mouseX){
                    cross.y++
                } else {
                    cross.y--
                }
            } else {
                cross.size = 0
                cross.y = vertical_space;
            }
        }
    }
    }

    function drawCrosses(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var x = 0; x<cross_rows; x++) {
            for(var i = 0; i<crosses[x].length; i++) {
                drawplus(crosses[x][i].x, crosses[x][i].y, crosses[x][i].size);
            }
        }	
    }
    canvas.addEventListener("mousemove", function(e) {
            var rect = canvas.getBoundingClientRect();
            mouseX = e.pageX - rect.left;
            mouseY = e.pageY - rect.top;
            updateCrosses();
            drawCrosses();
    });
}

// draw(canvasLeft, 10, 14, 55, 100);
draw(canvasRight, 40, 9, 100, 100);
// resizeCanvas(canvasLeft, 10, 14, 55, 100);
resizeCanvas(canvasRight, 40, 9, 100, 100);
