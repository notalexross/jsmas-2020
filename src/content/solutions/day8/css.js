const css = `body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 16px);
  background-color: #aeb8fe;
}

.dice {
  position: relative;
  width: 100%;
  height: 90px;
  border-radius: 10px;
  background-color: #efe5dc;
}

.dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background-color: black;
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
  position: relative;
  overflow: hidden;
  min-width: 90px;
  height: 90px;
  cursor: pointer;
}

#dice-strip {
  position: absolute;
  width: 100%;
}

.dice-value {
  margin: 3rem;
  font-size: 3rem;
  font-weight: 900;
}`

export default css
