// 問題数表示
document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
// 時間の表示
document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
// 配列の表示
console.log("配列の中身："+array);
console.log("===============================");

// 問題数カウント
question_count++;
document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
// 時間の表示
document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
// 配列の表示
console.log("配列の中身："+array);
console.log("===============================")

// 問題数カウント
question_count++;
document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
// 時間の表示
document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
// 配列の表示
console.log("配列の中身："+array);
console.log("===============================")



'use strict';

window.onload = function() {
    console.log("前ページの出題問題："+array);
    console.log("前ページの経過時間："+total_time);
    console.log("あなたの回答："+kaitou)
    console.log("ポケモンの名前："+pokemon[array[0]]);
    // 俳句用コードはここから
    console.log("俳句："+haiku[random][1]);
    for(let i=0; i<3; i++){
        document.getElementById("out1-1").innerHTML += "<p>"+haiku[random][i]+"</p>";
    }

    if(level == "normal"){ // 難易度：normalの処理================================================
        console.log("前ページの正解数："+count_sei);
        console.log("前ページの不正解数："+count_hu);
        // 答え用のtableタグを作る
        let list = '<table border="2">';
        list += '<tr>';
        list += '<th colspan="4">経過時間</th>';
        list += '</tr>';

        list += '<tr>';
        list += '<th colspan="4">' + total_time + '</th>';
        list += '<tr>';

        list += '<tr>';
        list += '<th colspan="2">正解数：' + count_sei + '</th>';
        list += '<th colspan="2">不正解数：' + count_hu + '</th>';
        list += '<tr>';

        list += '<tr>';
        list += '<th>問題数</th>';
        list += '<th>ポケモン画像</th>';
        list += '<th>あなたの回答</th>';
        list += '<th>ポケモン名前</th>';
        list += '</tr>';

        for(let i=0; i<len; i++){
            console.log(array[i])
            list += '<tr>';
            list += '<th>' + (i+1) + '問目</th>';
            list +='<th><img src="../pokemon/No.' + array[i] + '.png"></th>';
            if(kaitou[i]!=pokemon[array[i]]){
                list += '<th style="color:red">' + kaitou[i] + '</th>';
                list += '<th style="color:red">' + pokemon[array[i]] + '</th>';
            }else{
                list += '<th>' + kaitou[i] + '</th>';
                list += '<th>' + pokemon[array[i]] + '</th>';
            }
        }
        document.getElementById("result").innerHTML = list;
    }else if(level == "hard" || level == "Infinity"){ // 難易度：hardとInfinitの処理===============
        // 答え用のtableタグを作る
        let list = '<table border="2">';
        list += '<tr>';
        list += '<th colspan="4">経過時間</th>';
        list += '</tr>';

        list += '<tr>';
        list += '<th colspan="4">' + total_time + '</th>';
        list += '<tr>';

        list += '<tr>';
        list += '<th>問題数</th>';
        list += '<th>ポケモン画像</th>';
        list += '<th>あなたの回答</th>';
        list += '<th>ポケモン名前</th>';
        list += '</tr>';

        for(let i=0; i<len; i++){
            console.log(array[i])
            list += '<tr>';
            list += '<th>' + (i+1) + '問目</th>';
            list +='<th><img src="../pokemon/No.' + array[i] + '.png"></th>';
            if(kaitou[i]!=pokemon[array[i]]){
                list += '<th style="color:red">' + kaitou[i] + '</th>';
                list += '<th style="color:red">' + pokemon[array[i]] + '</th>';
            }else{
                list += '<th>' + kaitou[i] + '</th>';
                list += '<th>' + pokemon[array[i]] + '</th>';
            }
        }
        document.getElementById("result").innerHTML = list;
    }
}

function Return() {
    window.location ="../start.html";
}

function same() {
    window.alert("同じ難易度でクイズを始めます\n画面が切り替わった瞬間に時間が計測されます\nクイズを始めます")
    window.location = "Pokemon.html";
}

