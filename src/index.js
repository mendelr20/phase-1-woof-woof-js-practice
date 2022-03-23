document.addEventListener('DOMContentLoaded', () => {
const baseURL = 'http://localhost:3000/pups'

//DOM SELECTORS
const bar = document.querySelector("#dog-bar")
const details = document.querySelector("#dog-info")
const filterBtn = document.querySelector("#good-dog-filter")

//Fetches
function getAllDogs(){
    fetch(baseURL)
    .then(res => res.json())
    .then(renderAllInBar)
}

function getOneDog(id){
    return fetch(baseURL + `/${id}`)
    .then(res => res.json())
}

function renderAllInBar(dogArr){
    bar.innerHTML = ''
    dogArr.forEach(addOneDogToBar)
}

function addOneDogToBar(dogObj){
    const dogSpan = document.createElement('span')
    dogSpan.innerText = dogObj.name
    dogSpan.dataset.id = dogObj.id
    dogSpan.addEventListener('click', handleSpanClick)
    bar.append(dogSpan)
}

function showOneDog(dogObj){
    console.log(dogObj)
    details.innerHTML = ''
    const dogDiv = document.createElement('div')
    dogDiv.innerHTML = `
    <img src=${dogObj.image}>
    <h2>${dogObj.name}</h2>`
    details.append(dogDiv)
}
//Event Handlers
function handleSpanClick(event){
    const id = event.target.dataset.id
    getOneDog(id).then(showOneDog)

}
//Initialize
getAllDogs()
})


// const Url = 'http://localhost:3000/pups'
// const filterBtn = document.getElementById('good-dog-filter')
// let info 
// let dogBar
// let newSpan
// let btn
// document.addEventListener('DOMContentLoaded', () => {
// fetchRequest()
// })


// function fetchRequest(){
//     fetch(Url)
//     .then(res => res.json())
//     .then((dogs)=> {
//         dogs.forEach((dog) => {
//             console.log('hey')
//             newSpan = document.createElement("span");
//             dogBar = document.getElementById('dog-bar')
//             dogBar.append(newSpan)
//             newSpan.innerHTML = dog.name
//             spanBtn(dog)
//         })
        
//     })
// }

// function spanBtn(dog){
//     newSpan.addEventListener('click', () => {  
//         dogBar.innerHTML = ''
//         fetchRequest()
//     info = document.getElementById('dog-info')
//     info.innerHTML = ''
//     const img = document.createElement("img");
//     const h2 = document.createElement("h2");
//     btn = document.createElement("button")
//     img.src = dog.image
//     h2.innerHTML = dog.name
//     btn.id = 'goodBad'
//     btn.innerHTML = dog.isGoodDog
//     info.append(img,h2, btn)
//     let id = dog.id
//     let goodDog = dog.isGoodDog
//     btn.addEventListener('click', (event) => {
//         if(event.target.innerHTML === 'true'){
//             goodDog = false
//             fetch(`http://localhost:3000/pups/${id}`, {
//                 method: "PATCH",
//                 headers: {"Accept": "application/json",
//                     "Content-type": "application/json"},
//                 body: JSON.stringify({
//                     isGoodDog: false
//                 })
//             })
//             .then(res => res.json())
//             .then((dog) => {
//                 info.innerHTML = ''
//                 img.src = dog.image
//                 h2.innerHTML = dog.name
//                 btn.id = 'goodBad'
//                 btn.innerHTML = dog.isGoodDog
//                 info.append(img,h2, btn)
//             })
//         } else {
//             goodDog = true
//             fetch(`http://localhost:3000/pups/${id}`, {
//                 method: "PATCH",
//                 headers: {"Accept": "application/json",
//                     "Content-type": "application/json"},
//                 body: JSON.stringify({
//                     isGoodDog: true
//                 })
//             })
//             .then(res => res.json())
//             .then((dog) => {
//                 info.innerHTML = ''
//                 img.src = dog.image
//                 h2.innerHTML = dog.name
//                 btn.id = 'goodBad'
//                 btn.innerHTML = dog.isGoodDog
//                 info.append(img,h2, btn)
//             })
//         }
//     })
//     })
// }

// function filter(){
//     filterBtn.addEventListener('click', () => {
//         if (filterBtn.innerText === 'Filter good dogs: OFF'){
//             filterBtn.innerText = 'Filter good dogs: ON'
//             dogBar.innerHTML = ''
//             const dogArray = dogs.filter(dog => dog.isGoodDog === true)
//             dogArray.forEach((dog) => {
//                 const newSpan = document.createElement("span");
//                 dogBar.append(newSpan)
//                 newSpan.innerHTML = dog.name
//             })
//         } else {
//             filterBtn.innerText = 'Filter good dogs: OFF'
//             dogBar.innerHTML = ''
//             dogs.forEach((dog) => {
//                 const newSpan = document.createElement("span");
//                 dogBar.append(newSpan)
//                 newSpan.innerHTML = dog.name
//             }
//             )
//         }
//     })
// }