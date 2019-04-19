let food = ["rice", "curry", "chocolate"];


food.push("cookies");
food.push("icecream");

// for(let i = 0; i < food.length; ++i){
// 	console.log(food[i]);
// }

for (const item of food){
	console.log(item + " is soooo good!");
}

console.log(food + " is soooo good!");

/*Repeatedly print the value of the variablexValue, decreasing it by 0.5 each time,as long asxValueremains positive.*/
let incrementor = 5;
while (incrementor > 0){
	console.log(incrementor);
	incrementor = incrementor - 1;
}
