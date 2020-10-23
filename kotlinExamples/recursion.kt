fun factorial(num: Int): Int {
    return if (num == 0 || num == 1) {
        1
    } else if (num > 0) {
        num * factorial(num-1)
    } else {
        throw RuntimeException("Invalid num")
    }
}
