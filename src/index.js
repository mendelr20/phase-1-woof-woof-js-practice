document.addEventListener('DOMContentLoaded', () => {
const Url = 'http://localhost:3000/pups'
const dogBar = document.getElementById('dog-bar')
const filterBtn = document.getElementById('good-dog-filter')
const info = document.getElementById('dog-info')
const newSpan = document.createElement("span");
dogBar.append(newSpan)
fetch(Url)
.then(res => res.json)
then((dogs)=> {
    dogs.forEach((dog) => {
        monsterContainer.append(renderMonster(monster), document.createElement('hr'))  
        dogBar.append(newSpan)
        monsterSpan.innerHTML = `
            <h1>${dog.name}</h1>
            `
    })
})
})
