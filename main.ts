/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria Varghese
 * Created on: Jan 2025
 * This program uses servo and robotbit 
*/

//variable
const S1 = robotbit.Servos.S1

//setup
basic.showIcon(IconNames.Happy)

//when button A is pressed 
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(S1, 156)
    basic.showIcon(IconNames.Happy)
})

//when button B is pressed 
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(S1, 90)
    basic.showIcon(IconNames.Happy)
})

//cleanup
basic.clearScreen()
