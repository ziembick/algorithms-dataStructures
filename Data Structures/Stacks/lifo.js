function factorial (x) {
    if (x === 0) return 1
    return x * factorial (x-1)
}

factorial(4)