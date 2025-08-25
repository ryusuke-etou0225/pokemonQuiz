/***********************************************************************/
/*  FILE : index.js                                                    */
/*  DATE : Saturday, August 23, 2025                                   */
/*  NOTE : This page transitions based on the difficulty level.        */
/***********************************************************************/

// 厳格モード
'use strict';

/*==============================================================================
関数名　　　　　: Start関数
機能　　　　　　: 図鑑情報をローカルストレージに保存
　　　　　　　　: 選択した難易度をローカルストレージに保存
　　　　　　　　: ページ遷移
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Start() {
    // 入力フォームの値取得
    const level = document.getElementById('level').value;
    const generation = document.getElementById("generation").value;

    if (level == "normal") {
        if (window.confirm(normalExplanation)) {
            // URLパラメータにエンコードして遷移
            const URL = `html/normalQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
            window.location.href = URL;
        }
    } else if (level == "hard") {
        if (window.confirm(hardExplanation)) {
            // URLパラメータにエンコードして遷移
            const URL = `html/hardQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
            window.location.href = URL;
        }
    } else if (level == "veryhard"){
        if (window.confirm(veryhardExplanation)) {
            // URLパラメータにエンコードして遷移
            const URL = `html/veryhardQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
            window.location.href = URL;
        }
    } else {
        if (window.confirm(infinityExplanation)) {
            // URLパラメータにエンコードして遷移
            const URL = `html/infinityQize.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;
            window.location.href = URL;
        }
    }
}