var regex = /^[a-z0-9._-]{3,16}$/

function validasi(username) {
    var res = regex.test(username)
    console.log(res);
    return res
}

validasi("john.smith")

// - usernameValidity("john.smith") = true
//     - usernameValidity("johnsmith26") =true
//     - usernameValidity("JOHNSmith") = true
//     - passwordValidity("j0hn5m!th") = false
