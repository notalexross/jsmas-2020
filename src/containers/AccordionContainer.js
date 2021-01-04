import { Accordion } from '../components'
import { SandboxContainer } from '.'
import challenges from '../content/challenges'

export default function AccordionContainer() {
  // TODO: Move inline syling and regular html tags into Accordion compound component
  return (
    <Accordion>
      {challenges.map((challenge, idx) => {
        return (
          <Accordion.Item key={idx} respectSetLoaded={true}>
            <Accordion.Head>
              <Accordion.OpenCloseIcon />
              <Accordion.Title>{`Day ${idx + 1}: ${challenge.title}`}</Accordion.Title>
              <Accordion.OpenCloseIcon />
            </Accordion.Head>
            <Accordion.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <p style={{ margin: 0 }}>Challenge Creator: <a href={challenge.authorURL} target="_blank" rel="noopener noreferrer">{challenge.author}</a></p>
                <p style={{ margin: 0 }}><a href={challenge.scrimURL} target="_blank" rel="noopener noreferrer">View solution on Scrimba</a></p>
              </div>
              <p style={{ marginTop: '2em' }}>Description:</p>
              <p style={{ marginTop: 0 }}>{challenge.description}</p>
              <SandboxContainer SetLoaded={Accordion.SetLoaded} src={`content/solutions/day${idx + 1}`} title={`Day ${idx + 1} working example`} />
            </Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}