// localStorageから必要な値をすべて取得
const array = JSON.parse(localStorage.getItem("index"));
const len = array.lenglet
const kaitou = JSON.parse(localStorage.getItem("name"));
const total_time = localStorage.getItem("time");
const pokemon = JSON.parse(localStorage.getItem("Pokemon"));
const level = localStorage.getItem("level");
const count_sei = localStorage.getItem("sei");
const count_hu = localStorage.getItem("hu");
// 俳句を定義
// 俳句を増やすにはhaiku_00の変数を増やしてhaiku配列に追加する。そのあとに乱数の生成範囲を俳句を増やした分だけ増やす。それだけ
const haiku_01 = ["己が無知","知って始まる","ポケの道"];
const haiku_02 = ["ケンタロス","アフロになって","うっしっし"];
const haiku_03 = ["メタモンが","変身しっぱい","ダメだもん"];
const haiku_04 = ["キングラー","色がちがうは","きんくだ～"];
const haiku_05 = ["マンキーの","しっぽがこげて","オコゲザル"];
const haiku_06 = ["このサイト","イワークいわく","いわくつき"];
const haiku_07 = ["もっとコイ","わしもコイする","コイキング"];
const haiku_08 = ["色違い","追えば追うほど","出会えない"];
const haiku_09 = ["ポケ図鑑","埋めても埋めても","追加来る"];
const haiku = [haiku_01,haiku_02,haiku_03,haiku_04,haiku_05,haiku_06,haiku_07,haiku_08,haiku_09];
// 乱数生成
const random = Math.floor(Math.random()*9); // 乱数指定は＊の後の数字をhaiku_00の変数の数と同じ数を指定する
console.log("乱数："+random);






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
    // 時間の表示
    document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
    // 配列の表示
    console.log("配列の中身："+array);
    console.log("===============================");
}

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
    // 時間の表示
    document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
    // 配列の表示
    console.log("配列の中身："+array);
    console.log("===============================")
}

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
        // 正解数が809で切り替わり
        if(count_sei==809){
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
            window.alert("連続809問正解に成功しました。結果画面に移動します")
            window.location = "../html/result.html";
        }
        form.value = ""; // フォームを空にする
        pokemon_name.push(name);
        array.push(random);

        // 乱数再調整
        random = Rndom_number();

        document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
        console.log("正解数"+count_sei);
        document.getElementById("content_01").textContent = "正解数："+ count_sei +"/809　";
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
    // 時間の表示
    document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
    // 配列の表示
    console.log("配列の中身："+array);
    console.log("===============================")
}


function keydown(e) {
    let str = '';
    switch(e.keyCode){
        case 13: str = 'enter';break;
        default: str='それ以外のキー';break;
    }
    console.log(str);
    if(str == "enter"){
        Answer();
    }
}




'use strict';

// function Answer() {
//     const name = document.getElementById("name").value;
//     const form = document.getElementById("name");
//     console.log("入力フォームのポケモンの名前："+name);
//     console.log("画像のポケモンの名前："+pokemon[random]);
//     console.log("難易度："+level);
//     if(level == "normal"){ // 難易度：normalの処理================================================
//         if(name == pokemon[random]){
//             console.log("成功");
//             // 正解数カウント
//             count_sei++;
//             // 問題数カウント
//             question_count++;
//             // 問題数が15で切り替わり
//             if(question_count==15){
//                 // 画面が切り替わる前の処理
//                 // 配列に問題と解答を記録
//                 array.push(random);
//                 pokemon_name.push(name);
//                 // 記録した配列と経過時間を次ページに送る
//                 localStorage.setItem('index',JSON.stringify(array));
//                 localStorage.setItem('name',JSON.stringify(pokemon_name));
//                 localStorage.setItem('sei',count_sei);
//                 localStorage.setItem('hu',count_hu);
//                 total_time = minutes + "分" + second + "秒" + millisecond;
//                 localStorage.setItem('time',total_time)
//                 clearInterval(bt);
//                 // 正解数を表示
//                 document.getElementById("content_01").textContent = "正解数："+ count_sei +"/30　";
//                 window.alert("15門のクイズが終了しました。結果画面に移動します")
//                 window.location = "../html/result.html";
//             }

//             form.value = ""; // フォームを空にする
//             pokemon_name.push(name);
//             array.push(random);

