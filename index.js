function scuberGreetingForFeet(someValue){
  // Write your code here!
  let greeting
  if(someValue <= 400) {
  greeting = "This one is on me!"
  }

  else if(someValue > 400 && someValue < 2000) {
    greeting = "That will be twenty bucks."
  }

  else if(someValue > 2000 && someValue < 2500)  {
    greeting = "I will gladly take your thirty bucks."
  }

  else if(someValue > 2500) {
    greeting = "No can do."
  }

  return greeting

}

function ternaryCheckCity(city){
  // Write your code here!
  let response
  if(city === "NYC") {
    response = "Ok, sounds good."
  }
  else {
    response = "No go."
  }
  return response
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm
  if(tip === 'generous') {
    charm = 'Thank you so much.'
  }
  else if(tip === 'not as generous') {
    charm = 'Thank you.'
  }
  else{
    charm = 'Bye.'
  }
  return charm
}