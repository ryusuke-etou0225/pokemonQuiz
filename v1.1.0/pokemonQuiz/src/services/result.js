/***********************************************************************/
/*  FILE : result.js                                                   */
/*  DATE : Saturday, August 23, 2025                                   */
/*  NOTE : This page shows the answer.                                 */
/***********************************************************************/

// 厳格モード
'use strict';

// 俳句乱数生成
const random = Math.floor(Math.random()*10); // 乱数指定は＊の数字をhaiku_00変数と同じ数を指定する

// localStorageから必要な値をすべて取得
const pokedexNumber = JSON.parse(sessionStorage.getItem('index'));
const pokeName = JSON.parse(sessionStorage.getItem('pokename'));
const correctCount = sessionStorage.getItem('correct');
const incorrectCount = sessionStorage.getItem('incorrect');
const total_time = sessionStorage.getItem('time');

/*==============================================================================
関数名　　　　　: _resultQuestion
機能　　　　　　: 問題の解答、正解数、不正解数、経過時間を表示する
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function _resultQuestion () {
    // 俳句表示処理
    for (let i=0; i<3; i++) {
        document.getElementById("out1-1").innerHTML += `<p>${haiku[random][i]}</p>`;
    }

    // 答え表示用タグ作成
    const table = createTable(
        pokedexNumber,
        pokeName,
        correctCount,
        incorrectCount,
        total_time
    );

    // 作成タグ挿入
    document.getElementById("result").innerHTML = table;
}

/*==============================================================================
関数名　　　　　: init
機能　　　　　　: htmlページ読み込み時の初回処理
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function init() {
    // クイズ結果表示
    _resultQuestion();
}
// ページロード時にinit関数を呼び出す
document.addEventListener("DOMContentLoaded", init);
