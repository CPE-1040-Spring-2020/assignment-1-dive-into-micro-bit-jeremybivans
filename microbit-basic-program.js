let iconHeart: boolean = true

input.onButtonPressed(Button.A, function () {
    if (iconHeart) {

        iconHeart = !iconHeart

    } else {

        iconHeart = true

    }
})

basic.forever(function () {


    if (iconHeart) {

        basic.showIcon(IconNames.Heart)

        basic.pause(100)

        basic.clearScreen()

    } else {

        basic.showIcon(IconNames.Butterfly)

        basic.pause(100)

        basic.clearScreen()

    }



})
