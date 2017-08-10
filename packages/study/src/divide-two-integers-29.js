var divide = (dividend, divisor) => {
  const isNegativeDividend = dividend < 0;
  if (isNegativeDividend) {
    dividend = 0 - dividend;
  }
  const isNegativeDivisor = divisor < 0;
  if (isNegativeDivisor) {
    divisor = 0 - divisor;
  }

  let count = 0;
  while(dividend >= divisor) {
    count++;
    dividend -= divisor;
  }
  let remainder = dividend;

  if (isNegativeDividend && isNegativeDivisor){

  } else if (isNegativeDividend){
    count = 0 - count;
    remainder = 0 - remainder;
  } else if (isNegativeDivisor) {
    count = 0 - count;
  }

  console.log(count, ' remainder ', dividend);
};

divide(3,2);
divide(4,2);
divide(5,2);