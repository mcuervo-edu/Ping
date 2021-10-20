input.onButtonPressed(Button.A, function () {
    A += dA
    if (A == 4) {
        A = 2
        dA = -1
    }
    if (A == -1) {
        A = 1
        dA = 1
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    B += dB
    if (B == 4) {
        B = 2
        dB = -1
    }
    if (B == -1) {
        B = 1
        dB = 1
    }
    basic.clearScreen()
})
let dB = 0
let B = 0
let dA = 0
let A = 0
A = 0
dA = 1
B = 0
dB = 1
let X = 2
let Y = 2
let dX = 1 - 2 * randint(0, 1)
let dY = 1 - 2 * randint(0, 1)
basic.forever(function () {
    led.plot(0, A)
    led.plot(0, A + 1)
    led.plot(4, B)
    led.plot(4, B + 1)
    led.plot(X, Y)
    basic.pause(500)
    if (Y == 5) {
        Y = 4
        dY = 0
    }
    if (Y == -1) {
        Y = 1
        dY = 1
    }
    if (X == 0 && led.point(0, 0)) {
        Y = 1
        dY = 1
    }
    led.toggle(X, Y)
    X += dX
    Y += dY
})
