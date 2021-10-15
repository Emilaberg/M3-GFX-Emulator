// C
function c(x, y, w, h, color) {
    // Outer line top - ─
    display.line(x + 0, y + 0, x + w, y, color || 255)

    // Outer line left - |
    display.line(x + 0, y + 0, x + 0, y + h * (100 / 110), color || 255)

    // Outer line bottom - |
    display.line(x + 0, y + 0, x + 0, y + h * 1, color || 255)

    // Outer line bottom - ─
    display.line(x + w * (10 / 100), y + h * (100 / 110), x + w, y + h * (100 / 110), color || 255)

    // Inner line top - ─
    display.line(x + w * (10 / 100), y + h * (10 / 110), x + w, y + h * (10 / 110), color || 255)

    // Inner line - |
    display.line(x + w * (10 / 100), y + h * (10 / 110), x + w * (10 / 100), y + h * (100 / 110), color || 255)

    // Inner line bottom - ─
    display.line(x + 0, y + h, x + w, y + h, color || 255)

}


// A
function a(x, y, w, h) {
    function line(x1, y1, x2, y2, color) {
        // Remove hardcoded offset:
        x1 -= 120;
        x2 -= 120;

        // Letter coordinate is between 0 and 1:
        x1 /= 50;
        x2 /= 50;
        y1 /= 110;
        y2 /= 110;

        // Scale letter with specified height and width:
        y1 *= h;
        y2 *= h;
        x1 *= w;
        x2 *= w;

        display.line(x + x1, y + y1, x + x2, y + y2, color);
    }

    // Outer line - /
    line(120, 110, 170, 0, 255)

    // Outer line - \
    line(170, 0, 220, 110, 255)

    // Inner line - /
    line(130, 110, 170, 20, 255)

    // Inner line - \
    line(170, 20, 210, 110, 255)

    // Outer line - ─
    line(150, 65, 188, 65, 255)

    // Inner line - ─
    line(155, 55, 188, 55, 255)
}


// N
function n(x, y, w, h) {
    function line(x1, y1, x2, y2, color) {
        // Remove hardcoded offset:
        x1 -= 240;
        x2 -= 240;

        // Letter coordinate is between 0 and 1:
        x1 /= 100;
        x2 /= 100;
        y1 /= 110;
        y2 /= 110;

        // Scale letter with specified height and width:
        y1 *= h;
        y2 *= h;
        x1 *= w;
        x2 *= w;

        display.line(x + x1, y + y1, x + x2, y + y2, color);
    }

    // Outer line left - |
    line(240, 110, 240, 0, 255)
    
    // Outer line middle - \
    line(240, 0, 340, 110, 255)
    
    // Outer line right - |
    line(340, 110, 340, 0, 255)
    
    // Inner line bottom - |
    line(250, 110, 250, 30, 255)
    
    // Inner line bottom - \
    line(250, 30, 330, 110, 255)
    
    // Inner line top - |
    line(330, 0, 330, 85, 255)
    
    // Inner line top - \
    line(330, 85, 250, 0, 255)

}


// V
function v(x, y, w, h) {
    function line(x1, y1, x2, y2, color) {
        // Remove hardcoded offset:
        x1 -= 360;
        x2 -= 360;

        // Letter coordinate is between 0 and 1:
        x1 /= 100;
        x2 /= 100;
        y1 /= 110;
        y2 /= 110;

        // Scale letter with specified height and width:
        y1 *= h;
        y2 *= h;
        x1 *= w;
        x2 *= w;

        display.line(x + x1, y + y1, x + x2, y + y2, color);
    }

    // Outer line - \
    line(360, 0, 410, 110, 255)

    // Outer line - /
    line(410, 110, 460, 0, 255)

    // Inner line - \
    line(370, 0, 410, 93, 255)

    // Inner line - /
    line(410, 93, 450, 0, 255)
}


// S
function s(x, y, w, h) {
    function line(x1, y1, x2, y2, color) {
        // Remove hardcoded offset:
        x1 -= 600;
        x2 -= 600;

        // Letter coordinate is between 0 and 1:
        x1 /= 80;
        x2 /= 80;
        y1 /= 110;
        y2 /= 110;

        // Scale letter with specified height and width:
        y1 *= h;
        y2 *= h;
        x1 *= w;
        x2 *= w;

        display.line(x + x1, y + y1, x + x2, y + y2, color);
    }

    // Outer line top - ─
    line(680, 0, 600, 0, 255)

    // Outer line top - |
    line(600, 0, 600, 55, 255)

    // Outer line middle - ─
    line(600, 55, 680, 55, 255)

    // Outer line bottom - |
    line(680, 55, 680, 110, 255)

    // Outer line bottom - ─
    line(680, 110, 600, 110, 255)

    // Inner line top - ─
    line(680, 10, 610, 10, 255)

    // Inner line top - |
    line(610, 10, 610, 45, 255)

    // Inner line middle top - ─
    line(610, 45, 670, 45, 255)

    // Inner line middle bottom - ─
    line(610, 65, 670, 65, 255)

    // Inner line bottom - |
    line(670, 65, 670, 100, 255)

    // Inner line bottom - ─
    line(670, 100, 600, 100, 255)
}

function writeCanvas(x, y, w = 680, h = 110) {
    c(x + 0, y + 0, w * (100 / 680), h);
    a(x + w * (120 / 680), y + 0, w * (50 / 680), h);
    n(x + w * (240 / 680), y + 0, w * (100 / 680), h);
    v(x + w * (360 / 680), y + 0, w * (100 / 680), h);
    a(x + w * (480 / 680), y + 0, w * (50 / 680), h);
    s(x + w * (600 / 680), y + 0, w * (80 / 680), h);
}