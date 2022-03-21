input.onButtonPressed(Button.A, function () {
    basic.showString("" + (string))
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    sprite = game.createSprite(1, 4)
})
let sprite: game.LedSprite = null
let number = 0
let string = 0
basic.showIcon(IconNames.Heart)
basic.showNumber(4)
basic.showString("Hello!")
string = 0
number = 4
