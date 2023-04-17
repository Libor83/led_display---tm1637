let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P0,
7,
4
)
tm.on()
tm.showNumber(1234)
basic.forever(function () {
	
})
