const PubSub = require('../helpers/pub_sub.js');
const BeerInfoView = require('./beer_info_view');

const BeerListView = function (container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (event) => {
    this.renderBeerInfoViews(event.detail);
  })
}

BeerListView.prototype.renderBeerInfoViews = function (beers) {
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    this.container.appendChild(beerItem)
  })
};

BeerListView.prototype.createBeerListItem = function(beer) {
  const beerInfoView = new BeerInfoView();
  const beerInfo = beerInfoView.createBeerInfo(beer)
  return beerInfo
  console.log(beerInfo)
}





module.exports = BeerListView;
