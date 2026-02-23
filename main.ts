/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Feb 2026
 * This program can roll a 6 sided dice.
*/

// our variables
let currentTemperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function() {
  let currentTemperature = (1, 100)
  basic.showString("The temperature is:")
  basic.showNumber(input.temperature())
  basic.showString("C")
})