//             // 乱数再調整
//             random = Rndom_number();

//             document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//             console.log("正解数"+count_sei);
//             document.getElementById("content_01").textContent = "正解数："+ count_sei +"/15　";
//         }else{
//             // 不正解数カウント
//             count_hu++;
//             // 問題数カウント
//             question_count++;
//             // 問題数が15で切り替わり
//             if(question_count==15){
//                 // 画面が切り替わる前の処理
//                 // 配列に問題と解答を記録
//                 array.push(random);
//                 pokemon_name.push(name);
//                 // 記録した配列と経過時間を次ページに送る
//                 localStorage.setItem('index',JSON.stringify(array));
//                 localStorage.setItem('name',JSON.stringify(pokemon_name));
//                 localStorage.setItem('sei',count_sei);
//                 localStorage.setItem('hu',count_hu);
//                 total_time = minutes + "分" + second + "秒" + millisecond;
//                 localStorage.setItem('time',total_time)
//                 clearInterval(bt);
//                 // 不正解数表示
//                 document.getElementById("content_02").textContent = "不正解数："+ count_hu +"/30　";
//                 window.alert("15問のクイズが終了しました。結果画面に移動します")
//                 window.location = "../html/result.html";
//             }

//             console.log("失敗");
//             form.value = ""; // フォームを空にする
//             pokemon_name.push(name);
//             array.push(random);

//             // 乱数再調整
//             random = Rndom_number();

//             document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//             console.log("不正解数："+count_hu);
//             document.getElementById("content_02").textContent = "不正解数："+ count_hu +"/15　";
//         }
//         // 問題数表示
//         document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
//         // 時間の表示
//         document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
//         // 配列の表示
//         console.log("配列の中身："+array);
//         console.log("===============================");
//     }else if(level=="hard"){ // 難易度：hardの処理================================================
//         if(name == pokemon[random]){
//             console.log("成功");
//             // 正解数カウント
//             count_sei++;
//             // 正解数が30で切り替わり
//             if(count_sei==30){
//                 // 画面が切り替わる前の処理
//                 // 配列に問題と解答を記録
//                 array.push(random);
//                 pokemon_name.push(name);
//                 // 記録した配列と経過時間を次ページに送る
//                 localStorage.setItem('index',JSON.stringify(array));
//                 localStorage.setItem('name',JSON.stringify(pokemon_name));
//                 total_time = minutes + "分" + second + "秒" + millisecond;
//                 localStorage.setItem('time',total_time);
//                 clearInterval(bt);
//                 window.alert("連続30問正解に成功しました。結果画面に移動します")
//                 window.location = "../html/result.html";
//             }
//             form.value = ""; // フォームを空にする
//             pokemon_name.push(name);
//             array.push(random);

//             // 乱数再調整
//             random = Rndom_number();

//             document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//             console.log("正解数"+count_sei);
//             document.getElementById("content_01").textContent = "正解数："+ count_sei +"/30　";
//         }else{
//             // 画面が切り替わる前の処理
//             // 配列に問題と解答を記録
//             array.push(random);
//             pokemon_name.push(name);
//             // 記録した配列と経過時間を次ページに送る
//             localStorage.setItem('index',JSON.stringify(array));
//             localStorage.setItem('name',JSON.stringify(pokemon_name));
//             total_time = minutes + "分" + second + "秒" + millisecond;
//             localStorage.setItem('time',total_time);
//             clearInterval(bt);
//             // 難易度指定はここから
//             window.alert("名前が違いました。結果画面に移動します")
//             window.location = "../html/result.html";

