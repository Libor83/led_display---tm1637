let aktuální_teplota = input.temperature()
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P0,
7,
4
)
tm.on()
tm.showNumber(aktuální_teplota)
basic.forever(function () {
    basic.showString(".")
    aktuální_teplota = input.temperature()
    basic.showString("" + (aktuální_teplota))
    tm.showNumber(aktuální_teplota)
})
