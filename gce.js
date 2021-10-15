const canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

class Display {

    constructor() {
        this.width = 100
        this.height = 100
        this.plane = new Array(this.width * this.height)
        this.zoom = 2
        this.lock = false
    }

    putPixel(x, y, color) {
        if (x >= this.width) {
            x = this.width - 1
        }
        this.plane[y * this.width + x] = color;
    }

    line(x1, y1, x2, y2, color) {
        if (x1 > this.width || x2 > this.width || y1 > this.height || y2 > this.height) {
            alert("line point is outside of display's plane");
            return;
        }
        let diffX = x2 - x1;
        let diffY = y2 - y1;

        // The pixels we change should not be further than 1 pixel apart:
        // (So distance is also number of pixels that we need to change)
        // let distance = Math.sqrt(diffX * diffX + diffY * diffY);
        let distance = Math.abs(diffX) > Math.abs(diffY) ? Math.abs(diffX) : Math.abs(diffY);

        diffX /= distance;
        diffY /= distance;
        for (let i = 0; i <= distance; i++) {
            this.putPixel(Math.round(x1 + diffX * i), Math.round(y1 + diffY * i), color);
        }
    }

    circle(x, y, r, color) {
        
    }

    rectangle(x1, y1, x2, y2, color) {
        if (x1 > this.width || x2 > this.width || y1 > this.height || y2 > this.height) {
            alert("rectangle point is outside of display's plane");
            return;
        }

        // top line - ─
        this.line(x1, y1, x2, y1, color)

        // right line - |
        this.line(x2, y1, x2, y2, color)

        // bottom line - ─
        this.line(x1, y2, x2, y2, color)

        // left line - |
        this.line(x1, y1, x1, y2, color)
    }

    clear(color) {
        if (color > 255 || color < 0) {
            alert("color range error");
            return;
        }

        for (let i = 0; i < this.width * this.height; i++) {
            this.plane[i] = color;
        }
    }

    resize(x, y) {
        this.width = x;
        this.height = y;
        this.plane = new Array(this.width * this.height)
    }

    textOut(x, y, color, string) {

    }

    scrollLeft() {

    }

    scrollRight() {

    }

    scrollUp() {

    }

    scrollDown() {

    }

    pscrollLeft() {

    }

    pscrollRight() {

    }

    pscrollUp() {

    }

    pscrollDown() {

    }
}

let display = new Display();
function render() {
    let xZoom = Math.round(canvas.width / display.width);
    let yZoom = Math.round(canvas.height / display.height);
    let smallestZoom = xZoom < yZoom ? xZoom : yZoom;
    display.zoom = smallestZoom;

    let outputWidth = display.width * display.zoom;
    let outputHeight = display.height * display.zoom;
    let imageData = context.getImageData(0, 0, outputWidth, outputHeight)

    for (let y = 0; y < outputHeight; y++) {
        let planeWidth = display.width * Math.floor(y / display.zoom);
        for (let x = 0; x < outputWidth; x++) {
            let planeOffset = Math.floor(x / display.zoom) + planeWidth;
            let color = display.plane[planeOffset] || 0;

            let offset = x + y * outputWidth;
            imageData.data[offset * 4] = color; // R
            imageData.data[offset * 4 + 1] = color; // G
            imageData.data[offset * 4 + 2] = color; // B
            imageData.data[offset * 4 + 3] = 255; // A
        }
    }

    context.putImageData(imageData, 0, 0)
}
setInterval(render, 1000 / 20);

// Event handler to resize the canvas when the document view is changed
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    display.resize(canvas.width, canvas.height)

    context.clearRect(0, 0, canvas.width, canvas.height);
    // Redraw everything after resizing the window
    render();
}