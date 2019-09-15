const deleteButton = document.getElementById('delete-item')

deleteButton.addEventListener('click', function () {
  // get tr nodeList 

  const tableRowList = document.querySelectorAll('tbody tr')
  console.log(tableRowList)
  tableRowList[getRandomInt(tableRowList.length)].remove()



  // random number
  // remove tr
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));


}
