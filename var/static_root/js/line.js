window.requestAnimFrame = (function(){ 
    return  window.requestAnimationFrame       ||  
            window.webkitRequestAnimationFrame ||  
            window.mozRequestAnimationFrame    ||  
            window.oRequestAnimationFrame      ||  
            window.msRequestAnimationFrame     ||  
        function( callback ){ 
            window.setTimeout(callback, 1000 / 60); 
        }; 
})(); 

let dimensions = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const particles = [];
const particle_num = 2000;
let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let moving; 

function loop() { 
    window.requestAnimFrame(loop); 
    drawLines();
    updateAccentLines()
} 

window.requestAnimFrame(loop); 

canvas.height = dimensions[1]
canvas.width = dimensions[0]

let lines = [];
let accent_lines = [];
let accent_lines2 = [];
let accent_lines3 = [];
let accent_lines4 = [];
let accent_line_slow = 0.12;
let accent_line_fast = 0.20;
let grid = [];
let vertical_lines = [];
let line_num = 30;
let accent_line_num = 3;
let line_size = canvas.width/line_num;
const initial_positon = canvas.height/1.20
let grid_rows = 20;
let maximum_range_inclination = [];
let max_incline = 150;
let range = line_size;
const maximum_range = range * 7;
let mouse_spacing = 50;
let isPressed = false;
let line_fall_speed_min = 1.5;
let line_fall_speed_max = 1.8;
let hue = random(0, 360);
let light = random(80, 100);
let color = `hsla(${hue},100%,${light}%,1)`;


function random(min, max) { 
    return (Math.random() * (max - min + 1) + min)
}

let Line = class {
    constructor(startX, startY, endX, endY, color, sensitivity) {
        this.originalX = startX;
        this.originalY = startY;
        this.x = startX;
        this.y = startY;
        this.endX = endX;
        this.endY = endY;
        this.size = line_size;
        this.opacity = 1;
        this.color = color;
        this.maximum_range_inclination = 0;
        this.sensitivity = sensitivity;
        this.life = 50;
        this.speed = 10;
        this.accent_line_slow = random(-1.5, 1.5);
        this.accent_line_fast = random(-3, 3);
    }
}

function createLines(mouseX, mouseY , endX, endY, color, sensitivity){
    let prev_line = lines[lines.length-1]
    if(prev_line) {
        lines.push(new Line(prev_line.endX, prev_line.endY , endX, endY, color, sensitivity));
    } else {
        lines.push(new Line(mouseX, mouseY , endX, endY, color, sensitivity));
    }
}

function createAccentLines(mouseX, mouseY , endX, endY, color, sensitivity) {
    let main_arr_last_line = lines[lines.length-1]
    if(main_arr_last_line) {
        accent_lines.push(new Line(main_arr_last_line.x, main_arr_last_line.y, main_arr_last_line.endX, main_arr_last_line.endY , color, sensitivity));
    } 
}

function createAccentLines2(mouseX, mouseY , endX, endY, color, sensitivity) {
    let main_arr_last_line = lines[lines.length-1]
    if(main_arr_last_line) {
        accent_lines2.push(new Line(main_arr_last_line.x, main_arr_last_line.y, main_arr_last_line.endX, main_arr_last_line.endY , color, sensitivity));
    } 
}

function createAccentLines3(mouseX, mouseY , endX, endY, color, sensitivity) {
    let main_arr_last_line = lines[lines.length-1]
    if(main_arr_last_line) {
        accent_lines3.push(new Line(main_arr_last_line.x, main_arr_last_line.y, main_arr_last_line.endX, main_arr_last_line.endY , color, sensitivity));
    } 
}

function createAccentLines4(mouseX, mouseY , endX, endY, color, sensitivity) {
    let main_arr_last_line = lines[lines.length-1]
    if(main_arr_last_line) {
        accent_lines4.push(new Line(main_arr_last_line.x, main_arr_last_line.y, main_arr_last_line.endX, main_arr_last_line.endY , color, sensitivity));
    } 
}

