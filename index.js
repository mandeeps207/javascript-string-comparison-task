function minimumOperations(a, b) {
  let arr1 = [];
  let arr2 = [];
  if (typeof a==="string" && typeof b==="string") {
    for (let i=0; i<a.length; i++) {
      let S = a[i];
      arr1.push(S);
    }
    for (let i=0; i<b.length; i++) {
      let T = b[i];
      arr2.push(T);
    }

    const dA = {}, dB = {};
    arr1.forEach((el, i) => {
      if(arr1.indexOf(el) != i) {
        dA[el] += 1;
      } else {
        dA[el] = 1;
      }
    });
    arr2.forEach((el, i) => {
      if(arr2.indexOf(el) != i) {
        dB[el] += 1;
      } else {
        dB[el] = 1;
      }
    });

    Object.keys(dA).forEach(el => {
      if(el in dB) {
        if(dA[el] >= dB[el]) {
          dA[el] = dB[el]
        }
      } else {
        dA[el] = 0;
      }
    })
    let count = arr1.length - Object.values(dA).reduce(function(total, value){
      return total + Number(value);
    }, 0);
    return count;
  }
} 

function stringaddtion(S,T) {
  var result =404;
  var val1 = minimumOperations (T,S)+1;
  var val2 = minimumOperations (S,T)+1; 

  result = val1 +" "+ val2;
  return result;
} 

//var temp= gets().trim('\n').split(/\n|\s);
var S = "ahsuxjnegfh";
var T = "oiryhjsbge";

console.log(stringaddtion(S,T));