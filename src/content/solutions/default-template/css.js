const cssTemplate = config =>
`html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  background-color: #1e1e1e;
  color: #e5e5e5;
  padding: 1em 0;
  box-sizing: border-box;
}

p, h1 {
  margin-top: 0;
}

h1 {
  text-align: center;
  margin-bottom: 0.4em;
  font-size: 2.5em;
}

h2 {
  margin: 0 0 0.4em;
}

.container {
  margin: auto;
}

.flex-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 
    'form form'
    'outp outp'
    'exam exam';
}

.form-container,
.examples-container {
  margin: 0.2em 2em;
}

.form-container {
  grid-area: form;
}

.examples-container {
  grid-area: exam;
}

.output-container {
  grid-area: outp;
  font-size: 1.4em;
  margin: 0 2rem 0.4em;
  max-width: 250px;
}

@media (min-width: 640px) {
  .flex-container {
    grid-template-areas: 
      'form exam'
      'outp outp';
  }
  .output-container {
    max-width: 560px;
  }
}

.highlight {
  font-weight: 700;
  color: #fcfc4a;  
}

/* Form */

form {
  width: 250px;
}

input {
  margin: 0.4em 0 1em;
  width: 100%;
  box-sizing: border-box;
  padding: 0.4em;
  background-color: #e5e5e5;
  border: none;
}

button {
  display: block;
  padding: 0.4em 0.7em;
  margin: 1em auto 1em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 700;
  width: 100%;
  background-color: #fcfc4a;
  color: #1e1e1e;
  border: none;
  cursor: pointer;
}

button:disabled {
  opacity: 0.4;
}

/* Table */

table, th, td {
  border: 2px solid #e5e5e5;
}

table {
  border-collapse: collapse;
}

th, td {
  padding: 0.3em 0.5em;
}

th {
  color: #fcfc4a;
}

td {
  text-align: right;
  min-width: 2em;
}

td:last-of-type {
  color: #fcfc4a;
}`

export default cssTemplate