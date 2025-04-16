
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;
let objToRender = 'coin';

const loader = new GLTFLoader();

loader.load(
    `./models/${objToRender}/scene.gltf`,
    function (gltf) {
      //If the file is loaded, add it to the scene
      object = gltf.scene;
      object.scale.set(40, 40, 40);
      scene.add(object);
    },
    function (xhr) {
        //While it is loading, log the progress
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        //If there is an error, log it
        console.error(error);
      }
    );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("coinModel").appendChild(renderer.domElement);

camera.position.z = objToRender === "coin" ? 25 : 500;


const topLight = new THREE.DirectionalLight(0xffffff, 2); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "coin" ? 5 : 1);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);
    if (object && objToRender === "coin") {
        object.rotation.y = -3 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
      }
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    
      document.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }

      animate();
