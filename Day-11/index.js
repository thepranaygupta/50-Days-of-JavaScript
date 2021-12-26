function fibonacci(n) {
    if (n == 0)
        return 0;
    if (n <= 2)
        return 1;

    var a = 1, b = 1, c;
    for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
