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
