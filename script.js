let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%$';

$(document).ready(function(){
    $("#box1 .colorLayer").animate({left:"0px"},300);
    $("#box1 .colorLayer").delay(400).animate({left:"425px"},300);
    $("#box1 .backGroundLayer").delay(800).animate({left:"0px"},500);
    $("#box1 .title").animate({left:"0px"});
    
    $("#box2 .colorLayer").delay(300).animate({left:"0px"},300);
    $("#box2 .colorLayer").delay(400).animate({left:"390px"},300);
    $("#box2 .backGroundLayer").delay(1100).animate({left:"0px"},500);
    $("#box2 .title").delay(300).animate({left:"0px"});
    
    document.addEventListener('mousemove', onDocumentMouseMove, false);

    var scene = new THREE.Scene();
    var mouseX = 0;
    var mouseX = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    var material = new THREE.MeshBasicMaterial({ color: 868686 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2;

    function render() {
        camera.position.x = 2;
        camera.position.y = -2;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 100;
        mouseY = (event.clientY - windowHalfY) / 100;

        document.getElementById('cursorX').innerHTML = "x: " + event.clientX;
        document.getElementById('cursorY').innerHTML = "y: " + event.clientY;

        document.getElementsByClassName('vert-line')[0].style.left = event.clientX + 20;
        document.getElementsByClassName('hor-line')[0].style.top = event.clientY - 20;

        camera.position.x = 2 + mouseX * .1;
        camera.position.y = -2 + mouseY * .1;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
    }

    render();
});

changeTab = (tab) => {
    $('.menu-underline').addClass('hidden');
    $(`.menu-underline.${tab}`).removeClass('hidden');
}
