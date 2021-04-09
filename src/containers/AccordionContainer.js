import { Accordion } from '../components'
import SandboxContainer from './SandboxContainer'
import challenges from '../content/challenges'

export default function AccordionContainer() {
  // TODO: Move inline syling and regular html tags into Accordion compound component
  return (
    <Accordion autoCollapse>
      {challenges.map((challenge, idx) => (
        <Accordion.Item key={challenge.day} itemId={challenge.day} respectSetLoaded={false}>
          <Accordion.Head>
            <Accordion.OpenCloseIcon />
            <Accordion.Title>{`Day ${challenge.day}: ${challenge.title}`}</Accordion.Title>
            <Accordion.OpenCloseIcon />
          </Accordion.Head>
          <Accordion.Body>
            <div className="challenge-container">
              <div className="creator-container">
                <p>
                  Instructor:
                  {' '}
                  <a href={challenge.authorURL} target="_blank" rel="noopener noreferrer">
                    {challenge.author}
                  </a>
                </p>
                <a href={challenge.authorURL} target="_blank" rel="noopener noreferrer">
                  <img src={challenge.authorImage} alt="avatar" />
                </a>
              </div>
              <div className="description-container">
                <h2 className="description-heading">Description</h2>
                <p>{challenge.description}</p>
                <p>
                  <a href={challenge.scrimURL} target="_blank" rel="noopener noreferrer">
                    View editable solution on Scrimba
                  </a>
                </p>
              </div>
            </div>
            <h2 className="solution-heading">Solution</h2>
            <SandboxContainer
              SetLoaded={Accordion.SetLoaded}
              src={`content/solutions/day${idx + 1}`}
              title={`Day ${idx + 1} working example`}
            />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
