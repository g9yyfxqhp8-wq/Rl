export function animate(state){
    const delta=1/60;
    function step(){
        requestAnimationFrame(step);
        state.world.step(delta);
        if(state.controls) state.controls.update(delta);
        if(state.controls.boosting){ state.boost-=delta*20; if(state.boost<0)state.boost=0; } else { state.boost+=delta*10; if(state.boost>100)state.boost=100; }
        if(state.boostPads) state.updateBoosts();
        if(state.camera) state.camera.update();
        if(state.goals) state.checkGoals();
        if(state.ball && state.ball.mesh) state.ball.mesh.position.copy(state.ball.body.position);
        if(state.updateUI) state.updateUI();
        if(state.renderer && state.scene && state.camera) state.renderer.render(state.scene.scene,state.camera.camera);
    }
    step();
}