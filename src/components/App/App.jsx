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
      const randomColor = generateRandomColor()

      setQuote(randomQuote)
      setColor(randomColor)
    } catch (e) {
      console.error('Error fetching random quote', e)
    }
  }

  const generateRandomColor = () => {
    const randomColor = () => {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }

    const backgroundColor = randomColor()
    const textColor = backgroundColor

    return {
      backgroundColor,
      textColor
    }
  }

  const tweetQuote = () => {
    if (quote) {
      const tweetText = `${quote.content} - ${quote.author || 'Anonymous'}`
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
      )}`

      window.open(twitterUrl, '_blank')
    }
  }

  return (
    <div>
      <QuoteCard
        quote={quote}
        onNewQuote={fetchRandomQuote}
        color={color}
        onTweet={tweetQuote}
      />
    </div>
  )
}

export default App
