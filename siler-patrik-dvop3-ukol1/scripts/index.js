const array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]
function writeAll() {
    for (const item of array){
        console.log(item)
    }
    console.log("")
}

writeAll()

array.reverse()
writeAll()

array.sort()
writeAll()

const car = {
    Brand: "Fiat",
    Model: "500",
    Year: "2009"
}

let {Brand, Model, Year} = car
console.log(Brand, Model, Year)
console.log()

const number = Math.floor(Math.random() * 555)
console.log(`Náhodné číslo je: ${number}`)