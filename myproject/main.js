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



const geometry = new THREE.CylinderGeometry( 10, 10, 60, 10 );
const material = new THREE.MeshStandardMaterial( {color: 0x807689} );
const cylinder = new THREE.Mesh( geometry, material );
cylinder.position.set(50,0,0)
cylinder.rotation.x = 0.5;
scene.add( cylinder );



const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);
scene.add(pointLight);

//const ambientLight = new THREE.AmbientLight(0xffffff);
//scene.add(ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);


const controls = new OrbitControls(camera, renderer.domElement);



const spaceTexture = new THREE.TextureLoader().load('media/mars.jpg');
scene.background = spaceTexture;





function animate(){
requestAnimationFrame(animate);

//cylinder.rotation.x += 0.01;
cylinder.rotation.y += 0.005;
//cylinder.rotation.z += 0.01;


controls.update();

renderer.render(scene,camera);
}

animate()