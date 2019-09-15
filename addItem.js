const addButton = document.getElementById('add-item')

const newItem = ['4', 'Pat', 'Mills', '@pwnda']



addButton.addEventListener('click', function () {
  // get tbody

  const tbody = document.querySelector('tbody')


  // create tr

  const row = document.createElement('tr')

  // add new elements

  const number = document.createElement('th')
  const first = document.createElement('td')
  const last = document.createElement('td')
  const handle = document.createElement('td')

  number.setAttribute('scope', 'row')

  row.appendChild(number)
  row.appendChild(first)
  row.appendChild(last)
  row.appendChild(handle)

  number.textContent = newItem[0]
  first.textContent = newItem[1]
  last.textContent = newItem[2]
  handle.textContent = newItem[3]

  // append new elements to tr

  // append tr to tbody

  tbody.appendChild(row)


})
