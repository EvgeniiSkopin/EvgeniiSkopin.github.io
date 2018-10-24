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

  let geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
  let material = new THREE.MeshBasicMaterial({ color: 868686 });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

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