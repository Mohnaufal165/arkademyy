function hitungKalimat(a) {
    var re = /na/g
    var res = a.match(re);
    var result = "ditemukan " + res.length + " kali"
    console.log(result)
}

hitungKalimat("Banananana")
