/**
  * Blackdown Node Tools for Financial Data processing
	* @author Tom Whitbread <tom@gript.co.uk>
	* @license MIT
	*/
const request = require('request');
const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();


// Load Exchange data into storage
// Usage: loadExchange('bitfinex');
function loadExchange(exchange){
	switch(exchange){
		case "bitfinex":
			// Load Bitfinex API data from public sources
			getOrders('https://api.bitfinex.com/v1/book/btcusd', 'Bitfinex');
		break;

		case "poloniex":
			// Load Poloniex API data from public source
			getOrders('https://poloniex.com/public?command=returnOrderBook&currencyPair=USDT_BTC&depth=100','poloniex')
		break;

		case "binance":
			// Load Binance API data from public sources
			//getOrders('')
		break;

		case "gdax":
			console.log('Loading gdax order book');
			publicClient.getProductOrderBook('BTC-USD', { level: 3 }).then(book => {
					var count = book.bids.length + book.asks.length;
					console.log('Gdax gathered '+count+' orders');
			});
		break;

		default:
		 return false;

	}
}

// Creates URL request
function getOrders(url, site){
	console.log('Loading '+ site +' order book');
	request.get(url,
		function(error, response, body) {
			obj = JSON.parse(body);
			var count = obj.bids.length + obj.asks.length;
			console.log(site + ' gathered '+count+' orders');
	})
}

//Store the order book into data storage.
function storeOrders(site, bids, asks){
	//save the orders site { bids: bids, asks: asks, time: now };
}

module.exports.loadExchange = loadExchange;
