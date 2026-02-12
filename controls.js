export function initControls(state){
    state.controls = { forward:false, backward:false, left:false, right:false, jump:false, boosting:false };
    const keyDown = {};
    window.addEventListener('keydown',(e)=>{ keyDown[e.key.toLowerCase()] = true; });
    window.addEventListener('keyup',(e)=>{ keyDown[e.key.toLowerCase()] = false; });
    state.controls.update = function(delta){
        const vehicle = state.vehicle;
        if(!vehicle) return;
        if(keyDown['w']) vehicle.applyEngineForce(-500,2), vehicle.applyEngineForce(-500,3);
        else if(keyDown['s']) vehicle.applyEngineForce(500,2), vehicle.applyEngineForce(500,3);
        else vehicle.applyEngineForce(0,2), vehicle.applyEngineForce(0,3);
        const steer = 0.5;
        if(keyDown['a']) vehicle.setSteeringValue(steer,0), vehicle.setSteeringValue(steer,1);
        else if(keyDown['d']) vehicle.setSteeringValue(-steer,0), vehicle.setSteeringValue(-steer,1);
        else vehicle.setSteeringValue(0,0), vehicle.setSteeringValue(0,1);
        state.controls.boosting = keyDown['shift'];
    }
}