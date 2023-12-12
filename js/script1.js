const scene = new THREE.Scene();

//PersectiveCamera(angle,scene ratio(width/height of scene),nearest vision,farest vision)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//set Position of camera
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
//set height and width of scene (now same as camera)
renderer.setSize(window.innerWidth, window.innerHeight);

//add to document body to display
document.body.appendChild(renderer.domElement);

//create Shape
//BoxGeometry(height,width,depth)
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// CapsuleGeometry()
// const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
// CircleGeometry()
const geometry = new THREE.CircleGeometry(1,6);
// ConeGeometry()
// const geometry = new THREE.ConeGeometry(2, 2, 32);
// CylinderGeometry()
// const geometry = new THREE.CylinderGeometry(1, 1, 1);

//set material for geometry (color)
const material = new THREE.MeshBasicMaterial({ color: "green" });
//create mashObject
//Mesh(shape,material)
// const cube = new THREE.Mesh(geometry, material);
//Line(shape,material)
const cube = new THREE.Line(geometry, material);

//add shape into scene
scene.add(cube);

//set animation properties
// cube.position.x = 4;
// cube.position.y = 2;
// cube.rotation.x = 10;
// cube.rotation.y = 10;

//show content (connect camera and scene)
// renderer.render(scene, camera);

// let flag = true;
let q = 0;

function animate() {
  // if (cube.position.x < -5) {
  //   flag = true;
  // } else if (cube.position.x > 5) {
  //   flag = false;
  // }
  // if (flag) {
  //   cube.position.x += 0.1;
  // } else {
  //   cube.position.x -= 0.1;
  // }
  cube.position.x = 5 * Math.sin((q += 0.01));

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
// requestAnimationFrame(animate);
// setInterval(animate, 100);
