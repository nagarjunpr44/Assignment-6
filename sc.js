3.
1.
aa = (f,s,t) => {
    let f,s,t;
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);

// 2.
let n = [1,2,3];
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}


// 3.

const arr = [9,8,5,6,4,3,2,1];

(function() {
   let sum = 0;
   for (var i = 0; i < arr.length; i++)
 {

 sum += arr[i];
 
 }
  console.log(sum);
 })();

// 4.

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) 
 {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);

// 5.

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
var sum = (a, b) =>
 a + b
 sum = num.reduce(sum)
console.log(sum);

// 6.

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(k+1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out)})();

// 7.

var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();

// 8.

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 != 0) {
 console.log(arr[i]);
 }}
})();

// 9.

(function(str){
    var str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")

// 10.

var res = function(arr){
    for(var i=0; i < arr.length; i++)
    {
    var newArr = [];
    var current=arr[i];
    if(newArr.indexOf(current) < 0) newArr.push(current);
    }
    console.log(newArr)
      
 }
   res(["guvi","geek","guvi","duplicate","geeK"])










