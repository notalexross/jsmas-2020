const css = 
`html, body {
  height: 100%;
  margin: 0;
}

body {
  background-color: #023F6A;
  font-family: sans-serif;
  display: grid;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

textarea {
  width: 50%;
  height: 30vh;
  background-color: rgb(21, 32, 43);
  color: #fff;
  border-radius: 10px;
}

textarea::placeholder {
  color: #fff;
}

#counterFooter {
  margin-top: 0.2rem;
  font-size: 0.8rem;
  color: #fff;
  margin-left: 30%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

button {
  width: 50%;
  background-color: rgb(29, 161, 242);
  border-radius: 10px;
  padding: 0 10%;
}

button h2 {
  color: #fff;
}

.buttonDisabled {
  opacity: .5;
  cursor: default;
}

#counterFooter.string-short {
  color: #f00;
}`

export default css