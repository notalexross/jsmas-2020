const css = 
`body {
  background-color: #AEB8FE;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 16px);
}

.dice {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #EFE5DC;
  position: relative;
  height: 90px;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: black;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.dot.top {
  top: 20%;
}

.dot.bottom {
  top: 80%;
}

.dot.left {
  left: 20%;
}

.dot.right {
  left: 80%;
}

#dice-container {
  min-width: 90px;
  height: 90px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#dice-strip {  
  position: absolute;
  width: 100%;
}

.dice-value {
  font-size: 3rem;
  font-weight: 900;
  margin: 3rem;
}`

export default css