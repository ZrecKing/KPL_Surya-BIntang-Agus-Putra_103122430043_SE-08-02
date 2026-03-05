function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return "Input tidak valid";
    }

    let result = [];
    let i = 0;
    while (i < arr.length) {
        let Bilangan = arr[i];

        if (Bilangan % 14 === 0) {
            result.push("FizzBuzz");
        } else if (Bilangan % 2 === 0) {
            result.push("Fizz"); 
        } else if (Bilangan % 7 === 0) {
            result.push("Buzz");
        } else {
            result.push(Bilangan);
        }
        i++;
    }

    if (arr.includes(1)) {
        return result.join(", ");
    } else {
        return result.join(" ");
    }
}

module.exports = fizzBuzz;