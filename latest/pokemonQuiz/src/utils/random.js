/***********************************************************************/
/*  FILE : random.js                                                   */
/*  DATE : Sunday, August 24, 2025                                     */
/*  NOTE : This page generates random numbers.                         */
/***********************************************************************/

// 厳格モード
'use strict';

// 定数設定
const array = [];

/*==============================================================================
関数名　　　　　: randomNumber
機能　　　　　　: 乱数を作成、保存
　　　　　　　　: 乱数がかぶったら再調整
引数説明　　　　: gen[世代選択]
戻り値　　　　　: number[乱数]
特記事項　　　　: なし
==============================================================================*/
function randomNumber(gen) {
    // 作成乱数を多次元配列のkeyとして扱う
    let number = 0;
    switch(gen){
        case "zenkoku":
            number = Math.floor(Math.random()*1025)+1;
            break;
        case "first_generation":
            number = Math.floor(Math.random()*151)+1;
            break;
        case "second_generation":
            number = Math.floor(Math.random()*100)+152;
            break;
        case "third_generation":
            number = Math.floor(Math.random()*135)+252;
            break;
        case "fourth_generation":
            number = Math.floor(Math.random()*107)+387;
            break;
        case "fifth_generation":
            number = Math.floor(Math.random()*156)+494;
            break;
        case "sixth_generation":
            number = Math.floor(Math.random()*72)+650;
            break;
        case "seven_generation":
            number = Math.floor(Math.random()*86)+722;
            break;
        case "eighth_generation":
            number = Math.floor(Math.random()*98)+808;
            break;
        case "ninth_generation":
            number = Math.floor(Math.random()*120)+906;
            break;
        default:
            console.log("乱数生成でエラー発生");
    }
    // 乱数を確認して、かぶってたら再調整
    const len = array.length;
    // 乱数再調整
    for(let i=0; i<len; i++){
        if(number == array[i]){
            console.log("乱数再調整");
            switch(gen){
                case "zenkoku":
                    number = Math.floor(Math.random()*905)+1;
                    break;
                case "first_generation":
                    number = Math.floor(Math.random()*151)+1;
                    break;
                case "second_generation":
                    number = Math.floor(Math.random()*100)+152;
                    break;
                case "third_generation":
                    number = Math.floor(Math.random()*135)+252;
                    break;
                case "fourth_generation":
                    number = Math.floor(Math.random()*107)+387;
                    break;
                case "fifth_generation":
                    number = Math.floor(Math.random()*156)+494;
                    break;
                case "sixth_generation":
                    number = Math.floor(Math.random()*72)+650;
                    break;
                case "seven_generation":
                    number = Math.floor(Math.random()*86)+722;
                    break;
                case "eighth_generation":
                    number = Math.floor(Math.random()*98)+808;
                    break;
                case "ninth_generation":
                    number = Math.floor(Math.random()*120)+906;
                    break;
                default:
                    console.log("乱数生成でエラー発生");
            }
        }
    }
    array.push(number);

    return number;
}
