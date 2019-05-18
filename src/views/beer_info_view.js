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

  const beerName = this.createTextElement('h2', `${beerInfo.name}:`)
  const beerTagline = this.createTextElement('h3', `"${beerInfo.tagline}.."`)

  this.container.appendChild(beerName)
  this.container.appendChild(beerTagline)



//     Description
// Food_paring,
// Brewers_tips.
// Image

  const description =
  this.createTextElement('h3', `Description: ${beerInfo.description}`)
this.container.appendChild(description)

const beerImage = document.createElement('img');
  beerImage.src = beerInfo.image_url;
  this.container.appendChild(beerImage);

}

BeerInfoView.prototype.createTextElement = function (elementType, beerName) {
  const element = document.createElement(elementType);
  element.textContent = beerName;
  return element;
}


module.exports = BeerInfoView;
