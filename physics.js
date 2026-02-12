import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";
export function initPhysics(){
    const world = new CANNON.World({ gravity: new CANNON.Vec3(0,-9.82,0) });
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;
    const groundBody = new CANNON.Body({ mass:0, shape: new CANNON.Box(new CANNON.Vec3(50,0.5,30)) });
    groundBody.position.set(0,-0.5,0);
    world.addBody(groundBody);
    return world;
}