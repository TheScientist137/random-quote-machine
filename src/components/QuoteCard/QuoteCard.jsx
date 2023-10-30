/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

function QuoteCard ({ quote, onNewQuote, onTweet, color }) {
  const cardStyle = {
    backgroundColor: color.backgroundColor
  }

  const textStyle = {
    color: color.textColor
  }

  const tweetQuote = () => {
    if (onTweet) {
      onTweet()
    }
  }

  return (
    <div
      className='vh-100 d-flex align-items-center justify-content-center'
      style={cardStyle}
      id='quote-box' // User Story #1
    >
      <Card className='w-75' style={textStyle}>
        <Card.Header className='align-self-center' id='text'>
          Random Quote Generator
        </Card.Header>
        <Card.Body>
          <Card.Title>Quote</Card.Title>
          {quote && (
            <blockquote className='blockquote mb-2'>
              <p className='fs-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='currentColor'
                  className='bi bi-quote me-2 mb-2'
                  viewBox='0 0 16 16'
                >
                  <path d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z' />
                </svg>
                {quote.content}
              </p>
              <footer className='blockquote-footer float-end'>
                <cite title='Source Title' style={textStyle} id='author'>
                  {' '}
                  {/* User Story #3 */}
                  {quote.author ? `${quote.author}` : 'Anonymous'}
                </cite>
              </footer>
            </blockquote>
          )}
          <ButtonGroup className='w-100 d-block mt-5'>
            <Button
              className='me-4 rounded-3 border-0'
              variant='outline-light'
              style={cardStyle}
              onClick={tweetQuote}
              id='tweet-quote' // User Story #5
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='currentColor'
                className='bi bi-twitter-x'
                viewBox='0 0 16 16'
              >
                <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z' />
              </svg>
            </Button>
            <Button
              className='fs-6 rounded-3 float-end border-0'
              variant='outline-light'
              style={cardStyle}
              onClick={onNewQuote}
              id='new-quote' // User Story #4
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-chat-square-quote-fill'
                viewBox='0 0 16 16'
              >
                <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z' />
              </svg>
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default QuoteCard
