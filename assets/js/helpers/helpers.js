// Global functions

// Fetch API data
export const apiResult = async url => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (err) {
    console.error(`apiResult Error: ${err}`)
  }
}