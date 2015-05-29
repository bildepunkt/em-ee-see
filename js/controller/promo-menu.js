var jQuery = $ = require('jquery');

/**
 * controller for the promo menu btn
 * @class PromoMenu
 * @author Chris Peters
 */
var PromoMenu = function() {
    this.$el = $('#promo-menu');
    this.$promotions = $('#promotions');

    this.$el.on('click', $.proxy(this.clickHandler, this));
};

/**
 * @method clickHandler
 */
PromoMenu.prototype.clickHandler = function(e) {
    this.$promotions.toggleClass('visible');
};

module.exports = PromoMenu;