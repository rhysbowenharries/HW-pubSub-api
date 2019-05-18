const PubSub = require('../helpers/pub_sub.js');

const BeerInfoView = function (container) {
  this.container = container;
};

BeerInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:selected-beer-ready', (event) => {
    this.clearScreen();
    this.render(event.detail);
  })
}

BeerInfoView.prototype.clearScreen = function () {
  this.container.innerHTML = " ";
};

BeerInfoView.prototype.render = function (beerInfo) {
  const beerNameTitle = this.createTextElement('h1', 'Name')
  const beerName = this.createTextElement('h2', beerInfo.name)
  const beerTagline = this.createTextElement('h3', beerInfo.tagline)
  this.container.appendChild(beerNameTitle)
  this.container.appendChild(beerName)
  this.container.appendChild(beerTagline)
}

BeerInfoView.prototype.createTextElement = function (elementType, beerName) {
  const element = document.createElement(elementType);
  element.textContent = beerName;
  return element;
}


module.exports = BeerInfoView;
