let stockTextBox = document.getElementById('stockTextBox')
let checkStockButton = document.getElementById('checkStockButton')
let container = document.getElementById("container")

setInterval(function (){ for (const stockSymbol in quotes){

        getStockQuote(stockSymbol)}},2000)


checkStockButton.addEventListener('click', function () {

    let stockName = stockTextBox.value
    
    

    let stockItem = `
  <div class="stockItem">
   
    <label>${quotes[stockName].name}</label>
    <label>$${quotes[stockName].price}</label>
    
  </div>
                  `
    container.insertAdjacentHTML('beforeend', stockItem)

})

