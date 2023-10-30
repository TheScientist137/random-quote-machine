/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getRandomQuote } from '../../util/quotable'
import QuoteCard from '../QuoteCard/QuoteCard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [quote, setQuote] = useState(null)
  const [color, setColor] = useState('')

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  const fetchRandomQuote = async () => {
    try {
      const randomQuote = await getRandomQuote()
      setQuote(randomQuote)
      setColor(generateRandomColor())
    } catch (e) {
      console.error('Error fetching random quote', e)
    }
  }

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    return {
      backgroundColor: randomColor,
      textColor: randomColor
    }
  }

  const tweetQuote = () => {
    if (quote) {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          quote.content + ' - ' + (quote.author || 'Anonymous')
        )}`,
        '_blank'
      )
    }
  }

  return (
    <div>
      <QuoteCard
        quote={quote}
        onNewQuote={fetchRandomQuote}
        onTweet={tweetQuote}
        color={color}
      />
    </div>
  )
}

export default App
