function Biodata(name, age) {
    var res = {
        name: "mohammad naufal",
        age: "18",
        address: "Bekasi",
        hobbies: [
            "Berenang", "olahraga",
        ],
        is_married: false,
        list_school: [
            {name: "SMA X"},
            {year_in: "2017"},
            {year_out: "2020"},
            {major: "IPA"},
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

Biodata("Naufal", 12)
