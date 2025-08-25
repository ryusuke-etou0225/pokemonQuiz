/***********************************************************************/
/*  FILE : hardAnswer.js                                               */
/*  DATE : Sunday, August 24, 2025                                     */
/*  NOTE : This page manages the quiz status.                          */
/***********************************************************************/

// 厳格モード
'use strict';

// 変数設定
const pokedexNumber = [];
const pokeName = [];
let questionsCount = 1;
let correctCount = 0;
let incorrectCount = 1;
let number;

/*==============================================================================
関数名　　　　　: _showQuestion
機能　　　　　　: 1問目のクイズを表示する
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function _showQuestion() {
    // 乱数の取得
    number = randomNumber(generation);
    pokedexNumber.push(number);

    // 問題画像の表示
    document.getElementById("out").innerHTML = `<img src='../png/No.${number}.png'>`;
}

/*==============================================================================
関数名　　　　　: answerHard
機能　　　　　　: クイズの解答、次問題の表示処理
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function answerHard() {
    // 問題数カウント
    questionsCount++;
    // 回答フォームの値を取得
    const name = document.getElementById("name").value;
    const form = document.getElementById("name");
    // 回答内容を配列に格納して保持する
    pokeName.push(name);

    if (name === pokemonName[String(pokedexNumber[pokedexNumber.length - 1])]) {
        // 正解処理
        correctCount++;
        document.getElementById("content_01").textContent = `正解数：${correctCount}/30　`;
    } else {
        // 不正解処理
        document.getElementById("content_02").textContent = `不正解数：${incorrectCount}/30　`;
        sessionStorage.setItem('index', JSON.stringify(pokedexNumber));
        sessionStorage.setItem('pokename', JSON.stringify(pokeName));
        sessionStorage.setItem('correct', correctCount);
        sessionStorage.setItem('incorrect', incorrectCount);
        let total_time = `${minutes}分${second}秒`;
        sessionStorage.setItem('time', total_time);
        window.alert(failureAlert);
        window.location = resultURL;
        return
    }

    console.log(`入力フォームの値：${name}`);
    console.log(`画像ポケモンの名前：${pokemonName[pokedexNumber[pokedexNumber.length - 1]]}`);
    console.log(`乱数配列：${pokedexNumber}`)
    console.log(`名前配列：${pokeName}`)
    console.log(`回答した問題数：${questionsCount}`)
    console.log(`正解数：${correctCount}`);
    console.log(`不正解数：${incorrectCount}`);
    console.log("===============================");

    // 連続30問回答したらresultページに遷移する
    if (questionsCount > 30) {
        sessionStorage.setItem('index', JSON.stringify(pokedexNumber));
        sessionStorage.setItem('pokename', JSON.stringify(pokeName));
        sessionStorage.setItem('correct', correctCount);
        sessionStorage.setItem('incorrect', incorrectCount);
        let total_time = `${minutes}分${second}秒`;
        sessionStorage.setItem('time', total_time);
        window.alert(hardAlert);
        window.location = resultURL;
        return
    }

    form.value = ""; // フォームを空にする
    // 次問題表示処理 → 乱数生成、格納、画像表示
    number = randomNumber(generation);
    pokedexNumber.push(number);
    document.getElementById("out").innerHTML = `<img src='../png/No.${number}.png'>`;
    // 出題問題数表示
    document.getElementById("content_03").textContent = `問題数：${questionsCount}問　`;
}

/*==============================================================================
関数名　　　　　: init
機能　　　　　　: htmlページ読み込み時の初回処理
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function init() {
    // 1問目の出題関数
    _showQuestion();
    // ボタンイベント登録
    document.getElementById("Answer").addEventListener("click", answerHard);
}
// ページロード時にinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