function updateAccentLines() {
    for(var i in accent_lines) {
        let line = accent_lines[i];

        line.x += (line.life * 0.07)
        line.endX += (line.life * 0.07)
        if (line.life < 90/3 ) {
            line.x -= (line.life * 0.20)
            line.endX  -= (line.life * 0.20)
        }
    }

    for(var i in accent_lines2) {
        let line = accent_lines2[i];

        line.x += (line.life * 0.10)
        line.endX += (line.life * 0.10)
        if (line.life < 90/3 ) {
            line.x -= (line.life * 0.28)
            line.endX  -= (line.life * 0.28)
        }
    }
    

    for(var i in accent_lines3) {
        let line = accent_lines3[i];

        line.x -= (line.life * 0.07)
        line.endX -= (line.life * 0.07)
        if (line.life < 90/3 ) {
            line.x += (line.life * 0.20)
            line.endX += (line.life * 0.20)
        }
    }
    

    for(var i in accent_lines4) {
        let line = accent_lines4[i];

        line.x -= (line.life * 0.10)
        line.endX -= (line.life * 0.10)
        if (line.life < 90/3 ) {
            line.x += (line.life * 0.28)
            line.endX += (line.life * 0.28)
        }
    }
}

function killLines(line, array, is_main_line=false) {
    line.life--
    let index = array.indexOf(line);

    if(line.life <= 0) {
        array.splice(index, 1);
    }
}

function drawLines() {
    ctx.fillStyle = "black"; 
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(var i in lines) { 
        var line = lines[i]; 
        ctx.beginPath();
        ctx.moveTo(line.x, line.y );
        ctx.lineTo(line.endX, line.endY );
        ctx.strokeStyle = color;
        ctx.stroke();
        killLines(line, lines, true)
    }  
    
    for(var i in accent_lines) { 
        var accent_line = accent_lines[i]; 
        ctx.beginPath();
        ctx.moveTo(accent_line.x, accent_line.y);
        ctx.lineTo(accent_line.endX, accent_line.endY );
        ctx.strokeStyle = color;
        ctx.stroke();
        killLines(accent_line, accent_lines)
    }  

    for(var i in accent_lines2) { 
        var accent_line = accent_lines2[i]; 
        ctx.beginPath();
        ctx.moveTo(accent_line.x, accent_line.y);
        ctx.lineTo(accent_line.endX, accent_line.endY );
        ctx.strokeStyle = color;
        ctx.stroke();
        killLines(accent_line, accent_lines2)
    }  

    for(var i in accent_lines3) { 
        var accent_line = accent_lines3[i]; 
        ctx.beginPath();
        ctx.moveTo(accent_line.x, accent_line.y);
        ctx.lineTo(accent_line.endX, accent_line.endY );
        ctx.strokeStyle = color;
        ctx.stroke();
        killLines(accent_line, accent_lines3)
    }  

    for(var i in accent_lines4) { 
        var accent_line = accent_lines4[i]; 
        ctx.beginPath();
        ctx.moveTo(accent_line.x, accent_line.y);
        ctx.lineTo(accent_line.endX, accent_line.endY );
        ctx.strokeStyle = color;
        ctx.stroke();
        killLines(accent_line, accent_lines4)
    }  
}

function updateLines() {
    for (i=0; i<line_num; i++) {
       let line = lines[i];
       let prev_line = lines[i-1]
       if(prev_line) {
        line.x = prev_line.endX;
        line.endX = prev_line.endX + 50 + (i*1.5);
        line.y = prev_line.endY;
        line.endY = mouseY + 50 + (i*1.5);
       } else {
        line.x = mouseX + 50;
        line.endX = mouseX + 50 + (i*1.5);
        line.y = mouseY + 50;
        line.endY = mouseY + 50 + (i*1.5);
       }
    }
    return;
}

canvas.addEventListener("mousemove", function(e) {
    var rect = canvas.getBoundingClientRect();
    mouseX = e.pageX - rect.left;
    mouseY = e.pageY - rect.top;

    createLines(mouseX, mouseY , mouseX + line_size, mouseY + line_size);
    createAccentLines(mouseX, mouseY , mouseX + line_size, mouseY + line_size);
    createAccentLines2(mouseX, mouseY , mouseX + line_size, mouseY + line_size);
    createAccentLines3(mouseX, mouseY , mouseX + line_size, mouseY + line_size);
    createAccentLines4(mouseX, mouseY , mouseX + line_size, mouseY + line_size);
});