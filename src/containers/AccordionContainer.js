import { Accordion, Sandbox } from '../components'
import challenges from '../content/challenges'

export default function AccordionContainer() {
  return (
    <Accordion>
      {challenges.map((challenge, idx) => {
        return (
          <Accordion.Item key={idx}>
            <Accordion.Head>
              <Accordion.OpenCloseIcon />
              <Accordion.Title>{`Day ${idx + 1}: ${challenge.title}`}</Accordion.Title>
              <Accordion.OpenCloseIcon />
            </Accordion.Head>
            <Accordion.Body>
              <p>Challenge Creator: {challenge.author} (<a href={challenge.authorURL}>{challenge.authorURL}</a>)</p>
              <p>Scrimba Link: <a href={challenge.scrimURL}>{challenge.scrimURL}</a></p>
              <p>Description: {challenge.description}</p>
              <Sandbox src={`content/solutions/day${idx + 1}`} />
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}