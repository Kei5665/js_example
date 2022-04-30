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
}

//モンスターのダメージ処理
function alterLife_monster(){
}

// 課題1
// jsで名前をポケモンの名前に変更してください
// name_user.textContent = ""
// name_monster.textContent = ""

// 課題2
// jsでボタンに技名を入れてください
// attackBtn_user.textContent = ""
// attackBtn_monster.textContent = ""

// 以下の課題は既存のjsを直接編集してください

// 課題3
// ボタンを押した時、「〇〇が〇〇を繰り出した!!」とコメントが表示されるようにダメージ処理の中に記述してください
// 最初の〇〇は名前、最後の〇〇は技名にしてください
// 余裕があれば同時に背景色を表示させてください

// 課題4
// ダメージ処理をユーザー、モンスター両方書いてください
// ダメージ変数は定義してあるので、ボタンを押すごとにダメージがライフゲージに反映されるようにしてください

// 課題5
// どちらかのライフゲージが0になったら「〇〇の勝利!!」　というコメントを表示させてください。
// また、この時点でバトル終了にしたいので、負けた方のボタンは押せないようにしてください。