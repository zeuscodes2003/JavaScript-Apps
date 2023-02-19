// https://superheroapi.com/api/557621199639392/character-id
// https://www.superheroapi.com/api.php/557621199639392/search/ironman
// __________________________________________________________________________________________________________________________________________________________________
const URL = 'https://superheroapi.com/api.php/557621199639392'

let frame = document.getElementById('frame');
let btn = document.getElementById('btn');
let input = document.getElementById('input');
let submit = document.getElementById('submit');
let textarea = document.getElementById('textarea');

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const getSuperHero = (id) => {
  if (typeof (id) == "number") {   
    fetch(`${URL}/${id}`).then(response => response.json()).then(json => {
      const final=statistics(json)
      const name = `<h1 style="margin-left: 120px;text-decoration:double;">${json.name}</h1>`     
      frame.innerHTML = `${name}<img src="${json.image.url}" id="images" width="400px" height="400px" alt=""> ${final} `
    })
  }
  else {
    fetch(`${URL}/search/${id}`).then(response => response.json()).then(json => {
      const name = `<h1 style="margin-left: 120px;text-decoration:double;">${json.results[0].name}</h1>`
       const final=statistics(json.results[0])
      frame.innerHTML = `${name}<img src="${json.results[0].image.url}" id="images" width="400px" height="400px" alt=""> ${final}`
    })
  }
}

const statistics=(json)=>{
  const stats=Object.keys(json.powerstats).map(st=>{
     return `<p>${statToEmoji[st]}${st.toUpperCase()}:${json.powerstats[st]}</p>`
  })

 return stats.join(' ')
  
  
  
}


const random = () => {
  let total = 731;
  return Math.floor(Math.random() * total) + 1;

}

btn.onclick = () => { getSuperHero(random()) }


submit.addEventListener('click', () => { getSuperHero(input.value) })





// const statp=Object.keys(json.powerstats).map(stat=>{
//      console.log( `<p>${stat}:${json.powerstats[stat]}</p>`)
//   })