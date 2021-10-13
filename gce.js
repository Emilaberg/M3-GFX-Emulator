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

    putPixel(x, y, color) {
        this.plane[y*this.width+x] = color;
        return;
    }

    line(x1, y1, x2, y2, color) { 
        plane.moveTo(x1, y1);
        plane.lineTo(x2, y2);
        plane.fillStyle = color;
        plane.stroke();
        return;
    }

    circle(x, y, r, color) {
        plane.beginPath();
        plane.arc(x, y, r, 0, 2 * Math.PI);
        plane.fillStyle = color;
        plane.stroke();
        return;
    }

    rectangle(x1, y1, x2, y2, color) { 
        plane.fillRect(x1, y1, x2, y2);
        plane.fillStyle = color;
        return;
    }

    clear(color) { 
        if(color > 255 || color < 0) { 
            alert("color range error");
            return;
        }

        for (let i = 0; i<this.width*this.height; i++) {
            this.plane[i] = color;
            return;
        }
    }

    resize(x, y) { 
    // Event handler to resize the canvas when the document view is changed
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
    plane.width = window.innerWidth;
    plane.height = window.innerHeight;

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

// render(); {
//     return;
// }