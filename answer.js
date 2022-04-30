// 名前
let name_user = document.getElementById('name_user')
let name_monster = document.getElementById('name_monster')
// ライフゲージ
let lifeBar_user = document.getElementById('life_user')
let lifeBar_monster = document.getElementById('life_monster')
// アタックボタン
let attackBtn_user = document.getElementById('attack')
let attackBtn_monster = document.getElementById('attack_monster')
// 一回のダメージは25とする
let damege = -25
// ライフゲージ初期値は100とする
let life_user = 100
let life_monster = 100
let comment = document.getElementById('comment')

// アタックボタンを押したらダメージ処理を呼び出す
attackBtn_user.addEventListener('click', alterLife_monster);   
attackBtn_monster.addEventListener('click', alterLife_user);     

// ユーザーのダメージ処理
function alterLife_user(){
  comment.textContent = `${name_monster.textContent}が${attackBtn_user.textContent}を繰り出した!!`;
  // 受けたダメージをライフゲージに合計する
  life_user += damege 
  comment.style.background = 'skyblue';
  if ( life_user <= 0 ){
  // ユーザーのライフゲージが0になった時
  life_user = 0
  comment.textContent = `${name_monster.textContent}の勝利!!`;
  attackBtn_user.disabled = true;
  }
  // ライフゲージの値を更新する
  lifeBar_user.value = life_user
}

//モンスターのダメージ処理
function alterLife_monster(){
  comment.textContent = `${name_user.textContent}が${attackBtn_user.textContent}を繰り出した!!`;
  // 受けたダメージをライフゲージに合計する
  life_monster += damege 
  comment.style.background = 'lime';
  if ( life_monster <= 0 ){
  // 算出の結果 0 以下になった場合
  life_monster = 0
  comment.textContent = `${name_user.textContent}の勝利!!`;
  attackBtn_monster.disabled = true;
  }
  // ライフゲージの値を更新する
  lifeBar_monster.value = life_monster
}
