function segitiga(a, b) {
    var i = 1
    var d = b / a
    var e = a
    var array1 = []
    var array2 = []
    for (i; i <= d; i++) {
        for (k = 0; k < d; k++) {
            if ((d - i) === k) {
                array1.push(a)
            } else {
                if ((d - i) < k) {
                    e = a + e
                    array1.push(e)
                } else {
                    array1.push("")
                }
            }
        }
        array2.push(array1)
        array1 = []
        e = 2
    }
    console.log(array2)
    return array2
}

segitiga(2, 10)
