//regresar los indices de un arreglo que sumen el objetivo
// el arreglo siempre contiene la solucion

function twoSum(nums, target) {
    let result = [];
    let actual = 0;
    let siguiente = 0;
  
    while (actual < nums.length) {
      if (nums[actual] == target) {
        result.push(actual);
        return result;
      }
      siguiente = actual + 1;
      while (siguiente < nums.length) {
        if (nums[actual] + nums[siguiente] == target) {
          result.push(actual);
          result.push(siguiente);
          return result;
        }
        siguiente++;
      }
      actual++;
    }
  }

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([0, 4, 3, 0], 0));

// comprueba si el numero se lee igual al derecho o al reves

function isPalindrome(number) {
    let normal = number.toString();
    let reverse = "";
  
    for (ite = normal.length - 1; ite >= 0; ite--) {
      reverse = reverse + normal[ite];
    }

    return normal === reverse;
  }
  
  console.log(isPalindrome(121));
  console.log(isPalindrome(-121));
  console.log(isPalindrome(10));

  function romanToInt(romanNumber) {
    const romanArray = [
      { symbol: "I", value: 1 },
      { symbol: "V", value: 5 },
      { symbol: "X", value: 10 },
      { symbol: "L", value: 50 },
      { symbol: "C", value: 100 },
      { symbol: "D", value: 500 },
      { symbol: "M", value: 1000 },
    ];
  
    let state = 0;
    let swap = 0;
    let result = 0;
    let iterador = 0;
  
    while (iterador < romanNumber.length) {
      //console.log(swap);
      //console.log(result);
  
      switch (state) {
        case 0:
          if (romanNumber[iterador] === "I") {
            state = 1;
            swap += romanArray.find(
              (element) => element.symbol === romanNumber[iterador]
            ).value;
            iterador++;
          } else if (romanNumber[iterador] === "X") {
            state = 2;
            swap += romanArray.find(
              (element) => element.symbol === romanNumber[iterador]
            ).value;
            iterador++;
          } else if (romanNumber[iterador] === "C") {
            state = 3;
            swap += romanArray.find(
              (element) => element.symbol === romanNumber[iterador]
            ).value;
            iterador++;
          } else {
            result += romanArray.find(
              (element) => element.symbol === romanNumber[iterador]
            ).value;
            iterador++;
          }
  
          break;
  
        case 1:
          if (romanNumber[iterador] === "V" || romanNumber[iterador] === "X") {
            state = 0;
            result +=
              romanArray.find(
                (element) => element.symbol === romanNumber[iterador]
              ).value - swap;
            iterador++;
            swap = 0;
          } else {
            state = 0;
          }
          break;
  
        case 2:
          if (romanNumber[iterador] === "L" || romanNumber[iterador] === "C") {
            state = 0;
            result +=
              romanArray.find(
                (element) => element.symbol === romanNumber[iterador]
              ).value - swap;
            iterador++;
            swap = 0;
          } else {
            state = 0;
          }
          break;
  
        case 3:
          if (romanNumber[iterador] === "D" || romanNumber[iterador] === "M") {
            state = 0;
            result +=
              romanArray.find(
                (element) => element.symbol === romanNumber[iterador]
              ).value - swap;
            iterador++;
            swap = 0;
          } else {
            state = 0;
          }
          break;
      }
    }
  
    if (swap > 0) {
      result += swap;
    }
  
    return result;
  }
  
  console.log(romanToInt("III"));
  console.log(romanToInt("LVIII"));
  console.log(romanToInt("MCMXCIV"));
  