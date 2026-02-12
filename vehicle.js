import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";
export function createVehicle(world){
    const chassisShape = new CANNON.Box(new CANNON.Vec3(1,0.5,2));
    const chassisBody = new CANNON.Body({ mass:150 });
    chassisBody.addShape(chassisShape);
    chassisBody.position.set(0,2,0);
    const options = { radius:0.4, directionLocal:new CANNON.Vec3(0,-1,0), suspensionStiffness:30, suspensionRestLength:0.3, maxSuspensionForce:100000, dampingRelaxation:2, dampingCompression:4, frictionSlip:5, rollInfluence:0.01 };
    const vehicle = new CANNON.RaycastVehicle({ chassisBody });
    for(let i=0;i<4;i++){
        const x = i<2?-1:1;
        const y = 0;
        const z = i%2?-1:1;
        options.chassisConnectionPointLocal = new CANNON.Vec3(x,y,z*1.5);
        vehicle.addWheel(options);
    }
    vehicle.addToWorld(world);
    return vehicle;
}