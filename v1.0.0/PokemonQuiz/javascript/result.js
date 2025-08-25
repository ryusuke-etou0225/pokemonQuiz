/***********************************************************************/
/*  FILE        :result.js                                             */
/*  DATE        :Sunday, June 26, 2022                                 */
/*  NOTE:THIS IS A TYPICAL EXAMPLE.                                    */
/***********************************************************************/

// 厳格モード
'use strict';

/*==============================================================================
関数名　　　　　: 無名関数
機能　　　　　　: 問題の解答、正解数、不正解数、経過時間を表示する
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
window.onload = function() {
    console.log("前ページの出題問題："+array);
    console.log("前ページの経過時間："+total_time);
    console.log("あなたの回答："+kaitou)
    console.log("ポケモンの名前："+pokemon[array[0]]);
    // 俳句用コードはここから
    console.log("俳句："+haiku[random][1]);
    for(let i=0; i<3; i++){
        document.getElementById("out1-1").innerHTML += "<p>"+haiku[random][i]+"</p>";
    }

    // 答え用のtableタグを作成、表示
    let list = '<table border="2">';
    list += '<tr>';
    list += '<th colspan="4">経過時間</th>';
    list += '</tr>';

    list += '<tr>';
    list += '<th colspan="4">' + total_time + '</th>';
    list += '<tr>';

    list += '<tr>';
    list += '<th colspan="2">世代：' + generation + '</th>';
    list += '<th colspan="2">難易度：' + level + '</th>';
    list += '<tr>';

    if(level == "normal"){
        // 難易度：normalの場合一行挿入
        console.log("前ページの正解数："+count_sei);
        console.log("前ページの不正解数："+count_hu);
        list += '<tr>';
        list += '<th colspan="2">正解数：' + count_sei + '</th>';
        list += '<th colspan="2">不正解数：' + count_hu + '</th>';
        list += '<tr>';
    }

    list += '<tr>';
    list += '<th>問題数</th>';
    list += '<th>ポケモン画像</th>';
    list += '<th>あなたの回答</th>';
    list += '<th>ポケモン名前</th>';
    list += '</tr>';

    for(let i=0; i<len; i++){
        console.log(array[i])
        list += '<tr>';
        list += '<th>' + (i+1) + '問目</th>';
        list +='<th><img src="../pokemon/No.' + array[i] + '.png"></th>';
        if(kaitou[i]!=pokemon[array[i]]){
            list += '<th style="color:red">' + kaitou[i] + '</th>';
            list += '<th style="color:red">' + pokemon[array[i]] + '</th>';
        }else{
            list += '<th>' + kaitou[i] + '</th>';
            list += '<th>' + pokemon[array[i]] + '</th>';
        }
    }

    list += '<tr>';
    list += '<th>問題数</th>';
    list += '<th>ポケモン画像</th>';
    list += '<th>あなたの回答</th>';
    list += '<th>ポケモン名前</th>';
    list += '</tr>';

    document.getElementById("result").innerHTML = list;
}

/*==============================================================================
関数名　　　　　: Return関数
機能　　　　　　: スタート画面にページ遷移する
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Return() {
    localStorage.clear();
    window.location ="../start.html";
}

/*==============================================================================
関数名　　　　　: same関数
機能　　　　　　: 同じ難易度で問題ページにページ遷移する
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Same() {
    localStorage.removeItem("index");
    localStorage.removeItem("name");
    localStorage.removeItem("time");
    localStorage.removeItem("sei");
    localStorage.removeItem("hu");
    window.location = "Pokemon.html";
}

// localStorageから必要な値をすべて取得
const array = JSON.parse(localStorage.getItem("index"));
const len = array.length;
const kaitou = JSON.parse(localStorage.getItem("name"));
const total_time = localStorage.getItem("time");
const level = localStorage.getItem("level");
const count_sei = localStorage.getItem("sei");
const count_hu = localStorage.getItem("hu");
let generation = localStorage.getItem("generation")
// generationを漢字にする
switch(generation){
    case "zenkoku":
        generation = "全国";
        break;
    case "first_generation":
        generation = "第1世代";
        break;
    case "second_generation":
        generation = "第2世代";
        break;
    case "third_generation":
        generation = "第3世代";
        break;
    case "fourth_generation":
        generation = "第4世代";
        break;
    case "fifth_generation":
        generation = "第5世代";
        break;
    case "sixth_generation":
        generation = "第6世代";
        break;
    case "seven_generation":
        generation = "第7世代";
        break;
    case "eighth_generation":
        generation = "第8世代";
        break;
    default:
        console.log("ローカルストレージでエラー");
}
// 俳句を定義
// 俳句を増やすにはhaiku_00の変数を増やしてhaiku配列に追加する。そのあとに乱数の生成範囲を俳句を増やした分だけ増やす。それだけ
const haiku_01 = ["己が無知","知って始まる","ポケの道"];
const haiku_02 = ["ケンタロス","アフロになって","うっしっし"];
const haiku_03 = ["メタモンが","変身しっぱい","ダメだもん"];
const haiku_04 = ["キングラー","色がちがうは","きんくだ～"];
const haiku_05 = ["マンキーの","しっぽがこげて","オコゲザル"];
const haiku_06 = ["このサイト","イワークいわく","いわくつき"];
const haiku_07 = ["もっとコイ","わしもコイする","コイキング"];
const haiku_08 = ["色違い","追えば追うほど","出会えない"];
const haiku_09 = ["ポケ図鑑","埋めても埋めても","追加来る"];
const haiku_10 = ["カイロスは","やせたあのコが","ストライク"];
// const haiku_11 = ["","",""];
const haiku = [haiku_01,haiku_02,haiku_03,haiku_04,haiku_05,haiku_06,haiku_07,haiku_08,haiku_09,haiku_10];
// 乱数生成
const random = Math.floor(Math.random()*10); // 乱数指定は＊の後の数字をhaiku_00の変数の数と同じ数を指定する
console.log("乱数："+random);