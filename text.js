// if문 중복 줄이기 


function text() {
  let result = '';
  if(a) { //2. 짧은문을 위로 넣어준다 => 넣어주면서 if의 조건을 바꿔주기
    result = 'a';
  } else { //3. if문의 마지막에 return 또는 break문을 넣어 문을 종료시켜준다. return과 else가 연속적으로 있으면 else 생략 가능.
  
    if (!b) {
      result = 'c';
    }  
  }
  result += 'b'; //1.중복되는 문들을 if문 안으로 넣어준다
  return result;  

}


// for <-> while 문 변환 하기

const numbers = [];
    for (let n = 1; n < 10; n += 1) {
      numbers.push(n);
    }



function text() {
  let result='';
  if(!a) {
    result= 'a';
    result += 'b';
    return result;
  } 
    if(!b) {
      result = 'c';
    }
    result += 'b';
    return result;

  }

// swich문 if문으로 바꿔보기 

  switch (operator){
    case '+':
      $result.value = parseInt(numOne) + parseInt(numTwo); // +연산자는 문자열과 함께 쓸때 문자열 합 연산자로 쓰이기 때문에 parseInt
      break;
      case '-':
      $result.value = numOne - numTwo; // -, *, / 때는 문자열이 숫자열로 변경
      break; 
      case '*':
      $result.value = numOne * numTwo;
      break; 
      case '/':
      $result.value = numOne / numTwo;
      break; 
      default:
        break;
  }


  if (operator === '+') {
    $result.value = parseInt(numOne) + parseInt(numTwo);
  } else if (operator === '-') {
    $result.value = numOne - numTwo;
  } else if (operator === '*' ) {
    $result.value = numOne * numTwo;
  } else {
    $result.value = numOne / numTwo;
  }


  // for문으로 바꿔보기 

  while (candidate.length > 0 ) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random, 1);
    const value = spliceArray [0];
    shuffle.push(value);
  }
