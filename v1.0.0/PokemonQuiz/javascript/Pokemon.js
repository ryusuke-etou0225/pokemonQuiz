/***********************************************************************/
/*  FILE        :Pokemon.js                                            */
/*  DATE        :Sunday, June 26, 2022                                 */
/*  NOTE:THIS IS A TYPICAL EXAMPLE.                                    */
/***********************************************************************/

// 厳格モード
'use strict';

/*==============================================================================
関数名　　　　　: Answer_Normal関数
機能　　　　　　: 入力した名前を判定して、次の問題に切り替える
　　　　　　　　: 問題数、正解数、不正解数、経過時間を書き換える
　　　　　　　　: 問題終了時、ページ遷移
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Answer_Normal() {
    const name = document.getElementById("name").value;
    const form = document.getElementById("name");
    console.log("入力フォームのポケモンの名前："+name);
    console.log("画像のポケモンの名前："+pokemon[random]);
    console.log("難易度："+level);

    if(name == pokemon[random]){
        console.log("成功");
        // 正解数カウント
        count_sei++;
        // 問題数カウント
        question_count++;
        // 問題数が15で切り替わり
        if(question_count==15){
            // 画面が切り替わる前の処理
            // 配列に問題と解答を記録
            array.push(random);
            pokemon_name.push(name);
            // 記録した配列と経過時間を次ページに送る
            localStorage.setItem('index',JSON.stringify(array));
            localStorage.setItem('name',JSON.stringify(pokemon_name));
            localStorage.setItem('sei',count_sei);
            localStorage.setItem('hu',count_hu);
            total_time = minutes + "分" + second + "秒" + millisecond;
            localStorage.setItem('time',total_time)
            clearInterval(bt);
            // 正解数を表示
            document.getElementById("content_01").textContent = "正解数："+ count_sei +"/30　";
            window.alert("15門のクイズが終了しました。結果画面に移動します")
            window.location = "../html/result.html";
        }

        form.value = ""; // フォームを空にする
        pokemon_name.push(name);
        array.push(random);

        // 乱数再調整
        random = Rndom_number();

        document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
        console.log("正解数"+count_sei);
        document.getElementById("content_01").textContent = "正解数："+ count_sei +"/15　";
    }else{
        // 不正解数カウント
        count_hu++;
        // 問題数カウント
        question_count++;
        // 問題数が15で切り替わり
        if(question_count==15){
            // 画面が切り替わる前の処理
            // 配列に問題と解答を記録
            array.push(random);
            pokemon_name.push(name);
            // 記録した配列と経過時間を次ページに送る
            localStorage.setItem('index',JSON.stringify(array));
            localStorage.setItem('name',JSON.stringify(pokemon_name));
            localStorage.setItem('sei',count_sei);
            localStorage.setItem('hu',count_hu);
            total_time = minutes + "分" + second + "秒" + millisecond;
            localStorage.setItem('time',total_time)
            clearInterval(bt);
            // 不正解数表示
            document.getElementById("content_02").textContent = "不正解数："+ count_hu +"/30　";
            window.alert("15問のクイズが終了しました。結果画面に移動します")
            window.location = "../html/result.html";
        }

        console.log("失敗");
        form.value = ""; // フォームを空にする
        pokemon_name.push(name);
        array.push(random);

        // 乱数再調整
        random = Rndom_number();

        document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
        console.log("不正解数："+count_hu);
        document.getElementById("content_02").textContent = "不正解数："+ count_hu +"/15　";
    }
    // 問題数表示
    document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
    // 配列の表示
    console.log("配列の中身："+array);
    console.log("===============================");
}

/*==============================================================================
関数名　　　　　: Answer_Hard関数
機能　　　　　　: 入力した名前を判定して、次の問題に切り替える
　　　　　　　　: 問題数、正解数、経過時間を書き換える
　　　　　　　　: 問題終了時、不正解時、ページ遷移
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Answer_Hard() {
    const name = document.getElementById("name").value;
    const form = document.getElementById("name");
    console.log("入力フォームのポケモンの名前："+name);
    console.log("画像のポケモンの名前："+pokemon[random]);
    console.log("難易度："+level);

    if(name == pokemon[random]){
        console.log("成功");
        // 正解数カウント
        count_sei++;
        // 正解数が30で切り替わり
        if(count_sei==30){
            // 画面が切り替わる前の処理
            // 配列に問題と解答を記録
            array.push(random);
            pokemon_name.push(name);
            // 記録した配列と経過時間を次ページに送る
            localStorage.setItem('index',JSON.stringify(array));
            localStorage.setItem('name',JSON.stringify(pokemon_name));
            total_time = minutes + "分" + second + "秒" + millisecond;
            localStorage.setItem('time',total_time);
            clearInterval(bt);
            window.alert("連続30問正解に成功しました。結果画面に移動します")
            window.location = "../html/result.html";
        }
        form.value = ""; // フォームを空にする
        pokemon_name.push(name);
        array.push(random);
        // 乱数再調整
        random = Rndom_number();
        document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
        console.log("正解数"+count_sei);
        document.getElementById("content_01").textContent = "正解数："+ count_sei +"/30　";
    }else{
        // 画面が切り替わる前の処理
        // 配列に問題と解答を記録
        array.push(random);
        pokemon_name.push(name);
        // 記録した配列と経過時間を次ページに送る
        localStorage.setItem('index',JSON.stringify(array));
        localStorage.setItem('name',JSON.stringify(pokemon_name));
        total_time = minutes + "分" + second + "秒" + millisecond;
        localStorage.setItem('time',total_time);
        clearInterval(bt);
        // 難易度指定はここから
        window.alert("名前が違いました。結果画面に移動します")
        window.location = "../html/result.html";
    }
    // 問題数カウント
    question_count++;
    document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
    // 配列の表示
    console.log("配列の中身："+array);
    console.log("===============================")
}

/*==============================================================================
関数名　　　　　: Answer_VeryHard関数
機能　　　　　　: 入力した名前を判定して、次の問題に切り替える
　　　　　　　　: 問題数、正解数、経過時間を書き換える
　　　　　　　　: 問題終了時、不正解時、ページ遷移
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Answer_VeryHard() {
    const name = document.getElementById("name").value;
    const form = document.getElementById("name");
    console.log("入力フォームのポケモンの名前："+name);
    console.log("画像のポケモンの名前："+pokemon[random]);
    console.log("難易度："+level);

    if(name == pokemon[random]){
        console.log("成功");
        // 正解数カウント
        count_sei++;
        // 正解数が50で切り替わり
        if(count_sei==50){
            // 画面が切り替わる前の処理
            // 配列に問題と解答を記録
            array.push(random);
            pokemon_name.push(name);
            // 記録した配列と経過時間を次ページに送る
            localStorage.setItem('index',JSON.stringify(array));
            localStorage.setItem('name',JSON.stringify(pokemon_name));
            total_time = minutes + "分" + second + "秒" + millisecond;
            localStorage.setItem('time',total_time);
            clearInterval(bt);
            window.alert("連続50問正解に成功しました。結果画面に移動します")
            window.location = "../html/result.html";
        }
        form.value = ""; // フォームを空にする
        pokemon_name.push(name);
        array.push(random);
        // 乱数再調整
        random = Rndom_number();
        document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
        console.log("正解数"+count_sei);
        document.getElementById("content_01").textContent = "正解数："+ count_sei +"/50　";
    }else{
        // 画面が切り替わる前の処理
        // 配列に問題と解答を記録
        array.push(random);
        pokemon_name.push(name);
        // 記録した配列と経過時間を次ページに送る
        localStorage.setItem('index',JSON.stringify(array));
        localStorage.setItem('name',JSON.stringify(pokemon_name));
        total_time = minutes + "分" + second + "秒" + millisecond;
        localStorage.setItem('time',total_time);
        clearInterval(bt);
        // 難易度指定はここから
        window.alert("名前が違いました。結果画面に移動します")
        window.location = "../html/result.html";
    }
    // 問題数カウント
    question_count++;
    document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
    // 配列の表示
    console.log("配列の中身："+array);
    console.log("===============================")
}

/*==============================================================================
関数名　　　　　: Answer_Infinity関数
機能　　　　　　: 入力した名前を判定して、次の問題に切り替える
　　　　　　　　: 問題数、正解数、経過時間を書き換える
　　　　　　　　: 問題終了時、不正解時、ページ遷移
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Answer_Infinity() {
    const name = document.getElementById("name").value;
    const form = document.getElementById("name");
    console.log("入力フォームのポケモンの名前："+name);
    console.log("画像のポケモンの名前："+pokemon[random]);
    console.log("難易度："+level);

    if(name == pokemon[random]){
        console.log("成功");
        // 正解数カウント
        count_sei++;
        // 正解数が905で切り替わり
        if(count_sei==905){
            // 画面が切り替わる前の処理
            // 配列に問題と解答を記録
            array.push(random);
            pokemon_name.push(name);
            // 記録した配列と経過時間を次ページに送る
            localStorage.setItem('index',JSON.stringify(array));
            localStorage.setItem('name',JSON.stringify(pokemon_name));
            total_time = minutes + "分" + second + "秒" + millisecond;
            localStorage.setItem('time',total_time)
            clearInterval(bt);
            window.alert("連続905問正解に成功しました。結果画面に移動します")
            window.location = "../html/result.html";
        }
        form.value = ""; // フォームを空にする
        pokemon_name.push(name);
        array.push(random);

        // 乱数再調整
        random = Rndom_number();

        document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
        console.log("正解数"+count_sei);
        document.getElementById("content_01").textContent = "正解数："+ count_sei +"/905　";
    }else{
        // 画面が切り替わる前の処理
        // 配列に問題と解答を記録
        array.push(random);
        pokemon_name.push(name);
        // 記録した配列と経過時間を次ページに送る
        localStorage.setItem('index',JSON.stringify(array));
        localStorage.setItem('name',JSON.stringify(pokemon_name));
        total_time = minutes + "分" + second + "秒" + millisecond;
        localStorage.setItem('time',total_time)
        clearInterval(bt);
        // 難易度指定はここから
        window.alert("名前が違いました。結果画面に移動します")
        window.location = "../html/result.html";

    }
    // 問題数カウント
    question_count++;
    document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
    // 配列の表示
    console.log("配列の中身："+array);
    console.log("===============================")
}

/*==============================================================================
関数名　　　　　: Rndom_number関数
機能　　　　　　: 乱数を作成、保存
　　　　　　　　: 乱数がかぶったら、再調整
引数説明　　　　: 無
戻り値　　　　　: 乱数
特記事項　　　　: なし
==============================================================================*/
function Rndom_number() {
    // 作成乱数を多次元配列のkeyとして扱う
    let number = 0;
    switch(generation){
        case "zenkoku":
            number = Math.floor(Math.random()*905)+1;
            console.log(number);
            break;
        case "first_generation":
            number = Math.floor(Math.random()*151)+1;
            console.log(number);
            break;
        case "second_generation":
            number = Math.floor(Math.random()*100)+152;
            console.log(number);
            break;
        case "third_generation":
            number = Math.floor(Math.random()*135)+252;
            console.log(number);
            break;
        case "fourth_generation":
            number = Math.floor(Math.random()*107)+387;
            console.log(number);
            break;
        case "fifth_generation":
            number = Math.floor(Math.random()*156)+494;
            console.log(number);
            break;
        case "sixth_generation":
            number = Math.floor(Math.random()*72)+650;
            console.log(number);
            break;
        case "seven_generation":
            number = Math.floor(Math.random()*86)+722;
            console.log(number);
            break;
        case "eighth_generation":
            number = Math.floor(Math.random()*98)+808;
            console.log(number);
            break;
        default:
            console.log("乱数生成でエラー発生");
    }
    // 乱数を確認して、かぶってたら再調整
    const len = array.length;
    console.log("配列の要素数："+len);
    // 乱数再調整
    for(let i=0; i<len; i++){
        if(number == array[i]){
            console.log("乱数再調整");
            switch(generation){
                case "zenkoku":
                    number = Math.floor(Math.random()*905)+1;
                    console.log(number);
                    break;
                case "first_generation":
                    number = Math.floor(Math.random()*151)+1;
                    console.log(number);
                    break;
                case "second_generation":
                    number = Math.floor(Math.random()*100)+152;
                    console.log(number);
                    break;
                case "third_generation":
                    number = Math.floor(Math.random()*135)+252;
                    console.log(number);
                    break;
                case "fourth_generation":
                    number = Math.floor(Math.random()*107)+387;
                    console.log(number);
                    break;
                case "fifth_generation":
                    number = Math.floor(Math.random()*156)+494;
                    console.log(number);
                    break;
                case "sixth_generation":
                    number = Math.floor(Math.random()*72)+650;
                    console.log(number);
                    break;
                case "seven_generation":
                    number = Math.floor(Math.random()*86)+722;
                    console.log(number);
                    break;
                case "eighth_generation":
                    number = Math.floor(Math.random()*98)+808;
                    console.log(number);
                    break;
                default:
                    console.log("乱数生成でエラー発生");
            }
        }
    }

    return number;
}

