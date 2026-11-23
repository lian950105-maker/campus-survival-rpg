const missions = [
  {
    chapter: 'DAY 01 · 新生報到', location: '教室・第一堂課', emoji: '📚', chip: 'LEARNING',
    title: '上課聽不懂，怎麼辦？',
    text: '老師正在講解新的課程內容，但你發現自己完全跟不上進度。下課後還有一份練習題要完成，你開始有點緊張。',
    choices: [
      { text: '先把不懂的地方記下來，下課向老師或同學請教。', score: 20, feedback: '很棒！主動整理問題並尋求協助，是有效的學習策略。' },
      { text: '假裝聽懂，反正回家再說。', score: 5, feedback: '有時候我們會不好意思發問，但問題可能因此累積。下次試著先記下疑問吧！' },
      { text: '和同學一起討論，找出自己卡住的地方。', score: 18, feedback: '合作學習很有幫助！透過討論，你也能練習表達自己的想法。' },
      { text: '直接放棄，反正這堂課不重要。', score: 0, feedback: '遇到困難很正常，但太早放棄會錯過進步的機會。可以先從一個小問題開始。' }
    ]
  },
  {
    chapter: 'DAY 02 · 團隊合作', location: '教室・分組時間', emoji: '🤝', chip: 'FRIENDSHIP',
    title: '同學不願意合作？',
    text: '分組報告時，有位同學一直沒有參與討論，其他組員開始抱怨。你希望報告順利完成，也不想讓氣氛變得更糟。',
    choices: [
      { text: '先詢問對方是不是遇到困難，再一起分配工作。', score: 20, feedback: '你願意理解別人的處境，也提出具體方法，這是良好溝通的開始。' },
      { text: '直接在大家面前責備對方。', score: 0, feedback: '公開責備容易讓衝突升高。試著私下溝通，通常更有機會了解原因。' },
      { text: '不想管了，自己把全部工作做完。', score: 5, feedback: '你很有責任感，但長期承擔所有工作並不公平。適度表達需求也很重要。' },
      { text: '和組員討論合理分工，並確認每個人的進度。', score: 18, feedback: '清楚的分工與進度確認，能讓團隊更有效率，也減少誤會。' }
    ]
  },
  {
    chapter: 'DAY 03 · 時間管理', location: '圖書館・待辦清單', emoji: '⏰', chip: 'TIME QUEST',
    title: '行程全部撞在一起！',
    text: '明天要交作業，週五有考試，社團也安排了練習。你看著滿滿的行事曆，突然不知道該從哪一件事開始。',
    choices: [
      { text: '列出所有任務，依照期限和重要程度安排順序。', score: 20, feedback: '太好了！把任務具體化，再安排優先順序，可以降低混亂感。' },
      { text: '先做自己最喜歡的事，其他之後再說。', score: 5, feedback: '從喜歡的事情開始有時能增加動力，但也別忘了留意截止時間。' },
      { text: '熬夜把所有事情一次完成。', score: 0, feedback: '短時間或許能完成一些工作，但睡眠不足會影響學習與身心狀態。' },
      { text: '評估時間後，必要時和社團夥伴協調安排。', score: 18, feedback: '懂得評估自己的負荷並適時溝通，是成熟的時間管理能力。' }
    ]
  },
  {
    chapter: 'DAY 04 · 情緒補給', location: '操場・放學後', emoji: '🌱', chip: 'WELL-BEING',
    title: '考試壓力好大！',
    text: '這次考試成績不如預期，你開始懷疑自己的能力。看到同學都在討論高分，你覺得失落，也不知道該怎麼調整心情。',
    choices: [
      { text: '給自己一點時間休息，再回頭檢視可以改進的地方。', score: 20, feedback: '很好的選擇！接納情緒、適度休息，再從經驗中找出下一步。' },
      { text: '告訴自己很糟糕，乾脆不要再努力了。', score: 0, feedback: '一次成績不能定義你的全部。試著用更溫柔的方式看待自己。' },
      { text: '找信任的朋友、老師或家人聊聊。', score: 18, feedback: '願意表達感受並尋求支持，是照顧自己的重要能力。' },
      { text: '只和考得比自己差的人比較。', score: 5, feedback: '比較可能帶來短暫安慰，但更有幫助的是觀察自己的進步與需求。' }
    ]
  },
  {
    chapter: 'DAY 05 · 勇氣時刻', location: '校園走廊・下課時間', emoji: '💛', chip: 'COURAGE',
    title: '看見同學被排擠',
    text: '你發現幾位同學正在嘲笑另一位同學，還有人拿手機拍攝。被嘲笑的同學看起來很難過，你不知道自己能做些什麼。',
    choices: [
      { text: '在確保自身安全的情況下表達制止，並陪伴被排擠的同學。', score: 20, feedback: '你展現了同理心與勇氣。保護自己、支持受影響的人都很重要。' },
      { text: '跟著大家一起笑，避免自己被排擠。', score: 0, feedback: '從眾可能讓傷害持續。即使不容易，也可以選擇不加入嘲笑。' },
      { text: '向導師、輔導老師或可信任的大人反映。', score: 20, feedback: '尋求師長協助是負責任的行動，尤其在涉及持續霸凌或安全風險時。' },
      { text: '把影片轉傳給其他同學看。', score: 0, feedback: '轉傳可能擴大傷害，也侵犯當事人的隱私。不要散播影像，應尋求適當協助。' }
    ]
  }
];

