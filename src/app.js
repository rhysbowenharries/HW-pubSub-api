const Beers = require('./models/beers.js');
const BeerInfoView = require('./views/beer_info_view.js')
const BeerListView = require('./views/beer_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded')
  const selectElement = document.querySelector('select#beer-list');
  const  beerListView = new BeerListView(selectElement);
  beerListView.bindEvents();

  const beerContainer = document.querySelector('#beer');
  const beerInfoView = new BeerInfoView(beerContainer);
  beerInfoView.bindEvents();

  const beers = new Beers;
  beers.getData()

});
