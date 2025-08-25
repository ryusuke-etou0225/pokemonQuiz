/***********************************************************************/
/*  FILE        :start.js                                              */
/*  DATE        :Sunday, June 26, 2022                                 */
/*  NOTE:THIS IS A TYPICAL EXAMPLE.                                    */
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
    const level = document.getElementById('level').value;
    const generation = document.getElementById("generation").value;
    console.log("選択された難易度："+level);
    console.log("選択された世代："+generation);
    if(level == "normal"){
        if(window.confirm("難易度：Normalは計15問のポケモン名前当てクイズをします\n不正解でも続行されます。画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?")){
            localStorage.setItem('level',level);
            localStorage.setItem('generation',generation)
            window.location = "html/Pokemon.html";
        }
    }else if(level == "hard"){
        if(window.confirm("難易度：Hardは計30問のクイズを連続正解することでクリアになります\n不正解の時点で結果画面に移動します\n画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?")){
            localStorage.setItem('level',level);
            localStorage.setItem('generation',generation)
            window.location = "html/Pokemon.html";
        }
    }else if(level == "very_hard"){
        if(window.confirm("難易度：VeryHardは計50問のクイズを連続正解することでクリアになります\n不正解の時点で結果画面に移動します\n画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?")){
            localStorage.setItem('level',level);
            localStorage.setItem('generation',generation)
            window.location = "html/Pokemon.html";
        }
    }else{
        if(window.confirm("難易度：Infinityは、905種類のポケモンがランダムですべて出現します\n連続正解でクリアです。不正解の時点で結果画面に移動します\n正直クリアできる人はほとんどいないと思うので、まぁ頑張ってください\n画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?")){
            localStorage.setItem('level',level);
            localStorage.setItem('generation',generation)
            window.location = "html/Pokemon.html";
        }
    }
}