//         }
//         // 問題数カウント
//         question_count++;
//         document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
//         // 時間の表示
//         document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
//         // 配列の表示
//         console.log("配列の中身："+array);
//         console.log("===============================")
//     }else if(level=="Infinity"){ // 難易度：Infinityの処理================================================
//         if(name == pokemon[random]){
//             console.log("成功");
//             // 正解数カウント
//             count_sei++;
//             // 正解数が809で切り替わり
//             if(count_sei==809){
//                 // 画面が切り替わる前の処理
//                 // 配列に問題と解答を記録
//                 array.push(random);
//                 pokemon_name.push(name);
//                 // 記録した配列と経過時間を次ページに送る
//                 localStorage.setItem('index',JSON.stringify(array));
//                 localStorage.setItem('name',JSON.stringify(pokemon_name));
//                 total_time = minutes + "分" + second + "秒" + millisecond;
//                 localStorage.setItem('time',total_time)
//                 clearInterval(bt);
//                 window.alert("連続809問正解に成功しました。結果画面に移動します")
//                 window.location = "../html/result.html";
//             }
//             form.value = ""; // フォームを空にする
//             pokemon_name.push(name);
//             array.push(random);

//             // 乱数再調整
//             random = Rndom_number();

//             document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//             console.log("正解数"+count_sei);
//             document.getElementById("content_01").textContent = "正解数："+ count_sei +"/809　";
//         }else{
//             // 画面が切り替わる前の処理
//             // 配列に問題と解答を記録
//             array.push(random);
//             pokemon_name.push(name);
//             // 記録した配列と経過時間を次ページに送る
//             localStorage.setItem('index',JSON.stringify(array));
// //             localStorage.setItem('name',JSON.stringify(pokemon_name));
// //             total_time = minutes + "分" + second + "秒" + millisecond;
// //             localStorage.setItem('time',total_time)
// //             clearInterval(bt);
// //             // 難易度指定はここから
// //             window.alert("名前が違いました。結果画面に移動します")
// //             window.location = "../html/result.html";

// //         }
// //         // 問題数カウント
// //         question_count++;
// //         document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
// //         // 時間の表示
// //         document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
// //         // 配列の表示
// //         console.log("配列の中身："+array);
// //         console.log("===============================")
// //     }
// // }

// function Answer_Normal() {
//     const name = document.getElementById("name").value;
//     const form = document.getElementById("name");
//     console.log("入力フォームのポケモンの名前："+name);
//     console.log("画像のポケモンの名前："+pokemon[random]);
//     console.log("難易度："+level);

//     if(name == pokemon[random]){
//         console.log("成功");
//         // 正解数カウント
//         count_sei++;
//         // 問題数カウント
//         question_count++;
//         // 問題数が15で切り替わり
//         if(question_count==15){
//             // 画面が切り替わる前の処理
//             // 配列に問題と解答を記録
//             array.push(random);
//             pokemon_name.push(name);
//             // 記録した配列と経過時間を次ページに送る
//             localStorage.setItem('index',JSON.stringify(array));
//             localStorage.setItem('name',JSON.stringify(pokemon_name));
//             localStorage.setItem('sei',count_sei);
//             localStorage.setItem('hu',count_hu);
//             total_time = minutes + "分" + second + "秒" + millisecond;
//             localStorage.setItem('time',total_time)
//             clearInterval(bt);
//             // 正解数を表示
//             document.getElementById("content_01").textContent = "正解数："+ count_sei +"/30　";
//             window.alert("15門のクイズが終了しました。結果画面に移動します")
//             window.location = "../html/result.html";
//         }

//         form.value = ""; // フォームを空にする
//         pokemon_name.push(name);
//         array.push(random);

//         // 乱数再調整
//         random = Rndom_number();

//         document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//         console.log("正解数"+count_sei);
//         document.getElementById("content_01").textContent = "正解数："+ count_sei +"/15　";
//     }else{
//         // 不正解数カウント
//         count_hu++;
//         // 問題数カウント
//         question_count++;
//         // 問題数が15で切り替わり
//         if(question_count==15){
//             // 画面が切り替わる前の処理
//             // 配列に問題と解答を記録
//             array.push(random);
//             pokemon_name.push(name);
//             // 記録した配列と経過時間を次ページに送る
//             localStorage.setItem('index',JSON.stringify(array));
//             localStorage.setItem('name',JSON.stringify(pokemon_name));
//             localStorage.setItem('sei',count_sei);
//             localStorage.setItem('hu',count_hu);
//             total_time = minutes + "分" + second + "秒" + millisecond;
//             localStorage.setItem('time',total_time)
//             clearInterval(bt);
//             // 不正解数表示
//             document.getElementById("content_02").textContent = "不正解数："+ count_hu +"/30　";
//             window.alert("15問のクイズが終了しました。結果画面に移動します")
//             window.location = "../html/result.html";
//         }

