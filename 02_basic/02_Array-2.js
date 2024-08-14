const marvelhero = ["thor", "ironma", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvelhero.push(dc_heros)
console.log(marvelhero);
console.log(typeof(marvelhero[3]));
console.log(marvelhero[3]);
console.log(marvelhero[3][1]);


const allheros = marvelhero.concat(dc_heros) //concat se dono array add ho jayenge  or ak new array me store honge
console.log(allheros);
        // OR    (2-method print karvane ka)
const all_new_heros = [...marvelhero, ...dc_heros]
console.log(all_new_heros);



// array ko flate kane ke liye
const another_ary = [2,34,[4,35,2,8],34,65,[43,53,[2,1,6,3]]]

const flat_ary1 = another_ary.flat(1)
const flat_ary2 = another_ary.flat(Infinity)
console.log(flat_ary1);
console.log(flat_ary2);



console.log(Array.isArray('mukesh'));
console.log(Array.from('mukesh'));      //object, string ko array banane ke liye use 
console.log(Array.from({name: "hitesh" }));    //****interesting case for interview*****


let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400
let score5 = 500
console.log(Array.of(score1, score2, score3, score4, score5));

