document.addEventListener('DOMContentLoaded', () => {
const Url = 'http://localhost:3000/pups'
const dogBar = document.getElementById('dog-bar')
const filterBtn = document.getElementById('good-dog-filter')
const info = document.getElementById('dog-info')
//dogBar.append(newSpan)
fetch(Url)
.then(res => res.json())
.then((dogs)=> {
    dogs.forEach((dog) => {
        const newSpan = document.createElement("span");
        dogBar.append(newSpan)
        newSpan.innerHTML = dog.name
        newSpan.addEventListener('click', () => {
        if (newSpan.innerHTML === false) {
            const img = document.createElement("img");
            const h2 = document.createElement("h2");
            const btn = document.createElement("button")
            img.src = dog.image
            h2.innerHTML = dog.name
            btn.innerHTML = dog.isGoodDog
            info.append(img,h2)
          } else {
            img.src = dog.image
            h2.innerHTML = dog.name
            btn.innerHTML = dog.isGoodDog
            info.append(img,h2)
            }              
        
        })
    })
    
})
})