/*==============================================================================
関数名　　　　　: Answer関数
機能　　　　　　: 回答するボタンからの判定する
　　　　　　　　: 回答するボタンが押されたら、Answer関数を動かす
引数説明　　　　: 無
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Answer() {
    if(level == "normal"){
        Answer_Normal();
    }else if(level=="hard"){
        Answer_Hard();
    }else if(level=="very_hard"){
        Answer_VeryHard();
    }else{
        Answer_Infinity();
    }
    // inputタグに最初からカーソルを入れる処理
    // Enterの回答とは違いページが更新されないので
    document.getElementById("name").focus();
}

/*==============================================================================
関数名　　　　　: Keydown関数
機能　　　　　　: 押されたキーボードを判定する
　　　　　　　　: Enterが押されたら、Answer関数を動かす
引数説明　　　　: keyCode
戻り値　　　　　: 無
特記事項　　　　: なし
==============================================================================*/
function Keydown(e) {
    let str = '';
    switch(e.keyCode){
        case 13: str = 'enter';break;
        default: str='それ以外のキー';break;
    }
    console.log(str);
    if(str == "enter"){
        if(level == "normal"){
            Answer_Normal();
        }else if(level=="hard"){
            Answer_Hard();
        }else if(level=="very_hard"){
            Answer_VeryHard();
        }else{
            Answer_Infinity();
        }
    }
}


