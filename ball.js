import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
export function initBall(world, scene){
    const radius = 1;
    const shape = new CANNON.Sphere(radius);
    const body = new CANNON.Body({ mass:50, shape: shape, position: new CANNON.Vec3(0,1,0) });
    world.addBody(body);
    const geo = new THREE.SphereGeometry(radius, 32,32);
    const mat = new THREE.MeshStandardMaterial({color:0xffff00});
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.position.copy(body.position);
    scene.scene.add(mesh);
    return { body, mesh };
}