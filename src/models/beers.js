const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beersData = [];
}

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectViewChange', (event) => {

    const selectedIndex = event.detail;
    console.log('view change',event.detail );
    const selectedBeer = this.beersData[selectedIndex]
    PubSub.publish('Beers:selected-beer-ready', selectedBeer)
  })
}


Beers.prototype.getData = function(){
  const request = new RequestHelper('https://api.punkapi.com/v2/beers');
  request.get().then((data) => {
    this.beersData = data;
    PubSub.publish('Beers:beers-ready', this.beersData);

  });
}


module.exports = Beers;
