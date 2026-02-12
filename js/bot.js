import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";
export function initBot(state){
    const chassisBody = new CANNON.Body({ mass:150, shape:new CANNON.Box(new CANNON.Vec3(1,0.5,2)), position:new CANNON.Vec3(0,2,10) });
    state.world.addBody(chassisBody);
    const bot = { chassisBody };
    bot.update = function(delta){
        const ballPos = state.ball.body.position;
        const pos = bot.chassisBody.position;
        // Direction to ball
        const dx = ballPos.x - pos.x, dz = ballPos.z - pos.z;
        const distance = Math.sqrt(dx*dx+dz*dz);
        const angle = Math.atan2(dz, dx);
        // Avoid walls simple
        const arenaLimitX = 49; const arenaLimitZ=29;
        if(pos.x>arenaLimitX) bot.chassisBody.velocity.x -= 5;
        if(pos.x<-arenaLimitX) bot.chassisBody.velocity.x +=5;
        if(pos.z>arenaLimitZ) bot.chassisBody.velocity.z -=5;
        if(pos.z<-arenaLimitZ) bot.chassisBody.velocity.z +=5;
        // Move toward ball
        const speed = Math.min(distance*20,500);
        bot.chassisBody.velocity.x += Math.cos(angle)*speed*delta;
        bot.chassisBody.velocity.z += Math.sin(angle)*speed*delta;
        // Jump if ball high
        if(ballPos.y>1.5 && distance<3) bot.chassisBody.velocity.y+=10;
        // Boost if close
        if(distance<5) bot.chassisBody.velocity.x*=1.1, bot.chassisBody.velocity.z*=1.1;
    }
    return bot;
}
