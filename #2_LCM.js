const arr =[1,2,3];

function solution(arr){
  let sum = 0;

  //제한사항:배열의 최소길이 3
  if(arr.length<3){
    return;
  }

  for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      const a = arr[i];
      const b = arr[j];
      //최대공약수
      const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
      //최소공배수
      const lcm = (a, b) => a * b / gcd(a, b);

      sum += lcm(a,b);
    }
  }
  
  console.log(sum);
  return sum;
}

solution(arr)