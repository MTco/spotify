# Spotify Web App

This is a node-webkit application serving http://play.spotify.com/.

## Install

You've got two options:

	1. Download one of the builds from [releases](https://github.com/erming/spotify/releases)
	2. Build it yourself

### Building the application

1. Install Node.js and npm
`sudo apt-get install nodejs-legacy npm`

2. Install [Grunt](http://gruntjs.com/)
`sudo npm -g install grunt-cli`

3. Clone the project from GitHub
`git clone http://github.com/erming/spotify`

4. Open folder
`cd spotify/`

5. Install packages
`sudo npm install`

6. (optional) Open `Gruntfile.js` and edit the build targets

7. Build (this step may take a while..)
`grunt build`

## License

Available under [the MIT license](http://mths.be/mit).
