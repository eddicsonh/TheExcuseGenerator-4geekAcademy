
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


const generateExcuse = () => {
 
    let whoIndx = Math.round(Math.random() * who.length)
    let actionIndx = Math.round(Math.random() * action.length)
    let whatIndx = Math.round(Math.random() * what.length)
    let whenIndx = Math.round(Math.random() * when.length)

    return document.querySelector('#excuse').innerHTML = who[whoIndx] + ' ' + action[actionIndx] + ' ' + what[whatIndx] + ' ' + when[whenIndx]
}

generateExcuse()

