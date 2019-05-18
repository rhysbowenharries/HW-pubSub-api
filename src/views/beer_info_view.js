const BeerInfoView = function () {};

BeerInfoView.prototype.createBeerInfo = function (beer) {
  const munroDetail = document.createElement('div');
    munroDetail.classList.add('beer-detail');

    const name = document.createElement('h3');
    name.textContent = beer.name;
    munroDetail.appendChild(name);
};




module.exports = BeerInfoView;
