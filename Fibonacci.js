
	
var belowFourMil = true
var a = 1
var b = 2
var sum = 0
var temp = 0
while(belowFourMil){
	temp = a + b;
	a, b, temp
	a = b; // set the old second number equal to the new first number.
	b = temp; // set the old first number equal to the new number.
	if(temp % 2 === 0){
		sum +=temp;
	}
	if(temp > 4000000){
		belowFourMil = false;
	}
}
console.log(sum)