let current = 0;
let score = 0;
let answered = false;
const $ = (id) => document.getElementById(id);
const screens = ['start-screen', 'game-screen', 'end-screen'];
function showScreen(id) {
  screens.forEach(screen => $(screen).classList.toggle('active', screen === id));
}
function startGame() {
  current = 0;
  score = 0;
  showScreen('game-screen');
  renderMission();
}
function renderMission() {
  answered = false;
  const mission = missions[current];
  $('chapter-label').textContent = mission.chapter;
  $('score').textContent = score;
  $('progress').textContent = `${current} / ${missions.length}`;
  $('progress-fill').style.width = `${(current / missions.length) * 100}%`;
  $('scene-emoji').textContent = mission.emoji;
  $('scene-location').textContent = mission.location;
  $('scene-chip').textContent = mission.chip;
  $('scene-kicker').textContent = `MISSION 0${current + 1}`;
  $('scene-title').textContent = mission.title;
  $('scene-text').textContent = mission.text;
  $('feedback').className = 'feedback';
  $('feedback').textContent = '';
  $('next-btn').classList.add('hidden');
  $('next-btn').innerHTML = current === missions.length - 1 ? '查看冒險結局 <span>➜</span>' : '下一個任務 <span>➜</span>';
  const choices = $('choices');
  choices.innerHTML = '';
  mission.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span>${choice.text}</span>`;
    button.addEventListener('click', () => chooseAnswer(index));
    choices.appendChild(button);
  });
}
function chooseAnswer(index) {
  if (answered) return;
  answered = true;
  const mission = missions[current];
  const choice = mission.choices[index];
  score += choice.score;
  $('score').textContent = score;
  $('progress').textContent = `${current + 1} / ${missions.length}`;
  $('progress-fill').style.width = `${((current + 1) / missions.length) * 100}%`;
  [...$('choices').children].forEach((button, i) => {
    button.disabled = true;
    if (i === index) button.classList.add('selected');
  });
  const feedback = $('feedback');
  feedback.textContent = `${choice.score >= 18 ? '✦ 很好的選擇！' : choice.score > 0 ? '✦ 任務完成！' : '✦ 冒險中的一次學習。'} ${choice.feedback}（+${choice.score} 勇氣值）`;
  feedback.classList.add('show');
  if (choice.score < 10) feedback.classList.add('low');
  $('next-btn').classList.remove('hidden');
}
function nextMission() {
  if (!answered) return;
  current++;
  if (current >= missions.length) finishGame();
  else renderMission();
}
function finishGame() {
  showScreen('end-screen');
  $('final-score').textContent = score;
  let icon, title, description, rank, message;
  if (score >= 85) {
    icon = '🏆'; title = '校園冒險大師！'; rank = 'S 級';
    description = '你展現了很棒的溝通、規劃與同理能力，已經成為值得信賴的校園夥伴！';
    message = '真正的校園生存高手，不是從來不遇到困難，而是願意思考、尊重他人，也知道在需要時向別人求助。繼續保持！';
  } else if (score >= 55) {
    icon = '🌟'; title = '穩健成長的冒險者！'; rank = 'A 級';
    description = '你已經累積不少校園生活技能，也開始找到適合自己的應對方式。';
    message = '每一次選擇都是練習。繼續培養溝通、時間管理與情緒照顧能力，你會越來越有信心！';
  } else if (score >= 30) {
    icon = '🌱'; title = '正在成長的探索者！'; rank = 'B 級';
    description = '冒險途中有些關卡還需要練習，但你已經踏出了認識自己的第一步。';
    message = '不用急著成為完美的人。遇到困難時，可以停下來想一想，也可以找信任的人討論。';
  } else {
    icon = '💪'; title = '勇敢的新手冒險者！'; rank = 'C 級';
    description = '校園生活有很多需要學習的地方，而你已經完成了第一次挑戰！';
    message = '分數不是對你的評價。真正重要的是從每個情境學習，知道尊重自己與他人，並在需要時尋求協助。再試一次，你會有新的發現！';
  }
  $('end-icon').textContent = icon;
  $('end-title').textContent = title;
  $('end-description').textContent = description;
  $('rank').textContent = rank;
  $('end-message').textContent = message;
}
$('start-btn').addEventListener('click', startGame);
$('next-btn').addEventListener('click', nextMission);
$('restart-btn').addEventListener('click', startGame);
