function solution(a){
  let sum=0;
  
  //제한사항 :a는 4부터 주어집니다.
  if(a<4){
    return;
  }
  
  //소수: 1과 자기자신으로만 나눠지는 수(1은 소수X)
  for(let i = 2 ; i <= a ; i++){
    let priNum = true;

    for(let j=2; j<i; j++){
      if(i % j === 0){
        priNum = false;
      }
    }

    if(priNum){
      sum += i
    }
    
  }
  console.log(sum);
  return sum;
}

solution(5);