//         console.log("失敗");
//         form.value = ""; // フォームを空にする
//         pokemon_name.push(name);
//         array.push(random);

//         // 乱数再調整
//         random = Rndom_number();

//         document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//         console.log("不正解数："+count_hu);
//         document.getElementById("content_02").textContent = "不正解数："+ count_hu +"/15　";
//     }
//     // 問題数表示
//     document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
//     // 時間の表示
//     document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
//     // 配列の表示
//     console.log("配列の中身："+array);
//     console.log("===============================");
// }

// function Answer_Hard() {
//     const name = document.getElementById("name").value;
//     const form = document.getElementById("name");
//     console.log("入力フォームのポケモンの名前："+name);
//     console.log("画像のポケモンの名前："+pokemon[random]);
//     console.log("難易度："+level);

//     if(name == pokemon[random]){
//         console.log("成功");
//         // 正解数カウント
//         count_sei++;
//         // 正解数が30で切り替わり
//         if(count_sei==30){
//             // 画面が切り替わる前の処理
//             // 配列に問題と解答を記録
//             array.push(random);
//             pokemon_name.push(name);
//             // 記録した配列と経過時間を次ページに送る
//             localStorage.setItem('index',JSON.stringify(array));
//             localStorage.setItem('name',JSON.stringify(pokemon_name));
//             total_time = minutes + "分" + second + "秒" + millisecond;
//             localStorage.setItem('time',total_time);
//             clearInterval(bt);
//             window.alert("連続30問正解に成功しました。結果画面に移動します")
//             window.location = "../html/result.html";
//         }
//         form.value = ""; // フォームを空にする
//         pokemon_name.push(name);
//         array.push(random);

//         // 乱数再調整
//         random = Rndom_number();

//         document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//         console.log("正解数"+count_sei);
//         document.getElementById("content_01").textContent = "正解数："+ count_sei +"/30　";
//     }else{
//         // 画面が切り替わる前の処理
//         // 配列に問題と解答を記録
//         array.push(random);
//         pokemon_name.push(name);
//         // 記録した配列と経過時間を次ページに送る
//         localStorage.setItem('index',JSON.stringify(array));
//         localStorage.setItem('name',JSON.stringify(pokemon_name));
//         total_time = minutes + "分" + second + "秒" + millisecond;
//         localStorage.setItem('time',total_time);
//         clearInterval(bt);
//         // 難易度指定はここから
//         window.alert("名前が違いました。結果画面に移動します")
//         window.location = "../html/result.html";

//     }
//     // 問題数カウント
//     question_count++;
//     document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
//     // 時間の表示
//     document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
//     // 配列の表示
//     console.log("配列の中身："+array);
//     console.log("===============================")
// }

// function Answer_Infinity() {
//     const name = document.getElementById("name").value;
//     const form = document.getElementById("name");
//     console.log("入力フォームのポケモンの名前："+name);
//     console.log("画像のポケモンの名前："+pokemon[random]);
//     console.log("難易度："+level);

//     if(name == pokemon[random]){
//         console.log("成功");
//         // 正解数カウント
//         count_sei++;
//         // 正解数が809で切り替わり
//         if(count_sei==809){
//             // 画面が切り替わる前の処理
//             // 配列に問題と解答を記録
//             array.push(random);
//             pokemon_name.push(name);
//             // 記録した配列と経過時間を次ページに送る
//             localStorage.setItem('index',JSON.stringify(array));
//             localStorage.setItem('name',JSON.stringify(pokemon_name));
//             total_time = minutes + "分" + second + "秒" + millisecond;
//             localStorage.setItem('time',total_time)
//             clearInterval(bt);
//             window.alert("連続809問正解に成功しました。結果画面に移動します")
//             window.location = "../html/result.html";
//         }
//         form.value = ""; // フォームを空にする
//         pokemon_name.push(name);
//         array.push(random);

//         // 乱数再調整
//         random = Rndom_number();

