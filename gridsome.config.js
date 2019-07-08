// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'United Theraputics',
  head: {
    script: [
      { src: 'gsap/TweenMax.js' },
      { src: 'gsap/Draggable.js' },
      { src: './vendor/gsap/umd/ThrowPropsPlugin.js' },
    ]
  },
  plugins: []
}
