/***********************************************************************/
/*  FILE : createTableTag.js                                           */
/*  DATE : Sunday, August 24, 2025                                     */
/*  NOTE : This page creates a Table tag to display in html.           */
/***********************************************************************/

// 厳格モード
'use strict';

let text;

function _changeGeneration() {
    switch(generation){
        case "zenkoku":
            text = "全国";
            break;
        case "first_generation":
            text = "第1世代";
            break;
        case "second_generation":
            text = "第2世代";
            break;
        case "third_generation":
            text = "第3世代";
            break;
        case "fourth_generation":
            text = "第4世代";
            break;
        case "fifth_generation":
            text = "第5世代";
            break;
        case "sixth_generation":
            text = "第6世代";
            break;
        case "seven_generation":
            text = "第7世代";
            break;
        case "eighth_generation":
            text = "第8世代";
            break;
        case "ninth_generation":
            text = "第9世代";
            break;
        default:
            console.log("ローカルストレージでエラー");
    }

    return text
}

function createTable(pokedexNumber, pokeName, correctCount, incorrectCount, total_time) {
    // tableタグを作成
    let list = '<table border="2">';
    list += '<tr>';
    list += '<th colspan="4">経過時間</th>';
    list += '</tr>';

    // 測定時間設定
    list += '<tr>';
    list += `<th colspan="4">${total_time}</th>`;
    list += '</tr>';

    // 難易度設定
    list += '<tr>';
    list += `<th colspan="2">世代：${_changeGeneration()}</th>`;
    list += `<th colspan="2">難易度：${level}</th>`;
    list += '</tr>';

    // 正解、不正解数設定
    list += '<tr>';
    list += `<th colspan="2">正解数：${correctCount}</th>`;
    list += `<th colspan="2">不正解数：${incorrectCount}</th>`;
    list += '</tr>';

    // タイトル設定
    list += '<tr>';
    list += '<th>問題数</th>';
    list += '<th>ポケモン画像</th>';
    list += '<th>あなたの回答</th>';
    list += '<th>ポケモン名前</th>';
    list += '</tr>';

    // 回答問題数分の答えを設定
    for(let question=0; question<pokedexNumber.length; question++){
        // 回答数設定
        list += '<tr>';
        list += `<th>${question+1}問目</th>`;
        list += `<th><img src="../png/No.${pokedexNumber[question]}.png"></th>`;
        // 不正解は赤字で表示する
        if (pokeName[question] != pokemonName[pokedexNumber[question]]) {
            list += `<th style="color:red">${pokeName[question]}</th>`;
            list += `<th style="color:red">${pokemonName[pokedexNumber[question]]}</th>`;
        } else {
            list += `<th>${pokeName[question]}</th>`;
            list += `<th>${pokemonName[pokedexNumber[question]]}</th>`;
        }
        list += '</tr>';
    }

    // タイトル設定
    list += '<tr>';
    list += '<th>問題数</th>';
    list += '<th>ポケモン画像</th>';
    list += '<th>あなたの回答</th>';
    list += '<th>ポケモン名前</th>';
    list += '</tr>';

    return list
}
