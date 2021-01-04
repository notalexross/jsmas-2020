const css = 
`html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  display: grid;
  place-content: center;
}

.title {
  text-align: center;
  margin-top: 1em;
}

.target, .spin {
  display: flex;
  justify-content: center
}

#result {
  color: blue;
  text-align: center;
}

button {
  height: 32px;
  border: 1.5px solid aquamarine;
  display: block;
  margin-left: auto;
  margin-right: auto;
}`

export default css