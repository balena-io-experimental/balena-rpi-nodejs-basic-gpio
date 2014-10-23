# Basic GPIO with node.js
This is a basic example of GPIO control on the rasperry pi using the pi-pins module from npm

In this example we have a LED on pin 22 which will light up when the button is pressed on pin 17 and switch off when pressed again.

All you need to do is :
1. clone this repo locally  and cd into the folder.
1. connect up the pi as shown in the diagram :
![Circuit diagram](/docs/images/basic-gpio-diagram.png)
1. add the resin remote repo with `git remote add resin git@git.resin.io:myGithubName/myResinAppName.git` , with the correct github and app name, or just copy if from the top right hand corner of your device dashboard on resin.io.
1. now just `git push resin master` wait a minute or so for the code to upload and start.
1. enjoy the all the LED goodness...

