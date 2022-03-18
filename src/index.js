document.addEventListener('DOMContentLoaded', () => {
const Url = 'http://localhost:3000/pups'
const dogBar = document.getElementById('dog-bar')
const filterBtn = document.getElementById('good-dog-filter')
const info = document.getElementById('dog-info')
fetch(Url)
.then(res => res.json())
.then((dogs)=> {
    dogs.forEach((dog) => {
        const newSpan = document.createElement("span");
        dogBar.append(newSpan)
        newSpan.innerHTML = dog.name
        newSpan.addEventListener('click', () => {  
        info.innerHTML = ''
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const btn = document.createElement("button")
        img.src = dog.image
        h2.innerHTML = dog.name
        btn.id = 'goodBad'
        btn.innerHTML = dog.isGoodDog
        info.append(img,h2, btn)
        let id = dog.id
        let goodDog = dog.isGoodDog
        btn.addEventListener('click', (event) => {
            if(event.target.innerHTML === 'true'){
                goodDog = false
                fetch(`http://localhost:3000/pups/${id}`, {
                    method: "PATCH",
                    headers: {"Accept": "application/json",
                        "Content-type": "application/json"},
                    body: JSON.stringify({
                        isGoodDog: false
                    })
                })
                .then(res => res.json())
                .then((dog) => {
                    info.innerHTML = ''
                    img.src = dog.image
                    h2.innerHTML = dog.name
                    btn.id = 'goodBad'
                    btn.innerHTML = dog.isGoodDog
                    info.append(img,h2, btn)
                })
            } else {
                goodDog = true
                fetch(`http://localhost:3000/pups/${id}`, {
                    method: "PATCH",
                    headers: {"Accept": "application/json",
                        "Content-type": "application/json"},
                    body: JSON.stringify({
                        isGoodDog: true
                    })
                })
                .then(res => res.json())
                .then((dog) => {
                    info.innerHTML = ''
                    img.src = dog.image
                    h2.innerHTML = dog.name
                    btn.id = 'goodBad'
                    btn.innerHTML = dog.isGoodDog
                    info.append(img,h2, btn)
                })
            }
        })
        })
    })
    filterBtn.addEventListener('click', () => {
        if (filterBtn.innerText === 'Filter good dogs: OFF'){
            filterBtn.innerText = 'Filter good dogs: ON'
            dogBar.innerHTML = ''
             dogs.forEach((dog) => {
                if (dog.isGoodDog = true){
                    const newSpan = document.createElement("span");
                    dogBar.append(newSpan)
                    newSpan.innerHTML = dog.name
                }
            })
        } else {
            filterBtn.innerText = 'Filter good dogs: OFF'
            dogs.forEach((dog) => {
                const newSpan = document.createElement("span");
                dogBar.append(newSpan)
                newSpan.innerHTML = dog.name
            }
            )
        }
    })
})
})


