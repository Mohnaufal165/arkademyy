function Biodata(name, age) {
    var res = {
        name: name,
        age: age,
        address: "Bekasi",
        hobbies: [
            "Berenang", "olahraga",
        ],
        is_married: false,
        list_school: [
            {name: "SMAN 1 SETU",year_in: "2017",year_out: "2020",major: "IPA"},
            {name: "SMP FAJAR DUNIA",year_in: "2014",year_out: "2017",major: ""},
            {name: "SD PRATAMA",year_in: "2007",year_out: "2014",major: ""}
        ],
        skills: [
            "Outdoor activity",
            "Swim"
        ],
        interest_in_coding: true
    }
    console.log(res)
    return res

}

Biodata("Mohammad naufal", 18)
