export async function getRandomQuote () {
  try {
    const response = await fetch('https://api.quotable.io/random')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const quote = await response.json()
    return quote
  } catch (error) {
    console.error('Error fetching a random quote', error)
  }
}
