import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
export function initScene(){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(30,50,20);
    dirLight.castShadow = true;
    scene.add(dirLight);
    const floorGeo = new THREE.BoxGeometry(100,1,60);
    const floorMat = new THREE.MeshStandardMaterial({color:0x222222});
    const floor = new THREE.Mesh(floorGeo,floorMat);
    floor.position.y=-0.5;
    floor.receiveShadow=true;
    scene.add(floor);
    return { scene, floor };
}