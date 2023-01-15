const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')


let numberofPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  const bill = Number(billInput.value)
  const tipPercent = Number(tipInput.value) / 100
  const tipAmount = bill * tipPercent
  const total = tipAmount + bill

  const perPersonTotal = total / numberofPeople
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`


}
const increasePeople = () => {
  numberofPeople +=1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberofPeople
  calculateBill()
}
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberofPeople <= 1) {
    return
  }

  // decrement the amount
  numberofPeople -= 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberofPeople

  // calculate the bill based on the new number of people
  calculateBill()
}