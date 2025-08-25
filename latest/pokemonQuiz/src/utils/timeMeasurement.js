/***********************************************************************/
/*  FILE : timeMeasurement.js                                          */
/*  DATE : Saturday, August 23, 2025                                   */
/*  NOTE : This page measures the time during the quiz.                */
/***********************************************************************/

// 厳格モード
'use strict';

// 変数設定
let millisecond = 0;
let second = 0;
let minutes = 0;

// 時間測定開始
let bt = setInterval(function (){
    if(millisecond>=99){
        millisecond = 0;
        second++;
    }
    if(second>=59){
        second = 0;
        minutes++;
    }
    millisecond++;
    // 時間の表示
    document.getElementById("content_04").textContent = `経過時間：${minutes}分${second}秒`;
},10);