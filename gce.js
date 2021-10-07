// Testing many snippets of code, 
// adjustments necessary for the program to work would be implemented in a later version.

const canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth-100;
canvas.height = window.innerWidth-100;

let plane = canvas.getcontext('2d');
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        plane.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                        Math.floor(255 - 42.5 * j) + ', 0)';
        plane.fillRect(j * 25, i * 25, 25, 25);
    }
}

class Display {

    constructor() {
        width (pixels)
        height (pixels)
        plane (width, height)
        zoom ()
        lock (bool)
    }

    putPixel( x, y, color ) { 
        let canvas = document.querySelector("#canvas");
        let ctx = canvas.getContext("2d");
        ctx.moveTo(x, y);
        ctx.fillStyle = color;
        return;
    }

    line( x1, y1, x2, y2, color ) { 
        let canvas = document.querySelector("#canvas");
        let ctx = canvas.getContext("2d");
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.fillStyle = color;
        ctx.stroke();
        return;
    }

    circle( x, y, r, color ) {
        let canvas = document.querySelector("#canvas");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.stroke();
        return;
    }

    rectangle( x1, y1, x2, y2, color ) { 
        let canvas = document.querySelector("#canvas");
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect = (x1, y1, x2, y2);
        return;
    }

    clear( color ) { 
        color = rgb(0, 0, 0);
        return;
    }

    resize( x, y ) { 
    let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    // Event handler to resize the canvas when the document view is changed
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Redraw everything after resizing the window
    draw(); 
        }
        return;
    }

    textOut( x, y, color, string ) { 
        return;
    }

    scrollLeft() { 
        return;
    }

    scrollRight() { 
        return;
    }

    scrollUp() { 
        return;
    }

    scrollDown() { 
        return;
    }

    pscrollLeft() { 
        return;
    }

    pscrollRight() { 
        return;
    }

    pscrollUp() { 
        return;
    }

    pscrollDown() { 
        return;
    }
}