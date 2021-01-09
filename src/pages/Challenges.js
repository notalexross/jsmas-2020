import { AccordionContainer } from '../containers'

export default function Challenges() {
  return (
    <>
      <h1 className="title">JavaScriptmas 2020 Solutions</h1>
      <p className="subtitle">Daniel Ross</p>
      <div className="introduction-container">
        <p>
          These are my solutions to the recent <a href="https://scrimba.com/learn/adventcalendar" rel="noopener noreferrer">JavaScriptmas</a> Advent calendar of challenges,
          an event hosted by <a href="https://scrimba.com/about" rel="noopener noreferrer">Scrimba</a>.
          You can find out more about me <a href="https://notalexross.com" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <p>
          Scrimba is an innovative programming learning platform, incorporating a live code editor where you can take over from the instructor and seamlessly make alterations at any time.
          No need to download project files, install dependencies, or setup bundlers, just open up a lesson and edit the code directly in place.
          The skills used in building this site were acquired whilst following their ReactJS courses, so I really suggest giving them a try.
          If you need any help, or just want a chat, you can always find me on their community <a href="https://discord.gg/Shk2hfQ97f" target="_blank" rel="noopener noreferrer">Discord</a> server.
          <em> #NotASponsor</em>
        </p>
        <p>
          Challenge descriptions have been pulled directly from screencasts on Scrimba.
          I have also included links to the relevant "Scrims", where you can edit and play with my solutions directly.
        </p>
      </div>
      <AccordionContainer />
    </>
  )
}