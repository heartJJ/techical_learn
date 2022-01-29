/**
 * enum 枚举
 */

enum Status { A = 1, B } // 默认从0开始


function getStatus( s: any ) {
  if (s === Status.A) {
    return 'a';
  } else if (s === Status.B) {
    return 'b';
  } 
}

console.log(getStatus(1)); // a
console.log(Status[2]); // B


// 一个十二生肖中前五个的排位
enum ChineseZodiac { rat = 1, cattle, tiger, rabbit, dragon }

// 读取某一生肖的排位或者根据某一排位查找生肖名称
function getChineseZodiac(zodiac): void {
  console.log(zodiac.tiger) // => tiger 是第三位
  console.log(zodiac[5])    // => 第五位的是 dragon
}
getChineseZodiac(ChineseZodiac)