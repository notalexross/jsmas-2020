const css = `html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: grid;
  place-content: center;
  background-color: #fff;
}

.title {
  margin-top: 1em;
  text-align: center;
}

.target,
.spin {
  display: flex;
  justify-content: center;
}

#result {
  color: blue;
  text-align: center;
}

button {
  display: block;
  height: 32px;
  margin-left: auto;
  margin-right: auto;
  border: 1.5px solid aquamarine;
}`

export default css
