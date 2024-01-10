export function getCurrentDate() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}
export function getParameterValueFromURL(url: string, key: string): string | null {
  const regex = new RegExp(`[?&]${key}=([^&#]*)`, 'i');
  const match = regex.exec(url);
  return match ? decodeURIComponent(match[1]) : null;
}
export function suijione(num: boolean, maxA: boolean, minlA: boolean, fqy: number) {
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  if (num) {
    for (let m = 0; m <= 9; m++) {
      arr.push(m);
    }
  }
  if (maxA) {
    for (let m = 65; m <= 90; m++) {
      arr1.push(m);
    }
  }
  if (minlA) {
    for (let m = 97; m <= 122; m++) {
      arr2.push(m);
    }
  }
  if (!fqy) {
    console.log("生成位数必传");
  }
  let mergeArr = arr.concat(arr1);
  let mergeArr1 = mergeArr.concat(arr2);
  let _length = mergeArr1.length;
  let text = "";
  for (let m = 0; m < fqy; m++) {
    let text1 = "";
    let random = getRandom(0, _length);
    if (mergeArr1[random] <= 9) {
      text1 = mergeArr1[random];
    } else if (mergeArr1[random] > 9) {
      text1 = String.fromCharCode(mergeArr1[random]);
    }
    text += text1;
  }
  return text;
}
function getRandom(a: number, b: number) {
  var max = a;
  var min = b;
  if (a < b) {
    max = b;
    min = a;
  }
  return parseInt(Math.random() * (max - min)) + min;
}
// 解析链接的code
export function getWXParams(data: string) {
  var url = location.search; //获取url中"?"符后的字串
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  // console.log(theRequest)
  return theRequest[data];
}