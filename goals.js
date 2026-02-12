export function initGoals(state){
    state.goals = [{x:50,z:0,radius:5,team:'A'},{x:-50,z:0,radius:5,team:'B'}];
    state.checkGoals = function(){
        const b = state.ball.body.position;
        state.goals.forEach(g=>{
            const dx = b.x - g.x, dz = b.z - g.z;
            if(Math.sqrt(dx*dx+dz*dz)<g.radius){
                state.goalScored(g.team);
                b.set(0,1,0); state.ball.body.velocity.set(0,0,0);
            }
        });
    }
}