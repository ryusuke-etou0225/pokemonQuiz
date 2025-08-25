/***********************************************************************/
/*  FILE : const_common.js                                             */
/*  DATE : Saturday, August 23, 2025                                   */
/*  NOTE : This page defines constants and variables.                  */
/***********************************************************************/

// 厳格モード
'use strict';

// 難易度説明
const normalExplanation = "難易度：Normalは計15問のポケモン名前当てクイズをします\n不正解でも続行されます。画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?";
const hardExplanation = "難易度：Hardは計30問のクイズを連続正解することでクリアになります\n不正解の時点で結果画面に移動します\n画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?";
const veryhardExplanation = "難易度：VeryHardは計50問のクイズを連続正解することでクリアになります\n不正解の時点で結果画面に移動します\n画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?";
const infinityExplanation = "難易度：Infinityは、905種類のポケモンがランダムですべて出現します\n連続正解でクリアです。不正解の時点で結果画面に移動します\n正直クリアできる人はほとんどいないと思うので、まぁ頑張ってください\n画面が切り替わった瞬間に時間が計測されます\nクイズを始めますか?";

// 難易度Infinityの問題数
const infinityCount = 905;

// クイズ終了時メッセージ
const normalAlert = "15問のクイズが終了しました。結果画面に移動します";
const hardAlert = "連続30問正解しました。結果画面に移動します";
const veryhardAlert = "連続50問正解しました。結果画面に移動します";
const failureAlert = "名前が違いました。結果画面に移動します";

// URLパラメータの取得
const params = new URLSearchParams(window.location.search);
const generation = params.get("generation") || "zenkoku";
const level = params.get("level") || "normal";

// 結果ページのURL
const resultURL = `result.html?level=${encodeURIComponent(level)}&generation=${encodeURIComponent(generation)}`;;

// 俳句を定義
const haiku_01 = ["己が無知","知って始まる","ポケの道"];
const haiku_02 = ["ケンタロス","アフロになって","うっしっし"];
const haiku_03 = ["メタモンが","変身しっぱい","ダメだもん"];
const haiku_04 = ["キングラー","色がちがうは","きんくだ～"];
const haiku_05 = ["マンキーの","しっぽがこげて","オコゲザル"];
const haiku_06 = ["このサイト","イワークいわく","いわくつき"];
const haiku_07 = ["もっとコイ","わしもコイする","コイキング"];
const haiku_08 = ["色違い","追えば追うほど","出会えない"];
const haiku_09 = ["ポケ図鑑","埋めても埋めても","追加来る"];
const haiku_10 = ["カイロスは","やせたあのコが","ストライク"];
// const haiku_11 = ["","",""];
const haiku = [haiku_01,haiku_02,haiku_03,haiku_04,haiku_05,haiku_06,haiku_07,haiku_08,haiku_09,haiku_10];
