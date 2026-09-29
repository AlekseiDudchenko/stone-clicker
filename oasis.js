(() => {
  const COST=1000, REWARD_MIN=7000, REWARD_MAX=8000, SIZE=35, PURCHASE_KEY='stoneClickerOasisPurchased';
  const card=document.querySelector('.oasis-card'), action=document.querySelector('#oasis-action'), label=document.querySelector('#oasis-action-label'), price=document.querySelector('#oasis-price'), status=document.querySelector('#oasis-status');
  const modal=document.querySelector('#oasis-modal'), mazeEl=document.querySelector('#oasis-maze'), closeBtn=document.querySelector('#oasis-close'), result=document.querySelector('#oasis-result'), title=document.querySelector('#oasis-game-title'), hint=document.querySelector('#oasis-game-hint');
  if(!card||!action||!modal||!mazeEl) return;
  let maze=null, player={x:1,y:1}, won=false, explored=new Set();
  const texts={
    en:{title:'Find the Oasis',desc:'A giant desert maze. Find the oasis and earn 7,000–8,000 stones.',locked:'Unlocks with the Desert.',buy:'Buy mini-game',play:'Play',owned:'Mini-game purchased.',hint:'Explore the maze and find the oasis. Only explored paths stay visible. Use arrows or WASD.',close:'Close',reward:n=>`Oasis found! +${n.toLocaleString('en-US')} stones`},
    ru:{title:'Найди оазис',desc:'Гигантский лабиринт в пустыне. Найди оазис и получи 7 000–8 000 камней.',locked:'Открывается вместе с Пустыней.',buy:'Купить мини-игру',play:'Играть',owned:'Мини-игра куплена.',hint:'Исследуй лабиринт и найди оазис. Видно только уже исследованные пути. Стрелки или WASD.',close:'Закрыть',reward:n=>`Оазис найден! +${n.toLocaleString('ru-RU')} камней`},
    de:{title:'Finde die Oase',desc:'Ein riesiges Wüstenlabyrinth. Finde die Oase und erhalte 7.000–8.000 Steine.',locked:'Wird mit der Wüste freigeschaltet.',buy:'Minispiel kaufen',play:'Spielen',owned:'Minispiel gekauft.',hint:'Erkunde das Labyrinth und finde die Oase. Nur erkundete Wege bleiben sichtbar. Pfeiltasten oder WASD.',close:'Schließen',reward:n=>`Oase gefunden! +${n.toLocaleString('de-DE')} Steine`}
  };
  const lang=()=>texts[state?.language]||texts.en;
  const purchased=()=>localStorage.getItem(PURCHASE_KEY)==='1';
  const desertUnlocked=()=>state.creators>=MAX_CREATORS||state.waterSources>0;
  function updateText(){
    const x=lang();
    card.querySelector('.oasis-card__title').textContent=x.title;
    card.querySelector('.oasis-card__description').textContent=x.desc;
    title.textContent=x.title; hint.textContent=x.hint; closeBtn.setAttribute('aria-label',x.close);
    const locked=!desertUnlocked(), own=purchased();
    card.classList.toggle('upgrade-card--locked',locked);
    label.textContent=own?x.play:x.buy; price.hidden=own;
    status.textContent=locked?x.locked:own?x.owned:`${COST.toLocaleString(state.language==='de'?'de-DE':state.language==='ru'?'ru-RU':'en-US')} ${t('stonesUnit')}`;
    action.disabled=locked||(!own&&state.stones<COST);
  }
  function makeMaze(){
    const grid=Array.from({length:SIZE},()=>Array(SIZE).fill(1));
    const dirs=[[2,0],[-2,0],[0,2],[0,-2]];
    const stack=[[1,1]]; grid[1][1]=0;
    while(stack.length){
      const [x,y]=stack[stack.length-1];
      const options=dirs.map(([dx,dy])=>[x+dx,y+dy,dx,dy]).filter(([nx,ny])=>nx>0&&ny>0&&nx<SIZE-1&&ny<SIZE-1&&grid[ny][nx]===1);
      if(!options.length){stack.pop();continue;}
      const [nx,ny,dx,dy]=options[Math.floor(Math.random()*options.length)];
      grid[y+dy/2][x+dx/2]=0; grid[ny][nx]=0; stack.push([nx,ny]);
    }
    grid[SIZE-2][SIZE-2]=0; return grid;
  }
  const key=(x,y)=>`${x},${y}`;
  function revealAround(x,y){
    for(let dy=-2;dy<=2;dy++) for(let dx=-2;dx<=2;dx++){
      if(Math.abs(dx)+Math.abs(dy)>3) continue;
      const nx=x+dx, ny=y+dy;
      if(nx>=0&&ny>=0&&nx<SIZE&&ny<SIZE) explored.add(key(nx,ny));
    }
  }
  function revealAll(){
    for(let y=0;y<SIZE;y++) for(let x=0;x<SIZE;x++) explored.add(key(x,y));
    draw();
  }
  function draw(){
    mazeEl.style.gridTemplateColumns=`repeat(${SIZE},1fr)`;
    const frag=document.createDocumentFragment();
    for(let y=0;y<SIZE;y++) for(let x=0;x<SIZE;x++){
      const visible=explored.has(key(x,y));
      const cell=document.createElement('span');
      cell.className='oasis-cell';
      if(!visible) cell.classList.add('oasis-cell--hidden');
      else if(maze[y][x]) cell.classList.add('oasis-cell--wall');
      if(visible&&x===SIZE-2&&y===SIZE-2) cell.classList.add('oasis-cell--goal');
      if(x===player.x&&y===player.y) cell.classList.add('oasis-cell--player');
      frag.append(cell);
    }
    mazeEl.replaceChildren(frag);
  }
  function start(){
    maze=makeMaze(); player={x:1,y:1}; won=false; explored=new Set(); revealAround(1,1); result.textContent=''; draw(); modal.hidden=false;
  }
  function move(dx,dy){
    if(modal.hidden||won||!maze) return;
    const nx=player.x+dx, ny=player.y+dy;
    if(nx<0||ny<0||nx>=SIZE||ny>=SIZE||maze[ny][nx]) return;
    player={x:nx,y:ny}; revealAround(nx,ny); draw();
    if(nx===SIZE-2&&ny===SIZE-2){
      won=true; const reward=REWARD_MIN+Math.floor(Math.random()*(REWARD_MAX-REWARD_MIN+1));
      gainStones(reward); saveState(); render(); result.textContent=lang().reward(reward); updateText();
    }
  }
  action.addEventListener('click',()=>{
    if(!desertUnlocked()) return;
    if(!purchased()){
      if(state.stones<COST) return;
      state.stones-=COST; localStorage.setItem(PURCHASE_KEY,'1'); saveState(); render(); updateText();
    }
    start();
  });
  closeBtn.addEventListener('click',()=>modal.hidden=true);
  modal.addEventListener('click',e=>{if(e.target===modal) modal.hidden=true;});
  document.querySelectorAll('[data-oasis-move]').forEach(b=>b.addEventListener('click',()=>{
    const d=b.dataset.oasisMove; move(d==='left'?-1:d==='right'?1:0,d==='up'?-1:d==='down'?1:0);
  }));
  let oasisCheatBuffer='';
  const OASIS_CHEAT='7788';
  document.addEventListener('keydown',e=>{
    const k=e.key.toLowerCase(), map={arrowleft:[-1,0],a:[-1,0],arrowright:[1,0],d:[1,0],arrowup:[0,-1],w:[0,-1],arrowdown:[0,1],s:[0,1]};
    if(!modal.hidden&&map[k]){e.preventDefault();move(...map[k]);}
    if(!modal.hidden&&k==='escape') modal.hidden=true;
    if(!modal.hidden&&/^[0-9]$/.test(e.key)){
      oasisCheatBuffer=(oasisCheatBuffer+e.key).slice(-OASIS_CHEAT.length);
      if(oasisCheatBuffer===OASIS_CHEAT){
        oasisCheatBuffer='';
        revealAll();
      }
    }
  });
  document.querySelector('#language-select')?.addEventListener('change',()=>setTimeout(updateText,0));
  document.querySelector('#reset-progress')?.addEventListener('click',()=>setTimeout(()=>{
    if(state.totalStones===0&&state.clicks===0&&state.creators===0&&state.waterSources===0) localStorage.removeItem(PURCHASE_KEY);
    updateText();
  },0));
  const originalRender=render;
  render=function(){ originalRender(); updateText(); };
  updateText();
})();