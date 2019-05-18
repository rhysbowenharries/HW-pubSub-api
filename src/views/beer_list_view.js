const PubSub = require('../helpers/pub_sub.js');
const BeerInfoView = require('./beer_info_view');

const BeerListView = function (selectElement) {
  this.element = selectElement;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (event) => {
    this.populate(event.detail);
  })
  this.element.addEventListener('change', (event) => {
     const selectedIndex = event.target.value;
    PubSub.publish('SelectViewChange', selectedIndex);
  })
}


BeerListView.prototype.createBeerListOption = function(name, index) {
  const option = document.createElement('option')
  option.textContent = name;
  option.value = index;
  return option;
}


BeerListView.prototype.populate = function (beers) {
  beers.forEach((beer, index) => {
    const beerOption = this.createBeerListOption(beer.name, index);
    this.element.appendChild(beerOption)
  })
};







module.exports = BeerListView;
