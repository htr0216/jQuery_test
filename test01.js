//alert('外部ファイル');
var a = 1;
//alert(a);
var b = 2;
var c = a + b;
alert(c);

var A = 'りんご';
var B = 'バナナ';
var C = A + B;
alert(C);

//配列変数
/*
var fruits = ['りんご','バナナ'];
alert(fruits[0]);
alert(fruits[1]);
*/

//オブジェクト変数
/*
var fruits = {'name': 'りんご', 'price': 100};
alert(fruits['name']);
alert(fruits.name);
alert(fruits['price']);
alert(fruits.price);
*/

//オブジェクト変数の配列
/*
var fruits = [
  {'name': 'りんご', 'price': 100},  // 0番目のオブジェクト変数
  {'name': 'バナナ', 'price': 150},  // 1番目のオブジェクト変数
  {'name': 'いちご', 'price': 200}   // 2番目のオブジェクト変数
];
alert(fruits[1].price);
*/

//キー入力
/*
var answer = prompt('1 + 1 は？');  //promptとは入力を受け付けるための関数
alert(answer);
*/

//分岐処理
// if〜else
/*
var answer = prompt('1 + 1 は？');
if (answer == 2) {
  alert('正解');
} else {
  alert('不正解');
}
*/

//選択肢が複雑な分岐処理
/*
var answer = prompt('りんごとバナナのどちらが好きですか？');
    if (answer == 'りんご') {
        alert('りんごは英語でappleです');
    }   else if (answer == 'バナナ') {
        alert('バナナは英語でbananaです');
    }   else {
        alert('りんご or バナナを入力してください');
    }
*/

//if〜else文だと条件式が複雑になるので、switch〜case文でわかりやすくする
//switch〜case
/*
var answer = prompt('りんごとバナナのどちらが好きですか？');
switch (answer) {
 case 'りんご':
    alert('りんごは英語でappleです');
    break;　//ここのbreakは重要
 case 'ばなな':
    alert('ばななは英語でbananです');
    break;　//ここのbreakは重要
　default: //elseと同じ役割
    alert('りんご or バナナを入力してください');
    break;　//なくても処理はかわらない
}
*/

//繰り返し処理
/*
for文 = 開始、継続するときの処理　＆　継続するための条件式　３つを記述
var fruits = ['りんご','ばなな','いちご','ぶどう','もも','メロン','みかん'];

for (var i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}
*/

//while文

var fruits = ['りんご', 'バナナ', 'いちご', 'ぶどう', 'もも', 'メロン', 'スイカ', 'みかん'];
/*
var i = 0;
while (true) {
    if (i >= fruits.length) {
        break; //処理からぬけるという表現
    }
    alert(fruits[i]);
    i++;
}*/

//関数
/*
function calc(x) { 　//関数定義宣言　関数(変数[パラメータ、引数])
    return x * 2;　　//関数の実行結果を返す　(関数)　*　数値
}
alert(calc(3));
*/

//課題1.2
var answer = prompt('「正の数」「負の数」判定');
if (answer >= 1) {
    alert('「正の数」です');
} else if (answer <= -1) {
    alert('「負の数」です');
} else {
    alert('数値を入力してください');
}
/*
//課題3
var animals = ['パンダ', 'ライオン', 'キリン'];

var i = 0;
while (true) {
    if (i >= animals.length) {
        break;
    }
    
    alert(animals[i]);
    i++;
}
*/
//課題4
/*
var animals = ['パンダ', 'ライオン', 'キリン'];
var animal =prompt('パンダ、ライオン、キリン から1つ入力してください');
var i = 0;
while (i < animals.length) {
    if (animal == 'ライオン') {
        alert(animals[1]);　　　　　//課題５
        break;
    }
    alert(animals[i]);
    i++;
}
*/

//課題6.7
/*
var animals = [
    {'name': 'パンダ', 'weight': 80},
    {'name': 'ライオン', 'weight': 200},
    {'name': 'キリン', 'weight': 300}
    ];
var animal = prompt('パンダ、ライオン、キリン から1つ入力してください');
switch (animal) {
    case 'パンダ':
        alert('動物名' + animals[0].name + '体重' + animals[0].weight+'kg');
        break;
    case 'ライオン':
        alert('動物名' + animals[1].name + '体重' + animals[1].weight+'kg');
        break;
    case 'キリン':
        alert('動物名' + animals[2].name + '体重' + animals[2].weight+'kg');
        break;
}
*/

//課題8
var x = prompt('円の半径を入力してください');
function area(x) {
    return x *　x * 3.14;
}
alert('面積は'+ area(x));