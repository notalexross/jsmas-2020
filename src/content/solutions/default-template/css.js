const cssTemplate = config =>
`:root {
  --accent: #fcfc4a;
}

html {
  font-size: 11px;
}

@media (min-width: 700px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 850px) {
  html {
    font-size: 16px;
  }
}

html, body {
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
  margin: 0 2rem 0.8rem;
  font-size: 2.5em;
}

h2 {
  margin: 0 0 0.4em;
}

.container {
  margin: auto 1em;
}

.flex-container {
  display: grid;
  grid-template-columns: 18.75rem 1fr;
  grid-template-areas: 
    'form form'
    'outp outp'
    'exam exam';
}

.form-container,
.examples-container {
  margin: 0.2rem 2rem;
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
}

@media (min-width: 600px) {
  .container {
    margin: auto;
  }
  h1 {
    text-align: center;
  }
  .flex-container {
    grid-template-areas: 
      'form exam'
      'outp outp';
  }
  .output-container {
    max-width: 35rem;
  }
}

.highlight {
  font-weight: 700;
  color: var(--accent);  
}

/* Form */

form {
  width: 15.625rem;
}

input {
  margin: 0.4em 0 1em;
  width: 100%;
  box-sizing: border-box;
  padding: 0.4em;
  background-color: #e5e5e5;
  border: none;
  font-size: 1em;
}

button {
  display: block;
  padding: 0.4em 0.7em;
  margin: 1em auto 1em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 700;
  width: 100%;
  background-color: var(--accent);
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
  font-size: 1em;
}

th, td {
  padding: 0.3em 0.5em;
}

th {
  color: var(--accent);
}

td {
  text-align: right;
  min-width: 2em;
}

td:last-of-type {
  color: var(--accent);
}`

export default cssTemplate