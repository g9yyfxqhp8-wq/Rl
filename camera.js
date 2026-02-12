import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
export function initCamera(state){
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 2000);
    camera.position.set(0,6,-10);
    state.camera = { camera, update:function(){
        const pos = state.vehicle.chassisBody.position;
        camera.position.lerp(new THREE.Vector3(pos.x,pos.y+6,pos.z-10),0.1);
        camera.lookAt(new THREE.Vector3(pos.x,pos.y+1,pos.z));
    }};
    state.renderer = new THREE.WebGLRenderer({antialias:true});
    state.renderer.setSize(window.innerWidth, window.innerHeight);
    state.renderer.shadowMap.enabled = true;
    document.body.appendChild(state.renderer.domElement);
}