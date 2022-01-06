import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth,window.innerHeight);
camera.position.setZ(60);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(19,3,16,100);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347});
const torus = new THREE.Mesh(geometry,material);

scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);


const controls = new OrbitControls(camera, renderer.domElement);



const spaceTexture = new THREE.TextureLoader().load('media/blackhole.jpeg');
scene.background = spaceTexture;





function animate(){
requestAnimationFrame(animate);

torus.rotation.x += 0.01;
torus.rotation.y += 0.005;
torus.rotation.z += 0.01;


controls.update();

renderer.render(scene,camera);
}

animate()