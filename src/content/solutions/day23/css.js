const css = `html,
body {
  height: 100%;
  margin: 0;
}

body {
  display: grid;
  background-color: #023f6a;
  font-family: sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

textarea {
  width: 50%;
  height: 30vh;
  border-radius: 10px;
  background-color: rgb(21, 32, 43);
  color: #fff;
}

textarea::placeholder {
  color: #fff;
}

#counterFooter {
  margin-top: 0.2rem;
  margin-left: 30%;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8rem;
}

button {
  width: 50%;
  padding: 0 10%;
  border-radius: 10px;
  background-color: rgb(29, 161, 242);
}

button h2 {
  color: #fff;
}

.buttonDisabled {
  opacity: 0.5;
  cursor: default;
}

#counterFooter.string-short {
  color: #f00;
}`

export default css