//         document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
//         console.log("正解数"+count_sei);
//         document.getElementById("content_01").textContent = "正解数："+ count_sei +"/809　";
//     }else{
//         // 画面が切り替わる前の処理
//         // 配列に問題と解答を記録
//         array.push(random);
//         pokemon_name.push(name);
//         // 記録した配列と経過時間を次ページに送る
//         localStorage.setItem('index',JSON.stringify(array));
//         localStorage.setItem('name',JSON.stringify(pokemon_name));
//         total_time = minutes + "分" + second + "秒" + millisecond;
//         localStorage.setItem('time',total_time)
//         clearInterval(bt);
//         // 難易度指定はここから
//         window.alert("名前が違いました。結果画面に移動します")
//         window.location = "../html/result.html";

//     }
//     // 問題数カウント
//     question_count++;
//     document.getElementById("content_03").textContent = "問題数："+ (question_count+1) +"問　";
//     // 時間の表示
//     document.getElementById("content_04").textContent = "経過時間："+ minutes + "分" + second + "秒" + millisecond;
//     // 配列の表示
//     console.log("配列の中身："+array);
//     console.log("===============================")
// }

// // 乱数作成関数
// function Rndom_number() {
//     let number = Math.floor(Math.random()*809)+1;
//     console.log(number);
//     // 作成乱数を多次元配列のkeyとして扱うための成形
//     number = String(number);
//     console.log(number.length);
//     if(number.length == 2){
//         number = "0" + number;
//     }else if(number.length == 1){
//         number = "00" + number;
//     }
//     console.log(number);

//     // 乱数を確認して、かぶってたら再調整
//     const len = array.length;
//     console.log("配列の要素数："+len);
//     // 乱数再調整
//     for(let i=0; i<len; i++){
//         if(number == array[i]){
//             number = Math.floor(Math.random()*809)+1;
//             number = String(number);
//             if(number.length == 2){
//                 number = "0" + number;
//             }else if(number.length == 1){
//                 number = "00" + number;
//             }
//         }
//     }

//     return number;
// }

// function keydown(e) {
//     let str = '';
//     switch(e.keyCode){
//         case 13: str = 'enter';break;
//         default: str='それ以外のキー';break;
//     }
//     console.log(str);
//     if(str == "enter"){
//         if(level == "normal"){
//             Answer_Normal();
//         }else if(level=="hard"){
//             Answer_Hard();
//         }else if(level=="Infinity"){
//             Answer_Infinity();
//         }
//     }
// }

// // 図鑑番号用の乱数生成========================
// var random = Math.floor(Math.random()*809)+1;
// console.log(random);
// random = String(random);
// console.log(random.length);
// if(random.length == 2){
//     random = "0" + random;
// }else if(random.length == 1){
//     random = "00" + random;
// }
// console.log(random);
// // ==========================================
// // 画像の表示
// document.getElementById("out").innerHTML = "<img src='../pokemon/No." + random + ".png'>";
// // localStorageから値を取得
// const pokemon = JSON.parse(localStorage.getItem("Pokemon"));
// const level = localStorage.getItem("level");
// // divタグのテキストの取得
// if(level=="normal"){
//     document.getElementById("content_01").textContent = "正解数：0/15　";
//     document.getElementById("content_02").textContent = "不正解数：0/15　";
// }else if(level=="hard"){
//     document.getElementById("content_02").textContent = "不正解数：0/0　";
// }else if(level=="Infinity"){
//     document.getElementById("content_01").textContent = "正解数：0/809　";
//     document.getElementById("content_02").textContent = "不正解数：0/0　";
// }
// // var content_01 = document.getElementById("content_01").textContent;
// // var content_02 = document.getElementById("content_02").textContent;
// // var content_03 = document.getElementById("content_03").textContent;
// // var content_04 = document.getElementById("content_04").textContent;
// // inputタグを取得
// const enter = document.getElementById("name");
// // inputタグに最初からカーソルを入れる処理
// document.getElementById("name").focus();
// // 変数設定
// var question_count = 0;
// var count_sei = 0;
// var count_hu = 0;
// var array = [];
// var pokemon_name = [];
// var millisecond = 0;
// var second = 0;
// var minutes = 0;
// var total_time;
// // 時間測定開始
// var bt = setInterval(function (){
//     if(millisecond>=100){
//         millisecond = 0;
//         second++;
//     }
//     if(second>=60){
//         second = 0;
//         minutes++;
//     }
//     millisecond++;
// },10);
// // イベント発生時の処理
// enter.addEventListener("keydown",keydown);

