import { Accordion } from '../components'
import SandboxContainer from './SandboxContainer'
import challenges from '../content/challenges'

export default function AccordionContainer() {
  return (
    <Accordion shouldAutoCollapse>
      {challenges.map((challenge, idx) => (
        <Accordion.Item key={challenge.day} itemId={challenge.day}>
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
                  <a href={challenge.authorUrl} target="_blank" rel="noopener noreferrer">
                    {challenge.author}
                  </a>
                </p>
                <a href={challenge.authorUrl} target="_blank" rel="noopener noreferrer">
                  <img src={challenge.authorImage} alt="avatar" />
                </a>
              </div>
              <div className="description-container">
                <h2 className="description-heading">Description</h2>
                <p>{challenge.description}</p>
                <p>
                  <a href={challenge.scrimUrl} target="_blank" rel="noopener noreferrer">
                    View editable solution on Scrimba
                  </a>
                </p>
              </div>
            </div>
            <h2 className="solution-heading">Solution</h2>
            <SandboxContainer
              src={`content/solutions/day${idx + 1}`}
              title={`Day ${idx + 1} working example`}
              SetLoadedComponent={Accordion.SetLoaded}
            />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
