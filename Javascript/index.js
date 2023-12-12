var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;
console.log(lovescore);



//Arrays


function fizzBuzz() {
    var numbers = [];
    for(var i = 1; i <= 100; i++){
        if(i%3 == 0 && i%5 == 0){
            numbers.push("FizzBuzz");
        } else if (i%3 == 0){
            numbers.push("Fizz");
        } else if (i%5 == 0){
            numbers.push("Buzz");            
        } else {
            numbers.push(i);
        }
        
    }

    console.log(numbers);
}

fizzBuzz(); 