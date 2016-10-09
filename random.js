/**
 * @desc  获取随机固定位数的随机字符串
 * @param length {Number} 返回的随机字符串位数
 * @return {String} 随机字符串
 */
var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function generateMixed(length) {
     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*35);
         res += chars[id];
     }
     return res;
}

console.log(generateMixed(10));

/**
 * @desc  获取某范围间的随机数
 * @param min {Number} 最小值
 * @param max {Number} 最大值
 * @return {Number} 随机字符串
 */
function GetRandomNum(min,max)
{   
var range = max - min;   
var rand = Math.random();   
return(min + Math.round(rand * range));   
}   

console.log(getRandomNum(1,10));
