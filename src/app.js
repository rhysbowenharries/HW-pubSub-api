const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded')
  const listContainer = document.querySelector('#beer-list');
  const  beerListView = new BeerListView(listContainer);
  beerListView.bindEvents();

  const beers = new Beers;
  beers.getData()

});
