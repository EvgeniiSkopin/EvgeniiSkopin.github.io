initOnMouse();

function initOnMouse(){
    document.onmousemove=mousemove;
}

function mousemove(){
    let mouse_x = y = 0;
    if (document.attachEvent != null) {
        mouse_x = window.event.clientX;
        mouse_y = window.event.clientY;
    } else if (!document.attachEvent && document.addEventListener) {
        mouse_x = event.clientX;
        mouse_y = event.clientY;
    }
    document.getElementById('cursorX').innerHTML = "x: " + mouse_x;
    document.getElementById('cursorY').innerHTML = "y: " + mouse_y;

    document.getElementsByClassName('vert-line')[0].style.left = mouse_x + 20;
    document.getElementsByClassName('hor-line')[0].style.top = mouse_y - 20;
}

