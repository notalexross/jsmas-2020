const css = `/*
Thanks to these fine individuals from Unsplash:
https://unsplash.com/photos/AmzKuEnr1VY
https://unsplash.com/photos/eDnJQL21amc
https://unsplash.com/photos/LXy2DOOxESQ
https://unsplash.com/photos/KBKHXjhVQVM
https://unsplash.com/photos/PxM8aeJbzvk
*/

html,
body {
  display: grid;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

img {
  width: 200px;
}

.previous,
.next {
  width: 35px;
}

.container {
  display: grid;
  grid-template-columns: 20% 200px 20%;
  place-content: center;
}

.gallery-wrapper {
  overflow: hidden;
  width: 100%;
}

.previous,
.next {
  justify-self: center;
  align-self: center;
  cursor: pointer;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(5, auto);
  transform-style: preserve-3d;
  transform: translateX(0);
  transition: transform 200ms;
}

.card {
  margin-right: 20px;
  align-self: center;
}

.disabled {
  opacity: 0.3;
  pointer-events: none;
}`

export default css
