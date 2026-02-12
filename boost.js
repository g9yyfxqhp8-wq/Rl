export function initBoostPads(state){
    state.boostPads = [ {x:10,z:0,active:true}, {x:-10,z:0,active:true} ];
    state.updateBoosts = function(){
        const pos = state.vehicle.chassisBody.position;
        state.boostPads.forEach(pad=>{
            const dx = pos.x-pad.x, dz = pos.z-pad.z;
            if(Math.sqrt(dx*dx+dz*dz)<2){ state.boost = 100; }
        });
    }
}