function addUpTo(number) {
  let total = 0;
  //number =6
  for (let i = 1; i <= number; i++) {
    total += i;
    //1+0=1
    //1+1=2
    //2+1=3
    //3+1=4
    //4+1=5
    //5+1=6
  }
  //total = 21
  return total;
}

console.log(addUpTo(6));