window.onload = function() {
    console.log("前ページの出題問題："+array);
    console.log("前ページの経過時間："+total_time);
    console.log("あなたの回答："+kaitou)
    console.log("ポケモンの名前："+pokemon[array[0]]);
    // 俳句用コードはここから
    console.log("俳句："+haiku[random][1]);
    for(let i=0; i<3; i++){
        document.getElementById("out1-1").innerHTML += "<p>"+haiku[random][i]+"</p>";
    }

    if(level == "normal"){ // 難易度：normalの処理================================================
        console.log("前ページの正解数："+count_sei);
        console.log("前ページの不正解数："+count_hu);
        // 答え用のtableタグを作る
        let list = '<table border="2">';
        list += '<tr>';
        list += '<th colspan="4">経過時間</th>';
        list += '</tr>';

        list += '<tr>';
        list += '<th colspan="4">' + total_time + '</th>';
        list += '<tr>';

        list += '<tr>';
        list += '<th colspan="2">正解数：' + count_sei + '</th>';
        list += '<th colspan="2">不正解数：' + count_hu + '</th>';
        list += '<tr>';

        list += '<tr>';
        list += '<th>問題数</th>';
        list += '<th>ポケモン画像</th>';
        list += '<th>あなたの回答</th>';
        list += '<th>ポケモン名前</th>';
        list += '</tr>';

        for(let i=0; i<len; i++){
            console.log(array[i])
            list += '<tr>';
            list += '<th>' + (i+1) + '問目</th>';
            list +='<th><img src="../pokemon/No.' + array[i] + '.png"></th>';
            if(kaitou[i]!=pokemon[array[i]]){
                list += '<th style="color:red">' + kaitou[i] + '</th>';
                list += '<th style="color:red">' + pokemon[array[i]] + '</th>';
            }else{
                list += '<th>' + kaitou[i] + '</th>';
                list += '<th>' + pokemon[array[i]] + '</th>';
            }
        }

        list += '<tr>';
        list += '<th>問題数</th>';
        list += '<th>ポケモン画像</th>';
        list += '<th>あなたの回答</th>';
        list += '<th>ポケモン名前</th>';
        list += '</tr>';

        document.getElementById("result").innerHTML = list;
    }else if(level == "hard" || level == "very_hard" || level == "Infinity"){ // 難易度：hard,very_hard,Infinitの処理
        // 答え用のtableタグを作る
        let list = '<table border="2">';
        list += '<tr>';
        list += '<th colspan="4">経過時間</th>';
        list += '</tr>';

        list += '<tr>';
        list += '<th colspan="4">' + total_time + '</th>';
        list += '<tr>';

        list += '<tr>';
        list += '<th>問題数</th>';
        list += '<th>ポケモン画像</th>';
        list += '<th>あなたの回答</th>';
        list += '<th>ポケモン名前</th>';
        list += '</tr>';

        for(let i=0; i<len; i++){
            console.log(array[i])
            list += '<tr>';
            list += '<th>' + (i+1) + '問目</th>';
            list +='<th><img src="../pokemon/No.' + array[i] + '.png"></th>';
            if(kaitou[i]!=pokemon[array[i]]){
                list += '<th style="color:red">' + kaitou[i] + '</th>';
                list += '<th style="color:red">' + pokemon[array[i]] + '</th>';
            }else{
                list += '<th>' + kaitou[i] + '</th>';
                list += '<th>' + pokemon[array[i]] + '</th>';
            }
        }

        list += '<tr>';
        list += '<th>問題数</th>';
        list += '<th>ポケモン画像</th>';
        list += '<th>あなたの回答</th>';
        list += '<th>ポケモン名前</th>';
        list += '</tr>';

        document.getElementById("result").innerHTML = list;
    }
}