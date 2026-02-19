/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Feb 2026
 * This program simulates a 6 sided dice.
*/

// our variables
let randomNumber: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function() {
  randomNumber = randint(1, 6)
  basic.showNumber(randomNumber)
})