// localStorageから値を取得
const level = localStorage.getItem("level");
const generation = localStorage.getItem("generation");
// 図鑑番号用の乱数生成=======================================
// 最初のみ、個別で乱数を生成
switch(generation){
    case "zenkoku":
        var random = Math.floor(Math.random()*905)+1;
        console.log(random);
        break;
    case "first_generation":
        var random = Math.floor(Math.random()*151)+1;
        console.log(random);
        break;
    case "second_generation":
        var random = Math.floor(Math.random()*100)+152;
        console.log(random);
        break;
    case "third_generation":
        var random = Math.floor(Math.random()*135)+252;
        console.log(random);
        break;
    case "fourth_generation":
        var random = Math.floor(Math.random()*107)+387;
        console.log(random);
        break;
    case "fifth_generation":
        var random = Math.floor(Math.random()*156)+494;
        console.log(random);
        break;
    case "sixth_generation":
        var random = Math.floor(Math.random()*72)+650;
        console.log(random);
        break;
    case "seven_generation":
        var random = Math.floor(Math.random()*86)+722;
        console.log(random);
        break;
    case "eighth_generation":
        var random = Math.floor(Math.random()*98)+808;
        console.log(random);
        break;
    default:
        console.log("乱数生成でエラー発生");
}
// =========================================================
// 画像の表示
document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
// divタグのテキストの取得
if(level=="normal"){
    document.getElementById("content_01").textContent = "正解数：0/15　";
    document.getElementById("content_02").textContent = "不正解数：0/15　";
}else if(level=="hard"){
    document.getElementById("content_01").textContent = "正解数：0/30　";
    document.getElementById("content_02").textContent = "不正解数：0/0　";
}else if(level=="very_hard"){
    document.getElementById("content_01").textContent = "正解数：0/50　";
    document.getElementById("content_02").textContent = "不正解数：0/0　";
}else{
    document.getElementById("content_01").textContent = "正解数：0/905　";
    document.getElementById("content_02").textContent = "不正解数：0/0　";
}

// inputタグを取得
const enter = document.getElementById("name");
// inputタグに最初からカーソルを入れる処理
document.getElementById("name").focus();
// 変数設定
let question_count = 0;
let count_sei = 0;
let count_hu = 0;
let array = [];
let pokemon_name = [];
let millisecond = 0;
let second = 0;
let minutes = 0;
let total_time;
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
    document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
},10);
// イベント発生時の処理
enter.addEventListener("keydown",Keydown);