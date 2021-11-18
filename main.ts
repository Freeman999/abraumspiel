/**
 * Modus 2
 * 
 * (Pins)
 */
/**
 * Modus 3
 * 
 * (nix)
 */
input.onPinPressed(TouchPin.P0, function () {
    if (modus == 2) {
        moveLinks()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (modus == 1) {
        moveRechts()
    }
})
function moveRechts () {
    if (Xaktuell + Xchange < 4 && Xaktuell < 4) {
        Xchange += 1
    }
}
input.onPinPressed(TouchPin.P3, function () {
    if (modus == 2) {
        moveRechts()
    }
})
input.onButtonPressed(Button.A, function () {
    if (modus == 0) {
        moveLinks()
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (modus == 1) {
        moveLinks()
    }
})
/**
 * neuer Platz berechnen:
 * 
 * rechts/links Bewegung
 * 
 * Bewegung nach oben
 */
/**
 * neues Bild zeichnen
 */
/**
 * Variablen resetten und pausieren
 */
input.onButtonPressed(Button.AB, function () {
    if (modus < 3) {
        modus += 1
    } else {
        modus = 0
    }
    Reset()
})
input.onButtonPressed(Button.B, function () {
    if (modus == 0) {
        moveRechts()
    }
})
function moveLinks () {
    if (Xaktuell + Xchange > 0 && Xaktuell > 0) {
        Xchange += -1
    }
}
function Reset () {
    pausierer = false
    basic.clearScreen()
    ticklängems = 700
    Yaktuell = 5
    Xaktuell = 2
    Ynext = 5
    Xnext = 2
    Xchange = 0
    if (modus == 0) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    } else if (modus == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . . . #
            . # . # .
            . . . . .
            `)
        basic.clearScreen()
    } else if (modus == 2) {
        basic.showLeds(`
            . # # # .
            . # . . #
            . # # # .
            . # . . .
            . # . . .
            `)
        basic.clearScreen()
    } else {
        basic.showString("Pause")
    }
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    pausierer = true
}
let Xnext = 0
let Ynext = 0
let Yaktuell = 0
let ticklängems = 0
let pausierer = false
let Xchange = 0
let Xaktuell = 0
let modus = 0
modus = 0
Reset()
/**
 * vertikaler reset falls nötig
 */
/**
 * Modus 0
 * 
 * (A/B)
 */
/**
 * Modus 1
 * 
 * (neigen)
 */
basic.forever(function () {
    while (pausierer) {
        if (Yaktuell <= 0) {
            Ynext = 4
        } else {
            Xnext = Xaktuell + Xchange
            Xchange = 0
            Ynext = Yaktuell - 1
        }
        led.unplot(Xaktuell, Yaktuell)
        led.plot(Xnext, Ynext)
        Xaktuell = Xnext
        Yaktuell = Ynext
        basic.pause(ticklängems)
    }
})
