function fibonacci(n : number): number {
    if (n <= 0) return 0;
    if(n == 1) return 1;
    return fibonacci(n -1) + fibonacci(n -2);
}

const num = 10;
console.log(`Fibonacci of ${num} is ${fibonacci(num)}`);

