// App-only related functions

// Importing
import {
  apiResult
} from './helpers.js'

// Extracting data from json
const goalData = async () => {
  const data = await apiResult("https://api.mediehuset.net/sdg/goals")
  console.log(data)
  data && data.items.map((item, key) => {

    const wrap = document.createElement('div')
    const img = document.createElement('div')
    const title = document.createElement('h2')

    img.innerHTML = item.icon
    wrap.style.backgroundColor = `#${item.color}`
    wrap.setAttribute('id', 'wrap')
    img.setAttribute('id', 'logo')
    title.innerHTML = item.title

    wrap.append(img, title)
    goalsContainer.append(wrap)

    wrap.addEventListener('click', (item) => {
      popUp.classList.toggle('toggleShow')
      closePopUp.addEventListener('click', () => popUp.classList.toggle('toggleShow'))
      console.log(item)
    })

  }) // Map iteration ends
} // function goalData ends

goalData()

// Modal popup function