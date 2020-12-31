import { Accordion } from '../components'
import { SandboxContainer } from '.'
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
              <p>Challenge Creator: {challenge.author} (<a href={challenge.authorURL} target="_blank" rel="noopener noreferrer">{challenge.authorURL}</a>)</p>
              <p>Scrimba Link: <a href={challenge.scrimURL} target="_blank" rel="noopener noreferrer">{challenge.scrimURL}</a></p>
              <p>Description: {challenge.description}</p>
              <SandboxContainer src={`content/solutions/day${idx + 1}`} title={`Day ${idx + 1} working example`} />
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}