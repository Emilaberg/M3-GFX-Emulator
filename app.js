let elements = {
    X1: {
        "name": "X1",
        "type": "text",
        "placeholder": "X Start Coordinate",
    },
    X2: {
        "name": "X2",
        "type": "text",
        "placeholder": "X End Coordinate",
    },
    Y1: {
        "name": "Y1",
        "type": "text",
        "placeholder": "Y Start Coordinate",
    },
    Y2: {
        "name": "Y2",
        "type": "text",
        "placeholder": "X End Coordinate",
    },
    RADIUS: {
        "name": "Radius",
        "type": "text",
        "placeholder": "Circle Radius",
    },
    COLOR: {
        "name": "Color",
        "type": "text",
        "placeholder": "Color from 0 to 255",
    },
    TEXT: {
        "name": "Text",
        "type": "text",
        "placeholder": "Some text",
    },
};

let arr = [
    // Pixel
    [ 'X1', 'Y1', 'COLOR' ],
    // Line
    [ 'X1' , 'Y2', 'X2', 'Y2', 'COLOR' ],
    // Circle
    [ 'X1', 'Y1', 'RADIUS', 'COLOR' ],
    // Rectangle
    [ 'X1', 'Y2', 'X2', 'Y2', 'COLOR' ],
    // Text
    [ 'X1', 'Y1', 'TEXT', 'COLOR' ],
    // Resize
    [ 'X1', 'Y1'],
    // Clear
    ['COLOR'],
];


function RenderInputs(func)
{
    let el = document.getElementById('inputs');

    el.innerHTML = '';

    for (let i = 0; i < arr[func].length; i++)
    {
        el.innerHTML += `<input class="input" name="${elements[arr[func][i]].name}" placeholder="${elements[arr[func][i]].placeholder}" type="${elements[arr[func][i]].type}">`;
    }
}