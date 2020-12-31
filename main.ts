input.onGesture(Gesture.LogoDown, function () {
    radio.sendValue("name", 4)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendValue("name", 3)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("name", 0)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendValue("name", 2)
})
radio.onReceivedValue(function (name, value) {
    if (value == 0) {
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, 7)
    } else if (value == 1) {
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, 7)
    } else if (value == 2) {
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, -7)
        powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, 7)
    } else if (value == 4) {
        powerfunctions.setSpeed(PowerFunctionsMotor.Blue1, -7)
        powerfunctions.setSpeed(PowerFunctionsMotor.Red1, 7)
    } else {
        powerfunctions.float(PowerFunctionsMotor.Red1)
        powerfunctions.float(PowerFunctionsMotor.Blue1)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("name", 1)
})
powerfunctions.connectIrLed(AnalogPin.P0)
basic.forever(function () {
	
})
