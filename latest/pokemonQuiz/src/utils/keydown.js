/***********************************************************************/
/*  FILE : keybown.js                                                  */
/*  DATE : Sunday, August 24, 2025                                     */
/*  NOTE : This page enables keyboard input.                           */
/***********************************************************************/

// 厳格モード
'use strict';

/*==============================================================================
関数名　　　　　: Keydown
機能　　　　　　: 押されたキーボードを判定する
　　　　　　　　: Enterが押されたら、Answer関数を動かす
引数説明　　　　: keyCode
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Keydown(e) {
    let str = '';
    switch (e.keyCode) {
        case 13: str = 'enter';break;
        default: str='それ以外のキー';break;
    }
    if (str == "enter") {
        if (level == "normal") {
            answerNormal();
        } else if (level == "hard") {
            answerHard();
        } else if (level == "veryhard") {
            answerVeryhard();
        } else {
            answerInfinity();
        }
    }
}

// 入力フォームのエンターキー操作を有効にする
document.getElementById("name").focus(); // 入力フォームにカーソルを入れる
document.getElementById("name").addEventListener("keydown",Keydown);
