## Install

```
$ npm install blackdown
```


## Usage

```js
var Blackdown = require('blackdown');

for(var exchange in config.Exchanges){
  if(config.Exchanges[exchange].enabled){
    Blackdown.loadExchange(exchange);
  }

```


## License

MIT © [Tom Whitbread](https://blackdowncapital.co.uk)
