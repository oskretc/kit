let i = 0
let j = 0
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(i, j)
            basic.pause(100)
            led.unplot(i, j)
            i = i + 1
        }
        i = 4
        for (let index = 0; index < 5; index++) {
            led.plot(i, j)
            basic.pause(100)
            led.unplot(i, j)
            i = i - 1
        }
        j = j + 1
    }
    j = 0
})
