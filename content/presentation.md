# [fit] IoT, Serverless,
# [fit] and Node.JS
# [fit] (what does full-stack
# [fit] even mean these days?)

---

# About Me

![left](~/Dropbox/profile.jpeg)

* "the nodebotanist"
* DevRel @ IOpipe
* One of the serverless podcast hosts
* EE Student @ ASU
* Austinite

---

# Obligatory cat slide

![left original](~/Dropbox/img/Ace.jpg)
![right original](~/Dropbox/img/Arya.jpg)

---

# The Original (circa 2008-ish) "Full Stack"

* Node.JS on the Server
* JS in browsers
* That's it.

---

# But in 2013...

* Rick Waldron got this neat idea to control an Arduino with Node.JS using node-serialport.
* Johnny-Five was born
* Node crawled out of the sea of traditional servers and into, well, everything!

---

# Now

* Johnny-Five runs on over 40 platforms
* We have cheap, easily accessible microcontrollers that run Linux
* We have JS engines that run in much smaller spaces (i.e. the space of the flash of many microcontrollers)

---

# And it's not just the microcontrollers!

* We're starting to rewrite the tools and processes in Node.JS
* Writing code in Electron apps
* Flashing AVR chips with AVRGIRL
* Using node-serialport, noble, and j5 to control **all the things**

---

# Examples

* AVRGIRL as a replacement for the Arduino IDE for J5
* Tessel 2, RPi, BBB-- tiny Linux machines!
* Espruino, Duktape, JerryScript-- tiny JS engines!

---

We've gone from controlling a tethered Arduino Uno to controlling a litany of devices in Node.JS **in only 4 years**.

---

# [fit] So how exactly does
# [fit] Serverless
# [fit] fit in with all this?

---

# Serverless 101

![right](~/Dropbox/img/serverless-sticker.jpg)

* Yes, there's still servers.
* IaaS taken a step further
* Instead of setting up runtimes and configuring your env, you're writing and deploying code

---

# Node.JS and Serverless

* It's handled by all the large providers, and the default language for some of them
* Serverless is run-on-demand and async by nature, which may be why providers flocked to support it
* Either way, it's a really handy architecture for IoT

---

# IoT <3's Serverless

* Offload (or defer) as much processing power from (or to) your IoT device as you like
* Node.JS all the things!
* Instead of focusing on spinning up your Node servers and configuring them, focus on your fuctionality

---

# Demo: The Status Bar

* GitHub Webhooks and IOpipe webhooks
* Filter to Lambda, which feeds an SQS
* Tessel 2 fetches from SQS and lights up to show events

---

# So what is a Full-Stack these days?

* I guess it depends on what you're building!
* The Status Bar is "Full-Stack" in that it's Node.JS all the way down
* The 2008 Full-Stack holds up, too

---

# The Future

* IoT and Serverless will eventually lead to skynet
* Node.JS developers will have brought about our NodeBot overlords
* The term Full-Stack will continue to evolve with the use of Node.JS on more and more platforms

---

# Thanks for listening!

* @nodebotanist
* the@nodebotani.st, kas@iopipe.com
* nodebotani.st

![inline](~/Dropbox/GIFs/carl-sagan-youre-awesome.gif)