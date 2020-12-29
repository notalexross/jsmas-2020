import { Accordion, Sandbox } from '../components'
import challenges from '../content/challenges'

export default function AccordionContainer() {
  return (
    <Accordion>
      {challenges.map(challenge => {
        return (
          <Accordion.Item key={challenge.day}>
            <Accordion.Head>
              <Accordion.OpenCloseIcon />
              <Accordion.Title>{`Day ${challenge.day}: ${challenge.title}`}</Accordion.Title>
              <Accordion.OpenCloseIcon />
            </Accordion.Head>
            <Accordion.Body>
              {challenge.description}
              <Sandbox src={`content/solutions/day${challenge.day}`} />
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}