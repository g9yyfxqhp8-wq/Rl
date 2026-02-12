export function initUI(state) {
    state.scoreA = 0; state.scoreB = 0; state.boost = 100; state.time = 180; state.goalFlash = 0;
    state.updateUI = function(){
        const scoreAEl = document.getElementById("scoreA");
        const scoreBEl = document.getElementById("scoreB");
        const boostFillEl = document.getElementById("boostFill");
        const timerEl = document.getElementById("timer");
        scoreAEl.innerText = state.scoreA;
        scoreBEl.innerText = state.scoreB;
        if(state.goalFlash>0){ const flash = state.goalFlash%2===0?"#fff":"#ff0"; scoreAEl.style.color=flash; scoreBEl.style.color=flash; state.goalFlash--; } else { scoreAEl.style.color="#00bfff"; scoreBEl.style.color="#ff3300"; }
        let min=Math.floor(state.time/60).toString().padStart(2,'0'); let sec=Math.floor(state.time%60).toString().padStart(2,'0');
        timerEl.innerText=`${min}:${sec}`;
        if(state.time<=10){ const scale=1+Math.sin(Date.now()*0.01)*0.2; timerEl.style.transform=`scale(${scale})`; } else timerEl.style.transform=`scale(1)`;
        boostFillEl.style.width=`${state.boost}%`;
        if(state.boost>60){ boostFillEl.style.background='linear-gradient(90deg,#00ff00,#00ff88)'; boostFillEl.style.boxShadow='0 0 10px #00ff88'; }
        else if(state.boost>30){ boostFillEl.style.background='linear-gradient(90deg,#ffff00,#ffdd00)'; boostFillEl.style.boxShadow='0 0 10px #ffdd00'; }
        else{ boostFillEl.style.background='linear-gradient(90deg,#ff3300,#ff6600)'; boostFillEl.style.boxShadow='0 0 10px #ff6600'; }
    }
    setInterval(()=>{if(state.time>0)state.time-=0.1;},100);
    state.goalScored=function(team){ state.goalFlash=10; if(team==='A')state.scoreA++; else if(team==='B')state.scoreB++; }
    return state;
}