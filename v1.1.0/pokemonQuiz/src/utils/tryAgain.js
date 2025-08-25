/***********************************************************************/
/*  FILE : tryAgain.js                                                 */
/*  DATE : Saturday, August 23, 2025                                   */
/*  NOTE : This page is a quiz with the same difficulty level.         */
/***********************************************************************/

// 厳格モード
'use strict';

/*==============================================================================
関数名　　　　　: tryAgain
機能　　　　　　: 同じ難易度で問題ページにページ遷移する
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function tryAgain() {
    // sessionStorateの初期化
    sessionStorage.clear();
    if (level === "normal") {
        const url = `normalQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
        window.location = url;
    } else if (level === "hard") {
        const url = `hardQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
        window.location.href = url;
    } else if (level === "veryhard"){
        const url = `veryhardQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
        window.location.href = url;
    } else {
        const url = `infinityQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
        window.location.href = url;
    }
}
