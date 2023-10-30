import { useEffect, useState } from 'react'
import { getRandomQuote } from '../../util/quotable'
import QuoteCard from '../QuoteCard/QuoteCard'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [quote, setQuote] = useState(null)
  const [randomColor, setRandomColor] = useState('')

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  const fetchRandomQuote = async () => {
    try {
      const randomQuote = await getRandomQuote()
      setQuote(randomQuote)
      const newColor = getRandomColor()
      setRandomColor(newColor)
    } catch (e) {
      console.error('Error fetching random quote', e)
    }
  }

  const getRandomColor = () => {
    const colors = [
      'primary',
      'secondary',
      'success',
      'danger',
      'info'
    ]
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  return (
    <div>
      <QuoteCard
        quote={quote}
        onNewQuote={fetchRandomQuote}
        color={randomColor}
      />
    </div>
  )
}

export default App
