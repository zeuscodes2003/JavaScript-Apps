let squares = document.querySelectorAll('.colors')
let counts = {
  'red': 0,
  'green': 0,
  'blue': 0
}
squares.forEach(square => {
  square.addEventListener('click', () => {
    counts[square.value] += 1;
    square.innerText = counts[square.value];

  })

})
let reset = document.getElementById('reset')

reset.onclick=()=>{
  squares.forEach(square=>{
    square.innerText='';
  })
}
