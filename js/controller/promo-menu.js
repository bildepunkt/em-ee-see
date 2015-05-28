var jQuery = $ = require('jquery');

var PromoMenu = function() {
    this.$el = $('#promo-menu');
    this.$promotions = $('#promotions');

    this.$el.on('click', $.proxy(this.clickHandler, this));
};

PromoMenu.prototype.clickHandler = function(e) {
    this.$promotions.toggleClass('visible');
};

module.exports = PromoMenu;