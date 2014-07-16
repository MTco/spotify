Spotify Web-Desktop App
=======================

A script to make a pop-out desktop app of Spotify's web app.  Useful for Linux if the preview is not functioning as expected.

Created using node-webkit and grunt.

Install
=======

### Dependencies:

Install npm (if you don't already have it)

`sudo apt-get install npm`

Install nodejs (if you don't already have it)

`sudo apt-get install nodejs-legacy`

Install grunt-cli (if you don't already have it)

`sudo npm install -g grunt-cli`

### Clone repo:

Navigate to desired directory (I chose Documents)

`git clone https://github.com/erming/spotify.git`

### Run install.sh:

`cd spotify`

`chmod a+x install.sh`

`./install.sh`

### Other

You may need to set-up a symbolic link for libudev.so.0 like the 2nd response (http://www.askubuntu.com/questions/288821)[here].

For me (Linux Mint), it was done with this command:

`sudo ln -sf /lib/x86_64-linux-gnu/libudev.so.1 /lib/x86_64-linux-gnu/libudev.so.0`

Although your folder located at `/lib/_____-linux-gnu/libudev.so.1` may be different.

### Desktop / Panel Icon

Coming soon.  Directions may differ for each distro.

License
=======

MIT
