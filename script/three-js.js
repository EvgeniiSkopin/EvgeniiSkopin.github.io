$(document).ready(() => {

    let scene = new THREE.Scene();
    let mouseX = 0;
    let mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);

    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let geometry = new THREE.CubeGeometry(1.5, 1.5, 1.5, 10, 10, 10);

    let material = new THREE.ParticleBasicMaterial({ size: 0.02, color: 868686 });
    
    let mesh = new THREE.ParticleSystem(geometry, material);

    //let cube = new THREE.Mesh(geometry, mesh);

    scene.add(mesh);

    

    //   var mousePosition = {
    //     x: 0.0,
    //     y: 1.0,
    // };
    // var v2MousePosition = new THREE.Vector2(mousePosition.x, mousePosition.y);

    //   let material = new THREE.ShaderMaterial({
    //     uniforms: {
    //         color1: {type: 'v3', value: new THREE.Vector3(10, 10, 10)},
    //         color2: {type: 'v3', value: new THREE.Vector3(55, 55, 55)},
    //         u_time: {type: 'f', value: 0},
    //         u_shapeSize: {type: 'v2', value: new THREE.Vector2(38.0, 38.0)},
    //         u_mousePosition: {type: 'v2', value: v2MousePosition},
    //     },
    //     fragmentShader: $('#fragmentShaderCenterPiece').text(),
    //     vertexShader: $('#vertexShaderCenterPiece').text(),
    // });
    // let cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);


    //group = new THREE.Group();
    //scene.add( group );

    //var helper = new THREE.BoxHelper( new THREE.Mesh( new THREE.BoxBufferGeometry( 1.5, 1.5, 1.5 ) ) );
    //helper.material.color.setHex( 0x424141 );
    //helper.material.blending = THREE.AdditiveBlending;
    //helper.material.transparent = true;
    //group.add( helper );

    camera.position.z = 2;

    render = () => {
        camera.position.x = 2;
        camera.position.y = -2;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    onDocumentMouseMove = (event) => {
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

    document.addEventListener('mousemove', onDocumentMouseMove, false);
});