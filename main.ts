input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 15, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.show()
    strip.rotate(1)
    basic.pause(100)
})
