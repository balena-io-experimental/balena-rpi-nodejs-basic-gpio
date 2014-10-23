var  ledOn = false;
//provision the gpio pins 22 for the led output and 17 for the button input
var led= require("pi-pins").connect(22),
    button = require("pi-pins").connect(17);

//set the pin mode,  setting pin 22 as an output and 17 as an input
button.mode('in');
led.mode('out');

//set the initial value of the LED to be off.
led.value(ledOn);

//look for a button press event and switch on the LED for 2 seconds when this happens.
button.on('rise', function () {
    console.log("button pressed");
    if ledOn {
        led.value(false);
        ledOn = !ledOn;
    } else {
        led.value(true);
        ledOn = !ledOn;
    }
});
